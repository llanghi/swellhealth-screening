window.SWELL_QUESTIONNAIRE = {
  shortName: 'EPDS',
  title: 'Edinburgh Postnatal Depression Scale',
  subtitle: 'EPDS screening questionnaire for perinatal and postnatal mood symptoms.',
  timeEstimate: '2 minutes',
  scoreRange: '0–30',
  maxScore: 30,
  introduction: [
    'We would like to know how you have been feeling in the past week. Please indicate which of the following comes closest to how you have been feeling over the past seven days, not just how you feel today. Please choose one answer for each question.'
  ],
  notice: 'This screening tool does not provide a diagnosis. Please discuss your result with your GP or health professional.',
  questions: [
    { text: 'I have been able to laugh and see the funny side of things', options: [
      { text: 'As much as I always could', score: 0 }, { text: 'Not quite so much now', score: 1 }, { text: 'Definitely not so much now', score: 2 }, { text: 'Not at all', score: 3 }
    ]},
    { text: 'I have looked forward with enjoyment to things', options: [
      { text: 'As much as I ever did', score: 0 }, { text: 'Rather less than I used to', score: 1 }, { text: 'Definitely less than I used to', score: 2 }, { text: 'Hardly at all', score: 3 }
    ]},
    { text: 'I have blamed myself unnecessarily when things went wrong', options: [
      { text: 'Yes, most of the time', score: 3 }, { text: 'Yes, some of the time', score: 2 }, { text: 'Not very often', score: 1 }, { text: 'No, never', score: 0 }
    ]},
    { text: 'I have been anxious or worried for no good reason', options: [
      { text: 'No, not at all', score: 0 }, { text: 'Hardly ever', score: 1 }, { text: 'Yes, sometimes', score: 2 }, { text: 'Yes, very often', score: 3 }
    ]},
    { text: 'I have felt scared or panicky for no very good reason', options: [
      { text: 'Yes, quite a lot', score: 3 }, { text: 'Yes, sometimes', score: 2 }, { text: 'No, not much', score: 1 }, { text: 'No, not at all', score: 0 }
    ]},
    { text: 'Things have been getting on top of me', options: [
      { text: "Yes, most of the time I haven't been able to cope at all", score: 3 }, { text: "Yes, sometimes I haven't been coping as well as usual", score: 2 }, { text: 'No, most of the time I have coped quite well', score: 1 }, { text: 'No, I have been coping as well as ever', score: 0 }
    ]},
    { text: 'I have been so unhappy that I have had difficulty sleeping', options: [
      { text: 'Yes, most of the time', score: 3 }, { text: 'Yes, sometimes', score: 2 }, { text: 'Not very often', score: 1 }, { text: 'No, not at all', score: 0 }
    ]},
    { text: 'I have felt sad or miserable', options: [
      { text: 'Yes, most of the time', score: 3 }, { text: 'Yes, quite often', score: 2 }, { text: 'Not very often', score: 1 }, { text: 'No, not at all', score: 0 }
    ]},
    { text: 'I have been so unhappy that I have been crying', options: [
      { text: 'Yes, most of the time', score: 3 }, { text: 'Yes, quite often', score: 2 }, { text: 'Only occasionally', score: 1 }, { text: 'No, never', score: 0 }
    ]},
    { text: 'The thought of harming myself has occurred to me', options: [
      { text: 'Yes, quite often', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'Hardly ever', score: 1 }, { text: 'Never', score: 0 }
    ]}
  ],
  bands: [
    { min: 0, max: 9, text: 'Your score is in the lower range. This does not suggest a high level of postnatal depressive symptoms on this screening tool. However, if you feel unwell discuss with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 10, max: 12, text: 'Your score is in an elevated range. Symptoms may be present and it may be useful to monitor how you are feeling and discuss the result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 13, max: 14, text: 'Your score is above the commonly used EPDS threshold for further assessment. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 15, max: 30, text: 'Your score is in a higher range on this screening tool. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' }
  ],
  guidance: '<p>Scores are between 0 and 30, with scores 13 and above indicating depressive illness, or a high risk of developing a depressive disorder.</p><p>Scores of 13 indicate an 80% chance that the mother has depression. Scores 13 and above represent an increased risk of developing depression of between 5 and 17 times the general population compared to new mothers.</p><p>The EPDS score should not override clinical judgment. A careful clinical assessment should be carried out to confirm the diagnosis. Please contact <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional to discuss your results.</p>',
  alerts: [
    { questionNumber: 10, condition: 'scoreGreaterThan', value: 0, title: 'Important safety note', message: 'You selected an answer other than “Never” for the self-harm question. Please discuss this with a GP or health professional as soon as possible. If you feel unsafe or at immediate risk, call emergency services or attend the nearest emergency department.' }
  ],
  reference: 'Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry. 1987;150:782–786. Reproduced with permission.'
};
