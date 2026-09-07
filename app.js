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
  },
  {
    patterns: ["the scope may be expanding", "scope may be expanding", "scope is expanding", "scope has expanded"],
    translation: "The work may be moving beyond what was originally agreed.",
    intent: "Flag potential scope creep before it quietly becomes the new baseline.",
    action: "List what changed, who requested it, and the effect on timeline, cost, resources, and approvals.",
    risk: "🔴 Scope Creep Detected",
    survival: "Scope has a remarkable ability to expand when nobody is measuring it."
  },
  {
    patterns: ["touch base", "let's touch base", "lets touch base"],
    translation: "Let's have a short follow-up conversation.",
    intent: "Reconnect, exchange status, or decide next steps.",
    action: "Ask what specifically needs to be covered and whether a message would be enough.",
    risk: "🟢 Follow-up",
    survival: "Sometimes a touch base is a meeting. Sometimes it is three lines in Teams."
  },
  {
    patterns: ["sync up", "let's sync", "lets sync", "sync on this"],
    translation: "We need to compare our understanding before moving forward.",
    intent: "Resolve mismatched information or coordinate next steps.",
    action: "Bring the current status, decisions needed, and any blockers.",
    risk: "🟡 Coordination Needed",
    survival: "Synchronization works better when everyone brings the same version number."
  },
  {
    patterns: ["looping you in", "looping in", "adding you for visibility", "adding you for awareness"],
    translation: "You are being added to the conversation, possibly with work attached.",
    intent: "Increase awareness, get input, or transfer context.",
    action: "Check whether you are FYI, consulted, approver, or owner.",
    risk: "🟡 Role Ambiguity",
    survival: "Being copied and being accountable are very different hobbies."
  },
  {
    patterns: ["for visibility", "for awareness", "fyi", "for your information"],
    translation: "You are being informed, not necessarily asked to act.",
    intent: "Create awareness or preserve a record.",
    action: "Look for an explicit ask before treating it as an action item.",
    risk: "🟢 Informational",
    survival: "Not every FYI needs a reply-all."
  },
  {
    patterns: ["per my last email", "as per my last email", "as mentioned below", "as mentioned earlier"],
    translation: "The requested information was already provided.",
    intent: "Redirect attention to an earlier message without repeating everything.",
    action: "Review the prior note and respond to the unresolved point directly.",
    risk: "🟡 Friction Signal",
    survival: "Corporate archaeology has begun."
  },
  {
    patterns: ["gentle reminder", "friendly reminder", "just a reminder"],
    translation: "This is overdue or at risk of becoming overdue.",
    intent: "Prompt action without escalating the tone yet.",
    action: "Acknowledge, give the status, and provide a realistic completion time.",
    risk: "🟡 Deadline Pressure",
    survival: "The reminder is gentle. The next one may develop teeth."
  },
  {
    patterns: ["following up", "just following up", "checking in on this", "any update"],
    translation: "Someone is waiting for movement or an answer.",
    intent: "Get status, unblock a dependency, or prompt closure.",
    action: "Reply with done / in progress / blocked, plus the next date.",
    risk: "🟡 Follow-up Risk",
    survival: "Silence tends to generate more follow-ups, not fewer."
  },
  {
    patterns: ["can you take a look", "please take a look", "have a look at this"],
    translation: "Your review is being requested, but the depth may be undefined.",
    intent: "Get validation, troubleshooting, or an opinion.",
    action: "Ask what kind of review is needed: quick sanity check, approval, technical review, or full analysis.",
    risk: "🟡 Review Scope",
    survival: "A 'quick look' can range from 30 seconds to a forensic investigation."
  },
  {
    patterns: ["when you get a chance", "when you have a chance", "at your convenience"],
    translation: "This is positioned as non-urgent, but it may still be expected soon.",
    intent: "Make a request without sounding demanding.",
    action: "Confirm priority against your current work if timing matters.",
    risk: "🟢 Soft Request",
    survival: "Convenience is a surprisingly elastic deadline."
  },
  {
    patterns: ["by end of day", "eod", "close of business", "cob"],
    translation: "A same-day deadline has been set.",
    intent: "Create urgency and obtain a near-term result.",
    action: "Confirm the timezone, exact deliverable, and whether anything else should move.",
    risk: "🔴 Same-Day Deadline",
    survival: "EOD has more time zones than most project plans."
  },
  {
    patterns: ["by tomorrow", "need this tomorrow", "tomorrow morning"],
    translation: "The turnaround expectation is very short.",
    intent: "Accelerate delivery.",
    action: "Clarify the minimum acceptable output and identify what must be deprioritized.",
    risk: "🔴 Compressed Timeline",
    survival: "Tomorrow is a date, not an effort estimate."
  },
  {
    patterns: ["hard stop", "i have a hard stop", "hard stop at"],
    translation: "The meeting must end at a specific time.",
    intent: "Protect a fixed commitment that follows.",
    action: "Prioritize decisions first and park lower-value discussion.",
    risk: "🟢 Time Boundary",
    survival: "A hard stop is one of the few corporate phrases that means exactly what it says."
  },
  {
    patterns: ["we're tight on time", "we are tight on time", "short on time"],
    translation: "There is not enough time for the full discussion.",
    intent: "Force prioritization and keep the meeting moving.",
    action: "State the decision needed and defer detail that does not affect it.",
    risk: "🟡 Time Pressure",
    survival: "This is not the moment for slide 37."
  },
  {
    patterns: ["we don't have bandwidth", "we do not have bandwidth", "no bandwidth", "limited bandwidth"],
    translation: "The team does not currently have enough capacity.",
    intent: "Signal that new work would displace existing commitments.",
    action: "Ask what should be deprioritized, delayed, or reassigned.",
    risk: "🔴 Capacity Constraint",
    survival: "Bandwidth is usually people wearing too many hats, not a network cable."
  },
  {
    patterns: ["we need more resources", "resource constraint", "resource constraints", "under resourced"],
    translation: "The current team may not have enough people, skills, or time.",
    intent: "Surface a delivery risk caused by insufficient capacity.",
    action: "Quantify the gap and connect it to specific outcomes or dates.",
    risk: "🔴 Resourcing Risk",
    survival: "Headcount conversations improve when translated into delivery impact."
  },
  {
    patterns: ["there are dependencies", "dependency", "dependencies", "dependent on"],
    translation: "Progress relies on another team, system, decision, or event.",
    intent: "Explain why the work cannot move independently.",
    action: "Name each dependency, owner, due date, and fallback plan.",
    risk: "🟡 Dependency Risk",
    survival: "An unnamed dependency is just a future surprise."
  },
  {
    patterns: ["we're blocked", "we are blocked", "blocker", "blocked by"],
    translation: "Work cannot progress until something external changes.",
    intent: "Escalate an obstacle that requires action outside the immediate team.",
    action: "State the blocker, owner, business impact, and exact unblock request.",
    risk: "🔴 Delivery Blocker",
    survival: "A blocker without an owner is a decorative status update."
  },
  {
    patterns: ["we need to escalate", "escalate this", "raising this", "raise this"],
    translation: "The issue needs attention from someone with more authority or reach.",
    intent: "Get a decision, priority, resource, or intervention that the current level cannot provide.",
    action: "Escalate facts, impact, options, and the decision required—not just frustration.",
    risk: "🔴 Escalation",
    survival: "Good escalation shortens a problem. Bad escalation only enlarges the audience."
  },
  {
    patterns: ["i want to push back", "we should push back", "push back on this"],
    translation: "The request or assumption should be challenged.",
    intent: "Protect scope, standards, capacity, or a better decision.",
    action: "Use evidence and alternatives rather than a flat no.",
    risk: "🟡 Constructive Challenge",
    survival: "Push back works best when it comes with a path forward."
  },
  {
    patterns: ["we need to hold the line", "hold the line"],
    translation: "Do not relax the agreed boundary, standard, or commitment.",
    intent: "Prevent exception creep or erosion of a prior decision.",
    action: "Restate the agreed rule and what would justify changing it.",
    risk: "🟡 Boundary Protection",
    survival: "Exceptions have a habit of becoming precedents."
  },
  {
    patterns: ["this is a priority", "top priority", "high priority"],
    translation: "This work is expected to move ahead of something else.",
    intent: "Signal importance and speed.",
    action: "Ask what specifically should be deprioritized to make room.",
    risk: "🔴 Priority Shift",
    survival: "A priority without a trade-off is just an aspiration."
  },
  {
    patterns: ["mission critical", "business critical", "critical path"],
    translation: "Failure or delay would have significant business impact.",
    intent: "Justify stronger attention, resilience, or urgency.",
    action: "Define the actual impact and the controls required because of it.",
    risk: "🔴 Critical Work",
    survival: "Critical should describe consequence, not enthusiasm."
  },
  {
    patterns: ["table stakes", "this is table stakes"],
    translation: "This is considered a basic requirement, not a differentiator.",
    intent: "Frame the capability as mandatory for credibility or competitiveness.",
    action: "Confirm whether it is truly mandatory and what minimum standard applies.",
    risk: "🟢 Baseline Requirement",
    survival: "Today's differentiator is tomorrow's table stakes."
  },
  {
    patterns: ["move the needle", "moving the needle"],
    translation: "Create a measurable improvement that matters.",
    intent: "Focus effort on outcomes rather than activity.",
    action: "Ask which metric should change and by how much.",
    risk: "🟢 Outcome Focus",
    survival: "Needle movement requires an actual gauge."
  },
  {
    patterns: ["value add", "value-add", "add value"],
    translation: "The work should produce a benefit beyond simply completing a task.",
    intent: "Justify effort through business impact.",
    action: "Name the measurable benefit: time, cost, risk, revenue, quality, or experience.",
    risk: "🟢 Value Check",
    survival: "If the value cannot be described, the hyphen will not save it."
  },
  {
    patterns: ["pain point", "pain points"],
    translation: "There is a recurring problem causing effort, delay, cost, or frustration.",
    intent: "Identify a problem worth solving.",
    action: "Quantify who experiences it, how often, and what it costs.",
    risk: "🟢 Problem Identified",
    survival: "Not every inconvenience graduates to a pain point."
  },
  {
    patterns: ["north star", "north-star"],
    translation: "This is the guiding outcome or principle used to make trade-offs.",
    intent: "Create a stable direction amid many decisions.",
    action: "Translate the north star into measurable decision criteria.",
    risk: "🟢 Strategic Direction",
    survival: "A north star is useful only if people occasionally look up."
  },
  {
    patterns: ["strategic alignment", "aligned to strategy", "align to strategy"],
    translation: "The work needs a clearer connection to organizational priorities.",
    intent: "Justify investment and prioritization.",
    action: "State which strategic objective this supports and how success will be measured.",
    risk: "🟡 Strategy Check",
    survival: "Adding the word strategic does not automatically create a strategy."
  },
  {
    patterns: ["operationalize", "operationalise"],
    translation: "Turn the idea or policy into a repeatable way of working.",
    intent: "Move from concept to process, ownership, tooling, and evidence.",
    action: "Define owner, workflow, controls, metrics, and review cadence.",
    risk: "🟢 Execution Mode",
    survival: "A policy becomes real when someone knows what to do on Tuesday morning."
  },
  {
    patterns: ["streamline", "streamlining"],
    translation: "Reduce unnecessary steps, delay, or complexity.",
    intent: "Improve efficiency without losing required controls.",
    action: "Map the current process and remove specific non-value-adding steps.",
    risk: "🟢 Efficiency Opportunity",
    survival: "Streamlining should remove friction, not visibility."
  },
  {
    patterns: ["right size", "right-size", "right sizing", "right-sizing"],
    translation: "Adjust the solution, team, or process to fit the actual need.",
    intent: "Avoid overengineering or excess cost.",
    action: "Define the demand, constraints, and target operating level before changing capacity.",
    risk: "🟡 Optimization",
    survival: "Right-sizing sounds much friendlier than cutting or rebuilding."
  },
  {
    patterns: ["leverage", "leverage existing", "we can leverage"],
    translation: "Use something we already have instead of building from scratch.",
    intent: "Reuse capability, relationships, technology, or knowledge.",
    action: "Confirm that reuse is actually cheaper, suitable, and supportable.",
    risk: "🟢 Reuse Opportunity",
    survival: "Sometimes 'leverage' means reuse. Sometimes it means 'please make this system do one more thing.'"
  },
  {
    patterns: ["synergy", "synergies"],
    translation: "Two things are expected to create more value together than separately.",
    intent: "Justify consolidation, collaboration, or integration.",
    action: "Name the specific benefit and how it will be measured.",
    risk: "🟡 Benefit Ambiguity",
    survival: "Synergy becomes real when it survives a spreadsheet."
  },
  {
    patterns: ["deep dive", "deep-dive", "let's deep dive", "lets deep dive"],
    translation: "We need a detailed examination of this topic.",
    intent: "Understand root causes, design choices, or evidence.",
    action: "Define the questions to answer and who actually needs to attend.",
    risk: "🟢 Detailed Review",
    survival: "Bring oxygen. The meeting may go below 10,000 feet."
  },
  {
    patterns: ["drill down", "drill into", "drill deeper"],
    translation: "Move from summary to more detailed information.",
    intent: "Validate or understand what sits beneath a headline.",
    action: "Focus on the specific metric, component, or decision that needs detail.",
    risk: "🟢 Detail Requested",
    survival: "The corporate geology expedition has begun."
  },
  {
    patterns: ["connect the dots", "connect dots"],
    translation: "Show how separate facts, teams, or events relate to the larger story.",
    intent: "Create a coherent explanation or business narrative.",
    action: "Make the causal links explicit rather than assuming the audience sees them.",
    risk: "🟢 Synthesis Needed",
    survival: "The dots rarely connect themselves in PowerPoint."
  },
  {
    patterns: ["granular", "more granular", "granularity"],
    translation: "More detailed information is required.",
    intent: "Reduce ambiguity by getting closer to the underlying data or steps.",
    action: "Ask which dimension needs more detail: owner, date, cost, control, system, or task.",
    risk: "🟢 Detail Requested",
    survival: "There is always one more level of granularity."
  },
  {
    patterns: ["big picture", "zoom out", "step back"],
    translation: "We are getting lost in details and need to return to the overall objective.",
    intent: "Reorient the discussion around outcomes and priorities.",
    action: "Restate the goal, current state, major risks, and decision needed.",
    risk: "🟢 Reframing",
    survival: "Sometimes the fastest way forward is to stop discussing column G."
  },
  {
    patterns: ["from a 30,000 foot view", "30000 foot view", "30,000-foot view"],
    translation: "Give the executive summary, not the implementation detail.",
    intent: "Understand direction and major trade-offs quickly.",
    action: "Cover objective, current state, key risks, and next decision.",
    risk: "🟢 Executive Summary",
    survival: "Cabin pressure is optional; clarity is not."
  },
  {
    patterns: ["optics", "the optics", "bad optics"],
    translation: "How this will be perceived matters in addition to the technical facts.",
    intent: "Manage stakeholder, customer, regulatory, or leadership perception.",
    action: "Separate actual risk from perception risk, then address both explicitly.",
    risk: "🟡 Perception Risk",
    survival: "Optics cannot replace substance, but substance can still have optics."
  },
  {
    patterns: ["socialize", "socialise", "socialize the idea", "socialise the idea"],
    translation: "Share the idea with more people before formalizing it.",
    intent: "Build awareness, feedback, or support before a decision.",
    action: "Identify the specific stakeholders and what input you need from each.",
    risk: "🟡 Stakeholder Expansion",
    survival: "Your draft is about to begin networking."
  },
  {
    patterns: ["run it up the flagpole", "run this up the flagpole"],
    translation: "Take this idea to senior stakeholders and see whether it gets support.",
    intent: "Test approval or appetite before investing further.",
    action: "Present the decision, rationale, risks, and ask clearly.",
    risk: "🟡 Leadership Check",
    survival: "If nobody salutes, ask for feedback before lowering the flag."
  },
  {
    patterns: ["temperature check", "take the temperature", "read the room"],
    translation: "Gauge how people feel before forcing a decision.",
    intent: "Understand support, resistance, or uncertainty.",
    action: "Ask directly for concerns or confidence rather than relying only on silence.",
    risk: "🟡 Sentiment Check",
    survival: "Silence is not always alignment; sometimes everyone is on mute."
  },
  {
    patterns: ["are we comfortable with", "is everyone comfortable with"],
    translation: "A soft approval check is being requested.",
    intent: "Test whether there are objections before moving on.",
    action: "If the decision matters, convert comfort into explicit approval or dissent.",
    risk: "🟡 Soft Approval",
    survival: "Comfort is a feeling. Governance usually prefers a decision."
  },
  {
    patterns: ["any objections", "does anyone object", "speak now"],
    translation: "The group is being given a final chance to challenge the direction.",
    intent: "Close discussion and proceed unless material concerns remain.",
    action: "Raise concrete risks now, or document agreement and move forward.",
    risk: "🟢 Decision Closure",
    survival: "This is the corporate version of the train doors closing."
  },
  {
    patterns: ["we have consensus", "consensus", "we're aligned", "we are aligned"],
    translation: "The group is believed to agree on the direction.",
    intent: "Close debate and move into execution.",
    action: "Capture the actual decision, owner, date, and any dissenting conditions.",
    risk: "🟢 Alignment Achieved",
    survival: "Consensus is strongest when it survives the meeting minutes."
  },
  {
    patterns: ["let's table this", "lets table this", "table this"],
    translation: "Stop discussing this topic for now.",
    intent: "Defer the issue to protect time or await more information.",
    action: "Record why it is deferred and when it will return.",
    risk: "🟡 Deferred Decision",
    survival: "Tabling without a return date can become elegant abandonment."
  },
  {
    patterns: ["put a pin in it", "pin this", "put a pin"],
    translation: "Pause this topic and return to it later.",
    intent: "Avoid derailing the current discussion.",
    action: "Capture the item and assign a revisit point.",
    risk: "🟡 Deferred Topic",
    survival: "Pins are cheap. Follow-through is the premium feature."
  },
  {
    patterns: ["action item", "action items", "takeaway", "takeaways"],
    translation: "Something specific should happen after this discussion.",
    intent: "Convert conversation into accountable work.",
    action: "Record owner, action, due date, and expected output.",
    risk: "🟢 Execution Required",
    survival: "An action item without an owner is meeting décor."
  },
  {
    patterns: ["next steps", "what are the next steps"],
    translation: "The discussion needs to turn into an execution plan.",
    intent: "Create momentum after a decision or review.",
    action: "Define the next 1–3 actions, owners, and dates.",
    risk: "🟢 Execution Required",
    survival: "A meeting earns its keep when the next steps are obvious."
  },
  {
    patterns: ["who needs to be in the room", "right people in the room", "right stakeholders"],
    translation: "The current group may not have the authority or expertise needed.",
    intent: "Improve decision quality by involving the necessary people.",
    action: "List decision maker, subject-matter experts, impacted owners, and required approvers.",
    risk: "🟡 Stakeholder Gap",
    survival: "More attendees are not automatically the same as the right attendees."
  },
  {
    patterns: ["decision maker", "who can make the decision", "decision owner"],
    translation: "Authority for the decision is unclear.",
    intent: "Identify who can actually approve or reject the path forward.",
    action: "Name one decision owner and the input they need.",
    risk: "🔴 Decision Gap",
    survival: "Meetings move faster once someone is legally allowed to say yes."
  },
  {
    patterns: ["decision log", "log the decision", "document the decision"],
    translation: "The decision should be recorded so it is not re-litigated later.",
    intent: "Create traceability and institutional memory.",
    action: "Capture date, decision, rationale, owner, and conditions.",
    risk: "🟢 Governance Good Practice",
    survival: "Future-you appreciates present-you writing things down."
  },
  {
    patterns: ["let's be data driven", "lets be data driven", "data-driven", "data driven"],
    translation: "The decision should be supported by evidence rather than preference alone.",
    intent: "Reduce opinion battles and improve confidence.",
    action: "Agree on the metric, source, time period, and threshold before debating conclusions.",
    risk: "🟢 Evidence Requested",
    survival: "Data can settle arguments only after everyone agrees which data counts."
  },
  {
    patterns: ["what does the data say", "show me the data", "where is the data"],
    translation: "Evidence is being requested before accepting the claim.",
    intent: "Validate an assumption or challenge anecdotal reasoning.",
    action: "Provide the source, definition, timeframe, and relevant caveats.",
    risk: "🟢 Evidence Requested",
    survival: "A chart without definitions is just colorful confidence."
  },
  {
    patterns: ["root cause", "root-cause", "rca"],
    translation: "We need to understand why the problem happened, not only patch the symptom.",
    intent: "Prevent recurrence through corrective action.",
    action: "Separate trigger, contributing factors, control gaps, and corrective actions.",
    risk: "🔴 Problem Investigation",
    survival: "If the root cause is 'human error,' keep digging."
  },
  {
    patterns: ["lessons learned", "lesson learned", "retrospective"],
    translation: "We should capture what to repeat and what to change next time.",
    intent: "Turn experience into process improvement.",
    action: "Document specific changes with owners rather than general observations.",
    risk: "🟢 Continuous Improvement",
    survival: "A lesson is only learned after behavior changes."
  },
  {
    patterns: ["best practice", "best practices"],
    translation: "A commonly accepted approach is being proposed as the preferred baseline.",
    intent: "Reduce risk by using proven patterns.",
    action: "Check whether the practice fits this context rather than copying it blindly.",
    risk: "🟢 Proven Pattern",
    survival: "Best practice is context-sensitive despite the confident branding."
  },
  {
    patterns: ["guardrails", "guardrail", "put guardrails"],
    translation: "Boundaries are needed so teams can move quickly without unacceptable risk.",
    intent: "Enable autonomy within defined limits.",
    action: "Specify what is allowed, prohibited, monitored, and who can approve exceptions.",
    risk: "🟢 Controlled Autonomy",
    survival: "Good guardrails enable speed; bad ones merely decorate the road."
  },
  {
    patterns: ["governance", "governance process", "governance framework"],
    translation: "Decision rights, controls, evidence, and oversight need to be defined.",
    intent: "Make execution accountable and repeatable.",
    action: "Clarify owners, approvals, artifacts, exceptions, and review cadence.",
    risk: "🟡 Governance Needed",
    survival: "Governance is useful when it helps decisions—not when it only creates folders."
  },
  {
    patterns: ["control framework", "control environment", "controls"],
    translation: "Specific safeguards are needed to keep risk within acceptable limits.",
    intent: "Translate risk into preventive, detective, or corrective measures.",
    action: "Map each material risk to an owner, control, evidence, and test method.",
    risk: "🟡 Risk Control",
    survival: "A control that nobody operates is just a sentence."
  },
  {
    patterns: ["risk appetite", "risk tolerance"],
    translation: "The organization needs to decide how much risk it is willing to accept.",
    intent: "Set boundaries for decision-making and escalation.",
    action: "Define measurable thresholds and who can approve exceptions.",
    risk: "🟡 Risk Decision",
    survival: "Risk appetite is more useful as a threshold than as a paragraph."
  },
  {
    patterns: ["acceptable risk", "risk accepted", "accept the risk"],
    translation: "The remaining risk is being consciously tolerated.",
    intent: "Proceed despite known exposure because mitigation may not be proportionate.",
    action: "Record rationale, approver, duration, conditions, and review date.",
    risk: "🔴 Risk Acceptance",
    survival: "Accepted risk should come with a signature, not amnesia."
  },
  {
    patterns: ["mitigate", "mitigation", "risk mitigation"],
    translation: "Reduce the likelihood or impact of a known risk.",
    intent: "Bring exposure within an acceptable level.",
    action: "Define the control, owner, target date, residual risk, and evidence.",
    risk: "🟡 Risk Treatment",
    survival: "Mitigation without ownership is optimism with formatting."
  },
  {
    patterns: ["contingency plan", "fallback plan", "plan b"],
    translation: "A backup path is needed if the primary approach fails.",
    intent: "Reduce disruption and recovery time.",
    action: "Define trigger, owner, alternate process, and communication steps.",
    risk: "🟢 Resilience",
    survival: "Plan B works best when it exists before Plan A needs help."
  },
  {
    patterns: ["single point of failure", "spof"],
    translation: "One dependency could cause the entire process or service to fail.",
    intent: "Highlight a resilience weakness.",
    action: "Add redundancy, failover, alternate ownership, or a tested recovery path.",
    risk: "🔴 Resilience Risk",
    survival: "If one person, server, or spreadsheet can stop everything, it deserves attention."
  },
  {
    patterns: ["technical debt", "tech debt"],
    translation: "A shortcut or legacy decision is creating future cost or risk.",
    intent: "Explain why maintenance or modernization work is necessary.",
    action: "Quantify the impact and create a prioritized remediation plan.",
    risk: "🟡 Sustainability Risk",
    survival: "Technical debt charges interest, usually during an incident."
  },
  {
    patterns: ["future proof", "future-proof", "futureproof"],
    translation: "Design this so foreseeable growth or change does not force immediate rework.",
    intent: "Protect the investment against likely evolution.",
    action: "Specify which future scenarios you are actually designing for.",
    risk: "🟡 Design Ambition",
    survival: "Future-proofing every possible future is how present projects become archaeology."
  },
  {
    patterns: ["scalable", "scale this", "at scale"],
    translation: "The solution should continue working as demand grows.",
    intent: "Avoid designs that fail under higher volume, users, regions, or complexity.",
    action: "Define expected scale, bottlenecks, cost curve, and test thresholds.",
    risk: "🟢 Growth Readiness",
    survival: "Scalable is measurable. 'A lot more' is not."
  },
  {
    patterns: ["production ready", "production-ready", "ready for production"],
    translation: "The solution must meet operational, security, support, and reliability expectations—not just function in testing.",
    intent: "Confirm readiness for real users and real consequences.",
    action: "Validate monitoring, support, security, rollback, capacity, access, documentation, and approvals.",
    risk: "🔴 Release Readiness",
    survival: "It worked on a laptop is not a production criterion."
  },
  {
    patterns: ["go live", "go-live", "production deployment"],
    translation: "The change is moving into the live environment.",
    intent: "Put the capability into real operational use.",
    action: "Confirm approvals, validation, rollback, monitoring, support coverage, and communications.",
    risk: "🔴 Change Event",
    survival: "Go-live is when assumptions meet customers."
  },
  {
    patterns: ["rollback", "roll back", "backout plan", "back-out plan"],
    translation: "We need a safe way to undo the change if it causes problems.",
    intent: "Limit impact from a failed deployment.",
    action: "Define trigger, steps, owner, data implications, and maximum rollback time.",
    risk: "🟢 Resilience Control",
    survival: "A rollback plan written during the outage is technically still a plan, just late."
  },
  {
    patterns: ["smoke test", "sanity check", "quick validation"],
    translation: "Run a focused check that the critical path still works.",
    intent: "Catch obvious failures quickly after a change.",
    action: "Define the few tests that prove core functionality and dependencies are healthy.",
    risk: "🟢 Validation",
    survival: "A smoke test is not permission to skip full testing."
  },
  {
    patterns: ["sign off", "sign-off", "formal approval"],
    translation: "Someone with authority must explicitly approve the outcome or release.",
    intent: "Create accountable evidence that required review occurred.",
    action: "Capture approver, date, scope, conditions, and evidence reviewed.",
    risk: "🟢 Approval Required",
    survival: "A thumbs-up emoji may not satisfy every auditor."
  },
  {
    patterns: ["business sign off", "business approval", "business sign-off"],
    translation: "The business owner needs to confirm the solution meets the intended need.",
    intent: "Validate fitness for purpose before closure or release.",
    action: "Agree on acceptance criteria and retain the approval evidence.",
    risk: "🟢 Business Approval",
    survival: "Technical success and business acceptance are related but not identical."
  },
  {
    patterns: ["we need buy in", "need buy-in", "stakeholder buy in", "stakeholder buy-in"],
    translation: "Key people need to support the direction before it will stick.",
    intent: "Reduce resistance and improve execution.",
    action: "Identify what each stakeholder cares about and resolve material objections.",
    risk: "🟡 Adoption Risk",
    survival: "Buy-in is easier when people are consulted before the announcement."
  },
  {
    patterns: ["change management", "organizational change", "adoption plan"],
    translation: "People, process, communication, and training need attention—not just the technology.",
    intent: "Increase adoption and reduce disruption.",
    action: "Define impacted groups, communications, training, support, and success measures.",
    risk: "🟡 Adoption Risk",
    survival: "A technically perfect system can still lose to a spreadsheet people understand."
  },
  {
    patterns: ["quick turnaround", "fast turnaround"],
    translation: "Delivery is expected sooner than the normal cycle.",
    intent: "Accelerate completion.",
    action: "Clarify the minimum viable output and what standard steps cannot be skipped.",
    risk: "🔴 Compressed Timeline",
    survival: "Fast is a schedule. Safe is a constraint. Both need planning."
  },
  {
    patterns: ["minimum viable", "mvp", "minimum viable product"],
    translation: "Deliver the smallest version that proves value or learning.",
    intent: "Reduce time and investment before scaling.",
    action: "Agree on what is truly essential and what is explicitly out of scope.",
    risk: "🟢 Scope Discipline",
    survival: "MVP means minimum viable, not minimum documented."
  },
  {
    patterns: ["phase two", "phase 2", "future phase"],
    translation: "This is being deferred beyond the current delivery scope.",
    intent: "Protect the current release from expanding indefinitely.",
    action: "Record the deferred item, rationale, and prioritization trigger.",
    risk: "🟡 Deferred Scope",
    survival: "Phase Two is where many good ideas go to become folklore."
  },
  {
    patterns: ["nice to have", "nice-to-have"],
    translation: "This is desirable but not required for the current outcome.",
    intent: "Separate optional enhancements from essential scope.",
    action: "Keep it below must-have items unless value or risk justifies promotion.",
    risk: "🟢 Optional Scope",
    survival: "Nice-to-have has saved many deadlines when treated honestly."
  },
  {
    patterns: ["must have", "must-have", "non negotiable", "non-negotiable"],
    translation: "This requirement is being treated as essential.",
    intent: "Protect a critical need or constraint.",
    action: "Ask what consequence makes it mandatory and ensure it is reflected in acceptance criteria.",
    risk: "🔴 Mandatory Requirement",
    survival: "Non-negotiable items deserve very clear definitions."
  },
  {
    patterns: ["we can revisit later", "revisit this later", "come back to this later"],
    translation: "The topic is being deferred without necessarily being rejected.",
    intent: "Protect current focus while leaving the option open.",
    action: "Set a trigger or date for reconsideration if it genuinely matters.",
    risk: "🟡 Deferred Decision",
    survival: "Later is not yet a date."
  },
  {
    patterns: ["no concerns from my side", "no concerns on my side", "looks good to me", "lgtm"],
    translation: "No material objection is being raised.",
    intent: "Signal acceptance or readiness to proceed.",
    action: "If formal approval is required, make the approval explicit and record it.",
    risk: "🟢 Positive Review",
    survival: "'Looks good' is reassuring; 'approved' is traceable."
  },
  {
    patterns: ["noted", "duly noted"],
    translation: "The information has been acknowledged.",
    intent: "Confirm receipt without necessarily agreeing or acting.",
    action: "Do not assume action unless the next step is explicit.",
    risk: "🟢 Acknowledged",
    survival: "One word can acknowledge a paragraph without adopting it."
  },
  {
    patterns: ["understood", "makes sense"],
    translation: "The message has been understood, at least at a high level.",
    intent: "Acknowledge and signal alignment with the explanation.",
    action: "If action is required, confirm the next step separately.",
    risk: "🟢 Acknowledged",
    survival: "Understanding and ownership are cousins, not twins."
  },
  {
    patterns: ["let me check", "i'll check", "i will check", "let me look into it"],
    translation: "The answer is not available yet and someone needs to investigate.",
    intent: "Buy time to verify facts before responding.",
    action: "Give a return time and specify what you will verify.",
    risk: "🟡 Follow-up Required",
    survival: "'I'll check' becomes useful when paired with 'by when.'"
  },
  {
    patterns: ["i'll get back to you", "i will get back to you", "get back to you"],
    translation: "A response will come later after more information or thought.",
    intent: "Avoid giving an uncertain answer now.",
    action: "Set a specific follow-up time if the issue is time-sensitive.",
    risk: "🟡 Follow-up Required",
    survival: "The phrase works better with a calendar attached."
  },
  {
    patterns: ["can you send me", "please send me", "share this with me", "can you share"],
    translation: "A specific artifact or information is being requested.",
    intent: "Obtain evidence, context, or a deliverable.",
    action: "Clarify the exact item, format, and deadline if not obvious.",
    risk: "🟢 Direct Request",
    survival: "One of corporate life's rare low-ambiguity sentences."
  },
  {
    patterns: ["send me a summary", "executive summary", "one pager", "one-pager"],
    translation: "Condense the material into a short decision-friendly format.",
    intent: "Help someone understand the essentials quickly.",
    action: "Include objective, status, key risks, decision needed, and next steps.",
    risk: "🟢 Executive Communication",
    survival: "A one-pager is not a 12-slide deck printed small."
  },
  {
    patterns: ["net net", "net-net", "bottom line"],
    translation: "Give the conclusion without the supporting detail.",
    intent: "Get to the decision or outcome quickly.",
    action: "State the answer, impact, and required action in one or two sentences.",
    risk: "🟢 Executive Mode",
    survival: "The appendix can wait."
  },
  {
    patterns: ["in a nutshell", "short version", "long story short"],
    translation: "Summarize the issue briefly.",
    intent: "Reduce complexity for faster understanding.",
    action: "Give context, conclusion, and next action—then stop.",
    risk: "🟢 Concise Summary",
    survival: "The nutshell has limited storage."
  },
  {
    patterns: ["i don't want to overcomplicate this", "don't overcomplicate", "keep it simple"],
    translation: "The proposed solution may be becoming more complex than the need requires.",
    intent: "Reduce design or process overhead.",
    action: "Restate the core requirement and remove elements that do not materially support it.",
    risk: "🟡 Complexity Check",
    survival: "Simple is excellent. Simplistic is a different product."
  },
  {
    patterns: ["we're overthinking this", "we are overthinking this", "overthinking"],
    translation: "The discussion may be spending more effort on uncertainty than the decision warrants.",
    intent: "Move toward a practical decision.",
    action: "Identify the few unknowns that materially change the outcome and time-box the rest.",
    risk: "🟡 Analysis Drag",
    survival: "Eventually analysis needs to produce a verb."
  },
  {
    patterns: ["let's be pragmatic", "lets be pragmatic", "pragmatic approach"],
    translation: "Choose a workable solution given real constraints, not the theoretically perfect one.",
    intent: "Balance speed, risk, cost, and quality.",
    action: "State the trade-off explicitly and document what will be revisited later.",
    risk: "🟢 Practical Trade-off",
    survival: "Pragmatic should mean conscious compromise, not invisible compromise."
  },
  {
    patterns: ["we need a workaround", "workaround", "temporary fix"],
    translation: "The preferred solution is not available soon enough, so an interim path is needed.",
    intent: "Restore service or progress while a durable fix is developed.",
    action: "Set an expiry date, owner, risk controls, and permanent remediation plan.",
    risk: "🟡 Temporary Solution",
    survival: "Temporary fixes have excellent survival instincts."
  },
  {
    patterns: ["permanent fix", "long term fix", "long-term fix"],
    translation: "The underlying issue should be resolved rather than repeatedly patched.",
    intent: "Remove recurring operational or risk cost.",
    action: "Address the root cause and define how recurrence will be prevented.",
    risk: "🟢 Durable Remediation",
    survival: "A permanent fix deserves more than a renamed workaround."
  },
  {
    patterns: ["can we automate this", "automate this", "automation opportunity"],
    translation: "A repetitive manual process may be a candidate for automation.",
    intent: "Reduce effort, delay, or error.",
    action: "Check volume, variability, controls, exception handling, and maintenance cost before automating.",
    risk: "🟢 Automation Opportunity",
    survival: "Automating a broken process can produce broken results at impressive speed."
  },
  {
    patterns: ["manual process", "manual intervention", "manual step"],
    translation: "Human effort is required where automation or system support may be limited.",
    intent: "Describe an operational dependency or control point.",
    action: "Assess frequency, error risk, capacity, evidence, and whether automation is justified.",
    risk: "🟡 Operational Risk",
    survival: "Manual is not automatically bad; undocumented manual is exciting in the wrong way."
  },
  {
    patterns: ["human in the loop", "human-in-the-loop", "human review"],
    translation: "A person must review, decide, or intervene at a defined point.",
    intent: "Add judgment or accountability where automation alone is not sufficient.",
    action: "Define when review is required, what evidence is shown, who can override, and how actions are logged.",
    risk: "🟢 Human Oversight",
    survival: "A human in the loop needs more than a chair near the system."
  },
  {
    patterns: ["we need traceability", "traceability", "audit trail"],
    translation: "Decisions and actions must be reconstructable later.",
    intent: "Support accountability, audit, troubleshooting, or regulatory evidence.",
    action: "Record who did what, when, why, and against which version or input.",
    risk: "🟢 Evidence Requirement",
    survival: "If nobody can reconstruct it later, it effectively happened in folklore."
  },
  {
    patterns: ["document this", "please document", "needs documentation"],
    translation: "The knowledge or decision should not remain only in conversation.",
    intent: "Create a durable record for reuse, audit, or handoff.",
    action: "Capture purpose, owner, date, decision, dependencies, and next steps in the agreed location.",
    risk: "🟢 Documentation",
    survival: "Future teammates cannot search your memory."
  },
  {
    patterns: ["knowledge transfer", "kt session", "handover", "hand off"],
    translation: "Information or operational responsibility needs to move from one person or team to another.",
    intent: "Reduce dependency on the current owner and enable continuity.",
    action: "Cover architecture, runbooks, access, known issues, contacts, and practical walkthroughs.",
    risk: "🟡 Continuity Risk",
    survival: "A 90-minute call is not automatically knowledge transfer."
  },
  {
    patterns: ["bus factor", "key person dependency", "single person dependency"],
    translation: "Too much critical knowledge or access sits with one person.",
    intent: "Highlight continuity risk.",
    action: "Document, cross-train, distribute access, and test that another person can perform the work.",
    risk: "🔴 Continuity Risk",
    survival: "Vacations are an excellent resilience test."
  },
  {
    patterns: ["keep things on an even keel", "keep it on an even keel", "even keel"],
    translation: "Keep the situation stable, balanced, and free of unnecessary disruption.",
    intent: "Maintain steady progress without creating new volatility, conflict, or risk.",
    action: "Avoid dramatic changes unless necessary; surface emerging issues early and keep decisions proportionate.",
    risk: "🟢 Stability / Balance",
    survival: "When someone asks for an even keel, this is usually not the moment to redesign the ship."
  },
  {
    patterns: ["frankenstein solution", "frankenstein system", "frankenstein architecture", "frankenstein app", "frankenstein"],
    translation: "The solution has been assembled from mismatched parts and may be difficult to maintain.",
    intent: "Flag technical debt, excessive patching, or an architecture that evolved without a clean design.",
    action: "Map the seams, dependencies, unsupported components, and the minimum path to simplify or standardize it.",
    risk: "🔴 Technical Debt",
    survival: "It may be alive, but nobody is completely sure who owns all the organs."
  },
  {
    patterns: ["what's the delta", "whats the delta", "what is the delta", "show me the delta", "the delta between", "delta"],
    translation: "What is different between the two versions, states, plans, numbers, or positions?",
    intent: "Focus attention on the change rather than reviewing everything again.",
    action: "State the baseline, the new state, and the specific differences that matter.",
    risk: "🔵 Comparison / Change",
    survival: "Corporate shorthand for: spare me the full deck and show me what changed."
  },
  {
    patterns: ["needle mover"],
    translation: "Create a meaningful, measurable improvement rather than a cosmetic one.",
    intent: "Prioritize work with visible business impact.",
    action: "Tie the proposal to a metric, outcome, or material risk reduction.",
    risk: "🔵 Outcome Focus",
    survival: "If the needle cannot be measured, it may currently be decorative."
  },
  {
    patterns: ["in the weeds", "too far in the weeds"],
    translation: "The discussion is getting too detailed for the current audience or decision.",
    intent: "Pull the conversation back to the level needed to move forward.",
    action: "Summarize the key implication, decision, and risk; park implementation detail unless requested.",
    risk: "🟡 Detail Overload",
    survival: "You can visit the weeds. You do not have to establish residency there."
  },
  {
    patterns: ["land the plane", "let's land the plane", "lets land the plane"],
    translation: "Bring the discussion to a conclusion and make the decision.",
    intent: "Stop exploring and close on a next step.",
    action: "Summarize the decision, owner, and date before the meeting ends.",
    risk: "🔵 Decision Needed",
    survival: "The runway is the last five minutes of the meeting. Use it wisely."
  },
  {
    patterns: ["get our ducks in a row", "ducks in a row"],
    translation: "Organize the prerequisites before moving forward.",
    intent: "Reduce confusion by aligning people, information, and dependencies.",
    action: "List the prerequisites, owners, and missing decisions explicitly.",
    risk: "🟡 Readiness Gap",
    survival: "The ducks are usually approvals, data, owners, and one person unexpectedly on PTO."
  },
  {
    patterns: ["back to the drawing board"],
    translation: "The current approach needs significant rework or a fresh design.",
    intent: "Reset after discovering a fundamental issue.",
    action: "Capture what invalidated the current approach before designing the next one.",
    risk: "🔴 Rework",
    survival: "Before redrawing the board, photograph the lesson."
  },
  {
    patterns: ["raise the bar"],
    translation: "Increase the expected standard of quality, performance, or rigor.",
    intent: "Push the team beyond the current baseline.",
    action: "Ask which measurable standard is changing and how success will be judged.",
    risk: "🟡 Higher Expectation",
    survival: "Bars are easier to raise than budgets."
  },
  {
    patterns: ["game changer", "game-changing"],
    translation: "This is being positioned as something that could materially change the outcome or way of working.",
    intent: "Signal unusually high potential value or impact.",
    action: "Test the claim against measurable benefits, dependencies, adoption effort, and risk.",
    risk: "🟡 Hype Check",
    survival: "Every game changer deserves at least one spreadsheet proving there was a game."
  },
  {
    patterns: ["our north star"],
    translation: "The guiding objective or principle that should anchor decisions.",
    intent: "Create a stable reference point when priorities compete.",
    action: "Translate the north star into measurable decision criteria.",
    risk: "🟢 Strategic Direction",
    survival: "A north star helps only if everyone agrees which sky they are looking at."
  },
  {
    patterns: ["level set", "let's level set", "lets level set"],
    translation: "Make sure everyone starts from the same facts, assumptions, and expectations.",
    intent: "Correct mismatched context before deciding or debating.",
    action: "State the baseline facts, what changed, and what is still uncertain.",
    risk: "🟡 Shared Context",
    survival: "A level set often means at least two people arrived with different maps."
  },
  {
    patterns: ["keep me honest", "keep us honest"],
    translation: "Challenge me if my facts, assumptions, or interpretation are wrong.",
    intent: "Invite correction and reduce blind spots.",
    action: "Validate the claim and speak up if the evidence points elsewhere.",
    risk: "🟢 Challenge Invited",
    survival: "One of the rare corporate phrases that may literally mean what it says."
  },
  {
    patterns: ["let's put a pin in it", "lets put a pin in it"],
    translation: "Pause the topic without losing it.",
    intent: "Keep the current discussion focused while preserving a follow-up item.",
    action: "Write down the item, owner, and trigger for revisiting it.",
    risk: "🟡 Deferred Topic",
    survival: "Invisible pins are called forgotten action items."
  },
  {
    patterns: ["lean in", "lean into this"],
    translation: "Engage more actively and take greater ownership or effort.",
    intent: "Increase participation, commitment, or focus.",
    action: "Clarify what increased engagement looks like in concrete actions.",
    risk: "🟡 More Ownership",
    survival: "No actual change in posture is required."
  },
  {
    patterns: ["pressure test", "pressure-test"],
    translation: "Challenge the idea to find weaknesses before reality does.",
    intent: "Validate assumptions, edge cases, and failure modes.",
    action: "Test the proposal against adverse scenarios, dependencies, and operational constraints.",
    risk: "🟢 Validation",
    survival: "Better for the plan to sweat in the meeting than in production."
  },
  {
    patterns: ["rightsize", "rightsizing"],
    translation: "Adjust resources, scope, or capacity to what is considered appropriate.",
    intent: "Reduce excess or rebalance effort and cost.",
    action: "Ask what baseline and criteria define right before changing capacity.",
    risk: "🟠 Capacity / Cost",
    survival: "Right is doing a lot of work in this sentence."
  },
  {
    patterns: ["air cover", "provide air cover"],
    translation: "Provide senior-level support or protection so the team can move through resistance.",
    intent: "Use sponsorship to remove political or organizational obstacles.",
    action: "Identify the specific decision, blocker, or stakeholder where sponsorship is needed.",
    risk: "🟣 Executive Sponsorship",
    survival: "The problem has probably climbed above the team pay grade."
  },
  {
    patterns: ["runway", "we need runway", "more runway"],
    translation: "We need more time or capacity before reaching a hard constraint.",
    intent: "Create space to execute before funding, deadline, or resource pressure becomes critical.",
    action: "Quantify how much time or capacity is needed and what it enables.",
    risk: "🟠 Time / Capacity",
    survival: "Runway is time wearing an aviation costume."
  },
  {
    patterns: ["thread the needle", "threading the needle"],
    translation: "Find a narrow solution that satisfies competing constraints.",
    intent: "Balance goals that are difficult to achieve simultaneously.",
    action: "Make the competing constraints explicit and show the trade-off being optimized.",
    risk: "🟠 Trade-off",
    survival: "Often heard when everyone wants yes and the constraints voted no."
  },
  {
    patterns: ["yak shaving", "shaving the yak"],
    translation: "A simple task has triggered a long chain of prerequisite work.",
    intent: "Highlight dependency sprawl that is pulling attention away from the original goal.",
    action: "Write the dependency chain and challenge which steps are actually required now.",
    risk: "🟠 Dependency Sprawl",
    survival: "You started by changing a button and somehow ended up configuring DNS."
  },
  {
    patterns: ["rabbit hole", "down the rabbit hole"],
    translation: "The investigation is becoming deeper and more time-consuming than the current objective warrants.",
    intent: "Stop exploration from consuming disproportionate time.",
    action: "Time-box the analysis and define the decision it must support.",
    risk: "🟡 Investigation Sprawl",
    survival: "Every rabbit hole comes with at least three tabs and no clear return route."
  },
  {
    patterns: ["watermelon status", "watermelon project", "watermelon"],
    translation: "The project looks green on the outside but is actually red or troubled underneath.",
    intent: "Criticize status reporting that hides material issues.",
    action: "Use objective health criteria and surface risks before they become deadline surprises.",
    risk: "🔴 Hidden Delivery Risk",
    survival: "Green shell, red center, very expensive fruit salad."
  },
  {
    patterns: ["pre wire", "pre-wire", "prewire"],
    translation: "Speak with key stakeholders before the formal meeting so concerns and support are understood in advance.",
    intent: "Reduce surprises and improve the chance of a productive decision meeting.",
    action: "Meet critical stakeholders individually, test the proposal, and incorporate material concerns before the formal forum.",
    risk: "🟣 Stakeholder Preparation",
    survival: "Some meetings are decided before the calendar invite starts."
  },
  {
    patterns: ["no daylight between us", "no daylight"],
    translation: "We should present a consistent position with no visible disagreement.",
    intent: "Ensure tight alignment before communicating upward or externally.",
    action: "Resolve substantive differences privately before presenting the shared position.",
    risk: "🟣 Executive Alignment",
    survival: "No daylight does not mean no debate; it means debate before the audience arrives."
  },
  {
    patterns: ["blast radius", "what's the blast radius", "whats the blast radius"],
    translation: "How widely could this change or failure affect systems, users, or processes?",
    intent: "Understand potential impact before acting.",
    action: "Map affected services, users, data, dependencies, and rollback boundaries.",
    risk: "🔴 Impact Assessment",
    survival: "Know the radius before discovering it in production."
  },
  {
    patterns: ["steady state", "steady-state"],
    translation: "The solution has moved beyond implementation into stable, repeatable operations.",
    intent: "Define the point where project mode ends and normal operations begin.",
    action: "Confirm support ownership, monitoring, controls, SLAs, and documentation.",
    risk: "🟢 Operational Maturity",
    survival: "Steady state is where project teams discover whether the runbook was aspirational."
  },
  {
    patterns: ["greenfield", "green field"],
    translation: "Build something new without being constrained by an existing implementation.",
    intent: "Explore a cleaner design with fewer legacy dependencies.",
    action: "Plan integration, migration, security, and operations even with the extra freedom.",
    risk: "🟢 New Build",
    survival: "Greenfield becomes brownfield surprisingly quickly after launch."
  },
  {
    patterns: ["brownfield", "brown field"],
    translation: "Change or modernize within an existing environment that already has dependencies and constraints.",
    intent: "Acknowledge that the work cannot ignore legacy reality.",
    action: "Map current dependencies, migration constraints, and coexistence before designing the target state.",
    risk: "🟠 Legacy Constraints",
    survival: "Brownfield is where architecture diagrams meet history."
  },
  {
    patterns: ["lift and shift", "lift-and-shift"],
    translation: "Move the existing solution to a new environment with minimal redesign.",
    intent: "Migrate quickly while deferring deeper modernization.",
    action: "Be explicit about which legacy costs and risks are moving with it.",
    risk: "🟠 Migration Trade-off",
    survival: "Moving the furniture does not remodel the house."
  },
  {
    patterns: ["go no go", "go/no-go"],
    translation: "Make a formal decision whether conditions are sufficient to proceed.",
    intent: "Prevent launch from happening by momentum alone.",
    action: "Use pre-agreed criteria covering testing, risk, dependencies, support, rollback, and approvals.",
    risk: "🔵 Formal Decision",
    survival: "We already scheduled it is not a go criterion."
  },
  {
    patterns: ["hypercare", "hyper care"],
    translation: "Provide elevated monitoring and support immediately after a major release or migration.",
    intent: "Detect and resolve early production issues quickly.",
    action: "Define duration, staffing, metrics, escalation, exit criteria, and handoff to BAU.",
    risk: "🟠 Post-Launch Support",
    survival: "Hypercare without exit criteria becomes regular care with a dramatic name."
  },
  {
    patterns: ["analysis paralysis", "paralysis by analysis"],
    translation: "The team is spending so much time analyzing that a decision is not being made.",
    intent: "Push for a decision with the information already available.",
    action: "Define the minimum evidence needed, decision owner, and deadline.",
    risk: "🔴 Decision Delay",
    survival: "At some point another spreadsheet becomes a symptom."
  },
  {
    patterns: ["moving target", "this is a moving target"],
    translation: "The requirements, facts, or expected outcome are still changing.",
    intent: "Warn that commitments may become invalid as conditions evolve.",
    action: "Baseline what is known now and define how changes will be controlled.",
    risk: "🔴 Requirements Volatility",
    survival: "Estimating a moving target is an excellent way to become unexpectedly athletic."
  },
  {
    patterns: ["moving the goalposts", "goalposts are moving"],
    translation: "The success criteria or expectations are changing after work has already begun.",
    intent: "Flag destabilizing changes in what counts as done.",
    action: "Document the original criteria, the new criteria, and the impact of the change.",
    risk: "🔴 Scope / Expectation Shift",
    survival: "A project cannot score reliably if the field keeps being renovated."
  },
  {
    patterns: ["elephant in the room"],
    translation: "There is an obvious important issue that people are avoiding discussing directly.",
    intent: "Force an uncomfortable but necessary topic into the open.",
    action: "Name the issue neutrally and connect it to the decision that must be made.",
    risk: "🔴 Unspoken Issue",
    survival: "Elephants consume a surprising amount of meeting-room bandwidth."
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
    if (item.patterns.some(pattern => clean.includes(pattern))) {
      return { data: item, source: "dictionary" };
    }
  }

  for (const rule of fallbackRules) {
    if (rule.words.some(word => clean.includes(word))) {
      return { data: rule, source: "rules" };
    }
  }

  return { data: null, source: "ai" };
}

const AI_API_URL = window.CORPORATE_DECODER_AI_URL || "";

async function decodeWithAI(input) {
  if (!AI_API_URL) {
    throw new Error("AI backend is not configured yet.");
  }

  const response = await fetch(AI_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input })
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch {
    // Keep a useful error below if the backend returned non-JSON.
  }

  if (!response.ok) {
    throw new Error(payload.error || `AI decode failed (${response.status}).`);
  }

  return payload;
}

const phraseInput = document.getElementById("phrase");
const translateBtn = document.getElementById("translateBtn");
const result = document.getElementById("result");
const emptyState = document.getElementById("emptyState");
const translation = document.getElementById("translation");
const intent = document.getElementById("intent");
const subtext = document.getElementById("subtext");
const action = document.getElementById("action");
const reply = document.getElementById("reply");
const humor = document.getElementById("humor");
const survival = document.getElementById("survival");
const riskBadge = document.getElementById("riskBadge");
const copyBtn = document.getElementById("copyBtn");
const copyReplyBtn = document.getElementById("copyReplyBtn");
const suggestions = document.getElementById("suggestions");

// Build a searchable list from every dictionary pattern while preserving
// the nicer capitalization used by the curated examples where possible.
const suggestionPhrases = [...new Set(phrases.flatMap(item => item.patterns))]
  .map(text => text.replace(/^let's /, "Let's ")
    .replace(/^lets /, "Let's ")
    .replace(/^can we /, "Can we ")
    .replace(/^could you /, "Could you ")
    .replace(/^we /, "We ")
    .replace(/^i /, "I ")
    .replace(/^just /, "Just ")
    .replace(/^please /, "Please ")
    .replace(/^when /, "When ")
    .replace(/^by /, "By ")
    .replace(/^who /, "Who ")
    .replace(/^what /, "What ")
    .replace(/^any /, "Any ")
    .replace(/^per /, "Per ")
    .replace(/^following /, "Following ")
    .replace(/^friendly /, "Friendly ")
    .replace(/^gentle /, "Gentle "))
  .sort((a, b) => a.localeCompare(b));

let visibleSuggestions = [];
let activeSuggestion = -1;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function scoreSuggestion(phrase, query) {
  const p = normalize(phrase);
  const q = normalize(query);
  if (p === q) return 1000;
  if (p.startsWith(q)) return 800 - (p.length - q.length);
  if (p.includes(q)) return 600 - p.indexOf(q);

  const queryWords = q.split(" ").filter(Boolean);
  const phraseWords = p.split(" ");
  const allWordsMatch = queryWords.every(qw => phraseWords.some(pw => pw.startsWith(qw)));
  return allWordsMatch ? 400 + queryWords.length * 10 : -1;
}

function highlightMatch(phrase, query) {
  const safe = escapeHtml(phrase);
  const q = normalize(query);
  if (!q) return safe;
  const index = normalize(phrase).indexOf(q);
  if (index < 0) return safe;
  const before = escapeHtml(phrase.slice(0, index));
  const match = escapeHtml(phrase.slice(index, index + q.length));
  const after = escapeHtml(phrase.slice(index + q.length));
  return `${before}<mark>${match}</mark>${after}`;
}

function closeSuggestions() {
  suggestions.classList.add("hidden");
  suggestions.innerHTML = "";
  visibleSuggestions = [];
  activeSuggestion = -1;
  phraseInput.setAttribute("aria-expanded", "false");
  phraseInput.removeAttribute("aria-activedescendant");
}

function updateActiveSuggestion() {
  suggestions.querySelectorAll(".suggestion-item").forEach((item, index) => {
    const active = index === activeSuggestion;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active ? "true" : "false");
  });
  if (activeSuggestion >= 0) {
    const id = `suggestion-${activeSuggestion}`;
    phraseInput.setAttribute("aria-activedescendant", id);
    document.getElementById(id)?.scrollIntoView({ block: "nearest" });
  } else {
    phraseInput.removeAttribute("aria-activedescendant");
  }
}

function selectSuggestion(index) {
  const value = visibleSuggestions[index];
  if (!value) return;
  phraseInput.value = value;
  closeSuggestions();
  phraseInput.focus();
  render();
}

function showSuggestions() {
  const query = phraseInput.value.trim();
  if (query.length < 2) {
    closeSuggestions();
    return;
  }

  visibleSuggestions = suggestionPhrases
    .map(phrase => ({ phrase, score: scoreSuggestion(phrase, query) }))
    .filter(item => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.phrase.length - b.phrase.length)
    .slice(0, 6)
    .map(item => item.phrase);

  if (!visibleSuggestions.length) {
    closeSuggestions();
    return;
  }

  activeSuggestion = -1;
  suggestions.innerHTML = visibleSuggestions.map((phrase, index) => `
    <button type="button" class="suggestion-item" id="suggestion-${index}"
      role="option" aria-selected="false" data-index="${index}">
      ${highlightMatch(phrase, query)}
    </button>`).join("");

  suggestions.classList.remove("hidden");
  phraseInput.setAttribute("aria-expanded", "true");

  suggestions.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("mousedown", event => event.preventDefault());
    item.addEventListener("click", () => selectSuggestion(Number(item.dataset.index)));
  });
}

function enrichResult(data) {
  const risk = data.risk || "🟡 Context Needed";
  const label = risk.toLowerCase();
  let subtext = data.subtext;
  let replyText = data.reply;
  let humorText = data.humor;

  if (!subtext) {
    if (label.includes("scope") || label.includes("effort")) subtext = "The request may carry more work, dependency, or timeline impact than the wording makes explicit.";
    else if (label.includes("ownership") || label.includes("decision")) subtext = "Accountability or decision ownership may still need to be made explicit before the work can move safely.";
    else if (label.includes("alignment") || label.includes("ambigu")) subtext = "There may be unresolved assumptions or different expectations that have not yet been stated directly.";
    else subtext = `A possible subtext is that the speaker is trying to ${String(data.intent || "move the conversation forward").replace(/^[A-Z]/, c => c.toLowerCase())}`;
  }

  if (!replyText) {
    if (label.includes("scope") || label.includes("effort")) replyText = "Happy to look at it. Can we confirm what's changing and whether it affects the agreed scope, timeline, effort, or dependencies?";
    else if (label.includes("ownership")) replyText = "Makes sense. Can we confirm the owner, expected outcome, and target date so we have clear accountability?";
    else if (label.includes("alignment") || label.includes("ambigu")) replyText = "Agreed. What specifically do we need to align on, and what decision or input would let us move forward?";
    else replyText = `Understood. To make sure I act on this correctly: ${data.action || "what would you like the next step to be?"}`;
  }

  if (!humorText) {
    if (label.includes("scope")) humorText = "A small change has entered the chat. The project plan has begun updating its résumé.";
    else if (label.includes("alignment")) humorText = "Nothing says alignment quite like scheduling another meeting to define alignment.";
    else if (label.includes("ownership")) humorText = "The task has many supporters and is currently accepting applications for an owner.";
    else humorText = "Corporate translation complete: the sentence was wearing a blazer; we found the T-shirt underneath.";
  }
  return { ...data, subtext, reply: replyText, humor: humorText };
}

function paintResult(rawData) {
  const data = enrichResult(rawData);
  translation.textContent = data.translation;
  intent.textContent = data.intent;
  subtext.textContent = data.subtext;
  action.textContent = data.action;
  reply.textContent = data.reply;
  humor.textContent = data.humor;
  survival.textContent = data.survival;
  riskBadge.textContent = data.risk;
  result.classList.remove("hidden");
  emptyState.classList.add("hidden");
}

function setLoading(isLoading) {
  translateBtn.disabled = isLoading;
  translateBtn.textContent = isLoading ? "Decoding…" : "Translate";
}

async function render() {
  const value = phraseInput.value.trim();
  if (!value) {
    phraseInput.focus();
    return;
  }

  const match = translatePhrase(value);
  if (match.data) {
    paintResult(match.data);
    return;
  }

  setLoading(true);
  result.classList.remove("hidden");
  emptyState.classList.add("hidden");
  riskBadge.textContent = "✨ AI Decode";
  translation.textContent = "Reading between the corporate lines…";
  intent.textContent = "Analyzing the wording and context clues.";
  action.textContent = "Preparing a practical next step.";
  survival.textContent = "One moment — the jargon is being professionally overthought.";

  try {
    const data = await decodeWithAI(value);
    paintResult(data);
  } catch (error) {
    paintResult({
      translation: "This phrase is not in the local dictionary, and the AI decoder is unavailable.",
      intent: "The wording may still be meaningful, but it needs a broader language interpretation.",
      subtext: "There may be useful context in the wording, but the local decoder does not have enough information to interpret it responsibly.",
      action: "Try a dictionary phrase, or check the AI backend configuration.",
      reply: "Could you clarify what you would like me to take away or do next?",
      humor: "The phrase has successfully escaped the corporate dictionary.",
      risk: "🟣 AI Fallback Unavailable",
      survival: error.message || "Even the decoder occasionally needs a quick sync."
    });
  } finally {
    setLoading(false);
  }
}

translateBtn.addEventListener("click", () => {
  closeSuggestions();
  render();
});

phraseInput.addEventListener("input", showSuggestions);
phraseInput.addEventListener("focus", showSuggestions);
phraseInput.addEventListener("keydown", e => {
  if (!suggestions.classList.contains("hidden")) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeSuggestion = Math.min(activeSuggestion + 1, visibleSuggestions.length - 1);
      updateActiveSuggestion();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      activeSuggestion = Math.max(activeSuggestion - 1, 0);
      updateActiveSuggestion();
      return;
    }
    if (e.key === "Escape") {
      closeSuggestions();
      return;
    }
    if (e.key === "Enter" && activeSuggestion >= 0) {
      e.preventDefault();
      selectSuggestion(activeSuggestion);
      return;
    }
  }

  if (e.key === "Enter") {
    closeSuggestions();
    render();
  }
});

document.addEventListener("click", e => {
  if (!e.target.closest(".autocomplete-wrap")) closeSuggestions();
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    phraseInput.value = chip.textContent;
    closeSuggestions();
    render();
  });
});

copyBtn.addEventListener("click", async () => {
  const text = [
    `Corporate phrase: "${phraseInput.value.trim()}"`,
    `Translation: ${translation.textContent}`,
    `Likely intent: ${intent.textContent}`,
    `Read between the lines: ${subtext.textContent}`,
    `Recommended action: ${action.textContent}`,
    `Suggested reply: ${reply.textContent}`,
    `Humorous take: ${humor.textContent}`,
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


copyReplyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(reply.textContent);
    copyReplyBtn.textContent = "Copied!";
    setTimeout(() => copyReplyBtn.textContent = "Copy reply", 1200);
  } catch { copyReplyBtn.textContent = "Copy failed"; }
});
