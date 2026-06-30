(function () {
  const root = document.getElementById('questionnaire-root');
  if (!root || !window.SWELL_QUESTIONNAIRE) return;

  const q = window.SWELL_QUESTIONNAIRE;
  const totalQuestions = q.questions.length;
  const maxScore = q.maxScore ?? q.questions.reduce((sum, item) => sum + Math.max(...item.options.map(o => o.score)), 0);

  function esc(str) {
    return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function renderIntro() {
    root.innerHTML = `
      <section class="card">
        <p class="questionnaire-meta"><strong>${esc(totalQuestions)} questions</strong> · Usually takes about ${esc(q.timeEstimate)} · Score range ${esc(q.scoreRange || `0–${maxScore}`)}</p>
        ${q.introduction.map(p => `<p>${p}</p>`).join('')}
        <div class="notice">${q.notice}</div>
        <form id="screening-form" novalidate>
          <div class="progress-wrap" aria-hidden="true">
            <div class="progress-text"><span id="progress-count">0</span> of ${totalQuestions} answered</div>
            <div class="progress-track"><div class="progress-bar" id="progress-bar"></div></div>
          </div>
          ${q.questions.map((item, i) => `
            <fieldset class="question">
              <legend>${i + 1}. ${esc(item.text)}</legend>
              ${item.options.map(option => `
                <label class="option"><input type="radio" name="q${i + 1}" value="${option.score}"> <span>${esc(option.text)}</span></label>
              `).join('')}
            </fieldset>
          `).join('')}
          <div class="actions">
            <button class="button" type="submit">Calculate score</button>
            <button class="button secondary" type="button" id="reset-button">Clear answers</button>
          </div>
          <p class="error" id="error-message">Please answer all ${totalQuestions} questions before calculating your score.</p>
        </form>
        <section class="result" id="result" aria-live="polite">
          <h2>Your ${esc(q.shortName)} score</h2>
          <div class="result-score"><span id="score-value">0</span> / ${maxScore}</div>
          <p id="interpretation-text"></p>
          <div class="score-guidance" id="score-guidance"></div>
          <div class="safety-alert" id="safety-alert"></div>
          <div class="actions">
            <a class="button coral" href="https://www.swellhealth.com.au">Return to Swell Health</a>
            <a class="button secondary" href="index.html">Screening home</a>
          </div>
        </section>
        ${q.reference ? `<p class="questionnaire-meta" style="margin-top:28px;">${q.reference}</p>` : ''}
      </section>
    `;
  }

  function getBand(score) {
    return q.bands.find(b => score >= b.min && score <= b.max) || q.bands[q.bands.length - 1];
  }

  function updateProgress() {
    const form = document.getElementById('screening-form');
    const count = Array.from({ length: totalQuestions }, (_, i) => form.querySelector(`input[name="q${i + 1}"]:checked`)).filter(Boolean).length;
    document.getElementById('progress-count').textContent = count;
    document.getElementById('progress-bar').style.width = `${(count / totalQuestions) * 100}%`;
  }

  function checkAlerts(form, responses) {
    const alertBox = document.getElementById('safety-alert');
    alertBox.style.display = 'none';
    alertBox.innerHTML = '';
    if (!q.alerts || !q.alerts.length) return;

    const triggered = q.alerts.filter(alert => {
      const value = responses[alert.questionNumber - 1];
      if (alert.condition === 'scoreGreaterThan') return value > alert.value;
      if (alert.condition === 'scoreGreaterThanOrEqual') return value >= alert.value;
      return false;
    });

    if (triggered.length) {
      alertBox.innerHTML = triggered.map(alert => `<strong>${alert.title}</strong><span>${alert.message}</span>`).join('<hr>');
      alertBox.style.display = 'block';
    }
  }

  renderIntro();
  const form = document.getElementById('screening-form');
  const result = document.getElementById('result');
  const error = document.getElementById('error-message');

  form.addEventListener('change', updateProgress);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    error.style.display = 'none';
    result.style.display = 'none';

    let total = 0;
    const responses = [];
    for (let i = 1; i <= totalQuestions; i++) {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        error.style.display = 'block';
        form.querySelector(`input[name="q${i}"]`).closest('.question').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const value = Number(selected.value);
      responses.push(value);
      total += value;
    }

    const band = getBand(total);
    document.getElementById('score-value').textContent = total;
    document.getElementById('interpretation-text').innerHTML = band.text;
    document.getElementById('score-guidance').innerHTML = q.guidance || '';
    checkAlerts(form, responses);
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('reset-button').addEventListener('click', function () {
    form.reset();
    result.style.display = 'none';
    error.style.display = 'none';
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
