/* Sample 360° Life Report: one report, three example goals (partner · leaving corporate · purpose).
 * Deep links: sample.html?goal=solo · sample.html?goal=clarity */
(function () {
  const AREAS = ["Physical", "Mental", "Social", "Vocational", "Financial", "Intellectual", "Spiritual"];
  const PARTNER = {"tab": "Finding a partner", "goal": "Find a long-term partner.", "scores": [5, 6, 3, 4, 6, 7, 5], "rows": [["You average 5 h 40 of sleep on weeknights. Short sleep flattens mood and social drive, so weeknight plans feel like a chore and you cancel about 1 in 3.", "Tonight: set a 10:45 pm phone-down alarm and charge your phone outside the bedroom. This week: book one Saturday-morning group run at your nearest Running Room, so your workout doubles as a social plan."], ["Your stress score (PSS-10) peaks while you wait for replies, not before dates. Waiting to hear back drains more of your energy than the dates themselves.", "Before your next date, write down what you'll do if they don't reply within a day: a walk, a call to a friend, the gym. This week: pick your two nights out and protect them, and stop checking messages after 9 pm."], ["8 of your last 10 dates came from apps or bars, where people are choosing for the night, not for a partner. You've rarely been in a room selected for your values.", "This week: buy a ticket to the next AGO First Thursdays and bring one friend who's also single. Follow three Toronto hosts on Luma and RSVP to one dinner. Tell two friends you're open to being set up, and what you're looking for."], ["Your 60-hour weeks aren't fixed by the job. They're the result of never negotiating your hours since your last promotion.", "This week: send your manager a three-line note asking for two fixed 6 pm finishes. Block those two evenings in your calendar as social plans before anything else can take them."], ["Your spending jumps in your most stressful weeks: takeout, rideshares, impulse buys. You're spending to recover from work, which keeps you working more.", "Today: turn on weekly spending alerts in your banking app. This month: open a separate account and move $300 into it for events, classes and dinners, so your social life is funded on purpose."], ["You read about 20 books a year, all about work, and every room you learn in is full of colleagues.", "This week: sign up for one 8-week evening class outside your field, like a George Brown College continuing-education cooking course. New skill, new people, built-in conversation."], ["“Career first” became your core value after a hard breakup at 27. It protects you from rejection, and it's now what keeps partners at a distance.", "Tonight: write your 5 non-negotiables for a partner and for a life together, and reread them before your next date. This month: sign up for one volunteer shift through Volunteer Toronto for a cause you care about."]], "findings": [[["Vocational", "Social", "Mental"], "60-hour weeks push your dating into late-night bars, where you meet people who don't share your ambition. Each mismatch reinforces the belief that the right person doesn't exist."], [["Mental", "Spiritual", "Social"], "A hard breakup made \"career first\" feel safe. It protects you from rejection, and it also keeps partners at a distance."], [["Physical", "Financial", "Vocational"], "Under 6 hours of sleep and stress-spending keep you in a role that demands long hours. Your time problem is partly a money problem."]], "plan": [["Weeks 1–2", "Make room", ["Sleep reset: 7 hours, 5 nights a week", "Two hard stops at 6 pm, blocked in your calendar", "List your five non-negotiables for a partner"]], ["Weeks 3–4", "Get in the right rooms", ["First two curated Luma events, booked", "Ask five trusted friends for one introduction each", "Request company funding for one industry conference"]], ["Weeks 5–8", "Build momentum", ["Two events a week, on autopilot in your calendar", "Apply to one members' club that fits your level", "Debrief each date: what fit, what didn't"]], ["Weeks 9–12", "Lock it in", ["Narrow to the rooms that worked", "Review all 7 areas against your Day-1 scores", "Set your next 90 days"]]]};
  const OTHERS = {
    solo: {
      tab: "Go out on my own",
      goal: "Leave corporate and build my own consultancy.",
      scores: [6, 5, 6, 4, 4, 8, 6],
      findings: [
        [["Financial", "Mental", "Vocational"], "You've never calculated your real runway, so every “what if it fails” thought feels catastrophic. Most of the fear is a missing number."],
        [["Vocational", "Social", "Intellectual"], "Nine in ten people in your network work at your own firm. Nobody outside it knows what you'd sell, so you have no first clients lined up."],
        [["Physical", "Mental", "Vocational"], "55-hour client weeks leave no energy to build after work, so the idea has lived in your notes app for two years."],
      ],
      rows: [
        ["You sleep 6 hours in client weeks and only exercise on weekends. Your evenings go to recovery, not building.", "This week: protect two evenings with a 6:30 pm stop and a 30-minute walk. Use one of them for a 90-minute build block."],
        ["Your biggest fear is failing in public, not the money. You've rehearsed the worst case many times and the likely case never.", "Tonight: write three outcomes (worst, likely, best) and what you'd do in each. Reread it when the fear spikes."],
        ["Your partner supports the idea but hasn't seen any numbers, so every conversation about it turns into worry.", "Every Sunday: a 30-minute “board meeting” with your partner. Runway, pipeline, next step."],
        ["You can describe your skills but not your offer. Three people outside your firm's client list have asked you for help informally, and none were charged.", "This week: write a one-page offer for one problem you've solved ten times, and send it to the three people who already asked."],
        ["Your real monthly burn (mortgage, childcare, living costs and lost benefits, after your partner's income) is $7,800. Your $39,000 in savings covers 5 months; a safe launch needs about 9, or $70,000.", "Today: list every fixed cost in one sheet. From this month, while you're still salaried: move $4,000 a month into a runway account, plus the $3,000 of your own money you'd set aside for a certification. That reaches 9 months of runway in about 7 months. Bring the number to your financial planner to check."],
        ["Your expertise is strong and current. You don't need another course or certification before you start.", "Skip the certification you were going to pay for yourself, and put that $3,000 into your runway instead."],
        ["You want autonomy and to be home for bedtime, but you've never written either down as a decision rule.", "Write three non-negotiables for the business, such as home by 6 pm three nights a week, and test every opportunity against them."],
      ],
      plan: [
        ["Weeks 1–2", "Get your number", ["Fixed-cost sheet and runway target, done", "Runway account opened, first transfer set", "Two protected build evenings a week"]],
        ["Weeks 3–6", "Test before you leap", ["One-page offer sent to three warm contacts", "Two conversations a week with independent consultants", "Contract checked with an employment lawyer; first pilot proposed only where it's allowed"]],
        ["Weeks 7–10", "Make it real", ["First paid project delivered within your employer's rules", "Sunday board meetings with your partner", "Pipeline of five named prospects"]],
        ["Weeks 11–12", "Decide", ["Decision date in your calendar", "Yes if: on track for 9 months of runway and 2 paying clients", "Set your next 90 days"]],
      ],
    },
    clarity: {
      tab: "Decide what I want",
      goal: "Figure out what I actually want next.",
      scores: [6, 5, 7, 5, 7, 6, 3],
      findings: [
        [["Spiritual", "Vocational", "Mental"], "You've never ranked what matters to you, so every new idea feels equally urgent. Five half-started projects are the result, not the cause."],
        [["Intellectual", "Mental"], "You research instead of testing. About 40 hours of reading and personality tests this year, and no small experiments."],
        [["Physical", "Mental"], "Scrolling in bed until 1 am leaves you too tired on weekends to commit to anything."],
      ],
      rows: [
        ["You sleep about 6 hours, with your phone in bed until 1 am. Your best thinking hours go to scrolling.", "Phone out of the bedroom from 11 pm. Saturday 9–11 am becomes your “direction block”."],
        ["You drop a project when it gets hard, then judge yourself for it. That's a pattern, not a character flaw.", "Pick one project and commit to six weeks before you judge it. Write the end date down."],
        ["Strong friendships, but almost everyone is in your industry, so you keep getting the same advice.", "Book two coffees this month with people who've made a change you're curious about."],
        ["You're good at your job but energized by about 20% of it: the workshops and the storytelling.", "Ask to lead one cross-team workshop this quarter, and note your energy afterwards."],
        ["Solid savings, which means you can afford small experiments without real risk.", "Set a $500 experiment budget for the next 90 days."],
        ["Tests and books have told you what type you are, not what to try.", "No new courses for 90 days. Turn the two ideas you keep coming back to into experiments instead."],
        ["Asked what you'd want people to say about you at 50, you answered in ten seconds: “They made things that helped people.” Almost nothing in your week reflects it.", "Write that sentence on a card and score every experiment against it."],
      ],
      plan: [
        ["Weeks 1–2", "Clear the noise", ["Sleep and phone reset", "Every open project listed; all but two paused", "Saturday direction block, booked"]],
        ["Weeks 3–6", "Two experiments", ["Experiment A: teach a four-week evening workshop", "Experiment B: three small freelance storytelling projects", "Weekly energy log for both"]],
        ["Weeks 7–10", "Go deeper on the winner", ["Double down on the experiment that scored higher", "Four coffees with people already doing it", "One public step: a talk, a post, a pitch"]],
        ["Weeks 11–12", "Decide", ["Decision date in your calendar", "Choose by energy, fit with your 50-year sentence, and income potential", "Set your next 90 days"]],
      ],
    },
  };
  OTHERS.solo.tab = "Transitioning out of corporate";
  OTHERS.clarity.tab = "Finding purpose";
  const SAMPLES = { partner: PARTNER, solo: OTHERS.solo, clarity: OTHERS.clarity };
  const $ = (s, r = document) => r.querySelector(s);
  const root = $("#rp"); if (!root) return;
  const tabs = $("#rpTabs");
  tabs.innerHTML = Object.entries(SAMPLES).map(([k, S]) => `<button type="button" role="tab" data-goal="${k}">${S.tab}</button>`).join("");

  function show(key) {
    const S = SAMPLES[key], low = Math.min(...S.scores);
    root.innerHTML = `
      <header class="rp-head"><p class="rp-k mono">Goal</p><h3>${S.goal}</h3></header>
      <section class="rp-sec"><p class="rp-k mono">Your 7 areas · tap one to see why</p>
        <ul class="rp-areas">${S.rows.map(([a, r], i) => `
          <li class="${S.scores[i] === low ? "blind" : ""}"><details><summary><span class="rp-n">${AREAS[i]}</span><i style="--v:${S.scores[i] * 10}%"></i><b class="mono">${S.scores[i]}/10</b>${S.scores[i] === low ? '<em class="mono">Blind spot</em>' : ""}</summary>
            <p><span class="mono">What we found</span>${a}</p><p><span class="mono">What to do</span>${r}</p></details></li>`).join("")}
        </ul></section>
      <section class="rp-sec"><p class="rp-k mono">What's really holding you back</p>
        <ol class="rp-finds">${S.findings.map(([path, t]) => `<li><p class="rp-path mono">${path.join(" → ")}</p><p>${t}</p></li>`).join("")}</ol></section>
      <section class="rp-sec" id="plan"><p class="rp-k mono">Your 90-day plan</p>
        <ol class="rp-plan">${S.plan.map(([when, h, items]) => `<li><p class="mono">${when}</p><h4>${h}</h4><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></li>`).join("")}</ol></section>`;
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b.dataset.goal === key ? "true" : "false"));
  }
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-goal]"); if (!b) return;
    show(b.dataset.goal);
    const u = new URL(location.href); if (b.dataset.goal === "partner") u.searchParams.delete("goal"); else u.searchParams.set("goal", b.dataset.goal);
    history.replaceState(null, "", u);
  });
  const q = new URLSearchParams(location.search).get("goal");
  show(SAMPLES[q] ? q : "partner");
  if (location.hash === "#plan") window.addEventListener("load", () => setTimeout(() => { const p = document.getElementById("plan"); if (p) window.scrollTo({ top: p.getBoundingClientRect().top + scrollY - 90, behavior: "instant" }); }, 60));

  /* "Back to the offer" keeps the visitor's own ad variant */
  const back = document.querySelector('.nav a[href^="index.html"]');
  if (back) { const h = { solo: "solo", clarity: "clarity" }[q] || ""; back.href = `index.html${h ? `?h=${h}` : ""}#offer`; }
})();
