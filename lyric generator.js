const lyrics = [
    "i'm a lover undercover",
  "in my bedsheets you'll discover",
  "you're the knife and i'm the butter",
  "when you cut it do you shudder?",
  "i do",
  "yes i do",
  "i'm the singer you're the drummer",
  "when you hit it, hit it rougher",
  "'cause the summer's such a bummer",
  "when i fake it for a lover like you",
  "'cause i think i like you",
  "i'm a lover undercover",
  "in my bedsheets you'll discover",
  "you're the knife and i'm the butter",
  "when you cut it do you shudder?",
  "i do",
  "yes i do",
  "i'm the singer you're the drummer",
  "when you hit it, hit it rougher",
  "'cause the summer's such a bummer",
  "when i fake it for a lover like you",
  "'cause i think i like you",
  "i-i-i-i like-like-like you",
  "i-i-i like-like whatever you do",
  "what you do",
  "what you do mmm m",
  "you play your tricks, what sticks gets stuck",
  "through thick and thin, a string i pluck",
  "when we were kids, and lighting struck",
  "it hit your head, your heart conducts it through",
  "right through",
  "in two",
  "my love runs through you",
  "i'm a lover undercover",
  "in my bedsheets you'll discover",
  "you're the knife and i'm the butter",
  "when you cut it do you shudder?",
  "i do",
  "yes i do",
  "i'm the singer you're the drummer",
  "when you hit it, hit it rougher",
  "'cause the summer's such a bummer",
  "when i fake it for a lover like you",
  "'cause i think i like you",
  "i'm a lover undercover",
  "in my bedsheets you'll discover",
  "you're the knife and i'm the butter",
  "when you cut it do you shudder?",
  "i do",
  "yes i do",
  "i'm the singer you're the drummer",
  "when you hit it, hit it rougher",
  "'cause the summer's such a bummer",
  "when i fake it for a lover like you",
  "'cause i think i like you",
  "i-i-i-i like-like-like you",
  "i-i-i like-like whatever you do",
  "what you do",
  "what you do mmm mm mm mm",
  "i like the way you move",
  "i do",
  "yes, i do",
  "think i like you",
  "whatever you say, whatever you do",
  "whatever you play, whatever, screw you",
  "whatever you say, whatever you do",
  "what movie you play, i'd rather watch you",
  "whatever you want, whatever you choose",
  "it's never enough, i only want you",
  "'cause i think i like you",

  "you know i love it when you talk about me",
  "it's egotistic but you’re sober, sally, now",
  "did you think i couldn't take it? shit, i hit the pavement",
  "but i love it when your eyes are on me",
  "ouch",
  "am i wasting my time? put a fist to the fight for you",
  "head out of mind, you're fucking up the mood, wow",
  "think i need more time 'cuz i cant get you to move",
  "if you're paralyzed, keep your eye, an eye on me now",
  "you know i love it when uyou talk about me",
  "it's egotistic but you’re sober, sally, now",
  "did you think i couldn't take it? head hitting the pavement",
  "but i love it when your eyes are on me",
  "ouch",
  "if you think i'm fine, i'm a crybaby, who knew?",
  "if i could like a guy then i think that it'd be u",
  "think i fell in love with a statue, couldn't move",
  "nothing more more than drugs, just a chemical to u",
  "you know i love it when you talk about me",
  "it's egotistic but you’re sober, sally, now",
  "did you think i couldn't take it",
  "head hitting the pavement",
  "but i love it when your eyes are on me",
  "ouch",
  "you could waste my time, ‘cause i’d fight just to fly with you",
  "take a hit, don’t cry",
  "just bite my lip and chew now",
  "if i like this guy, then i think i’m just confused",
  "‘cause i’m terrified, of falling hard for you",
  "ouch",
  
  "da da da da da-da-da-da",
  "i need to know, where do you go when you get away?",
  "no diamonds or gold couldn’t have a say",
  "i’ll bury this secret in my grave",
  "cuz i love you so, i wrote it in bold, i'll get my way",
  "i'm taking the road to find you today",
  "‘cause 6 feet below is too far away",
  "you're too far away",
  "blue jeans, diamonds in the rough",
  "you're a pretty boy who thinks he’s pretty tough",
  "got a secret, spit it in my cup",
  "god, he’s playing pretty rough",
  "with the girl i think i love",
  "wore a white shirt, stain upon the cuff",
  "at 18 i think i called your bluff oh",
  "secrets, you never had a crush",
  "when she smiles you don’t blush",
  "for a girl you think love, like",
  "green light, no time",
  "seems like i don’t mind",
  "you but i do",
  "no rush, no fight",
  "is my crush such a crime to you?",
  "guess i lose",
  "i need to know, where do you go when you get away?",
  "no diamonds or gold couldn’t have a say",
  "i’ll bury this secret in my grave",
  "cuz i love you so, i wrote it in bold, i'll get my way",
  "i'm taking the road to find you today",
  "‘cause 6 feet below is too far away",
  "you're too far away",
  "(da da da daida)",
  "ooo it’s you i choose",
  "ooo it’s you i choose",

  "you're in my head like a melody",
  "got me singing like la di da da",
  "and there's a part that plays on repeat",
  "and it goes like na na na na",
  "marzipan you taste alright",
  "i'll like you today, not tonight",
  "'cause melodies will lose their time",
  "like na na na na na na na na",
  "stuck between my legs, stuck inside my head",
  "pressure pushing down, stuck inside me now",
  "tried to make things right, blood on sheets of white",
  "think i want you out, voice is getting loud",
  "are we living in my american fantasy?",
  "are there parking lots in purgatory?",
  "shirt off my back but it fits too tight",
  "you fit through the cracks of my brain despite",
  "i tried to forget, guess i'll pay the price",
  "on read, print receipt, still you're on my mind",

  "draw me in, your claw, my skin, cuts through",
  "now you're pissing on my shoes",
  "get out, gotta get out of the doghouse",
  "‘cause you drive me crazy",
  "get back, gotta get back",
  "i'm your doormat, wipe your shoes m'lady",
  "you're barking up, i'm biting down",
  "if anyone could disobey me",
  "in the dark, i'll let you bite me now",
  "fate folds in, my paper skin cuts you",
  "guess there's nothing i can do",
  "never ever can relax",
  "on brink and border of attack",
  "it's me who's scraping off the plaque",
  "the rank of order will collapse with you",
  "and there's nothing i can do, except to",
  "get out, gotta get out of the doghouse",
  "‘cause you drive me crazy",
  "get back, gotta get back",
  "i'm your doormat, wipe your shoes m'lady",
  "you're barking up, i'm biting down",
  "if anyone could disobey me",
  "in the dark, i'll let you bite me now",

  "help me out, you’ve been fighting far too long",
  "you scream and shout for the death of your old dog",
  "when you said, “i’ll sleep tonight,” the tears ran thick down from your eyes",
  "mom and daddy don’t know why, but i’ll find out",
  "makeup dripped down from the sky, rain in black and petrified",
  "pebbles grown in crystalline, flowers sprout",
  "do do do, cherries in goo",
  "the dog lies dead in anodyne",
  "garden’s green now from her cries",
  "do do do, the pain killed you too",
  "a candied chin from cherries dry",
  "flowers grown from baby’s eyes",
  "ooo nothing ever really matters to you, to you, oh",
  "ooo did the ashes that you scattered consume you, consume you?",
  "when you said “i’ll sleep tonight,” the tears ran thick down from your eyes",
  "mom and daddy don’t know why, but i’ll find out",
  "makeup dripped down from the sky, rain in black and petrified",
  "pebbles grown in crystalline, flowers sprout",
  "um i didnt really think that you knew",
  "and now youre stuck with me and",
  "i dont wanna be alone anymore, because of you",
  "tried to fake it, glass i'm cased in",
  "the shower flows, you've seen me naked",
  "i can’t take it, hit the pavement",
  "the sun goes down, and now im waking up",
  "when you said “i’ll sleep tonight,” the tears ran thick down from your eyes",
  "mom and daddy don’t know why, but i’ll find out",
  "makeup dripped down from the sky, rain in black and petrified",
  "pebbles grown in crystalline, flowers sprout",
  "ooo nothing ever really matters to you, to you, oh",
  "ooo did the ashes that you scattered consume you, consume you?",

  "hot, i'm coming in hot",
  "as if greetings weren’t enough for me, it’s getting pretty hot",
  "‘cause i tried to fake it, feelings faded",
  "god, you wear a facade",
  "‘cuz you’re getting dinner company, but your plate here has a lot",
  "am i worth the mention, ms. intentions?",
  "saw in your eyes, a dream, there’s an ocean full of poppies and they're blooming for the other me",
  "didn’t wanna waste them, pluck & break them",
  "hot, it’s too hot",
  "getting hot, and you’re too much for me",
  "you cross dimensions, ms. intentions",

  "time has been passing by me",
  "have i told you it’s exhausting?",
  "living life just to do my laundry",
  "got this burdened body, wish you’d wash it off me",
  "and every night, i start sinking deeper",
  "drowning in this dark demeanor",
  "tell myself that i’m just a dreamer",
  "got no bark, no bite",
  "i’m no golden retriever",
  "and it’s so cynical, cyclical, washing up my typical",
  "crimson lips, sour kiss, afraid i’ve had enough of this",
  "i want to be left alone",
  "my life is lived just for show",
  "so can i burn this body?",
  "can you wash it for me?",
  "will you do my laundry when i’m turning twenty?",
  "why would you want to want to want me when i don’t really want me?",
  "g-got a little lazy",
  "g-got a little bit older",
  "still need a shoulder",
  "miss being your big sister, i really, really miss her",
  "time has been passing by me",
  "have i told you it’s exhausting?",
  "living life just to do my laundry",
  "got this burdened body, wish you’d wash it off me",
  "and every night, i start sinking deeper",
  "drowning in this dark demeanor",
  "tell myself that i’m just a dreamer",
  "got no bark, no bite",
  "i’m no golden retriever",
  "got a little bit, g-got a little too",
  "got a little hit, g-gotta live with you",
  "want to make you mine, bite too much to chew",
  "if crying’s such a crime, i’d cut my tears in two",
  "‘cause i, i wash and dry, to make my life worth the time",
  "time has been passing by me",
  "have i told you it’s exhausting?",
  "living life just to do my laundry",
  "got this burdened body, wish you’d wash it off me",
  "and every night, i start sinking deeper",
  "drowning in this dark demeanor",
  "tell myself that i’m just a dreamer",
  "got no bark, no bite",
  "i’m no golden retriever",
  "got a little bit, g-got a little too",
  "got a little hit, g-gotta live with you",
  "want to make you mine, bite too much to chew",
  "if crying’s such a crime, i’d cut my tears in two",
  "‘cause i, i wash and dry, to make my life worth the time",

  "it’s pretty white outside tonight, covers all the bones you hide, i’ll cut through",
  "my lillies could bloom",
  "you said, “pretty sure i’ll complicate things, pretty shit that you won’t date me, dude”",
  "i’m not in the mood",
  "the bodies here, they suffocate me",
  "when you talk, no god could save my life",
  "when we kiss, you’re tongue’s between my eyes",
  "hot shit, or not, eat it and die",
  "[whistles]",
  "i’d rather you emasculated (emasculated)",
  "color me through eyes so jaded, blue (so jaded blue)",
  "an iris for you (you)",
  "so, love me now or love me later, love the lives of shitty neighbors too",
  "i’m just passing through",
  "the bodies here, they suffocate me",
  "when you talk, no god could save my life",
  "when we kiss, you’re tongue’s between my eyes",
  "hot shit, or not, eat it and die",
  "[whistles]",
  "if i could love again, i’d love you like a kid",
  "a kid who found a home, 'stead of memories to live",
  "the bodies here, they suffocate me",
  "when you talk, no god could save my life",
  "i'll stick my tongue between your eyes",
  "hot shit, or not, eat it and die",
  "[whistles]",
  "eat it and die",
  "just go fuckin' die",
  "yeah, eat shit and die",
  "oh ahh",

  "if i’m gonna love this time, then “i do-oo-o-oo-o-o-o-o, yoo-o-o-o-o-o-ou”",
  "i don’t want your sympathy, i’ll close my eyes when life feels like a chore (ooo)",
  "i don’t like these other guys, when we’re hanging out, i keep one foot out the door (oooo)",
  "babydoll, no i don’t mind, let me be a dog tonight for you",
  "‘cause i’d do you, or whatever",
  "‘cause i-i-i-i love you whenever, baby",
  "time will screw us together",
  "yes, i’ll love you forever, maybe",
  "and i’d do you, whatever!",
  "do-o-o yo-o-o-o-ou",
  "do-o-o yo-o-o-o-ou",
  "i don’t wanna be that guy with a thousand types and a tally keeping score (it’s what i do)",
  "said he couldn’t live a life so tied up tight, wanna bang bang when i’m bored (i’m just a dude)",
  "babydoll, no i don’t mind, a billion bodies couldn't be quite like you",
  "‘cause i’d do you, or whatever",
  "‘cause i-i-i-i love you whenever baby",
  "time will screw us together",
  "yes, i’ll love you forever, maybe",
  "and i’d do you, whatever!",
  "do-o-o yo-o-o-o-ou",
  "do-o-o yo-o-o-o-ou",
  "‘cause i do, or whatever",
  "bid adieu to you, i’ll never say it",
  "dude, we go together",
  "but my heart can’t take the pressure of it",
  "do-o-o-o",
  "i do-o-o-o! (i, i, i, i)",

  "i’m in love with a ghost",
  "i’ve got a heartache, i’ve got it all",
  "when she had nowhere to go",
  "she phased right through me and now she’s gone",
  "so touch me, baby, the way you do",
  "your body’s gone and my soul is blue",
  "we’re miles away but i’m done complaining",
  "don’t know you, honey, but god, do i miss",
  "you, you, you, you",
  "i’m in love with a ghoul with crazy hair and these deep brown eyes",
  "we used to run ‘round the school, now we live under different skies",
  "so touch me, baby, the way you do",
  "your body’s gone and my soul is blue",
  "we’re miles away but i’m done complaining",
  "don’t know you, honey, but god, do i miss",
  "you, you, you, you",
  "i’ve been waiting and chasing, honey",
  "my heart’s been aching for something new",
  "waiting and chasing, honey",
  "my heart’s been aching for somebody like",
  "you, you, you, you",

  "everybody loves aubrey, the only girl i’d want to be",
  "she’d hold you in a choke and squeeze",
  "yeah, everybody loves aubrey",
  "she’s magic, no bullshit",
  "she’d beat you to a pulp and leave",
  "she’s lovely, i know it",
  "she never even feels guilty",
  "aubrey, aubrey, aubrey",
  "you’re the most beautiful girl, wish i could give you the world",
  "aubrey, aubrey, aubrey",
  "i’m down on my knees, i’m begging, please don’t kill me",
  "oooh, oooh, (please don’t kill me)",
  "oooh, oooh, (please don’t kill me)",
  "taking her to tennis courts, hoping she won’t break my heart",
  "a pocket knife sits in her shorts, told her she’s the girl that i fell for",
  "she’s magic, no bullshit",
  "she’d beat you to a pulp and leave",
  "she’s lovely, i know it",
  "she never even feels guilty",
  "aubrey, aubrey, aubrey",
  "you’re the most beautiful girl, wish i could give you the world",
  "aubrey, aubrey, aubrey",
  "i’m down on my knees, i’m begging, please don’t kill me",
  "oooh, oooh, (please don’t kill me)",
  "oooh, oooh, (please don’t kill me)",
  "please, i’m begging, please",
  "aubrey, aubrey, aubrey",
  "you’re the most beautiful girl, wish i could give you the world",
  "aubrey, aubrey, aubrey",
  "i’m down on my knees, i’m begging, please don’t kill me",
  "oooh, oooh, (please don’t kill me)",
  "oooh, oooh, (please don’t kill me)"

];

function generateLyric(){
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    const randomLyric = lyrics[randomIndex];
    document.getElementById(`lyric-box`).innerText = randomLyric;
}

document.getElementById(`button`).addEventListener(`click`, generateLyric);
