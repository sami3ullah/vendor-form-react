export const questionsArray = [
  {
    id: 1,
    type: "radio",
    name: "recommendation",
    question: "How likey you would recommend LAAM to other brands?",
    conditionalQuestions: [
      {
        id: 514231,
        type: "radio",
        question:
          "How satisfied were you with your onboarding experience with Laam?",
        conditionalQuestions: [
          {
            id: 21312,
            type: "textarea",
            question: "Please mention reason",
          },
        ],
      },
      {
        id: 5142,
        type: "radio",
        question: "How satisfied are you with LAAM’s payments process?",
        conditionalQuestions: [
          {
            id: 5123,
            type: "textarea",
            question: "Please mention reason",
          },
        ],
      },
      {
        id: 1512,
        type: "radio",
        question:
          "How satisfied are you with LAAM’s order pick-up and delivery system?",
        conditionalQuestions: [
          {
            id: 512352,
            type: "textarea",
            question: "Please mention reason",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: "radio",
    name: "helpful",
    question:
      "How helpful is the Account Management team in resolving your issues?",
    conditionalQuestions: [
      {
        id: 21241,
        type: "checkbox",
        question: "What exactly did not meet your expectations?",
        options: [
          "Response time",
          "Behavior",
          "Did not have sufficient information",
          "Other",
        ],
      },
    ],
  },
  {
    id: 3,
    type: "textarea",
    name: "experience",
    question:
      "What is the one thing we could do to make you happier/improve your experience?",
  },
];

export default questionsArray;
