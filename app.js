const phrases = [
  {
    patterns: ["let's circle back", "lets circle back", "circle back"],
    translation: "We are not resolving this right now.",
    intent: "Delay the decision while keeping the topic alive.",
    action: "Create a named follow-up with an owner and a date.",
    risk: "🟡 Follow-up Risk",
    survival: "If there is no date, the circle may become a permanent orbit."
  },
  {
    patterns: ["just one quick question", "quick question"],
    translation: "This may not be quick.",
    intent: "Open a new discussion while minimizing the perceived effort.",
    action: "Answer briefly, then decide whether a separate discussion is needed.",
    risk: "🟡 Calendar Expansion",
    survival: "Protect the next meeting on your calendar."
  },
  {
    patterns: ["can we make one small change", "one small change", "small change", "tiny change"],
    translation: "The requested change may have a larger blast radius than advertised.",
    intent: "Change scope without reopening the full planning conversation.",
    action: "Run an impact assessment before committing to timeline or effort.",
    risk: "🔴 Scope Creep Detected",
    survival: "The word “small” is not an estimation method."
  },
  {
    patterns: ["let's take this offline", "lets take this offline", "take this offline"],
    translation: "This conversation needs fewer people.",
    intent: "Move a detailed, sensitive, or circular discussion out of the main meeting.",
    action: "Create a focused working session with only the required people.",
    risk: "🟢 Meeting Containment",
    survival: "A rare phrase that can actually save everyone time."
  },
  {
    patterns: ["who owns this", "who is the owner", "who's the owner", "whos the owner"],
    translation: "Accountability is currently missing.",
    intent: "Find one person who will make sure the work moves.",
    action: "Assign a directly responsible owner and confirm the expected outcome.",
    risk: "🔴 Ownership Gap",
    survival: "If everyone owns it, there is a reasonable chance nobody owns it."
  },
  {
    patterns: ["any thoughts", "thoughts?", "what do you think"],
    translation: "Someone needs to speak now.",
    intent: "Invite feedback, test alignment, or fill silence.",
    action: "Respond with a position, one reason, and the next decision needed.",
    risk: "🟢 Participation Requested",
    survival: "This is your cue. Unmute before your name is used."
  },
  {
    patterns: ["we need to be agile", "be agile", "more agile"],
    translation: "We need to move faster, but the exact constraint may not be defined.",
    intent: "Reduce delay or process overhead.",
    action: "Ask which bottleneck should be removed: approval, handoff, environment, testing, or decision latency.",
    risk: "🟡 Ambiguity Alert",
    survival: "Agile is a way of working, not a synonym for 'do it by Friday.'"
  },
  {
    patterns: ["can you just", "could you just", "just do"],
    translation: "An apparently simple request is arriving without an effort estimate.",
    intent: "Get the work started quickly.",
    action: "Clarify scope, dependencies, and the definition of done.",
    risk: "🟡 Hidden Effort",
    survival: "The word “just” has launched many unexpected projects."
  },
  {
    patterns: ["low hanging fruit", "low-hanging fruit"],
    translation: "Find something visible that can be delivered quickly.",
    intent: "Create momentum with lower-effort wins.",
    action: "Confirm that the item is genuinely low effort and still worth doing.",
    risk: "🟢 Quick Win",
    survival: "Occasionally, the fruit is attached to a production dependency."
  },
  {
    patterns: ["let's align", "lets align", "need alignment", "get aligned"],
    translation: "Different people currently have different versions of reality.",
    intent: "Reach agreement on scope, decision, ownership, or direction.",
    action: "Write down the decision needed and ask each stakeholder to confirm it explicitly.",
    risk: "🟡 Alignment Gap",
    survival: "Meetings called 'alignment' should ideally end with something aligned."
  },
  {
    patterns: ["we'll socialize this", "we will socialize this", "socialize this"],
    translation: "More stakeholders need to see this before a decision is safe.",
    intent: "Build awareness, support, or political cover.",
    action: "Identify exactly whose input or approval is required.",
    risk: "🟡 Stakeholder Expansion",
    survival: "Your document is about to meet several new calendars."
  },
  {
    patterns: ["let's not boil the ocean", "lets not boil the ocean", "boil the ocean"],
    translation: "The scope is becoming too large.",
    intent: "Reduce the problem to a manageable first increment.",
    action: "Define the smallest useful outcome and defer everything else.",
    risk: "🟢 Scope Control",
    survival: "No oceans were harmed in the making of this roadmap."
  },
  {
    patterns: ["parking lot", "put it in the parking lot", "park this"],
    translation: "This matters, but not enough to derail the current agenda.",
    intent: "Defer a side topic while preserving it for later.",
    action: "Capture the topic with an owner or explicit decision to drop it.",
    risk: "🟡 Deferred Topic",
    survival: "Corporate parking lots have no towing policy."
  },
  {
    patterns: ["we need a single source of truth", "single source of truth"],
    translation: "Too many spreadsheets, documents, chats, or dashboards disagree.",
    intent: "Establish one authoritative location for the information.",
    action: "Name the system of record, owner, update process, and retirement plan for duplicates.",
    risk: "🔴 Version Chaos",
    survival: "Creating another spreadsheet is usually not the solution."
  },
  {
    patterns: ["this should be easy", "should be easy", "should be simple"],
    translation: "Complexity has not yet been investigated.",
    intent: "Set an expectation of low effort.",
    action: "Validate dependencies before estimating.",
    risk: "🔴 Estimation Hazard",
    survival: "Famous last words of many production changes."
  },
  {
    patterns: ["we need a quick win", "quick win"],
    translation: "Leadership wants visible progress soon.",
    intent: "Demonstrate momentum while larger work continues.",
    action: "Choose something useful, measurable, and genuinely deliverable without creating cleanup debt.",
    risk: "🟢 Momentum Opportunity",
    survival: "A quick win should not become a slow maintenance problem."
  },
  {
    patterns: ["let's double click", "lets double click", "double click on"],
    translation: "We need more detail on that point.",
    intent: "Explore a specific issue without reopening everything.",
    action: "State the exact question to investigate and time-box the discussion.",
    risk: "🟢 Detail Requested",
    survival: "No mouse is required."
  },
  {
    patterns: ["at a high level", "high level"],
    translation: "Please skip the implementation details for now.",
    intent: "Understand the big picture before drilling down.",
    action: "Explain outcome, architecture, dependencies, risks, and decision needed in a few points.",
    risk: "🟢 Executive Mode",
    survival: "Keep the 47-slide appendix closed unless invited."
  },
  {
    patterns: ["let's keep this on our radar", "lets keep this on our radar", "on our radar"],
    translation: "We are acknowledging this without committing to action yet.",
    intent: "Track a concern that is not currently prioritized.",
    action: "Define a trigger or review date so the radar has an actual operator.",
    risk: "🟡 Passive Monitoring",
    survival: "Unmonitored radar is just decorative."
  },
  {
    patterns: ["can you own this", "please own this", "you own this"],
    translation: "Congratulations, you have acquired a deliverable.",
    intent: "Transfer accountability for moving the item forward.",
    action: "Confirm scope, decision rights, dependencies, and deadline before accepting.",
    risk: "🟡 Ownership Transfer",
    survival: "Ownership sometimes arrives before documentation."
  }
];

const fallbackRules = [
  {
    words: ["urgent", "asap", "immediately"],
    translation: "Priority is being raised, but the business impact may still need definition.",
    intent: "Accelerate action.",
    action: "Confirm severity, deadline, business impact, and what should be deprioritized.",
    risk: "🔴 Priority Escalation",
    survival: "Everything cannot be P1 at the same time."
  },
  {
    words: ["small", "quick", "simple", "easy", "just"],
    translation: "The request is being framed as low effort before the work has been assessed.",
    intent: "Move quickly with minimal friction.",
    action: "Check dependencies and effort before making a commitment.",
    risk: "🟡 Effort Assumption",
    survival: "Adjectives are not estimates."
  },
  {
    words: ["align", "alignment", "stakeholder"],
    translation: "More agreement is needed before the work can move safely.",
    intent: "Reduce disagreement or decision risk.",
    action: "Identify the decision, approvers, and what evidence they need.",
    risk: "🟡 Alignment Needed",
    survival: "Alignment improves dramatically when the decision is written down."
  }
];

function normalize(text) {
  return text.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
}

function translatePhrase(input) {
  const clean = normalize(input);

  for (const item of phrases) {
    if (item.patterns.some(pattern => clean.includes(pattern))) return item;
  }

  for (const rule of fallbackRules) {
    if (rule.words.some(word => clean.includes(word))) return rule;
  }

  return {
    translation: "This phrase has not entered the corporate dictionary yet.",
    intent: "The intent is unclear from the wording alone.",
    action: "Ask: “What decision or action do we need from this?” Then capture the answer.",
    risk: "🟣 Custom Jargon",
    survival: "You may have discovered a new species of corporate language."
  };
}

const phraseInput = document.getElementById("phrase");
const translateBtn = document.getElementById("translateBtn");
const result = document.getElementById("result");
const emptyState = document.getElementById("emptyState");
const translation = document.getElementById("translation");
const intent = document.getElementById("intent");
const action = document.getElementById("action");
const survival = document.getElementById("survival");
const riskBadge = document.getElementById("riskBadge");
const copyBtn = document.getElementById("copyBtn");

function render() {
  const value = phraseInput.value.trim();
  if (!value) {
    phraseInput.focus();
    return;
  }

  const data = translatePhrase(value);
  translation.textContent = data.translation;
  intent.textContent = data.intent;
  action.textContent = data.action;
  survival.textContent = data.survival;
  riskBadge.textContent = data.risk;
  result.classList.remove("hidden");
  emptyState.classList.add("hidden");
}

translateBtn.addEventListener("click", render);
phraseInput.addEventListener("keydown", e => {
  if (e.key === "Enter") render();
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    phraseInput.value = chip.textContent;
    render();
  });
});

copyBtn.addEventListener("click", async () => {
  const text = [
    `Corporate phrase: "${phraseInput.value.trim()}"`,
    `Translation: ${translation.textContent}`,
    `Likely intent: ${intent.textContent}`,
    `Recommended action: ${action.textContent}`,
    `Risk: ${riskBadge.textContent}`,
    `Meeting survival note: ${survival.textContent}`
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1200);
  } catch {
    copyBtn.textContent = "Copy failed";
  }
});
