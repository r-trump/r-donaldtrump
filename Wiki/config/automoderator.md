[//]:# 'Dev'

[//]:# '### **Links:**'
[//]:# ''
[//]:# '// Reddit Writing Automod Rules Guide'
[//]:# ''
[//]:# '// https://www.reddit.com/wiki/automoderator/writing-basic-rules'
[//]:# '// Reddit Full Automoderator Docs'
[//]:# ''
[//]:# '// https://www.reddit.com/wiki/automoderator/full-documentation'

[//]:# 'Dev'

[//]:# '[config/automoderator](https://www.reddit.com/r/donaldtrump/wiki/revisions/config/automoderator)'

-----

# Versioning

### History

- The [/r/donaldtrump](reddit.com/r/donaldtrump), automod. Has a long history of development. 
- Across separate"DOM"-reddits, over the past 4 yrs~.

Initial Commit 

[2016-02-12_223837 GMT-0600](https://raw.githubusercontent.com/r-trump/bin/master/Media%20Storage/2020-10-12%20automoderator-historic-reference.png)



### start
**>>>> automoderator Start <<<<**

```text

# Structure:
# I.   USER FILTERS/APPROVALS    - Rules which deserve special treatment
# II.  REPORT   - Rules resulting in a report
# III. FILTER   - Rules resulting in a filter
# IV.  REMOVE   - Rules resulting in a removal
# V.  DOXX ALERTS   - Reports and Filters for Doxxing Alters
# VI. AUTO FLAIRS   - Auto Flairing for specific sources or users
# VIa. AUTO FLAIRS - APPROVED USERS & MEME WARRIORS   - Auto Flairing for Approved User and Meme Warriors
# VII. SET STATE FLAIR   - Automod setting state flag flair on commands
# VIII. OLD SUBMISSION REPORTS - Currently Not In Use

---


##################################################
## SEC. I. USER FILTERS/APPROVALS
##################################################

#-------------------
# TDS Flair Evasion Shadowban
#-------------------

type: any
author:
    name: [dontcare2342, FatherSun, dt114229, thinktones, knightshade2, BingoJangoJango, Nimetzche, BingoJangoJango, EnemysKiller, DougBader, senorvato, DougBader, Graphiction, Superpede2020, PieckIsExactlyRight, timelighter, alpha-turd, IDK_SoundsRight, Opposite_Opposition, djeckhart, ThnderGunExprs, VoidEndless, BobsBarker12, notubutme_, ListenItWillHear, GarethBullsey, M_A_G_A_2020]
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
action: report
action_reason: Flair Evasion
action: remove
message: |

    Flair evasion is not permitted.  Post removed.

---
#-------------------
# Shadowbanned - Remove
#-------------------

type: any
author:
   name: [TotesMessenger, candyboxradio, MrElliottBroidy]
action: remove
action_reason: '/u/{{author}} is shadowbanned by r/DonaldTrump'

---
#-------------------
# TDS Topic Post Removal
#-------------------

type: submission
moderators_exempt: true
author:
    flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
action: remove

---
#-------------------
# TDS Live Discussion Removal
#-------------------

type: comment
parent_submission:
    discussion_type: chat
author:
    flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
action: remove

---
#-------------------
# TDS AMA Removal
#-------------------

type: comment
parent_submission:
    flair_template_id: f3cf88f2-a8e5-11ea-94c5-0ebfb0f0353b
author:
    flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
action: remove

---
#-------------------
# TDS Country CLub Removal
#-------------------

type: comment
parent_submission:
    flair_template_id: c8f4ca30-0c21-11eb-b589-0ec51c272029
author:
    flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
action: remove

---
#-------------------
# TDS Live Discussion Removal - Primative pre-converter
#-------------------

type: comment
parent_submission:
    discussion_type: chat
author:
    flair_text: "TDS"
action: remove

---
#-------------------
# TDS AMA Removal - Primative pre-converter
#-------------------

type: comment
parent_submission:
    flair_template_id: 1c4d8a5e-8e2e-11ea-86ed-0e5dd9a3298f
author:
    flair_text: "TDS"
action: remove

---
#-------------------
# TDS Topic Post Removal - Primative pre-converter
#-------------------

type: submission
moderators_exempt: true
author:
    flair_text: "TDS"
action: remove

---
#-------------------
# TDS Flair Converter 1
#-------------------

type: any
author:
    flair_text: "TDS"
    set_flair:
        text: ":TrumpDerangementSyndrome: TDS"
        template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    overwrite_flair: true
action: remove

---
#-------------------
# TDS Flair Converter 2
#-------------------

type: any
author:
    flair_text: ":TrumpDerangementSyndrome:"
    set_flair:
        text: ":TrumpDerangementSyndrome: TDS"
        template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    overwrite_flair: true
action: remove

---
#-------------------
# TDS Flair Converter 3
#-------------------

type: any
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    flair_text: ":TrumpDerangementSyndrome: TDS"
    set_flair:
        text: ":TrumpDerangementSyndrome: TDS"
        template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    overwrite_flair: true
action: remove

---
#-------------------
# Post Submission Disclaimer
#-------------------

type: submission
~discussion_type: chat
comment_stickied: true
comment_locked: true
comment: |

    **Register & Vote NOW!:**

    [Secure Your Vote](https://vote.donaldjtrump.com) / [Register](https://vote.gov) / [State Election Info](https://www.usa.gov/election-office) / [Voting Info Wiki](https://www.reddit.com/r/DonaldTrump/wiki/vote)

    **Get Involved:**

    [Donate](https://secure.winred.com/team/facfd710-reddit-trump) / [Digital Army](https://www.armyfortrump.com/) / [Knock & Call Locally](https://trumpvictory.com/) / [Trump App](https://share.djt.app/dfIGmNVEV5) / [Trump Store](https://shop.donaldjtrump.com/)

    **Exclusive r**/**DonaldTrump Features:**

    [Wiki](/r/DonaldTrump/wiki/donaldtrump) / [Full 2nd Term Agenda](/r/donaldtrump/wiki/2nd_term_agenda) / [Top 45 Accomplishments](/r/donaldtrump/wiki/top_45) / [State Endorsements](/r/donaldtrump/wiki/states)

    Make sure to set your [State Flag User Flair](https://www.reddit.com/r/DonaldTrump/wiki/set_flair) and join our [Discord Chat](https://discord.gg/Trump2020)!
---
#---------------------
# Mod Removal Auto-Lock
#---------------------

moderators_exempt: false
type: comment
author:
    is_moderator: true
body (includes, regex): ['In response, the moderators of r/DonaldTrump have removed your post.', ]
set_locked: true

---
#-------------------
# /u/American_Prosperity Twitter Filter
#-------------------

type: submission
author:
    name: "American_Prosperity"
moderators_exempt: false
domain: twitter.com
action: remove

---
#-------------------
# /u/Executive-News Whitehouse Remarks Filter
#-------------------

type: submission
author:
    name: "Executive-News"
moderators_exempt: false
title (regex, includes): ['^Remarks', '^Readout', '^Press Briefing', 'to Nominate', 'Nominations', 'Bill Announcement', 'Disaster Declaration', 'Emergency Declaration', 'Anniversary of']
domain: whitehouse.gov
action: remove

---
#-------------------
# /u/American_Greatness Real News & Team Trump DJT site Filter
#-------------------

type: submission
author:
    name: "American_Greatness"
moderators_exempt: false
title (regex, includes): ['^Real News', '^Watch']
domain: donaldjtrump.com
action: remove

---
#-------------------
# /u/The_PartyOfLions Filter
#-------------------

type: submission
author:
    name: "The_PartyOfLions"
moderators_exempt: false
domain (regex, includes): ['twitter.com', 'donaldjtrump.com', 'bit.ly', 'whitehouse.gov', 'pscp.tv']
action: remove

---
#-------------------
# /u/The_PartyOfLions White House Filter
#-------------------

type: submission
author:
    name: "The_PartyOfLions"
moderators_exempt: false
domain: [youtube.com, youtu.be]
media_author: ["The White House", "Donald J Trump"]
action: remove

---
#-------------------
# Various Posters - Non-Trump Filter
#-------------------

type: submission
author:
    name: [RAFVehicleTech, RiseOfTheRightSide, Ricky_Steamboat, FreeSpeechism]
~title+body (regex, includes): ['\bTrump\b', '\bWhitehouse\b', '\bPresident\b', '\bMAGA\b', '\bAmerica First\b', '\bDeep State\b']
action: remove

---
#-------------------
# Beto bot comment
#-------------------

title+body (regex, includes): ['\bBeto\b']
action: approve
comment: |
    [Do you mean Robert Francis O'Rourke?](https://youtu.be/xLV10hiXU2U)

---
#-------------------
# EMERGENCY TDS FLAIR CONVERTER 1
#-------------------

type: any
author:
    flair_template_id: 194f1672-6a5e-11ea-aed3-0e78124dd915
    set_flair:
        text: ":TrumpDerangementSyndrome: TDS"
        template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    overwrite_flair: true

---
#-------------------
# EMERGENCY TDS FLAIR CONVERTER 2
#-------------------

type: any
author:
    flair_text: ":TrumpDerangementSyndrome: TDS"
    set_flair:
        text: ":TrumpDerangementSyndrome: TDS"
        template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    overwrite_flair: true

---
#-------------------
# TDS Topic Post Removal - Old Flair
#-------------------

type: submission
moderators_exempt: true
author:
    flair_template_id: 194f1672-6a5e-11ea-aed3-0e78124dd915
action: remove

---
#-------------------
# TDS Live Discussion Removal - Old Flair
#-------------------

type: comment
parent_submission:
    discussion_type: chat
author:
    flair_template_id: 194f1672-6a5e-11ea-aed3-0e78124dd915
action: remove

---
#-------------------
# TDS AMA Removal - Old Flair
#-------------------

type: comment
parent_submission:
    flair_template_id: 1c4d8a5e-8e2e-11ea-86ed-0e5dd9a3298f
author:
    flair_template_id: 194f1672-6a5e-11ea-aed3-0e78124dd915
action: remove

---
#-------------------
# Alert Users of Reddit Shadowbanned URLs
#-------------------

type: any
domain+body+title (regex, includes): ['\bthedonald.win\b', '\bbitchute.com\b']
action: remove
message: |

    Your {{kind}} included a link URL which is shadowbanned and unable to be manually approved by the r/DonaldTrump Moderators.  Please re-submit without a different link.

---


##################################################
## SEC. II.  REPORT
##################################################


---
#---------------------
# Report All New Topics
#---------------------

type: submission
author:
    is_contributor: false
    is_moderator: false
action: report
action_reason: New Post/Topic - Approve if it follows all rules.

---
#---------------------
# Slur/Racism report - no removal, but needs review (removal in "filter" section)
#---------------------

moderators_exempt: true
author:
    is_contributor: false
title+body (includes, regex): ['tr[a4]nny', 'H[3e][1i]l', '\bn[a4]gg[e3]rs\b', '\bg[o0]y([i1]m|s)\b', '\br[a4]c[e3]\sw[a4]r\b', '\bz[o0]gg\b', ' 1488 ', ' 8814 ' ,' 8841 ', 'ch[i1]nk', 'w[1i]ll.n[0o]t.r[3e]pl[4a@]c[3e].us', '\bch[i1]mp.[o0]ut\b', '\bch[i1]mp[o0]ut\b', 'wh[i1]t[e3].pr[i1]d[e3]', '\bg[o0]y\b', '\bg[o0]y([i1]m)\b', '\bk[4a@]ng[sz]\b', 'gr[e3][a4@]t.r[e3]pl[a4@]c[e3]m[e3]nt', '\brace.?war\b', '\bgoose.?steps?\b', '\bJIDF\b', '\bjoos?\b', '\bjooz\b', '\bH( )?H\b', '✡', '\bu.?s.?s.? liberty\b', '\b[a4@]t[o0]mw[a4@]ff[e3]n\b', '\b[I1]sr[a4@][e3]l.F[i1]rst\b', '\bm[a4@]n[i1]f[e3]st[o0]\b', '\bwhite.?civil.?rights\b', '\bcharlott?esville\b', '\bunite.?the.?right\b', 'sperg']
action: report
action_reason: Possible Slurring/Racism or related Issue - {{match}}

---
#-------------------
# Possible invitement of violence - QUARANTINE HIGH LEVEL ALERT
#-------------------

title+body (regex, includes): ['k[i1]ll (h[i1]m|h[e3]r|th[e3]m|[e3]m)', ' (sh[o0][o0]t|h[a4@]ng|st[a4@]b|su[i1]c[i1]d[e3]|[a4@]ss[a4@]ss[i1]n[a4@]t[e3])\s(h[i1]m|h[e3]r|th[e3]m|th[e3] tr[a4@][i1]t[o0]r|[e3]m)\b', ' h[e3]l[i1]c[o0]pt[e3]r r[i1]d[e3]', ' t[a4@]rg[e3]t pr[a4@]ct[i1]c[e3] ', ' t[a4@]r [a4@]nd f[e3][a4@]th[e3]r ', ' [e3]r[a4@]d[i1]c[a4@]t([e3]|[e3]d) ', ' punch[a4@]bl[e3] ',' punch [a4@] n[a4@]z[i1] ', ' (k[i1]ll|d[e3][a4@]th\st[o0]).{1,20} k[e3]b[a4@]b ', ' d[e3][a4@]th t[o0] ', '(h[i1]s|h[e3]r|th[e3][i1]r) c[o0]rps[e3]', ' kys ', 'k[i1]ll y[o0]urs[e3]lf', 'p[i1]p[e3] b[o0]mb', '(y[o0]u|h[e3]|sh[e3]|th[e3]y|th[e3]m|trump) d[i1][e3]', 'sh[o0][o0]t y[o0]u ', 'h[o0]p[e3] (y[o0]u|th[e3]y|h[e3]|sh[e3]) g[e3]t', 'C[i1]v[i1]l.w[a4@]r', 'c[a4@]ll.t[o0].[a4@]rms', 'tr[e3][e3].[o0]f.l[i1]b[e3]rty.must', 'b[o0][o0]g[a4@]l[o0][o0]'] 
action: report
report_reason: "Possible incitement of violence - please check (QUARANTINE HIGH LEVEL ALERT): {{match}}"

---
#-------------------
# Possible sexually suggestive material - QUARANTINE HIGH LEVEL ALERT
#-------------------

title+body (regex, includes): ['fuc(k|ks) ch[i1]ldr[e3]n', 's[e3]x tr[a4@]ff[i1]c(k|k[e3]r|k[i1]ng)', 'tr[a4@]ff[i1]c(k|k[i1]ng) m[i1]n[o0](r|rs)'] 
action: report
report_reason: "Possible sexually suggestive content - please check  (QUARANTINE HIGH LEVEL ALERT): {{match}}"

---
#-------------------
# Possible TDS Flair Need
#-------------------

title+body (regex, includes): ['trumpt[a4@]rd', '\bcult\b', 'cult45', 'd[o0]t[a4@]rd', ' trumpsuck[e3]r', 'drumpft', '[a4@]g[e3]nt.?[o0]r[a4@]ng[e3]', 'ch[e3][e3]t[o0]', ' Trumpst[e3]r', ' Trump[e3](r|t)', ' Trump[a4@]nz[e3]', 'Trump[i1]sm', 'D[e3][a4]r.?L[e3][a4]d[e3]r', 'supr[e3]m[e3].?L[e3][a4]d[e3]r', 'b[o0]n[e3].?spurs'] 
~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
moderators_exempt: true
author:
    is_contributor: false
action: report
report_reason: "Check if in need of TDS - Trump Derangement Syndrome - Flair (and downvotes): {{match}}"

---
#-------------------
# Mod Mention Alert
#-------------------

moderators_exempt: true
author:
    is_contributor: false
title+body (includes, regex): ['m[o0]d ', 'm[o0]d[e3]r[a4]t[o0]rs', 'm[o0]ds ', 'm[o0]d[e3]r[a4]t[o0]r'] 
action: report
report_reason: 'The above {{kind}} by /u/{{author}} has mentioned " {{match}} ".  Please check to see that Moderator action is not required.'

---
#-------------------
# Admin Mention Alert - Check for harassing behavior, calls to violence, or sexually suggestive comments.
#-------------------

moderators_exempt: true
author:
    is_contributor: false
title+body (includes, regex): ['[a4]dm[i1]n ', '[a4]dm[i1]ns ', '[a4]dm[i1]n[i1]str[4a]t[o0]rs'] 
~title+body (includes, regex): ['Trump Admin', 'Administration'] 
action: report
report_reason: 'The above {{kind}} by /u/{{author}} has mentioned " {{match}} ".  Please check to see that Reddit Content Policy is not being violated in direction to Reddit Admins.'

---
#-------------------
# Review external link material
#-------------------

type: comment
domain+url+title+body(regex, includes): ['scribd.com', 'liveleak.com', 'pastebin.com', 'youtube.com', 'imgur.com', 'youtu.be']
moderators_exempt: true
author:
    is_contributor: false
action: report
action_reason: 'Review external link material: {{match}}'

---
#-------------------
# Review links to reddit users (user mentions)
#-------------------

url+body+title (regex, includes): ['(reddit\.com)/?\bu(ser)?/', '(reddit\.com)/?\bu(ser)?/', ' u(ser)/']
~url+body+title (regex, includes): ['u/nwordcountbot', 'u/SaveThisVideo', 'u/redditDownloader', 'u/redditdownloader', 'u/RemindMeBot', 'u/nBob20', 'u/WarOfTheFanboys', 'u/vlad_putin_the_slav', 'u/jamesgalb', 'u/ToeKneeh', 'u/lBeerFartsl', 'u/lebronsuxatballs', 'u/jessicarae28382', 'u/lets_shake_hands', 'u/popsmokeimout', 'u/AbsolutelyZeroLife', 'u/meektakeL', 'u/Wirerat', 'u/SendWhiskey', 'u/JrodManU', 'u/Gringo_Please', 'u/MoonfireArt', 'u/Redditthedog', 'u/ManateeRawr', 'u/GuthixIsBalance', 'u/AddictedReddit', 'u/Rebbattt', 'u/SirSeizureSalad', 'u/NPC9756346', 'u/Fllooss', 'u/Bigfoot_lol',  'u/L0rdOfBac0n', 'u/Patriotic2020', 'u/DamienWright', 'u/MemeWarriors', 'u/American_Greatness', 'u/American_Prosperity', 'u/Executive-News', 'u/Republican_News', 'u/The_PartyOfLions', 'u/TranqToTheJug',]
moderators_exempt: true
author:
    is_contributor: false
parent_submission:
    ~discussion_type: chat
action: remove
message: |

    **The following is an automated message:**

    Your post was removed for not following these community and/or Reddit rule(s):

    - 8. No Reddit Drama/Meta or Brigading

    > No linking to outside subreddits, linking to usernames, or posting topics about other reddit drama or bans.  Also no linking to outside sources, or to /r/DonaldTrump from outside sources, with the intentions to harass or influence a target.

    In response, the moderators of r/DonaldTrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/DonaldTrump rules, feel free to post again.

---
#-------------------
# Review links to reddit users (Live Discussion)
#-------------------

url+body+title (regex, includes): ['(reddit\.com)/?\bu(ser)?/', '(reddit\.com)/?\bu(ser)?/', ' u(ser)/']
~url+body+title (regex, includes): ['u/nwordcountbot', 'u/VredditDownloader', 'u/RemindMeBot', 'u/nBob20', 'u/WarOfTheFanboys', 'u/vlad_putin_the_slav', 'u/jamesgalb', 'u/ToeKneeh', 'u/lBeerFartsl', 'u/lebronsuxatballs', 'u/jessicarae28382', 'u/lets_shake_hands', 'u/popsmokeimout', 'u/AbsolutelyZeroLife', 'u/meektakeL', 'u/Wirerat', 'u/SendWhiskey', 'u/JrodManU', 'u/Gringo_Please', 'u/MoonfireArt', 'u/Redditthedog', 'u/thelonehamster', 'u/ManateeRawr', 'u/GuthixIsBalance', 'u/AddictedReddit', 'u/Rebbattt', 'u/SirSeizureSalad', 'u/NPC9756346', 'u/Fllooss', 'u/Bigfoot_lol', 'u/Cindjor', 'u/L0rdOfBac0', 'u/Patriotic2020', 'u/DamienWright', 'u/-Howitzer-', 'u/MemeWarriors', 'u/American_Greatness', 'u/American_Prosperity', 'u/Executive-News', 'u/Republican_News', 'u/The_PartyOfLions', 'u/TranqToTheJug', 'u/maymaylife ']
moderators_exempt: true
author:
    is_contributor: false
parent_submission:
    discussion_type: chat
action: remove
message: |

    **The following is an automated message:**

    Your post was removed for not following these community and/or Reddit rule(s):

    - 8. No Reddit Drama/Meta or Brigading

    > No linking to outside subreddits, linking to usernames, or posting topics about other reddit drama or bans.  Also no linking to outside sources, or to /r/DonaldTrump from outside sources, with the intentions to harass or influence a target.

    In response, the moderators of r/DonaldTrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/DonaldTrump rules, feel free to post again.

---
#-------------------
# report filter for hebrew
#-------------------

type: any
body+title (includes): ['א','ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'ך', 'כ', 'ל', 'ם', 'מ', 'ן', 'ס', 'נ', 'ע', 'ף', 'פ', 'ץ', 'צ', 'ק', 'ר', 'ש', 'ת', 'װ', 'ױ', 'ײ']
moderators_exempt: true
action: report
action_reason: 'Translate and review'

---
#-------------------
# report filter for arabic
#-------------------

domain+url+title+body(regex, includes): ['\b(لا|يوجد|اي|هدف|لهذا|النص|الا|نشر|الرعب|في|نفوس|من|يهاب|اللغة|العربية)\b']
action: report
action_reason: 'Translate and review'
  
---


##################################################
## SEC. III. FILTER
##################################################


---
#-------------------
# None-Standard Top Level Domain Topics
#-------------------

type: submission
~discussion_type: chat
moderators_exempt: false
~domain (ends-with): [.com, .net, .org, .gov, .mil, .edu, youtu.be, redd.it, t.co, self.donaldtrump, archive.fo, archive.is, .co.uk, .ca, worldometers.info, fullmeasure.news, pscp.tv, banned.video, discord.gg, apple.news]
action: filter
action_reason: 'Non-Standard Top Level Domain.  Check for rule violations before approving - (High Quarantine Alart)'
comment_stickied: true
comment_locked: true
comment: |

    **Register & Vote NOW!:**

    [Secure Your Vote](https://vote.donaldjtrump.com) / [Register](https://vote.gov) / [State Election Info](https://www.usa.gov/election-office) / [Voting Info Wiki](https://www.reddit.com/r/DonaldTrump/wiki/vote)

    **Get Involved:**

    [Donate](https://secure.winred.com/team/facfd710-reddit-trump) / [Digital Army](https://www.armyfortrump.com/) / [Knock & Call Locally](https://trumpvictory.com/) / [Trump App](https://share.djt.app/dfIGmNVEV5) / [Trump Store](https://shop.donaldjtrump.com/)

    **Exclusive r**/**DonaldTrump Features:**

    [Wiki](/r/DonaldTrump/wiki/donaldtrump) / [Full 2nd Term Agenda](/r/donaldtrump/wiki/2nd_term_agenda) / [Top 45 Accomplishments](/r/donaldtrump/wiki/top_45) / [State Endorsements](/r/donaldtrump/wiki/states)

    Make sure to set your [State Flag User Flair](https://www.reddit.com/r/DonaldTrump/wiki/set_flair) and join our [Discord Chat](https://discord.gg/Trump2020)!
---
#-------------------
# None-Standard Top Level Domain Comment/Post
#-------------------

type: any
moderators_exempt: false
url+title+body (includes): [http, https, www.,]
~url+title+body (includes): [.com, .net, .org, .gov, .mil, .edu, youtu.be, redd.it, t.co, self.donaldtrump, archive.fo, archive.is, .co.uk, .ca, worldometers.info, fullmeasure.news, pscp.tv, banned.video, discord.gg, apple.news]
action: filter
action_reason: 'Non-Standard Top Level Domain.  Check for rule violations before approving - (High Quarantine Alart)'

---
#-------------------
# Post removed if anything gets 5+ reports
#-------------------

type: submission
reports: 4
action: filter
action_reason: 'Post received 4 or more reports.'

---
#-------------------
# Comment removed with 5+ reports
#-------------------

type: comment
reports: 4
action: filter
action_reason: 'Comment received 4 or more reports'

---
#-------------------
# IPLogger Filter - Ban User
#-------------------

body+title+url (includes, regex): ['\biplogger.com\b']
moderators_exempt: false
action: filter
action_reason: "Banned link: {{match}}  Investigate history and deport."

---
#-------------------
# Possible profiteering - filter
#-------------------

author:
    is_moderator: false
title+body (regex, includes): [ '\bkickstarter.com\b', '\bpaypal.com\b', '\bgo\s*fund\s*me.com\b', '\bamazon.com\b', '\bzazzle.com\b', '\bstatelineshop\b', '\bbonfire.com\b', '\betsy.com\b', '\bebay.com\b']
action: filter
action_reason: "Possible profiteering: {{match}}."

---
#-------------------
# Crowdfunding Sites - Filter
#-------------------

standard: crowdfunding sites
action: filter
action_reason: 'Contains a link to a crowdfunding site: {{match}}. Please review for possible profiteering.'

---


##################################################
## SEC. IV. REMOVE
##################################################



---
#-------------------
# Slur/Racism filter (less serious terms in "report" section)
#-------------------

moderators_exempt: false
title+body (includes, regex): ['f[a4@]gg[o0]t', 'k[i1y]k[3e]', 'n[i1l]gg', 'n[i1]g.*n[o0]g', '\(\(\(', '\[\[\[', '\{\{\{', 'n[e3]gr[0o][i1]d', 'g[o0][o0]k', 'r[a4@]gh[3e][a4@]d', 'r[4a@]g.h[3e][4a@]d', 't[0o]w[3e]lh[3e][a4@]d', 't[0o]w[3e]l.h[3e][4a@]d', ' h[0o]l[0o]h[0o][4a@]x ', '\bs[e3]cur[e3].th[e3].([e3]x[i1]st[e3]nc[e3]|futur[e3]).f[o0]r.wh[i1]t[e3]\b', '\b(14|f[o0]urt[3e][3e]n).w[o0]rds\b', '\bd[i1]ndus\b', '\bd[a4@]y.[0o]f.(th[3e].)r[0o]p[3e]\b', '\bj[e3]wtub[e3]\b', '\bk[e3]b[a4@]b\b', 'M[e3][i1]n.*K[a4@]mpf]', 's[3e]cur[3e].th[3e].([e3]x[i1]st[e3]nc[e3]|futur[e3]).[0o]f.[0o]ur', 'bl[o0][o0]d.[a4@]nd.s[o0][i1]l', 'H[o0]l[o0]h[o0][a4@]x', 'g[o0]r[1i]ll[i1][o0]n', '\bn[o0]g\b', '\bZykl[o0]n.B\b', '\bZykl[o0]n.B[e3]n\b', '\bkik[e3](s|y)\b', '\bn[i1]ggl[e3]r(s)\b', '\bsp[e3][a4@]r chuck[e3]rs\b', '\bsp[i1]cs\b', 'n[i1]gl[e3]ts\b', '\bb[e3][a4@]n[e3]rs\b', '\bw[e3]t.*b[a4@]cks\b', '\bch[i1]mps\b', '\bmud(\s|-) sh[a4@]rk\b', '\bnogs\b', '\bn[i1]gg[a4@]s\b', '\bnukk[a4@]s\b', '\bn[i1]g.nog\b', '\bn[e3]gro\b', '\bn[e3]gro[e3]s\b', '\bg[o0][o0]k\b', '\bj[e3]w[1i]sh qu[e3]st[i1][o0]n\b', '\bJQ\b', '\bn[i1]bb[a4@]', '\bsp[e3][a4@]r chuck[e3]r\b', '\b[a4@]t[o0]mw[a4@]ff[e3]n\b', '\bk[a4@]l[e3]rg[i1]\b', '\bc[o0]unt.th[o0]s[e3].[a4@]sh[e3]s\b', '\bsh[o0][a4@]h\b', '\bchr[i1]st.k[i1]ll[e3]rs\b', '\bh[e3][e3]b\b', '\bf[a4]g\b', '\bt[a4@]rd\b', '\br[3e]t[a4@]rd\b', '\br[3e]t[a4@]rd[3e]d\b']
parent_submission:
    ~discussion_type: chat
action: remove
action_reason: 'No Slurring/Racism - {{match}}'
message_subject: Post removed for word filter.
message: |

    {{permalink}}

    Your above submission was removed by AutoModerator because it includes a word that violates the /r/DonaldTrump profanity/slur filter, which goes against the [Subreddits Rules](/r/DonaldTrump/about/rules/) regarding 'civil discourse'.  Please review your submission and **re-submit** it without the violation listed below. Take notice that any attempts to subvert or get around the word filter will result in a ban.

    **Violation:**  {{match}}

    If you feel like your post was removed incorrectly, please [Message The /r/DonaldTrump Moderators](https://www.reddit.com/message/compose?to=%2Fr%2FDonaldTrump). 

    We appreciate your understanding of these rules, as the are a crucial part in keeping this subreddit civil and away from Reddit Admin intervention.


---
#-------------------
# Slur/Racism filter (less serious terms in "report" section) (Live Discussion)
#-------------------

moderators_exempt: false
title+body (includes, regex): ['f[a4@]gg[o0]t', 'k[iy]ke', 'n[i1]gg', 'n[i1]g.*n[o0]g', '\(\(\(', '\[\[\[', '\{\{\{', 'n[e3]gr[0o][i1]d', 'g[o0][o0]k', 'r[a4@]gh[3e][a4@]d', 'r[4a@]g.h[3e][4a@]d', 't[0o]w[3e]lh[3e][a4@]d', 't[0o]w[3e]l.h[3e][4a@]d', ' h[0o]l[0o]h[0o][4a@]x ', '\bs[e3]cur[e3].th[e3].([e3]x[i1]st[e3]nc[e3]|futur[e3]).f[o0]r.wh[i1]t[e3]\b', '\b(14|f[o0]urt[3e][3e]n).w[o0]rds\b', '\bd[i1]ndus\b', '\bd[a4@]y.[0o]f.(th[3e].)r[0o]p[3e]\b', '\bj[e3]wtub[e3]\b', '\bk[e3]b[a4@]b\b', 'M[e3][i1]n.*K[a4@]mpf]', 's[3e]cur[3e].th[3e].([e3]x[i1]st[e3]nc[e3]|futur[e3]).[0o]f.[0o]ur', 'bl[o0][o0]d.[a4@]nd.s[o0][i1]l', 'H[o0]l[o0]h[o0][a4@]x', 'g[o0]r[1i]ll[i1][o0]n', '\bn[o0]g\b', '\bZykl[o0]n.B\b', '\bZykl[o0]n.B[e3]n\b', '\bkik[e3](s|y)\b', '\bn[i1]ggl[e3]r(s)\b', '\bsp[e3][a4@]r chuck[e3]rs\b', '\bsp[i1]cs\b', 'n[i1]gl[e3]ts\b', '\bb[e3][a4@]n[e3]rs\b', '\bw[e3]t.*b[a4@]cks\b', '\bch[i1]mps\b', '\bmud(\s|-) sh[a4@]rk\b', '\bnogs\b', '\bn[i1]gg[a4@]s\b', '\bnukk[a4@]s\b', '\bn[i1]g.nog\b', '\bn[e3]gro\b', '\bn[e3]gro[e3]s\b', '\bg[o0][o0]k\b', '\bj[e3]w[1i]sh qu[e3]st[i1][o0]n\b', '\bJQ\b', '\bn[i1]bb[a4@]', '\bsp[e3][a4@]r chuck[e3]r\b', '\b[a4@]t[o0]mw[a4@]ff[e3]n\b', '\bk[a4@]l[e3]rg[i1]\b', '\bc[o0]unt.th[o0]s[e3].[a4@]sh[e3]s\b', '\bsh[o0][a4@]h\b', '\bchr[i1]st.k[i1]ll[e3]rs\b', '\bh[e3][e3]b\b', '\bf[a4]g\b', '\bt[a4@]rd\b', '\br[3e]t[a4@]rd\b',]
parent_submission:
    discussion_type: chat
action: remove
action_reason: 'No Slurring/Racism - {{match}}'
message_subject: Post removed for word filter.
message: |

    **The following is an automated message:**

    Your post was reported by the r/donaldtrump community members for not following these community and/or Reddit rule(s):

    - 6. No Race, Sex or Identity-based Slurs

    > In the spirit of civil discourse, please refrain from using ad hominem attacks or insults such as curse words or slurs directed at race, sex, ethnicity, religion or other identity type.  For additional details please see: https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/promoting-hate-based-identity-or

    **Violation:**  {{match}}

    In response, the moderators of r/donaldtrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/donaldtrump rules, feel free to post again.


---
#-------------------
# Admin Specific User-Mention Removal! - Direct User-Mention of Admin is a Removal
#-------------------

title+body (regex, includes): ['u/spez', 'u/sporkicide', 'u/ocrasorm', 'u/acidtwist', 'u/liltrixxy', 'u/powerlanguage', 'u/sodypop', 'u/redtaboo', 'u/bigapplered', 'u/mynameizkhan', 'u/br0000d', 'u/toasties', 'u/Chtorrr', 'u/kethyvis', 'u/gooeyblob', 'u/skwitz', 'u/woodpaneled', 'u/dontsweatthetechniq', 'u/sticksfigured', 'u/TheOpusCroakus', 'u/enthusiastic-potato', 'u/Significant-Otters', 'u/agoldenzebra', 'u/LanterneRougeOG', 'u/C6H12O6-Cube', 'u/lift_ticket83', 'u/redditcma', 'u/Goldennuggets-3000', 'u/SingShredCode', 'u/TheSleepingKat', 'u/ImHuntingforU', 'u/bluepinkblack', 'u/CorrectScale', 'u/kethryvis', 'u/jleeky', 'u/blabyrinth', 'u/dmoneyyyyy', 'u/GiveMeThePrivateKey', 'u/jkohhey', 'u/0perspective', 'u/venkman01', 'u/ideboi', 'u/kassarolie', 'u/spoonfulofcheerios', 'u/booshdawg', 'u/crxpy', 'u/ityoclys', 'u/spladug', 'u/rram', 'u/ggAlex', 'u/Reddit-Policy', 'u/LastBluejay', 'u/worstnerd', 'u/alienth', 'u/bsimpson', 'u/daftmon', 'u/uzi', 'u/KeyserSosa', 'u/Worldly_Lobster', 'u/washedupextra'] 
moderators_exempt: false
action: remove
message: 'Your comment has been removed for the direct User-Mention of {{match}}.  Please resubmit your post without the direct User-Mention of said Admin.'

---
#-------------------
# Fake News Remover
#-------------------


url (includes): [cnn.com, msnbc.com, washingtonpost.com, wapo.com, nytimes.com, newyorktimes.com, huffpost.com, huffingtonpost.com, salon.com, bloomberg.com, Buzzfeed.com, buzzfeednews.com Shareblue.com, americanindependent.com, mediamatters.org, stormfront., davidduke.com, dailystormer., vox.com]
moderators_exempt: true
author:
    is_contributor: false
action: remove
comment_stickied: true
comment_locked: true
comment: |

    You are Fake News!

    Post from a reputable source.

---
#-------------------
# URL Shadowban list
#-------------------


url (includes): [unblckr.net, daytonflash.com, hoiabc.com, globalinfonow.com, secondpolitics.com]
moderators_exempt: true
author:
    is_contributor: false
action: remove

---
#-------------------
# Reddit LINK ENFORCEMENT
#-------------------


url+body (regex, includes): ['reddit.com/r/.*', 'redd.it/r/.*', ' r/.*', ' /r/.*', '^r/.*' , '^/r/.*']
~url+body (regex, includes): ['r/donaldtrump', 'r/Donald_Trump', 'r/DemocratsForTrump', 'r/AskThe_Donald', 'r/walkaway', 'r/AskTrumpsupporters']
moderators_exempt: true
author:
    is_contributor: false
parent_submission:
    ~discussion_type: chat
action: remove
message: |

    **The following is an automated message:**

    Your post was removed for not following these community and/or Reddit rule(s):

    - 8. No Reddit Drama/Meta or Brigading

    > No linking to outside subreddits, linking to usernames, or posting topics about other reddit drama or bans.  Also no linking to outside sources, or to /r/DonaldTrump from outside sources, with the intentions to harass or influence a target.

    In response, the moderators of r/DonaldTrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/DonaldTrump rules, feel free to post again.

---
#-------------------
# Reddit LINK ENFORCEMENT (Live Discussion)
#-------------------


url+body (regex, includes): ['reddit.com/r/.*', 'redd.it/r/.*', ' r/.*', ' /r/.*', '^r/.*' , '^/r/.*']
~url+body (regex, includes): ['r/donaldtrump', 'r/Donald_Trump', 'r/DemocratsForTrump', 'r/AskThe_Donald', 'r/walkaway', 'r/AskTrumpsupporters']
moderators_exempt: true
author:
    is_contributor: false
parent_submission:
    discussion_type: chat
action: remove
message: |

    **The following is an automated message:**

    Your post was reported by the r/DonaldTrump community members for not following these community and/or Reddit rule(s):

    - 8. No Reddit Drama/Meta or Brigading

    > No linking to outside subreddits, linking to usernames, or posting topics about other reddit drama or bans.  Also no linking to outside sources, or to /r/DonaldTrump from outside sources, with the intentions to harass or influence a target.

    In response, the moderators of r/DonaldTrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/DonaldTrump rules, feel free to post again.

---
#-------------------
# REDDIT LINK IN TITLE REMOVAL
#-------------------

type: submission
title (regex, includes): ['reddit.com/r/.*', 'redd.it/r/.*', ' r/.*', ' /r/.*', '^r/.*' , '^/r/.*']
~title (regex, includes): ['r/donaldtrump', 'r/Donald_Trump', 'r/DemocratsForTrump', 'r/AskThe_Donald', 'r/walkaway', 'r/AskTrumpsupporters']
action: remove
moderators_exempt: false
action: remove
message: |

    **The following is an automated message:**

    Your post was removed for not following these community and/or Reddit rule(s):

    - 8. No Reddit Drama/Meta or Brigading

    > No linking to outside subreddits, linking to usernames, or posting topics about other reddit drama or bans.  Also no linking to outside sources, or to /r/DonaldTrump from outside sources, with the intentions to harass or influence a target.

    In response, the moderators of r/DonaldTrump have removed your post. To get a better understanding of why your post was removed, [review the community rules](/r/DonaldTrump/about/rules) or [ask the moderators](https://www.reddit.com/message/compose?to=/r/DonaldTrump) for clarification. Once you understand r/DonaldTrump rules, feel free to post again.

---
#-------------------
# Account Age Filter (3 days)
#-------------------

author:
    account_age: "< 71 hours"
    is_contributor: false
    is_moderator: false
action: remove
action_reason: New account - Review to Remove/Approve
message: |

   Your submission has been removed from r/DonaldTrump as your account is not old enough (under 3 days old).

---
#-------------------
# Account Age Filter (3 days) (Live Discussion)
#-------------------

author:
    account_age: "< 71 hours"
    is_contributor: false
    is_moderator: false
parent_submission:
    discussion_type: chat
action: remove
action_reason: New account - Review to Remove/Approve
message: |

   Your submission has been removed from r/DonaldTrump as your account is not old enough (under 3 days old).

---
#-------------------
# Remove Crossposts outside of network
#-------------------

type: crosspost submission
moderators_exempt: false
crosspost_subreddit:
    ~name: [Donald_Trump, Trump, DonaldTrump, DemocratsForTrump, AskThe_Donald, walkaway, AskTrumpSupporters]
action: remove
message: |

   Your submission was removed because it is a crosspost outside of the Trumpire Network


---
#-------------------
# No Headline-Only or One Word Posts
#-------------------

type: text submission
body_shorter_than: 150
action: remove
action_reason: "No headline-only or short (sub-100 character) self-posts."
message: |

   No headline-only or short (sub-150 character) low-energy text submissions.

---
#-------------------
# LINKEDIN Topic Removal
#-------------------

domain: [linkedin.com]
action: remove
moderators_exempt: false
message: |

    Posts to LinkedIN are not allowed on r/DonaldTrump

---
#-------------------
# FACEBOOK Removal
#-------------------

domain: [facebook.com]
action: remove
moderators_exempt: false
message: |

    Posts to FaceBook are not allowed on r/DonaldTrump

---
#-------------------
# Short Links - Remove
#-------------------

domain+body: [0rz.tw, 0rz.tw, 1-url.net, 1link.in, 1tk.us, 1un.fr, 1url.com, 1url.cz, 1wb2.net, 2.gp, 2.ht, 2ad.in, 2big.at, 2doc.net, 2fear.com, 2pl.us, 2tu.us, 2ty.in, 2u.xf.cz, 2ya.com, 3.ly, 3ra.be, 3x.si, 4i.ae, 4ms.me, 4sq.com, 4url.cc, 4view.me, 5em.cz, 5url.net, 5z8.info, 6fr.ru, 6g6.eu, 6url.com, 7.ly, 7fth.cc, 7li.in, 7vd.cn, 8u.cz, 76.gd, 77.ai, 98.to, 126.am, 307.to, 944.la, a.gg, a.nf, a0.fr, a2a.me, aa.cx, abbr.sk, abbrr.com, abcurl.net, ad-med.cz, ad.vu, ad5.eu, ad7.biz, adb.ug, adcraft.co, adcrun.ch, adf.ly, adfa.st, adfly.fr, adjix.com, adli.pw, adv.li, afx.cc, ajn.me, aka.gr, alil.in, all.fuseurl.com, alturl.com, amzn.to, any.gs, aqva.pl, ar.gy, ares.tl, arst.ch, asso.in, atomcurve.com, atu.ca, au.ms, ayt.fr, azali.fr, azc.cc, b00.fr, b2l.me, b23.ru, b54.in, bacn.me, baid.us, bc.vc, bcool.bz, bee4.biz, bfy.tw, bim.im, binged.it, bit.do, bit.ly, bitly.com, bitw.in, bizj.us, bkite.com, blap.net, ble.pl, blip.tv, bloat.me, boi.re, bote.me, bougn.at, br4.in, bravo.ly, brk.to, brzu.net, bsa.ly, budurl.com, buk.me, bul.lu, burnurl.com, buzurl.com, bxl.me, bzh.me, c-o.in, cachor.ro, canurl.com, captur.in, catchylink.com, cbs.so, cbug.cc, cc.cc, ccj.im, cf.ly, cf2.me, cf6.co, chilp.it, chzb.gr, cjb.net, cl.lk, cl.ly, clck.ru, cli.gs, cliccami.info, clickmeter.com, clickthru.ca, clikk.in, clop.in, cn86.org, conta.cc, cort.as, cot.ag, couic.fr, cr.tl, crisco.com, crks.me, ctvr.us, cudder.it, cur.lv, curl.im, cut.pe, cut.sk, cutt.eu, cutt.us, cutu.me, cuturl.com, cybr.fr, cyonix.to, d75.eu, daa.pl, dai.ly, db.tt, dd.ma, ddp.net, decenturl.com, dfl8.me, dft.ba, digbig.com, digg.com, disq.us, dld.bz, dlvr.it, do.my, doiop.com, dolp.cc, dopen.us, dopice.sk, droid.ws, dv.gd, dwarfurl.com, dy.fi, dyo.gs, e37.eu, easyuri.com, easyurl.com, easyurl.net, ecra.se, eepurl.com, ely.re, erax.cz, erw.cz, esyurl.com, eweri.com, ewerl.com, ex9.co, ezurl.cc, fa.b, fa.by, fav.me, fb.me, fbshare.me, ff.im, fff.re, fff.to, fff.wf, fhurl.com, filoops.info, filz.fr, fire.to, firsturl.de, firsturl.net, flic.kr, flq.us, fly2.ws, fnk.es, foe.hn, folu.me, fon.gs, freak.to, freze.it, fur.ly, fuseurl.com, fuzzy.to, fwd4.me, fwib.net, g.ro.lt, g00.me, gamertalktv.com, gf.me, gg.gg, gizmo.do, gl.am, go.9nl.com, go.ign.com, go.usa.gov, go2.me, go2cut.com, goo.gl, goo.lu, google.com/url, goshrink.com, gowat.ch, grem.io, gri.ms, guiama.is, gurl.es, hadej.co, hellotxt.com, hex.io, hide.my, hiderefer.com, hjkl.fr, hmm.ph, hops.me, hover.com, href.in, href.li, hsblinks.com, ht.ly, htxt.it, huff.to, hugeurl.com, hurl.it, hurl.me, hurl.ws, i-2.co, i99.cz, icanhaz.com, icit.fr, ick.li, icks.ro, idek.net, iguang.tw, iiiii.in, iky.fr, ilix.in, info.ms, inreply.to, is.gd, iscool.net, isra.li, iterasi.net, itm.im, its.my, ity.im, ix.lt, ix.sk, j.gs, j.mp, jdem.cz, jieb.be, jijr.com, jmp2.net, jp22.net, jqw.de, just.as, kask.us, kd2.org, kfd.pl, kissa.be, kl.am, klck.me, korta.nu, kr3w.de, krat.si, kratsi.cz, krod.cz, krunchd.com, kuc.cz, kxb.me, l-k.be, l.gg, l9.fr, l9k.net, lat.ms, lc-s.co, lc.cx, lcut.in, lemde.fr, libero.it, lick.my, lien.li, lien.pl, liip.to, liltext.com, lin.cr, lin.io, linkbee.com, linkbun.ch, linkis.com, linkn.co, liurl.cn, llu.ch, ln-s.net, ln-s.ru, lnk.co, lnk.gd, lnk.in, lnk.ly, lnk.ms, lnk.sk, lnkd.in, lnks.fr, lnkurl.com, lnky.fr, lnp.sn, loopt.us, lp25.fr, lru.jp, lt.tl, lurl.no, lvvk.com, m1p.fr, m3mi.com, macte.ch, make.my, mash.to, mcaf.ee, mdl29.net, merky.de, metamark.net, mic.fr, migre.me, minilien.com, miniurl.com, minu.me, minurl.fr, mke.me, moby.to, moourl.com, more.sh, mrte.ch, mut.lu, myloc.me, myurl.in, n.pr, nbc.co, nblo.gs, ne1.net, net.ms, net46.net, nicou.ch, nig.gr, njx.me, nn.nf, not.my, notlong.com, nov.io, nq.st, nsfw.in, nutshellurl.com, nxy.in, nyti.ms, o-x.fr, oc1.us, okok.fr, om.ly, omf.gd, omoikane.net, on.cnn.com, on.mktw.net, onforb.es, orz.se, ou.af, ou.gd, oua.be, ow.ly, p.pw, para.pt, parky.tv, past.is, pd.am, pdh.co, ph.ly, pic.gd, pic.gd tweetphoto, pich.in, pin.st, ping.fm, piurl.com, pli.gs, plots.fr, pm.wu.cz, pnt.me, po.st, politi.co, poprl.com, post.ly, posted.at, pp.gg, ppfr.it, ppst.me, ppt.cc, ppt.li, prejit.cz, prettylinkpro.com, profile.to, ptab.it, ptiturl.com, ptm.ro, pub.vitrue.com, pw2.ro, py6.ru, q.gs, qbn.ru, qicute.com, qlnk.net, qqc.co, qqurl.com, qr.ae, qr.net, qrtag.fr, qte.me, qu.tc, quip-art.com, qxp.cz, qxp.sk, qy.fi, r.im, rb6.co, rb6.me, rcknr.io, rdz.me, read.bi, readthis.ca, reallytinyurl.com, redir.ec, redir.fr, redirects.ca, redirx.com, redu.it, ref.so, reise.lc, relink.fr, retwt.me, ri.ms, rickroll.it, riz.cz, riz.gd, rod.gs, roflc.at, rsmonkey.com, rt.nu, rt.se, ru.ly, rubyurl.com, rurl.org, rww.tw, s-url.fr, s4c.in, s7y.us, s7y.us shrinkify, safe.mn, sagyap.tk, sameurl.com, scrnch.me, sdu.sk, sdut.us, seeme.at, segue.se, sh.st, shar.as, shar.es, sharein.com, sharetabs.com, shink.de, shorl.com, short.cc, short.ie, short.nr, short.pk, short.to, shortlinks.co.uk, shortna.me, shorturl.com, shoturl.us, shout.to, show.my, shrinkify.com, shrinkr.com, shrinkster.com, shrt.fr, shrt.in, shrt.st, shrten.com, shrunkin.com, shw.me, shy.si, sicax.net, simurl.com, sina.lt, sk.gy, skr.sk, skroc.pl, slate.me, smallr.com, smll.co, smsh.me, smurl.name, sn.im, snipr.com, snipurl.com, snsw.us, snurl.com, soo.gd, sp2.ro, spedr.com, spn.sr, sq6.ru, sqrl.it, srnk.net, srs.li, ssl.gs, starturl.com, sturly.com, su.pr, surl.co.uk, surl.hu, surl.me, sux.cz, sy.pe, t.cn, t.lh.com, ta.gd, tabzi.com, tau.pe, tbd.ly, tcrn.ch, tdjt.cz, tgr.me, tgr.ph, thesa.us, thrdl.es, tighturl.com, tin.li, tini.cc, tiniuri.com, tiny.cc, tiny.lt, tiny.ly, tiny.ms, tiny.pl, tiny123.com, tinyarro.ws, tinyarrows.com, tinylink.in, tinytw.it, tinyuri.ca, tinyurl.com, tinyurl.hu, tinyvid.io, tixsu.com, tl.gd, tldr.sk, tllg.net, tmi.me, tnij.org, tnw.to, tny.com, tny.cz, to.ly, to8.cc, togoto.us, tohle.de, totc.us, toysr.us, tpm.ly, tpmr.com, tr.im, tr.my, tr5.in, tra.kz, traceurl.com, trck.me, trick.ly, trkr.ws, trunc.it, turo.us, tweetburner.com, tweez.me, twet.fr, twhub.com, twi.im, twirl.at, twit.ac, twitclicks.com, twitterpan.com, twitterurl.net, twitterurl.org, twitthis.com, twiturl.de, twlr.me, twurl.cc, twurl.nl, u.bb, u.mavrev.com, u.nu, u.to, u6e.de, u76.org, ub0.cc, uby.es, ucam.me, ug.cz, ulmt.in, ulu.lu, unlc.us, updating.me, upzat.com, ur1.ca, url.az, url.co.uk, url.ie, url2.fr, url4.eu, url5.org, url360.me, urlao.com, urlborg.com, urlbrief.com, urlcover.com, urlcut.com, urlenco.de, urlhawk.com, urli.nl, urlin.it, urlkiss.com, urlot.com, urlpire.com, urls.fr, urls.im, urlshorteningservicefortwitter.com, urlx.ie, urlx.org, urlz.fr, urlzen.com, urub.us, usat.ly, use.my, utfg.sk, v.gd, v.ht, v5.gd, vaaa.fr, valv.im, vaza.me, vb.ly, vbly.us, vd55.com, verd.in, vgn.am, vgn.me, viralurl.biz, viralurl.com, virl.com, virl.ws, vl.am, vm.lc, vov.li, vsll.eu, vt802.us, vur.me, vurl.bz, vv.vg, vzturl.com, w1p.fr, w3t.org, w55.de, waa.ai, wapo.st, wapurl.co.uk, wb1.eu, web99.eu, wed.li, whale.to, wideo.fr, wipi.es, wp.me, wtc.la, wu.cz, ww7.fr, wwy.me, x.co, x.nu, x.se, x.vu, x2c.eu, x2c.eumx, x10.mx, xaddr.com, xav.cc, xeeurl.com, xgd.in, xib.me, xl8.eu, xn--hgi.ws, xoe.cz, xr.com, xrl.in, xrl.us, xt3.me, xua.me, xub.me, xurl.es, xurl.jp, xurls.co, xzb.cc, y.ahoo.it, yagoa.fr, yagoa.me, yatuc.com, yau.sh, ye.pe, yeca.eu, yect.com, yep.it, yfrog.com, yhoo.it, yiyd.com, yogh.me, yon.ir, youfap.me, yourls.org, ysear.ch, yuarel.com, yweb.com, yyv.co, z0p.de, z9.fr, zapit.nu, zeek.ir, zi.ma, zi.mu, zi.pe, zip.net, zipmyurl.com, zkr.cz, zkrat.me, zkrt.cz, zoodl.com, zpag.es, zsms.net, zti.me, zud.me, zurl.ws, zxq.net, zyva.org, zz.gd, zzang.kr, zzb.bz, iavian.net, texaskkk.com, ctt.ac, g.co, bit.do, ino.to]
moderators_exempt: true
parent_submission:
    ~discussion_type: chat
action: remove
action_reason: 'Contained URL shortener: {{match}}.'
message: |
    Your {{kind}} was automatically removed because you used a URL shortener.

    Please re-post your {{kind}} using direct, full-length URL's only.


---
#-------------------
# Short Links - Remove (Live Discussion)
#-------------------

domain+body: [0rz.tw, 0rz.tw, 1-url.net, 1link.in, 1tk.us, 1un.fr, 1url.com, 1url.cz, 1wb2.net, 2.gp, 2.ht, 2ad.in, 2big.at, 2doc.net, 2fear.com, 2pl.us, 2tu.us, 2ty.in, 2u.xf.cz, 2ya.com, 3.ly, 3ra.be, 3x.si, 4i.ae, 4ms.me, 4sq.com, 4url.cc, 4view.me, 5em.cz, 5url.net, 5z8.info, 6fr.ru, 6g6.eu, 6url.com, 7.ly, 7fth.cc, 7li.in, 7vd.cn, 8u.cz, 76.gd, 77.ai, 98.to, 126.am, 307.to, 944.la, a.gg, a.nf, a0.fr, a2a.me, aa.cx, abbr.sk, abbrr.com, abcurl.net, ad-med.cz, ad.vu, ad5.eu, ad7.biz, adb.ug, adcraft.co, adcrun.ch, adf.ly, adfa.st, adfly.fr, adjix.com, adli.pw, adv.li, afx.cc, ajn.me, aka.gr, alil.in, all.fuseurl.com, alturl.com, amzn.to, any.gs, aqva.pl, ar.gy, ares.tl, arst.ch, asso.in, atomcurve.com, atu.ca, au.ms, ayt.fr, azali.fr, azc.cc, b00.fr, b2l.me, b23.ru, b54.in, bacn.me, baid.us, bc.vc, bcool.bz, bee4.biz, bfy.tw, bim.im, binged.it, bit.do, bit.ly, bitly.com, bitw.in, bizj.us, bkite.com, blap.net, ble.pl, blip.tv, bloat.me, boi.re, bote.me, bougn.at, br4.in, bravo.ly, brk.to, brzu.net, bsa.ly, budurl.com, buk.me, bul.lu, burnurl.com, buzurl.com, bxl.me, bzh.me, c-o.in, cachor.ro, canurl.com, captur.in, catchylink.com, cbs.so, cbug.cc, cc.cc, ccj.im, cf.ly, cf2.me, cf6.co, chilp.it, chzb.gr, cjb.net, cl.lk, cl.ly, clck.ru, cli.gs, cliccami.info, clickmeter.com, clickthru.ca, clikk.in, clop.in, cn86.org, conta.cc, cort.as, cot.ag, couic.fr, cr.tl, crisco.com, crks.me, ctvr.us, cudder.it, cur.lv, curl.im, cut.pe, cut.sk, cutt.eu, cutt.us, cutu.me, cuturl.com, cybr.fr, cyonix.to, d75.eu, daa.pl, dai.ly, db.tt, dd.ma, ddp.net, decenturl.com, dfl8.me, dft.ba, digbig.com, digg.com, disq.us, dld.bz, dlvr.it, do.my, doiop.com, dolp.cc, dopen.us, dopice.sk, droid.ws, dv.gd, dwarfurl.com, dy.fi, dyo.gs, e37.eu, easyuri.com, easyurl.com, easyurl.net, ecra.se, eepurl.com, ely.re, erax.cz, erw.cz, esyurl.com, eweri.com, ewerl.com, ex9.co, ezurl.cc, fa.b, fa.by, fav.me, fb.me, fbshare.me, ff.im, fff.re, fff.to, fff.wf, fhurl.com, filoops.info, filz.fr, fire.to, firsturl.de, firsturl.net, flic.kr, flq.us, fly2.ws, fnk.es, foe.hn, folu.me, fon.gs, freak.to, freze.it, fur.ly, fuseurl.com, fuzzy.to, fwd4.me, fwib.net, g.ro.lt, g00.me, gamertalktv.com, gf.me, gg.gg, gizmo.do, gl.am, go.9nl.com, go.ign.com, go.usa.gov, go2.me, go2cut.com, goo.gl, goo.lu, google.com/url, goshrink.com, gowat.ch, grem.io, gri.ms, guiama.is, gurl.es, hadej.co, hellotxt.com, hex.io, hide.my, hiderefer.com, hjkl.fr, hmm.ph, hops.me, hover.com, href.in, href.li, hsblinks.com, ht.ly, htxt.it, huff.to, hugeurl.com, hurl.it, hurl.me, hurl.ws, i-2.co, i99.cz, icanhaz.com, icit.fr, ick.li, icks.ro, idek.net, iguang.tw, iiiii.in, iky.fr, ilix.in, info.ms, inreply.to, is.gd, iscool.net, isra.li, iterasi.net, itm.im, its.my, ity.im, ix.lt, ix.sk, j.gs, j.mp, jdem.cz, jieb.be, jijr.com, jmp2.net, jp22.net, jqw.de, just.as, kask.us, kd2.org, kfd.pl, kissa.be, kl.am, klck.me, korta.nu, kr3w.de, krat.si, kratsi.cz, krod.cz, krunchd.com, kuc.cz, kxb.me, l-k.be, l.gg, l9.fr, l9k.net, lat.ms, lc-s.co, lc.cx, lcut.in, lemde.fr, libero.it, lick.my, lien.li, lien.pl, liip.to, liltext.com, lin.cr, lin.io, linkbee.com, linkbun.ch, linkis.com, linkn.co, liurl.cn, llu.ch, ln-s.net, ln-s.ru, lnk.co, lnk.gd, lnk.in, lnk.ly, lnk.ms, lnk.sk, lnkd.in, lnks.fr, lnkurl.com, lnky.fr, lnp.sn, loopt.us, lp25.fr, lru.jp, lt.tl, lurl.no, lvvk.com, m1p.fr, m3mi.com, macte.ch, make.my, mash.to, mcaf.ee, mdl29.net, merky.de, metamark.net, mic.fr, migre.me, minilien.com, miniurl.com, minu.me, minurl.fr, mke.me, moby.to, moourl.com, more.sh, mrte.ch, mut.lu, myloc.me, myurl.in, n.pr, nbc.co, nblo.gs, ne1.net, net.ms, net46.net, nicou.ch, nig.gr, njx.me, nn.nf, not.my, notlong.com, nov.io, nq.st, nsfw.in, nutshellurl.com, nxy.in, nyti.ms, o-x.fr, oc1.us, okok.fr, om.ly, omf.gd, omoikane.net, on.cnn.com, on.mktw.net, onforb.es, orz.se, ou.af, ou.gd, oua.be, ow.ly, p.pw, para.pt, parky.tv, past.is, pd.am, pdh.co, ph.ly, pic.gd, pic.gd tweetphoto, pich.in, pin.st, ping.fm, piurl.com, pli.gs, plots.fr, pm.wu.cz, pnt.me, po.st, politi.co, poprl.com, post.ly, posted.at, pp.gg, ppfr.it, ppst.me, ppt.cc, ppt.li, prejit.cz, prettylinkpro.com, profile.to, ptab.it, ptiturl.com, ptm.ro, pub.vitrue.com, pw2.ro, py6.ru, q.gs, qbn.ru, qicute.com, qlnk.net, qqc.co, qqurl.com, qr.ae, qr.net, qrtag.fr, qte.me, qu.tc, quip-art.com, qxp.cz, qxp.sk, qy.fi, r.im, rb6.co, rb6.me, rcknr.io, rdz.me, read.bi, readthis.ca, reallytinyurl.com, redir.ec, redir.fr, redirects.ca, redirx.com, redu.it, ref.so, reise.lc, relink.fr, retwt.me, ri.ms, rickroll.it, riz.cz, riz.gd, rod.gs, roflc.at, rsmonkey.com, rt.nu, rt.se, ru.ly, rubyurl.com, rurl.org, rww.tw, s-url.fr, s4c.in, s7y.us, s7y.us shrinkify, safe.mn, sagyap.tk, sameurl.com, scrnch.me, sdu.sk, sdut.us, seeme.at, segue.se, sh.st, shar.as, shar.es, sharein.com, sharetabs.com, shink.de, shorl.com, short.cc, short.ie, short.nr, short.pk, short.to, shortlinks.co.uk, shortna.me, shorturl.com, shoturl.us, shout.to, show.my, shrinkify.com, shrinkr.com, shrinkster.com, shrt.fr, shrt.in, shrt.st, shrten.com, shrunkin.com, shw.me, shy.si, sicax.net, simurl.com, sina.lt, sk.gy, skr.sk, skroc.pl, slate.me, smallr.com, smll.co, smsh.me, smurl.name, sn.im, snipr.com, snipurl.com, snsw.us, snurl.com, soo.gd, sp2.ro, spedr.com, spn.sr, sq6.ru, sqrl.it, srnk.net, srs.li, ssl.gs, starturl.com, sturly.com, su.pr, surl.co.uk, surl.hu, surl.me, sux.cz, sy.pe, t.cn, t.lh.com, ta.gd, tabzi.com, tau.pe, tbd.ly, tcrn.ch, tdjt.cz, tgr.me, tgr.ph, thesa.us, thrdl.es, tighturl.com, tin.li, tini.cc, tiniuri.com, tiny.cc, tiny.lt, tiny.ly, tiny.ms, tiny.pl, tiny123.com, tinyarro.ws, tinyarrows.com, tinylink.in, tinytw.it, tinyuri.ca, tinyurl.com, tinyurl.hu, tinyvid.io, tixsu.com, tl.gd, tldr.sk, tllg.net, tmi.me, tnij.org, tnw.to, tny.com, tny.cz, to.ly, to8.cc, togoto.us, tohle.de, totc.us, toysr.us, tpm.ly, tpmr.com, tr.im, tr.my, tr5.in, tra.kz, traceurl.com, trck.me, trick.ly, trkr.ws, trunc.it, turo.us, tweetburner.com, tweez.me, twet.fr, twhub.com, twi.im, twirl.at, twit.ac, twitclicks.com, twitterpan.com, twitterurl.net, twitterurl.org, twitthis.com, twiturl.de, twlr.me, twurl.cc, twurl.nl, u.bb, u.mavrev.com, u.nu, u.to, u6e.de, u76.org, ub0.cc, uby.es, ucam.me, ug.cz, ulmt.in, ulu.lu, unlc.us, updating.me, upzat.com, ur1.ca, url.az, url.co.uk, url.ie, url2.fr, url4.eu, url5.org, url360.me, urlao.com, urlborg.com, urlbrief.com, urlcover.com, urlcut.com, urlenco.de, urlhawk.com, urli.nl, urlin.it, urlkiss.com, urlot.com, urlpire.com, urls.fr, urls.im, urlshorteningservicefortwitter.com, urlx.ie, urlx.org, urlz.fr, urlzen.com, urub.us, usat.ly, use.my, utfg.sk, v.gd, v.ht, v5.gd, vaaa.fr, valv.im, vaza.me, vb.ly, vbly.us, vd55.com, verd.in, vgn.am, vgn.me, viralurl.biz, viralurl.com, virl.com, virl.ws, vl.am, vm.lc, vov.li, vsll.eu, vt802.us, vur.me, vurl.bz, vv.vg, vzturl.com, w1p.fr, w3t.org, w55.de, waa.ai, wapo.st, wapurl.co.uk, wb1.eu, web99.eu, wed.li, whale.to, wideo.fr, wipi.es, wp.me, wtc.la, wu.cz, ww7.fr, wwy.me, x.co, x.nu, x.se, x.vu, x2c.eu, x2c.eumx, x10.mx, xaddr.com, xav.cc, xeeurl.com, xgd.in, xib.me, xl8.eu, xn--hgi.ws, xoe.cz, xr.com, xrl.in, xrl.us, xt3.me, xua.me, xub.me, xurl.es, xurl.jp, xurls.co, xzb.cc, y.ahoo.it, yagoa.fr, yagoa.me, yatuc.com, yau.sh, ye.pe, yeca.eu, yect.com, yep.it, yfrog.com, yhoo.it, yiyd.com, yogh.me, yon.ir, youfap.me, yourls.org, ysear.ch, yuarel.com, yweb.com, yyv.co, z0p.de, z9.fr, zapit.nu, zeek.ir, zi.ma, zi.mu, zi.pe, zip.net, zipmyurl.com, zkr.cz, zkrat.me, zkrt.cz, zoodl.com, zpag.es, zsms.net, zti.me, zud.me, zurl.ws, zxq.net, zyva.org, zz.gd, zzang.kr, zzb.bz, iavian.net, texaskkk.com, ctt.ac, g.co, bit.do, ino.to]
moderators_exempt: true
parent_submission:
    discussion_type: chat
action: remove
action_reason: 'Contained URL shortener: {{match}}.'
message: |
    Your {{kind}} was automatically removed because you used a URL shortener.

    Please re-post your {{kind}} using direct, full-length URL's only.


---
#-------------------
# Amazon Affiliates - Remove
#-------------------

standard: amazon affiliate links
action: remove
action_reason: 'Contains a link to an Amazon affiliate site: {{match}}.'

---


##################################################
## SEC. V. DOXX ALERTS
##################################################


---
#-------------------
# LINKEDIN Comment/Body DOXX ALERT
#-------------------

type: any
body+title (regex, includes): ['\blinkedin.com\b']
moderators_exempt: true
action: report
action_reason: "Post/Comment is linking to LinkedIN - Review for possible DOXXING: {{match}}"

---
#-------------------
# FACEBOOK Comment/Body DOXX ALERT
#-------------------

type: any
body+title (regex, includes): [ '\bfacebook.com\b' ]
moderators_exempt: true
action: report
action_reason: "Post/Comment is linking to Facebook - Review for possible DOXXING: {{match}}"

---
#-------------------
# PHONE NUMBER ALERT
#-------------------

moderators_exempt: false
title+body (regex): ["\\(?(\\d{3})\\)?([ .-])(\\d{3})([ .-])(\\d{4})","(\\d{5})([ .-])(\\d{6})","\\(?(\\d{4})\\)?([ .-])(\\d{3})([ .-])(\\d{3})","\\(?(\\d{2})\\)?([ .-])(\\d{4})([ .-])(\\d{4})","\\(?(\\d{2})\\)?([ .-])(\\d{3})([ .-])(\\d{4})","\\+([\\d ]{10,15})"]
~body+url (regex): "(\\[[^\\]]+?\\]\\()?(https?://|www\\.)\\S+\\)?"
~body+title+url (regex): ["(800|855|866|877|888|007|911)\\W*\\d{3}\\W*\\d{4}", "\\d{3}\\W*555\\W*\\d{4}", "999-999-9999", "000-000-0000", "123-456-7890", "111-111-1111", "012-345-6789", "888-888-8888", "281\\W*330\\W*8004", "777-777-7777", "678-999-8212", "999([ .-])119([ .-])7253","0118 999 811","0118 999 881", "867( -)?5309", "505\\W*503\\W*4455", "1024 2048"]
action: report
action_reason: "Phone Number - Review for possible DOXXING: {{match}}"

---
#------------
# EMAIL ALERT
#------------

moderators_exempt: false
title+body (regex): "[!#$%&amp;'*+./0-9=?_`a-z{|}~^-]+@[.a-z-]+\\.(?:com|org|net)"
~title+body#whitelist: [OKemail1@domain.com, OKemail2@domain.com]
action: report
action_reason: "Email Alert - Review for possible DOXXING: {{match}}"


---
#-------------------------
# CREDIT CARD NUMBER ALERT
#-------------------------

moderators_exempt: false
title+body (regex): "\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[12345][0-9]{14}|3[47][0-9]{13}|3(?:0[012345]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35[0-9]{3})[0-9]{11})\\b"
action: report
action_reason: "Credit Card Number Alert - Review for possible DOXXING: {{match}}"

---
#------------------
#IPv4 ADDRESS ALERT
#------------------

moderators_exempt: false
title+body (regex): "\\b[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\b"
action: report
action_reason: "IPv4 Address Alert - Review for possible DOXXING: {{match}}"


---
#---------------------
# STREET ADDRESS ALERT
#---------------------

moderators_exempt: false
title+body (regex): ["\\W[A-Za-z]?\\d{1,6}[A-Za-z]? (E(\\.|ast)?|W(\\.|est)?|N(\\.|orth)?|S(\\.|outh)? )?[\\p{Pi}\\p{Pf}]?\\w+( \\w+)?[\\p{Pi}\\p{Pf}]? (st(reet)?|ave(enue)?|r(oa)?d|dr(ive)?|c(our)?t|blvd|boulevard|lane|ln|highway|hwy|route|rt)"]
~title+body#whitelist: [second drive, minute drive, hour drive, day drive, week drive, gb drive, tb drive, 123 Main St, 123 Main Street, 221b baker st, 221b baker street]
action: report
action_reason: "Street Address Alert - Review for possible DOXXING: {{match}}"

---


##################################################
## SEC. VI. AUTO FLAIRS
##################################################


---
#-------------------
# Donald Trump Post Auto-Flair
#-------------------

url (includes): [donaldjtrump.com, /realDonaldTrump/]
~url (includes): [shop.donaldjtrump.com]
set_flair:
    template_id: f907ac08-3ff6-11ea-a794-0e8b1f2ad803
overwrite_flair: true

---
#-------------------
# Donald Trump Post Auto-Flair
#-------------------

url (includes): [/DonaldTrump/]
set_flair:
    template_id: f907ac08-3ff6-11ea-a794-0e8b1f2ad803

---
#-------------------
# Donald Trump Post Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
~discussion_type: chat
media_author: [Donald J Trump] 
set_flair:
    template_id: 1bc4fa52-3ff7-11ea-87ee-0e934f5ed01f
overwrite_flair: true

---
#-------------------
# Donald Trump STORE  Auto-Flair
#-------------------

url (includes): [shop.donaldjtrump.com]
set_flair:
    template_id: b87eecd4-a9e4-11ea-a0ea-0e198a2a813b
overwrite_flair: true

---
#-------------------
# Trump Podcast Post Auto-Flair
#-------------------

url (includes): [trump.podbean.com]
set_flair:
    template_id: 24c62dd8-3ff7-11ea-a88d-0ec6588930af
overwrite_flair: true

---
#-------------------
# White House Post Auto-Flair
#-------------------

priority: -1
url (includes): [whitehouse.gov, /WhiteHouse/, /WHOSTP/]
set_flair:
    template_id: 0aeb689c-3ff7-11ea-883d-0e4010008329
overwrite_flair: true

---
#-------------------
# White House Post Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
~discussion_type: chat
media_author: [The White House] 
set_flair:
    template_id: 0aeb689c-3ff7-11ea-883d-0e4010008329
overwrite_flair: true

---
#-------------------
# Team Trump Post Auto-Flair
#-------------------

url (includes): [/teamtrump, /EricTrump, /PressSec, /Scavino45, /DanScavino, /IvankaTrump, /TiffanyATrump, /LaraLeaTrump, /DonaldJTrumpJr, /TrumpTower, /parscale, /kayleighmcenany, /TimMurtaugh, /RudyGiuliani, /KellyannePolls, /KatrinaPierson, /kimguilfoyle, /JennaEllisEsq, /ErinMPerrine]
set_flair:
    template_id: de329eba-3ff6-11ea-bfc6-0ee07ae9663b
overwrite_flair: true

---
#-------------------
# Trump War Post Auto-Flair
#-------------------

url (includes): [/AndrewHClark, /Turcotte_JPT, /TrumpWarRoom]
set_flair:
    template_id: 2ed51ece-3ff7-11ea-9965-0e611a19ecef
overwrite_flair: true

---
#-------------------
# Trump War Post Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
~discussion_type: chat
media_author: [Trump War Room] 
set_flair:
    template_id: 2ed51ece-3ff7-11ea-9965-0e611a19ecef
overwrite_flair: true

---
#-------------------
# Trump Admin Post Auto-Flair
#-------------------

type: crosspost submission
crosspost_subreddit:
    name: Donald_Trump
~url (includes): [/realDonaldTrump/]
set_flair:
    template_id: 323f0748-a9e5-11ea-b8e7-0ee7c26504e3
overwrite_flair: true

---
#-------------------
# GOP Post Auto-Flair
#-------------------

url (includes): [gop.com]
set_flair:
    template_id: deda3eec-a8e5-11ea-8423-0e5902111c19
overwrite_flair: true

---
#-------------------
# GOP Post Auto-Flair
#-------------------

url (includes): [stopthemadness.com, /RNCResearch/, /GOPLeader/, /senatemajldr/, /GOPChairwoman/, /GOP/, /HouseGOP/, /SenateGOP/]
set_flair:
    template_id: 337030fa-a69e-11ea-ad80-0eb216024485
overwrite_flair: true

---
#-------------------
# GOP Post Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
~discussion_type: chat
media_author: [GOP, GOP War Room] 
set_flair:
    template_id: 337030fa-a69e-11ea-ad80-0eb216024485
overwrite_flair: true

---
#-------------------
# Pence Post Auto-Flair
#-------------------

url (includes): [/VP/, /mike_pence/]
set_flair:
    template_id: eae1a44a-a69d-11ea-b08b-0ef777bc4ecb
overwrite_flair: true

---
#-------------------
# Melania Post Auto-Flair
#-------------------

url (includes): [/FLOTUS/, /melaniatrump/]
set_flair:
    template_id: f96d4b72-a69d-11ea-b390-0e6fa072bfcd
overwrite_flair: true

---
#-------------------
# Ivanka Post Auto-Flair
#-------------------

url (includes): [/IvankaTrump/]
set_flair:
    template_id: 06510496-a69e-11ea-bb18-0e53ff4a9e39
overwrite_flair: true

---
#-------------------
# Congress Post Auto-Flair
#-------------------

url (includes): [house.gov, senate.gov, congress.gov]
set_flair:
    template_id: 0ca50036-a69e-11ea-b9d5-0e693db28eab
overwrite_flair: true

---
#-------------------
# Space Force Post Auto-Flair
#-------------------

url (includes): [spaceforce.mil, /USSpaceForceDoD/, /SpaceForceDoD/]
set_flair:
    template_id: 4e51764a-a69e-11ea-ab82-0ebae85a19d1
overwrite_flair: true

---
#-------------------
# MEME Post Auto-Flair
#-------------------

standard: meme generator sites
~flair_text (regex): ".+"
set_flair:
    template_id: 27fb0c9e-2585-11ea-b36b-0e9f7749f387

---
#-------------------
# MEME Post Auto-Flair
#-------------------

type: submission
author:
    name: [TranqToTheJug]
~flair_text (regex): ".+"
set_flair:
    template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
overwrite_flair: true

---
#-------------------
# The Onion & BumbleBee Satire Auto-Flair
#-------------------

url (includes): [theonion.com, babylonbee.com, genesiustimes.com, pandatribune.com, twitter.com/PandaTribune]
set_flair:
    template_id: c14c494a-a69e-11ea-b702-0ebdb7d30ec5
overwrite_flair: true

---
#-------------------
# Twitter Parody Auto-Flair
#-------------------

url (includes): ['twitter.com/(sean_spicier|SarrahHuckabee|SarahHSandiers|acostasdiary)']
set_flair:
    template_id: c47f6340-a69e-11ea-a3cd-0e7fc950d585
overwrite_flair: true

---
##################################################
## SEC. VI.a AUTO FLAIRS FOR MEMERS
##################################################


---
#-------------------
# Live Post Auto-Flair
#-------------------

type: submission
flair_template_id: 2265938c-a8e6-11ea-b95c-0eb013d2069f
modmail_subject: ★ LIVE Post - Please Sticky ★
modmail: |
    A ★ LIVE ★ Post has been made.  Please schedule and start "Event" times.

    {{permalink}}


---
#-------------------
# Verified User Post
#-------------------

type: submission
author:
    name: ['TFittonJW', 'saraacarter', 'roger-stone', 'the-realdonaldtrump', 'timcast', 'TheBrandonStraka']
modmail_subject: ★ A Verified User has posted ★
modmail: |
    Verified User **{{author}}** has posted a new topic

    {{permalink}}

    Upvote this post and check to see if it important enough to be stickied, shared in our chat rooms ([Reddit](https://s.reddit.com/channel/942153_351df4732c9ff6696a1ad76284c497bc2547806c)/[Discord](https://discord.gg/Trump2020)), or crossposted to other subreddits ([Crosspost List](https://www.reddit.com/r/donaldtrump/wiki/crosspost_comms))


---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TFittonJW]
set_flair:
    template_id: aa2fb988-0722-11eb-9e58-0e978144e2f3

---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [SaraACarter]
set_flair:
    template_id: 02c8361c-c540-11ea-84c2-0ecce244ca0f

---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [roger-stone]
set_flair:
    template_id: 2fd3d77e-c540-11ea-9ba4-0e6b0ed3f89d

---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [timcast]
set_flair:
    template_id: 8af63f8e-c572-11ea-b40e-0ec2803cbd95

---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [the-realdonaldtrump]
set_flair:
    template_id: ab68d4cc-c593-11ea-b17e-0eefa6a50b23

---
#-------------------
#   Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TheBrandonStraka]
set_flair:
    template_id: 6238b6e4-c540-11ea-9386-0e3a7960d8db

---
#-------------------
# Meme Warrior Post
#-------------------

type: submission
author:
    name: ['mad-liberals', 'carpedonktum', 'solentgreenis', 'CHARL3YDONTSURF', 'MyPowerTie', 'realDrefanzor', 'William-of-Ockham', 'TrumpHouseRules', 'MAGARULER', 'ThugLifeNewShit', 'TrollasaurusRx', 'WatchMaga', 'DirtyOldDevil', 'tt_cube', 'JPO398', 'TheUnitedSpot', 'Wintrell', 'only_JoeKing']
modmail_subject: ★ A Meme Warrior has posted ★
modmail: |
    Meme Warrior **{{author}}** has posted a new topic

    {{permalink}}

    Upvote this post and check to see if it important enough to be stickied, shared in our chat rooms ([Reddit](https://s.reddit.com/channel/942153_351df4732c9ff6696a1ad76284c497bc2547806c)/[Discord](https://discord.gg/Trump2020)), or crossposted to other subreddits ([Crosspost List](https://www.reddit.com/r/donaldtrump/wiki/crosspost_comms))


---
#-------------------
#  MEME World Auto-Flair
#-------------------

url (includes): [memeworld.com]
set_flair:
    template_id: 37d2edbe-a8e6-11ea-9d93-0e972b1dae7b
overwrite_flair: true

---
#-------------------
#  Carpe Donktum Auto-Flair
#-------------------

url (includes): [twitter.com/CarpeDonktum/, instagram.com/carpedonktum/]
set_flair:
    template_id: 4557c220-a8e6-11ea-a6f4-0e74379493a1
overwrite_flair: true

---
#-------------------
#  Carpe Donktum Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Carpe Donktum'] 
set_flair:
    template_id: 4557c220-a8e6-11ea-a6f4-0e74379493a1
overwrite_flair: true

---
#-------------------
#  Carpe Donktum Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [carpedonktum]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 4557c220-a8e6-11ea-a6f4-0e74379493a1

---
#-------------------
#  Mad Liberals Auto-Flair
#-------------------

url (includes): [instagram.com/mad_liberals/, twitter.com/mad_liberals/]
set_flair:
    template_id: 41770210-a8e6-11ea-8f47-0eabac70d909
overwrite_flair: true

---
#-------------------
#  Mad Liberals Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Mad Liberals'] 
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 41770210-a8e6-11ea-8f47-0eabac70d909
overwrite_flair: true

---
#-------------------
#  Mad Liberals Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [mad-liberals]
set_flair:
    template_id: 41770210-a8e6-11ea-8f47-0eabac70d909

---
#-------------------
#  Solentgreenis Auto-Flair
#-------------------

url (includes): [twitter.com/solmemes1/, twitter.com/solentgreenis/, patreon.com/Solentgreenis/, instagram.com/solentgreenis/]
set_flair:
    template_id: 49679908-a8e6-11ea-bc7f-0e4896873819
overwrite_flair: true

---
#-------------------
#  Solentgreenis Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Solentgreenis people'] 
set_flair:
    template_id: 49679908-a8e6-11ea-bc7f-0e4896873819
overwrite_flair: true

---
#-------------------
#  Solentgreenis Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [solentgreenis]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 49679908-a8e6-11ea-bc7f-0e4896873819

---
#-------------------
#  Something Wicked Auto-Flair
#-------------------

url (includes): [instagram.com/som3thing.wicked/, twitter.com/som3thingwicked/]
set_flair:
    template_id: 4ccf020c-a8e6-11ea-94c5-0ebfb0f0353b
overwrite_flair: true

---
#-------------------
#  Something Wicked Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['SOMETHiNG WiCKËD'] 
set_flair:
    template_id: 4ccf020c-a8e6-11ea-94c5-0ebfb0f0353b
overwrite_flair: true

---
#-------------------
#  Something Wicked Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [CHARL3YDONTSURF]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 4ccf020c-a8e6-11ea-94c5-0ebfb0f0353b

---
#-------------------
#  Power Tie Auto-Flair
#-------------------

url (includes): [twitter.com/realPowerTie, instagram.com/power_tie]
set_flair:
    template_id: 50922f04-a8e6-11ea-bcdb-0e498a9683cf
overwrite_flair: true

---
#-------------------
#  Power Tie Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Power Tie'] 
set_flair:
    template_id: 50922f04-a8e6-11ea-bcdb-0e498a9683cf
overwrite_flair: true

---
#-------------------
#  Power Tie Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [MyPowerTie]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 50922f04-a8e6-11ea-bcdb-0e498a9683cf

---
#-------------------
#  Drefanzor Auto-Flair
#-------------------

url (includes): [twitter.com/drefanzor, buymeacoffee.com/drefanzor]
set_flair:
    template_id: 54a34178-a8e6-11ea-845e-0e92dae19393
overwrite_flair: true

---
#-------------------
#  Drefanzor Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['drefanzor'] 
set_flair:
    template_id: 54a34178-a8e6-11ea-845e-0e92dae19393
overwrite_flair: true

---
#-------------------
#  Drefanzor Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [realDrefanzor]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 54a34178-a8e6-11ea-845e-0e92dae19393

---
#-------------------
#  William-Of-Ockham Auto-Flair
#-------------------

url (includes): [instagram.com/will_of_ockham/]
set_flair:
    template_id: 59efa25c-a8e6-11ea-a920-0ebac25a2745
overwrite_flair: true

---
#-------------------
#  William-Of-Ockham Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['William of Ockham'] 
set_flair:
    template_id: 59efa25c-a8e6-11ea-a920-0ebac25a2745
overwrite_flair: true

---
#-------------------
#  William-Of-Ockham Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [William-of-Ockham]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 59efa25c-a8e6-11ea-a920-0ebac25a2745

---
#-------------------
#  KAGWAR Auto-Flair
#-------------------

url (includes): [twitter.com/KAGWAR2020/, instagram.com/kagwar2020/ ]
set_flair:
    template_id: 5e84e4ee-a8e6-11ea-99e7-0e9f53458ebd
overwrite_flair: true

---
#-------------------
#  KAGWAR Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: [KAGWAR 2020] 
set_flair:
    template_id: 5e84e4ee-a8e6-11ea-99e7-0e9f53458ebd
overwrite_flair: true

---
#-------------------
#  KAGWAR Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TrumpHouseRules]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 5e84e4ee-a8e6-11ea-99e7-0e9f53458ebd

---
#-------------------
#  MAGARULER Auto-Flair
#-------------------

url (includes): [twitter.com/magaruler/]
set_flair:
    template_id: 647b1b7a-a8e6-11ea-a53a-0e00f1f219a3
overwrite_flair: true

---
#-------------------
#  MAGARULER Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [MAGARULER]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 647b1b7a-a8e6-11ea-a53a-0e00f1f219a3

---
#-------------------
#  Thug Life New Shit Auto-Flair
#-------------------

url (includes): [instagram.com/thuglifenewshit/, twitter.com/ThugLifeNewShit/]
set_flair:
    template_id: 6857b8e8-a8e6-11ea-bc61-0e755c7e637b
overwrite_flair: true

---
#-------------------
#  Thug Life New Shit Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Thug Life New Shit'] 
set_flair:
    template_id: 6857b8e8-a8e6-11ea-bc61-0e755c7e637b
overwrite_flair: true

---
#-------------------
#  Thug Life New Shit Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [ThugLifeNewShit]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 6857b8e8-a8e6-11ea-bc61-0e755c7e637b

---
#-------------------
#  Trollasaurus RX Auto-Flair
#-------------------

url (includes): [twitter.com/TrollasaurusRx/]
set_flair:
    template_id: 6cc79b82-a8e6-11ea-8ba8-0eb426e4c947
overwrite_flair: true

---
#-------------------
#  Trollasaurus RX Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: [TrollasaurusRx Rx] 
set_flair:
    template_id: 6cc79b82-a8e6-11ea-8ba8-0eb426e4c947
overwrite_flair: true

---
#-------------------
#  Trollasaurus RX Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TrollasaurusRx]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 6cc79b82-a8e6-11ea-8ba8-0eb426e4c947

---
#-------------------
#  WatchMAGA Auto-Flair
#-------------------

url (includes): [twitter.com/WatchMaga/, instagram.com/watchmaga/]
set_flair:
    template_id: 7145f0b4-a8e6-11ea-8333-0ebec321dd47
overwrite_flair: true

---
#-------------------
#  WatchMAGA Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Watch Maga'] 
set_flair:
    template_id: 7145f0b4-a8e6-11ea-8333-0ebec321dd47
overwrite_flair: true

---
#-------------------
#  WatchMAGA Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [WatchMaga]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 7145f0b4-a8e6-11ea-8333-0ebec321dd47

---
#-------------------
#  Yo Sniper Auto-Flair
#-------------------

url (includes): [twitter.com/YoSniperGames/]
set_flair:
    template_id: 752ade38-a8e6-11ea-b060-0e721dfbd2c9
overwrite_flair: true

---
#-------------------
#  Yo Sniper Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['YoSniper'] 
set_flair:
    template_id: 752ade38-a8e6-11ea-b060-0e721dfbd2c9
overwrite_flair: true

---
#-------------------
#  Devil's Advocate Auto-Flair
#-------------------

url (includes): [twitter.com/DA_Memes1]
set_flair:
    template_id: 78981b8a-a8e6-11ea-bb60-0e53d38c5ec5
overwrite_flair: true

---
#-------------------
#  Devil's Advocate Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Devils Advocate'] 
set_flair:
    template_id: 78981b8a-a8e6-11ea-bb60-0e53d38c5ec5
overwrite_flair: true

---
#-------------------
#  Devil's Advocate Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [DirtyOldDevil]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 78981b8a-a8e6-11ea-bb60-0e53d38c5ec5

---
#-------------------
#  Magical Trevor Auto-Flair
#-------------------

url (includes): [twitter.com/magical_trevor/]
set_flair:
    template_id: 7d3d4174-a8e6-11ea-89a6-0e04dbeaaa55
overwrite_flair: true

---
#-------------------
#  Magical Trevor Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Magical Trevor'] 
set_flair:
    template_id: 7d3d4174-a8e6-11ea-89a6-0e04dbeaaa55
overwrite_flair: true

---
#-------------------
#  Posonaut Auto-Flair
#-------------------

url (includes): [twitter.com/posonaut/]
set_flair:
    template_id: 80123076-a8e6-11ea-872b-0e29f9657c9d
overwrite_flair: true

---
#-------------------
#  TT Cube Auto-Flair
#-------------------

url (includes): [twitter.com/tt_cube/]
set_flair:
    template_id: 831d7f14-a8e6-11ea-b858-0e9ac82fbd8f
overwrite_flair: true

---
#-------------------
#  TT Cube Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['TT Cube'] 
set_flair:
    template_id: 831d7f14-a8e6-11ea-b858-0e9ac82fbd8f
overwrite_flair: true

---
#-------------------
#  TT Cube Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [tt_cube]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 831d7f14-a8e6-11ea-b858-0e9ac82fbd8f

---
#-------------------
#  Baritone Bones Auto-Flair
#-------------------

url (includes): [twitter.com/BaritoneBones/, instagram.com/baritonebones/]
set_flair:
    template_id: 865b53a4-a8e6-11ea-8e7f-0e8cfe2bdeb5
overwrite_flair: true

---
#-------------------
#  Baritone Bones Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['baritonebones'] 
set_flair:
    template_id: 865b53a4-a8e6-11ea-8e7f-0e8cfe2bdeb5
overwrite_flair: true

---
#-------------------
#  Donnie Danko Auto-Flair
#-------------------

url (includes): [twitter.com/realDonnieDanko/, instagram.com/realdonniedanko/, twitter.com/USAmazine]
set_flair:
    template_id: 89bfcade-a8e6-11ea-9d14-0eae45999abb
overwrite_flair: true

---
#-------------------
#  iLLDiscourse Auto-Flair
#-------------------

url (includes): [twitter.com/illdiscourse/]
set_flair:
    template_id: 8d000fec-a8e6-11ea-b3a1-0ec68e5ad5e9
overwrite_flair: true

---
#-------------------
#  iLLDiscourse Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Ill Discourse'] 
set_flair:
    template_id: 8d000fec-a8e6-11ea-b3a1-0ec68e5ad5e9
overwrite_flair: true

---
#-------------------
#  QuakeAwake17 Auto-Flair
#-------------------

url (includes): [twitter.com/QuakeAwake17/, instagram.com/quakeawake17/]
set_flair:
    template_id: 902431f8-a8e6-11ea-9ea3-0e80e0fdba57
overwrite_flair: true

---
#-------------------
#  QuakeAwake17 Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['QuakeAwake17'] 
set_flair:
    template_id: 902431f8-a8e6-11ea-9ea3-0e80e0fdba57
overwrite_flair: true

---
#-------------------
#  John Ward Auto-Flair
#-------------------

url (includes): [twitter.com/TheOneJohnWard/]
set_flair:
    template_id: 92cbdcc6-a8e6-11ea-a360-0ec44761b367
overwrite_flair: true

---
#-------------------
#  John Ward Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['John Ward'] 
set_flair:
    template_id: 92cbdcc6-a8e6-11ea-a360-0ec44761b367
overwrite_flair: true

---
#-------------------
#  Big Game Productions Auto-Flair
#-------------------

url (includes): [twitter.com/BGProductions/]
set_flair:
    template_id: 95c01744-a8e6-11ea-82a6-0e11970c7243
overwrite_flair: true

---
#-------------------
#  Big Game Productions Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Big Game Productions'] 
set_flair:
    template_id: 95c01744-a8e6-11ea-82a6-0e11970c7243
overwrite_flair: true

---
#-------------------
#  Big Game Productions Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [JPO398]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 95c01744-a8e6-11ea-82a6-0e11970c7243

---
#-------------------
#  The United Spot Auto-Flair
#-------------------

url (includes): [twitter.com/TheUnitedSpot1/, instagram.com/spottheunited/]
set_flair:
    template_id: 9a359114-a8e6-11ea-9cf7-0e69813321eb
overwrite_flair: true

---
#-------------------
#  The United Spot Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['The United Spot'] 
set_flair:
    template_id: 9a359114-a8e6-11ea-9cf7-0e69813321eb
overwrite_flair: true

---
#-------------------
#  The United Spot Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TheUnitedSpot]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 9a359114-a8e6-11ea-9cf7-0e69813321eb

---
#-------------------
#  Space Force 7 Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Space Force7'] 
set_flair:
    template_id: 319a1df4-a8e7-11ea-8241-0eb60dd041a7
overwrite_flair: true

---
#-------------------
#  TheGeekzTeam Auto-Flair
#-------------------

url (includes): [twitter.com/thegeekzteam/, instagram.com/thegeekzteam/]
set_flair:
    template_id: cdb49326-a8e8-11ea-857b-0e30982be28f
overwrite_flair: true

---
#-------------------
#  TheGeekzTeam Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['TheGeekzTeam'] 
set_flair:
    template_id: cdb49326-a8e8-11ea-857b-0e30982be28f
overwrite_flair: true

---
#-------------------
#  Lui's MEMEs Auto-Flair
#-------------------

url (includes): [twitter.com/MemesLui/]
set_flair:
    template_id: d096fc6e-a8e8-11ea-8b53-0e872b4597d3
overwrite_flair: true

---
#-------------------
#  Lui's MEMEs Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["Lui's Memes"] 
set_flair:
    template_id: d096fc6e-a8e8-11ea-8b53-0e872b4597d3
overwrite_flair: true

---
#-------------------
#  STRIDERS MEMES Auto-Flair
#-------------------

url (includes): [twitter.com/stridermemes/]
set_flair:
    template_id: d2c94fdc-a8e8-11ea-8119-0e2d451c6cf5
overwrite_flair: true

---
#-------------------
#  Badcarma69 Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Badcarma1969'] 
set_flair:
    template_id: d84a84e4-a8e8-11ea-ae01-0ed98f2780f7
overwrite_flair: true

---
#-------------------
#  Jeremy View Auto-Flair
#-------------------

url (includes): [twitter.com/Jeremyview/]
set_flair:
    template_id: d5785c82-a8e8-11ea-8eb7-0ea4a8115a93
overwrite_flair: true

---
#-------------------
#  Jeremy View Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["Jeremy View"] 
set_flair:
    template_id: d5785c82-a8e8-11ea-8eb7-0ea4a8115a93
overwrite_flair: true

---
#-------------------
#  Wintrell Auto-Flair
#-------------------

url (includes): [twitter.com/WINTRELL77/]
set_flair:
    template_id: 3558be14-a8e7-11ea-a0ea-0e198a2a813b
overwrite_flair: true

---
#-------------------
#  Wintrell Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["WINTRELL"] 
set_flair:
    template_id: 3558be14-a8e7-11ea-a0ea-0e198a2a813b
overwrite_flair: true

---
#-------------------
#  Wintrell Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [Wintrell]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: 3558be14-a8e7-11ea-a0ea-0e198a2a813b

---
#-------------------
#  BRICK SUIT Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["Brick_Suit"] 
set_flair:
    template_id: da929e9e-a8e8-11ea-b465-0ec1ab42986b
overwrite_flair: true

---
#-------------------
#  BRICK SUIT Auto-Flair
#-------------------

url (includes): [twitter.com/Brick_Suit/]
set_flair:
    template_id: da929e9e-a8e8-11ea-b465-0ec1ab42986b
overwrite_flair: true

---
#-------------------
#  Octo Memes Auto-Flair
#-------------------

url (includes): [twitter.com/Octomemes1/]
set_flair:
    template_id: dd2c2c42-a8e8-11ea-b1d8-0e9e59488511
overwrite_flair: true

---
#-------------------
#  TheFrontierzMan Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [TheFrontierzMan]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
overwrite_flair: true
set_flair:
    template_id: dfc4bb68-a8e8-11ea-9337-0ea80f8c791f

---
#-------------------
#  Boris Farage Auto-Flair
#-------------------

url (includes): [twitter.com/boris_farage/]
set_flair:
    template_id: c3bc6560-ade3-11ea-a75c-0e0da4df02e3
overwrite_flair: true

---
#-------------------
#  Boris Farage Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["Boris Farage"] 
set_flair:
    template_id: c3bc6560-ade3-11ea-a75c-0e0da4df02e3
overwrite_flair: true

---
#-------------------
#  Eatonfools Auto-Flair
#-------------------

url (includes): [twitter.com/eatonfools]
set_flair:
    template_id: 1631af1a-ade1-11ea-b77c-0ea41cf21455
overwrite_flair: true

---
#-------------------
#  Eatonfools Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ["eatonfools"] 
set_flair:
    template_id: 1631af1a-ade1-11ea-b77c-0ea41cf21455
overwrite_flair: true

---
#-------------------
#  Joe King Auto-Flair
#-------------------

url (includes): [twitter.com/JoeKingVideos/]
set_flair:
    template_id: b35aa2b0-ece3-11ea-9fc3-0e797162d703
overwrite_flair: true

---
#-------------------
#  Joe King Youtube Auto-Flair
#-------------------

domain: [youtube.com, youtu.be]
media_author: ['Joe King'] 
set_flair:
    template_id: b35aa2b0-ece3-11ea-9fc3-0e797162d703
overwrite_flair: true

---
#-------------------
#  Joe King Reddit User Auto-Flair
#-------------------

type: submission
author:
    name: [only_JoeKing]
flair_template_id: 5bc3ae16-a69d-11ea-9560-0e51ce39b693
set_original_content: true
overwrite_flair: true
set_flair:
    template_id: b35aa2b0-ece3-11ea-9fc3-0e797162d703

---


##################################################
## SEC. VII. SET STATE FLAIR
##################################################


#-------------------
# Set State Flair - Alabama
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(setflair|flair|flairme) (alabama|al)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Alabama: AL"
        template_id: 50178c4a-d447-11ea-97e4-0ec3cf5ee2a1
    overwrite_flair: true

---
#-------------------
# Set State Flair - Alaska
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (alaska|ak)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Alaska: AK"
        template_id: 6b7594f0-d447-11ea-8621-0e00cf8d3ba1
    overwrite_flair: true

---
#-------------------
# Set State Flair - Arizona
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (arizona|az)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Arizona: AZ"
        template_id: 718381fe-d447-11ea-9b34-0e381ed008dd
    overwrite_flair: true

---
#-------------------
# Set State Flair - Arkansas
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (arkansas|ar)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Arkansas: AR"
        template_id: 77207af4-d447-11ea-8456-0e6a48e418ff
    overwrite_flair: true

---
#-------------------
# Set State Flair - California
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (California|CA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":California: CA"
        template_id: 7b904448-d447-11ea-8817-0e6287d3c5c3
    overwrite_flair: true

---
#-------------------
# Set State Flair - Colorado
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Colorado|CO)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Colorado: CO"
        template_id: 81a093a6-d447-11ea-9311-0eeca905d969
    overwrite_flair: true

---
#-------------------
# Set State Flair - Connecticut
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Connecticut|CT)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Connecticut: CT"
        template_id: 913f53c4-d447-11ea-972f-0e65d51e162f
    overwrite_flair: true

---
#-------------------
# Set State Flair - Delaware
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Delaware|DE)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Delaware: DE"
        template_id: 9afc1ce4-d447-11ea-a7d9-0e1350757e17
    overwrite_flair: true

---
#-------------------
# Set State Flair - Florida
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Florida|FL)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Florida: FL"
        template_id: a0367cae-d447-11ea-890a-0eddb6356ac3
    overwrite_flair: true

---
#-------------------
# Set State Flair - Georgia
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Georgia|GA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Georgia: GA"
        template_id: a5a31026-d447-11ea-a8f7-0edee2931219
    overwrite_flair: true

---
#-------------------
# Set State Flair - Hawaii
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Hawaii|HI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Hawaii: HI"
        template_id: abd33340-d447-11ea-8399-0e0f60ed88e3
    overwrite_flair: true

---
#-------------------
# Set State Flair - Idaho
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Idaho|ID)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Idaho: ID"
        template_id: b0e3f6c6-d447-11ea-9c37-0e15fa8cbbab
    overwrite_flair: true

---
#-------------------
# Set State Flair - Illinois
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Illinois|IL)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Illinois: IL"
        template_id: b7834cde-d447-11ea-8972-0eed90a2766f
    overwrite_flair: true

---
#-------------------
# Set State Flair - Indiana
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Indiana|IN)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Indiana: IN"
        template_id: be58bd6e-d447-11ea-8488-0e36f12df0cd
    overwrite_flair: true

---
#-------------------
# Set State Flair - Iowa
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Iowa|IA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Iowa: IA"
        template_id: c514c846-d447-11ea-a0c1-0ed37013b073
    overwrite_flair: true

---
#-------------------
# Set State Flair - Kansas
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Kansas|KS)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Kansas: KS"
        template_id: cafdd734-d447-11ea-9af8-0ecd3ae5864d
    overwrite_flair: true

---
#-------------------
# Set State Flair - Kentucky
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Kentucky|KY)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Kentucky: KY"
        template_id: fae5be1c-d447-11ea-92ad-0ea52043e62f
    overwrite_flair: true

---
#-------------------
# Set State Flair - Louisiana
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Louisiana|LA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Louisiana: LA"
        template_id: 04156776-d448-11ea-b27e-0e98c66924a5
    overwrite_flair: true

---
#-------------------
# Set State Flair - Maine
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Maine|ME)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Maine: ME"
        template_id: 0a6f8b7e-d448-11ea-a82e-0ec2336111e3
    overwrite_flair: true

---
#-------------------
# Set State Flair - Maryland
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Maryland|MD)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Maryland: MD"
        template_id: 10884b0e-d448-11ea-a576-0ed518cfd1af
    overwrite_flair: true

---
#-------------------
# Set State Flair - Massachusetts
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Massachusetts|MA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Massachusetts: MA"
        template_id: 15c3bb94-d448-11ea-8944-0ee414d04aa1
    overwrite_flair: true

---
#-------------------
# Set State Flair - Michigan
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Michigan|MI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Michigan: MI"
        template_id: 1b2646f6-d448-11ea-bce8-0e137e626a3b
    overwrite_flair: true

---
#-------------------
# Set State Flair - Minnesota
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Minnesota|MN)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Minnesota: MN"
        template_id: 21ffbf7a-d448-11ea-9e59-0e5bd679df75
    overwrite_flair: true

---
#-------------------
# Set State Flair - Mississippi
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Mississippi|MS)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Mississippi: MS"
        template_id: 2a9d40f8-d448-11ea-b67d-0efb0386c739
    overwrite_flair: true

---
#-------------------
# Set State Flair - Missouri
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Missouri|MO)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Missouri: MO"
        template_id: 35931942-d448-11ea-b48b-0e94499f68d9
    overwrite_flair: true

---
#-------------------
# Set State Flair - Montana
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Montana|MT)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Montana: MT"
        template_id: fdf43150-d448-11ea-8972-0eed90a2766f
    overwrite_flair: true

---
#-------------------
# Set State Flair - Nebraska
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Nebraska|NE)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Nebraska: NE"
        template_id: 0545fbf0-d449-11ea-b5ac-0e2132be4465
    overwrite_flair: true

---
#-------------------
# Set State Flair - Nevada
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Nevada|NV)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Nevada: NV"
        template_id: 0afa2292-d449-11ea-8afc-0e8f76c10def
    overwrite_flair: true

---
#-------------------
# Set State Flair - New Hampshire
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (New Hampshire|New-Hampshire|NH)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":New-Hampshire: NH"
        template_id: 1246b61e-d449-11ea-8909-0ec44824eac5
    overwrite_flair: true

---
#-------------------
# Set State Flair - New Jersey
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (New Jersey|New-Jersey|NJ)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":New-Jersey: NJ"
        template_id: 1bf0fb34-d449-11ea-96b1-0e4457aeeee9
    overwrite_flair: true

---
#-------------------
# Set State Flair - New Mexico
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (New Mexico|New-Mexico|NM)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":New-Mexico: NM"
        template_id: 21611590-d449-11ea-b996-0e14d0c28e55
    overwrite_flair: true

---
#-------------------
# Set State Flair - New York
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (New York|New-York|NY)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":New-York: NY"
        template_id: 266d617e-d449-11ea-bca8-0ecaeea315a9
    overwrite_flair: true

---
#-------------------
# Set State Flair - North Carolina
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (North Carolina|North-Carolina|NC)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":North-Carolina: NC"
        template_id: 2c364e36-d449-11ea-b674-0ead195dff13
    overwrite_flair: true

---
#-------------------
# Set State Flair - North Dakota
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (North Dakota|North-Dakota|ND)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":North-Dakota: ND"
        template_id: 3468fa40-d449-11ea-8ecc-0ef8c1ab7d47
    overwrite_flair: true

---
#-------------------
# Set State Flair - Ohio
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Ohio|OH)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Ohio: OH"
        template_id: 3c2468c8-d449-11ea-8fef-0e0fa7c49eed
    overwrite_flair: true

---
#-------------------
# Set State Flair - Oklahoma
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Oklahoma|OK)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Oklahoma: OK"
        template_id: 423975aa-d449-11ea-bb23-0e2e8fbe2d65
    overwrite_flair: true

---
#-------------------
# Set State Flair - Oregon
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Oregon|OR)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Oregon: OR"
        template_id: 48813736-d449-11ea-b57f-0ecc2213f4d9
    overwrite_flair: true

---
#-------------------
# Set State Flair - Pennsylvania
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Pennsylvania|PA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Pennsylvania: PA"
        template_id: 9ccc021c-d449-11ea-94d4-0ed83aa88de5
    overwrite_flair: true

---
#-------------------
# Set State Flair - Rhode Islanda
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Rhode Islanda|Rhode-Islanda|RI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Rhode-Island: RI"
        template_id: a1c44928-d449-11ea-9465-0e1ba9fdf1bf
    overwrite_flair: true

---
#-------------------
# Set State Flair - South Carolina
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (South Carolina|South-Carolina|SC)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":South-Carolina: SC"
        template_id: a57c746e-d449-11ea-933b-0eaac258632b
    overwrite_flair: true

---
#-------------------
# Set State Flair - South Dakota
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (South Dakota|South-Dakota|SD)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":South-Dakota: SD"
        template_id: aa017566-d449-11ea-a4ea-0efdf390b0db
    overwrite_flair: true

---
#-------------------
# Set State Flair - Tennessee
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Tennessee|TN)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Tennessee: TN"
        template_id: aedfb156-d449-11ea-b23e-0e0a47e4eddd
    overwrite_flair: true

---
#-------------------
# Set State Flair - Texas
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Texas|TX)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Texas: TX"
        template_id: b23055d6-d449-11ea-890e-0e9a84042bf7
    overwrite_flair: true

---
#-------------------
# Set State Flair - Utah
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Utah|UT)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Utah: UT"
        template_id: bacb84b8-d449-11ea-9a38-0e2735d78ee9
    overwrite_flair: true

---
#-------------------
# Set State Flair - Vermont
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Vermont|VT)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Vermont: VT"
        template_id: c004d15a-d449-11ea-bdd0-0eb3412fd411
    overwrite_flair: true

---
#-------------------
# Set State Flair - Virginia
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Virginia|VA)']
author:
    ~flair_template_id: 9b0fad34-38ef-11ea-915c-0e0b239352bd
    set_flair:
        text: ":Virginia: VA"
        template_id: c5e83030-d449-11ea-9d12-0e6618edb565
    overwrite_flair: true

---
#-------------------
# Set State Flair - Washington
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Washington|WA)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Washington: WA"
        template_id: d3850d1c-d449-11ea-99d2-0e37d5d0d5d3
    overwrite_flair: true

---
#-------------------
# Set State Flair - West Virginia
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (West Virginia|West-Virginia|WV)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":West-Virginia: WV"
        template_id: da693266-d449-11ea-b29b-0e13a6179825
    overwrite_flair: true

---
#-------------------
# Set State Flair - Wisconsin
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Wisconsin|WI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Wisconsin: WI"
        template_id: e03862f2-d449-11ea-b168-0e2474133037
    overwrite_flair: true

---
#-------------------
# Set State Flair - Wyoming
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Wyoming|WY)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Wyoming: WY"
        template_id: e61e78b4-d449-11ea-8866-0eb801b3b63b
    overwrite_flair: true

---
#-------------------
# Set State Flair - American Samoa
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (American Samoa|American-Samoa|AS)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":American-Samoa: AS"
        template_id: ea6728bc-d449-11ea-85ed-0e187ab9024d
    overwrite_flair: true

---
#-------------------
# Set State Flair - District of Columbia
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (District of Columbia|District-of-Columbia|DC)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":District-of-Columbia: DC"
        template_id: ee31fd28-d449-11ea-8169-0e70482fd47b
    overwrite_flair: true

---
#-------------------
# Set State Flair - Guam
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Guam|GU)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Guam: GU"
        template_id: f331f120-d449-11ea-a470-0e498bd2f1e9
    overwrite_flair: true

---
#-------------------
# Set State Flair - Northern Mariana Islands
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Northern Mariana Islands|Northern-Mariana-Islands|NMI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Northern-Mariana-Islands: NMI"
        template_id: fa917f08-d449-11ea-8782-0e5d8bc480fd
    overwrite_flair: true

---
#-------------------
# Set State Flair - Puerto Rico
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Puerto Rico|Puerto-Rico|PR)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Puerto-Rico: PR"
        template_id: ff94e79c-d449-11ea-890e-0e9a84042bf7
    overwrite_flair: true

---
#-------------------
# Set State Flair - Virgin Islands
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (Virgin Islands|Virgin-Islands|VI)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":Virgin-Islands: VI"
        template_id: 07157108-d44a-11ea-bdd0-0eb3412fd411
    overwrite_flair: true

---
#-------------------
# Set State Flair - International
#-------------------

type: comment
moderators_exempt: false
body+body (regex): ['^!(Setflair|flair|flairme) (International|INT)']
author:
    ~flair_template_id: cf7a1d50-d441-11ea-9919-0ec75c1815e3
    set_flair:
        text: ":International: INT"
        template_id: 0cf858f6-d44a-11ea-a0c1-0ed37013b073
    overwrite_flair: true

---

##################################################
## SEC. VIII. OLD SUMBMISSION REPORTS - Currently Not In Use
##################################################

---
#-------------------
# Non-Supporter Question/Concern Troll - Report, Submission
#-------------------
#
#type: submission
#author:
#    is_contributor: false
#title (regex, includes): ["what do you( guys)? think", "How (is|will) Trump", "do you think", "what is your (position|stance|opinion|thought)", "what are your (positions|stances|opinions|thoughts)", "anyone else concerned", "what (is|will) Trump('s|s)? (stance|doing|do|going to do)", "What does Trump think (about|of)", "(Why|What|How) is Trump"]
#action: report
#report_reason: "Possible non supporter question. Review to ensure isn't anti-Trump or meant for r/AskTrumpSupporters."
#
#---
#-------------------
#  All Non-Mod Text Posts Get Queue Review
#-------------------
#
#type: text submission
#moderators_exempt: true
#author:
#    is_contributor: false
#action: report
#action_reason: "Text Post: Review to ensure isn't anti-Trump or meant for r/AskTrumpSupporters"
#
#---
#-------------------
# "I was banned from X for Y" spam / Rule 4 or 8 - Report
#-------------------
#
#title (regex, includes): ['\bbanned\b']
#moderators_exempt: true
#author:
#    is_contributor: false
#action: report
#eport_reason: 'Possible Rule 4 or 8 violation / "I was banned from X for Y": {{match}}.'
#
#---
#-------------------
# HEY R/ALL! - Possible vote manipulation
#-------------------
#
#title (starts-with, regex): ['\b(hi( there)?|hey(a| there)?|hello|howdy) (/r/all|r/all|r all|rall)\b']
#moderators_exempt: false
#action: report
#report_reason: 'Possible vote manipulation: {{match}}. Please review and if so, remove immediately.'
#
#---
#-------------------
# Asking for Upvotes (<-, <=) - Vote Manipulation
#-------------------
#
#title (starts-with): ['<-', '<=', '<~', '<<', 'get this (to the top|to the front|to the first|to the 1st|to .*/all|trending)', '\bto the top\b', '\bupvote this\b', 'upvote( this)? for', "\\bget this to .*/all\\b", '\bfront page\b', '\bbe a shame\b']
#moderators_exempt: false
#action: report
#action_reason: "Possible vote manipulation: {{match}}. Please review."
#
#---
#-------------------
# Possible Vote Manipulation/Harassment/Doxxing
#-------------------
#
#title (includes, regex): ['\bsend this to\b']
#~title (includes, regex): ["\\b(not|don't|won't|shouldn't|can't|cannot|will|should|i|you|\\sme|we|they|never)\\s+send this to\\b"]
#moderators_exempt: false
#action: report
#action_reason: "Possible vote manipulation/harassment/doxxing: {{match}}. Please review."
#
#---
#-------------------
# T-shirt spammers
#-------------------
#
#title (includes, regex): ['\bte?e?.?shirt?\b', '\btee?\b']
#action: report
#action_reason: "Review for possible t-shirt spam."
#
#---
#-------------------
# T-Shirt Spam Phrase - report
#-------------------
#
#type: any
#body+title (regex, includes): ['\bShirt Source\b', '\bT-shirt here\b', '\bgot it here\b', '\bget it here\b', '\bthis design\b', '\bsimilar design\b', '\bgot this T\b', '\bbuy this tee\b', '\bgot this t\b', '\bThis Shirt Available Here\b', '\bqualifiedfashi?1\b', '\bvisit my profile\b', '\bthis shirt\b', '\bsimilar here\b']
#moderators_exempt: true
#author:
#    is_contributor: false
#action: report
#action_reason: "Review for possible T Shirt / Coin spam account: {{match}}"
#
#---

```

**>>>> automoderator End <<<<**
### end