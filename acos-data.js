const acosOptions = [
  { text: 'Not at all', score: 0 },
  { text: 'A little', score: 1 },
  { text: 'Somewhat', score: 2 },
  { text: 'A lot', score: 3 },
  { text: 'Very much', score: 4 },
  { text: 'Extremely', score: 5 }
];

window.SWELL_QUESTIONNAIRE = {
  shortName: 'ACOS-Self',
  title: 'ADHD Clinical Outcome Scale — Self Report',
  subtitle: 'ACOS-Self screening questionnaire for ADHD symptoms and related functional difficulties.',
  timeEstimate: '3 minutes',
  scoreRange: '0–75',
  maxScore: 75,
  introduction: [
    'During the past 2 weeks, how troubled have you been by the following problems?',
    'Please choose the response that best describes your experience over the past two weeks.'
  ],
  notice: 'This screening tool does not provide a diagnosis. Please discuss your result with your GP or health professional.',
  questions: [
    'Hyperactivity / restlessness',
    'Pay attention when doing things',
    'Temper / anger outburst',
    'Problems with alcohol and drugs',
    'Ups and downs in your mood',
    'Organising things',
    'Impulsivity',
    'Tension in relationships',
    'Self-harm',
    'Postponing things',
    'Anxiety problems',
    'Depression problems',
    'Sleep problems',
    'Study / work difficulties',
    'Difficulties in the everyday personal life'
  ].map(text => ({ text, options: acosOptions })),
  bands: [
    { min: 0, max: 7, text: 'Your score is in the “No Problem” range on this screening tool. This result does not provide a diagnosis. If you remain concerned, discuss your result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 8, max: 22, text: 'Your score is in the “Minor” range on this screening tool. Symptoms or functional difficulties may be present. Consider discussing your result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 23, max: 37, text: 'Your score is in the “Mild” range on this screening tool. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional if these difficulties are affecting daily life.' },
    { min: 38, max: 52, text: 'Your score is in the “Moderately Severe” range on this screening tool. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 53, max: 67, text: 'Your score is in the “Severe” range on this screening tool. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' },
    { min: 68, max: 75, text: 'Your score is in the “Very Severe” range on this screening tool. Please discuss this result with <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional.' }
  ],
  guidance: '<p>The ACOS-Self total score ranges from 0 to 75. Higher scores indicate greater overall symptom severity and functional difficulties associated with ADHD and related problems.</p><p>The score should not override clinical judgment. A careful clinical assessment is required to confirm any diagnosis. Please contact <a href="https://www.swellhealth.com.au/contact">Dr Pozzi Langhi</a> or a health professional to discuss your results.</p>',
  alerts: [
    { questionNumber: 9, condition: 'scoreGreaterThan', value: 0, title: 'Important safety note', message: 'You selected a response other than “Not at all” for self-harm. Please discuss this with a GP or health professional as soon as possible. If you feel unsafe or at immediate risk, call emergency services or attend the nearest emergency department.' }
  ],
  reference: 'Adamis D, Singh J, Coada I, Wrigley M, Gavin B, McNicholas F. Measuring clinical outcomes in adult ADHD clinics: Psychometrics of a new scale, the Adult ADHD Clinical Outcome Scale. BJPsych Open. 2024;10(6):e180.'
};
