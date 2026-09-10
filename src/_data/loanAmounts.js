/**
 * Long-tail home-loan pages: "EMI for <amount> home loan".
 * Distinct context and FAQs per amount — these are separate documents,
 * not one template repeated.
 */
module.exports = [
  {
    slug: "20-lakh",
    amount: 2000000,
    label: "₹20 Lakh",
    words: "twenty lakh",
    headlineRate: 8.5,
    headlineYears: 20,
    incomeNeeded: "₹45,000–55,000",
    context:
      "A ₹20 lakh home loan is typical for a first apartment in a tier-2 or tier-3 city, or a modest top-up on an existing property. It is one of the few loan sizes where a shorter tenure stays genuinely affordable, which can save several lakh in interest.",
    faqs: [
      {
        q: "What is the EMI for a ₹20 lakh home loan for 20 years?",
        a: "At 8.5% p.a. the EMI is about ₹17,356 a month. Over the full tenure you repay roughly ₹41.7 lakh, of which about ₹21.7 lakh is interest — slightly more than the amount you borrowed."
      },
      {
        q: "What salary is needed for a ₹20 lakh home loan?",
        a: "Most lenders cap EMIs at roughly 50% of net monthly income, so a ₹17,356 EMI generally needs a take-home salary of about ₹45,000–55,000, assuming you have no other significant loans. Existing EMIs reduce your eligibility rupee for rupee."
      },
      {
        q: "Should I take a ₹20 lakh loan for 10 years or 20 years?",
        a: "A 10-year tenure at 8.5% costs about ₹24,797 a month — ₹7,441 more than the 20-year EMI — but total interest falls from roughly ₹21.7 lakh to about ₹9.8 lakh. If the higher EMI fits comfortably, the shorter tenure saves nearly ₹12 lakh."
      },
      {
        q: "How much interest do I save by prepaying?",
        a: "Substantially, if you prepay early. Paying one extra EMI a year on a ₹20 lakh, 20-year loan typically shortens it by around three years and saves several lakh in interest, because early prepayments attack the principal while the interest component is at its highest."
      }
    ]
  },
  {
    slug: "30-lakh",
    amount: 3000000,
    label: "₹30 Lakh",
    words: "thirty lakh",
    headlineRate: 8.5,
    headlineYears: 20,
    incomeNeeded: "₹65,000–80,000",
    context:
      "₹30 lakh is close to the median home loan size in urban India — enough for a two-bedroom flat in most tier-2 cities or a compact one in a metro suburb. It is also the size at which total interest over a long tenure starts to exceed the principal itself.",
    faqs: [
      {
        q: "What is the EMI for a ₹30 lakh home loan for 20 years?",
        a: "At 8.5% p.a. the EMI works out to about ₹26,035 a month. Across 20 years you repay roughly ₹62.5 lakh in total, of which about ₹32.5 lakh is interest — more than the ₹30 lakh you originally borrowed."
      },
      {
        q: "What salary do I need for a ₹30 lakh home loan?",
        a: "Generally a net monthly income of about ₹65,000–80,000, since lenders usually want your total EMIs to stay under 50% of take-home pay. A co-applicant's income can be added to improve eligibility, which is why many couples apply jointly."
      },
      {
        q: "How much interest does a 0.5% lower rate save on ₹30 lakh?",
        a: "At 8% instead of 8.5% over 20 years, the EMI drops to about ₹25,093 — roughly ₹942 less each month — and total interest falls by approximately ₹2.26 lakh. This is why negotiating your rate or transferring the balance is usually worth the paperwork."
      },
      {
        q: "Is a 15-year or 20-year tenure better for ₹30 lakh?",
        a: "A 15-year tenure at 8.5% costs about ₹29,542 a month versus ₹26,035 for 20 years — ₹3,507 more — but cuts total interest from roughly ₹32.5 lakh to about ₹23.2 lakh. That is a saving of over ₹9 lakh for an EMI increase of about 13%."
      },
      {
        q: "Can I claim tax benefits on a ₹30 lakh home loan?",
        a: "Under the old tax regime, Section 24(b) allows up to ₹2 lakh a year of interest deduction on a self-occupied property, and Section 80C covers principal repayment within the ₹1.5 lakh limit. The new regime removes these deductions for self-occupied homes, so the benefit depends on which regime you choose — compare both in our income tax calculator."
      }
    ]
  },
  {
    slug: "50-lakh",
    amount: 5000000,
    label: "₹50 Lakh",
    words: "fifty lakh",
    headlineRate: 8.5,
    headlineYears: 20,
    incomeNeeded: "₹1.1–1.3 lakh",
    context:
      "A ₹50 lakh loan usually means a metro purchase — a two- or three-bedroom flat in Pune, Hyderabad, Bengaluru or a Mumbai suburb. At this size the interest paid over a long tenure becomes one of the largest expenses of a person's life, so tenure and rate deserve real scrutiny.",
    faqs: [
      {
        q: "What is the EMI for a ₹50 lakh home loan for 20 years?",
        a: "At 8.5% p.a. the EMI is approximately ₹43,391 a month. Over 20 years you repay about ₹1.04 crore in total — roughly ₹54.1 lakh of it interest, which exceeds the original loan."
      },
      {
        q: "What salary is required for a ₹50 lakh home loan?",
        a: "Typically a net monthly income of around ₹1.1–1.3 lakh, or a combined income at that level if you apply with a co-applicant. Lenders also assess your credit score, job stability and existing obligations, so eligibility is not from income alone."
      },
      {
        q: "How much can I save by prepaying ₹5 lakh on a ₹50 lakh loan?",
        a: "A ₹5 lakh prepayment made in year three of a 20-year loan at 8.5%, while keeping the EMI unchanged, typically shortens the tenure by roughly three to four years and saves somewhere around ₹15–18 lakh in interest. The same prepayment made in year fifteen saves a small fraction of that."
      },
      {
        q: "Is it better to prepay the home loan or invest instead?",
        a: "Compare the after-tax loan rate with the return you realistically expect. Prepaying gives a guaranteed, risk-free return equal to your loan rate — about 8.5%. Equity might return more over long periods but carries risk. Many people do both: prepay enough to stay comfortable, invest the rest. If you claim Section 24(b) benefits under the old regime, your effective loan cost is lower, which tilts the maths toward investing."
      },
      {
        q: "Does a longer tenure make a ₹50 lakh loan affordable?",
        a: "It lowers the monthly outgo but at a steep price. Stretching from 20 to 30 years reduces the EMI from about ₹43,391 to roughly ₹38,446 — a saving of ₹4,945 a month — while total interest rises from about ₹54.1 lakh to nearly ₹88.4 lakh. You pay over ₹34 lakh more for that monthly relief."
      }
    ]
  },
  {
    slug: "75-lakh",
    amount: 7500000,
    label: "₹75 Lakh",
    words: "seventy-five lakh",
    headlineRate: 8.5,
    headlineYears: 20,
    incomeNeeded: "₹1.6–1.9 lakh",
    context:
      "₹75 lakh borrowing places you in premium metro property territory. Loans above ₹75 lakh also attract a lower loan-to-value cap from the RBI — lenders can typically fund only up to 75% of the property value — so the down payment requirement rises sharply.",
    faqs: [
      {
        q: "What is the EMI for a ₹75 lakh home loan for 20 years?",
        a: "At 8.5% p.a. the EMI is about ₹65,087 a month. The total repayment across 20 years comes to roughly ₹1.56 crore, of which approximately ₹81.2 lakh is interest."
      },
      {
        q: "What income do I need for a ₹75 lakh home loan?",
        a: "Generally a net monthly income of about ₹1.6–1.9 lakh, individually or jointly. At this loan size lenders scrutinise credit history and income stability more closely, and a co-applicant is common."
      },
      {
        q: "How much down payment is needed for a ₹75 lakh loan?",
        a: "For loans above ₹75 lakh, RBI norms limit the loan-to-value ratio to about 75%, meaning you fund at least 25% yourself. On a ₹1 crore property that is ₹25 lakh, plus stamp duty and registration of roughly 6–8% — so budget closer to ₹31–33 lakh in cash."
      },
      {
        q: "Should I take a shorter tenure on a ₹75 lakh loan?",
        a: "A 15-year tenure at 8.5% costs about ₹73,855 a month versus ₹65,087 for 20 years — about ₹8,768 more — but reduces total interest from roughly ₹81.2 lakh to around ₹57.9 lakh, saving over ₹23 lakh. Whether that is wise depends on how much monthly headroom you keep for emergencies."
      }
    ]
  },
  {
    slug: "1-crore",
    amount: 10000000,
    label: "₹1 Crore",
    words: "one crore",
    headlineRate: 8.5,
    headlineYears: 20,
    incomeNeeded: "₹2.2–2.6 lakh",
    context:
      "A ₹1 crore home loan is a major, decades-long commitment usually tied to premium property in Mumbai, Delhi NCR or Bengaluru. At this scale, small differences in interest rate translate into sums larger than most people's annual income.",
    faqs: [
      {
        q: "What is the EMI for a ₹1 crore home loan for 20 years?",
        a: "At 8.5% p.a. the EMI is approximately ₹86,782 a month. Total repayment over 20 years is about ₹2.08 crore, of which roughly ₹1.08 crore is interest — you repay more than double what you borrowed."
      },
      {
        q: "What salary is needed for a ₹1 crore home loan?",
        a: "Typically a net monthly income of about ₹2.2–2.6 lakh, or a combined household income at that level. Lenders will also want a strong credit score, and self-employed applicants usually need two to three years of audited financials."
      },
      {
        q: "How much does a 0.25% rate difference cost on ₹1 crore?",
        a: "At 8.75% instead of 8.5% over 20 years, the EMI rises from about ₹86,782 to roughly ₹88,371 — ₹1,589 more each month — and total interest increases by approximately ₹3.81 lakh. On loans this large, negotiating even a quarter point is worth real effort."
      },
      {
        q: "Are there tax benefits on a ₹1 crore home loan?",
        a: "Under the old regime, interest deduction on a self-occupied property is capped at ₹2 lakh a year under Section 24(b) — a small fraction of the roughly ₹8.4 lakh interest you would pay in year one. If the property is let out, the entire interest is deductible against rental income, though set-off against other income is limited to ₹2 lakh a year. The new regime removes the self-occupied benefit entirely."
      }
    ]
  }
];
