/* Sample 360° Life Report for executives (Nov 6 2026): three example goals (energy · burnout & sleep · weight).
 * Flow: assessment → 360° Life Report → Transformation Plan → referrals to your personalized wellness care team.
 * Deep links: sample.html?goal=burnout · sample.html?goal=weight */
(function () {
  const AREAS = ["Physical", "Mental", "Social", "Vocational", "Financial", "Intellectual", "Spiritual"];
  const SAMPLES = {
    energy: {
      tab: "Energy in the boardroom",
      who: "VP, Operations · 58-hour weeks",
      goal: "Have the energy to lead at my best, all day.",
      scores: [3, 5, 6, 4, 7, 6, 5],
      rows: [
        ["You average 5 h 50 of sleep on weeknights, skip breakfast and have your fourth coffee around 3 p.m. Your afternoon crash is predictable, not a willpower problem.", "This week: caffeine cut-off at 1 p.m., protein within an hour of waking, a 10-minute walk after lunch. Ask your family doctor for routine bloodwork, so a medical cause is ruled out."],
        ["Your stress score (PSS-10) is high, driven by decisions you carry home. You replay meetings in bed.", "Tonight: a 5-minute shutdown note with your open loops and tomorrow's first move. Then the laptop stays closed."],
        ["You haven't had a dinner outside work in five weeks. The people who refuel you are the first thing you cancel.", "Book one standing dinner a month with two friends, in your calendar before work can take it."],
        ["41% of your week is back-to-back meetings, so your real work starts after 8 p.m. Your best energy hours go to meetings that don't need you.", "This week: drop or delegate three recurring meetings. Block 8–10 a.m. twice a week for strategic work."],
        ["Your finances are solid. Money isn't the bottleneck, which means you can buy help instead of grinding.", "Set a yearly performance budget for your care team, the way you would for any key hire."],
        ["About 2 hours a day of news and podcasts, mostly in the gaps where your brain should recover.", "Three days a week, swap the commute podcast for silence or a walk."],
        ["You can't say what this role is building toward beyond the next promotion, so every hard week feels like pure cost.", "Write one sentence for what you want your tenure here to stand for. Reread it every Friday."],
      ],
      findings: [
        [["Vocational", "Physical", "Mental"], "Back-to-back meetings push your real work past 8 p.m. That cuts your sleep, and short sleep drives the 3 p.m. crash. Your energy problem starts in your calendar."],
        [["Physical", "Mental"], "Late caffeine hides the fatigue and fragments your sleep, so you wake up tired and reach for more."],
        [["Social", "Spiritual", "Mental"], "You've cut everything that refuels you to protect work time, so work now runs on an empty tank."],
      ],
      plan: [
        ["Phase 1", "Fix the foundation", ["Sleep window: 7 hours, 5 nights a week", "Caffeine cut-off at 1 p.m.", "Bloodwork booked with your family doctor"]],
        ["Phase 2", "Take back your calendar", ["Three recurring meetings dropped or delegated", "Two morning deep-work blocks a week", "Hard stop at 7 p.m., three nights a week"]],
        ["Phase 3", "Build your team", ["Discovery calls with your matched providers", "Training sessions booked at 7 a.m.", "Meals planned around your meeting days"]],
        ["Phase 4", "Lock it in", ["Re-score all 7 areas against day one", "Keep what worked, drop what didn't", "Set your next goal"]],
      ],
      team: [
        ["Registered dietitian", "Physical", "Builds how you eat around your meetings and travel, so your energy holds past 3 p.m."],
        ["Personal trainer", "Physical", "Three 30-minute sessions a week, before your first meeting."],
        ["Executive coach", "Vocational", "Redesigns your calendar and what you delegate."],
        ["Therapist (CBT for sleep)", "Mental", "Only if your sleep hasn't improved after Phase 1."],
      ],
    },
    burnout: {
      tab: "Burnout and sleep",
      who: "Managing Director · on call across time zones",
      goal: "Sleep through the night and lead without burning out.",
      scores: [4, 3, 5, 4, 6, 6, 4],
      rows: [
        ["You fall asleep fast but wake at 3 a.m. most nights, and check your phone. Weekends are spent recovering, not living.", "Phone charges outside the bedroom from tonight. Same wake time 7 days a week, even after a bad night."],
        ["Your burnout screen shows high exhaustion and growing cynicism about work you used to love. You feel it most on Sunday evenings.", "This week: write down the three parts of your job that drain you most. Bring the list to your coach and your therapist."],
        ["Your partner says they get “what's left of you”. You want to be present, but you're never fully off.", "Two evenings a week with no devices after 7 p.m., agreed with your partner and in your calendar."],
        ["You answer messages from three time zones, with no protected hours. Every evening is a possible work evening.", "Set office hours for each time zone and an auto-reply after 7 p.m. Name a deputy for urgent calls."],
        ["Income is strong, but spending rises in your worst weeks: takeout, upgrades, impulse buys. You're spending to recover.", "Turn on weekly spending alerts. Put that money toward the help that actually restores you."],
        ["You've stopped reading anything that isn't for work. Nothing in your week is just for you.", "One hour every Saturday for something you're learning only because you enjoy it."],
        ["Asked why you do this work, you paused for a long time. The meaning that drove you has gone quiet.", "Write down the moment in your career you were proudest of, and what made it matter. Use it to choose what to say no to."],
      ],
      findings: [
        [["Vocational", "Physical", "Mental"], "No protected hours means your brain never fully stands down. The 3 a.m. wake-ups are your work, still running."],
        [["Mental", "Social"], "Exhaustion turned into cynicism, and cynicism is now leaking into your home life. That's the stage where burnout gets expensive."],
        [["Spiritual", "Vocational"], "You've lost touch with why you do this, so every demand feels equal. Without a filter, you can't say no."],
      ],
      plan: [
        ["Phase 1", "Stop the bleeding", ["Phone out of the bedroom", "Same wake time, 7 days a week", "Office hours and a deputy, set"]],
        ["Phase 2", "Recover", ["Two device-free evenings a week", "First sessions with your therapist", "One restoring activity every Saturday"]],
        ["Phase 3", "Redesign the role", ["Coach sessions: what to keep, delegate, drop", "A clear no-list, written", "Travel and time zones re-planned"]],
        ["Phase 4", "Lock it in", ["Re-score all 7 areas against day one", "Burnout screen repeated", "Set your next goal"]],
      ],
      team: [
        ["Therapist (CBT for sleep and burnout)", "Mental", "Treats the 3 a.m. wake-ups and the stress behind them, with an approach built for sleep."],
        ["Executive coach", "Vocational", "Helps you redesign your role, your no-list and your boundaries."],
        ["Registered massage therapist", "Physical", "A weekly reset for the tension you carry."],
        ["Couples counsellor", "Social", "Only if you and your partner want help reconnecting."],
      ],
    },
    weight: {
      tab: "Weight on a packed calendar",
      who: "Partner, law firm · 2 business trips a month",
      goal: "Lose 15 pounds without losing time at work.",
      scores: [3, 5, 6, 4, 7, 6, 6],
      rows: [
        ["You train hard twice a week, then miss two weeks when travel hits. Most of your calories come after 8 p.m., at client dinners and at your desk.", "Two 30-minute sessions a week you can do anywhere, including a hotel gym. Your dietitian sets a simple rule for client dinners."],
        ["You eat to decompress after hard days. The urge peaks around 9 p.m., when the work finally stops.", "Notice it for one week: what happened in the hour before each late snack. Bring the notes to your dietitian."],
        ["Every social plan you have is a dinner or drinks. Food and alcohol are how you connect.", "Swap one dinner a month for a walk, a game or a class with the same people."],
        ["Two trips a month and late client dinners break every routine you start. Your plans assume a normal week you rarely have.", "Plan for your real week: a travel version of your routine, not just a home version."],
        ["You're spending on gym memberships you don't use and meal kits that go to waste.", "Cancel what you don't use. Put the money toward a trainer who comes to you."],
        ["You know the nutrition. Knowledge isn't the gap. Structure and support are.", "No new diet books. Your dietitian's plan is the only plan."],
        ["You want to be the parent who keeps up with your kids at 60. Nothing in your week says so yet.", "Put that sentence on your phone's lock screen. It's your reason on the hard weeks."],
      ],
      findings: [
        [["Vocational", "Physical"], "Your plans fail on travel weeks because they were built for a home week. The weight problem is a scheduling problem."],
        [["Mental", "Physical"], "Late eating is how you come down from the day. Taking it away without replacing it won't last."],
        [["Social", "Physical"], "Every plan with people is built around food and drinks, so connecting and eating well keep competing."],
      ],
      plan: [
        ["Phase 1", "Design for your real week", ["Home and travel versions of your routine", "Two 30-minute sessions a week, booked", "Unused memberships cancelled"]],
        ["Phase 2", "Fix the evenings", ["A wind-down that replaces late snacking", "A client-dinner rule from your dietitian", "One food-free social plan a month"]],
        ["Phase 3", "Build your team", ["Discovery calls with your matched providers", "Trainer sessions, including on the road", "Monthly check-in with your dietitian"]],
        ["Phase 4", "Lock it in", ["Re-score all 7 areas against day one", "Keep what worked on travel weeks", "Set your next goal"]],
      ],
      team: [
        ["Registered dietitian", "Physical", "A plan that works at client dinners, in airports and at your desk."],
        ["Personal trainer", "Physical", "Short sessions you can do at home or in a hotel gym."],
        ["Sports medicine physician", "Physical", "Checks your knees and back before you train harder."],
        ["Therapist", "Mental", "Only if stress eating doesn't ease once your evenings change."],
      ],
    },
  };
  const $ = (s, r = document) => r.querySelector(s);
  const root = $("#rp"); if (!root) return;
  const tabs = $("#rpTabs");
  tabs.innerHTML = Object.entries(SAMPLES).map(([k, S]) => `<button type="button" role="tab" data-goal="${k}">${S.tab}</button>`).join("");

  function show(key) {
    const S = SAMPLES[key], low = Math.min(...S.scores);
    root.innerHTML = `
      <header class="rp-head"><p class="rp-k mono">Goal · ${S.who}</p><h3>${S.goal}</h3></header>
      <section class="rp-sec"><p class="rp-k mono">Your 7 areas · tap one to see why</p>
        <ul class="rp-areas">${S.rows.map(([a, r], i) => `
          <li class="${S.scores[i] === low ? "blind" : ""}"><details><summary><span class="rp-n">${AREAS[i]}</span><i style="--v:${S.scores[i] * 10}%"></i><b class="mono">${S.scores[i]}/10</b>${S.scores[i] === low ? '<em class="mono">Blind spot</em>' : ""}</summary>
            <p><span class="mono">What we found</span>${a}</p><p><span class="mono">What to tweak</span>${r}</p></details></li>`).join("")}
        </ul></section>
      <section class="rp-sec"><p class="rp-k mono">What's really holding your performance back</p>
        <ol class="rp-finds">${S.findings.map(([path, t]) => `<li><p class="rp-path mono">${path.join(" → ")}</p><p>${t}</p></li>`).join("")}</ol></section>
      <section class="rp-sec" id="plan"><p class="rp-k mono">Your transformation plan</p>
        <ol class="rp-plan">${S.plan.map(([when, h, items]) => `<li><p class="mono">${when}</p><h4>${h}</h4><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></li>`).join("")}</ol></section>
      <section class="rp-sec" id="team"><p class="rp-k mono">Your personalized wellness care team · Toronto referrals</p>
        <ol class="rp-finds">${S.team.map(([role, area, why]) => `<li><p class="rp-path mono">${area} · ${role}</p><p>${why}</p></li>`).join("")}</ol>
        <p class="rp-note mono">Vetted, licensed providers. You choose who joins, and each one bills you directly.</p></section>`;
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b.dataset.goal === key ? "true" : "false"));
  }
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-goal]"); if (!b) return;
    show(b.dataset.goal);
    const u = new URL(location.href); if (b.dataset.goal === "energy") u.searchParams.delete("goal"); else u.searchParams.set("goal", b.dataset.goal);
    history.replaceState(null, "", u);
  });
  const q = new URLSearchParams(location.search).get("goal");
  show(SAMPLES[q] ? q : "energy");
  if (location.hash === "#plan" || location.hash === "#team") window.addEventListener("load", () => setTimeout(() => { const p = document.getElementById(location.hash.slice(1)); if (p) window.scrollTo({ top: p.getBoundingClientRect().top + scrollY - 90, behavior: "instant" }); }, 60));

  /* "Back to the offer" lands on the offer */
  const back = document.querySelector('.nav a[href^="index.html"]');
  if (back) back.href = "index.html#offer";
})();
