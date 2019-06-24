export const urlmap = {
    "home": "https://www.cs.technik.fhnw.ch/lostintransition/",
    "start": "https://www.cs.technik.fhnw.ch/lostintransition/envelope/start/",
    "middle": "https://www.cs.technik.fhnw.ch/lostintransition/envelope/middle/",
    "end": "https://www.cs.technik.fhnw.ch/lostintransition/envelope/end/",
    
    "et": "https://www.cs.technik.fhnw.ch/lostintransition/envelope/et/",
    "thanks": "https://www.cs.technik.fhnw.ch/lostintransition/envelope/thanks/",

    "MSSD": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/SS/demographics.html",
    "MSSA":	"https://www.cs.technik.fhnw.ch/lostintransition/mortality/SS/absolute.html",
    "MSSR":	"https://www.cs.technik.fhnw.ch/lostintransition/mortality/SS/relative.html",
    "MSSC":	"https://www.cs.technik.fhnw.ch/lostintransition/mortality/SS/causes.html",

    "MSAD": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/SA/demographics.html",
    "MSAA": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/SA/absolute.html",
    "MSAR": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/SA/relative.html",
    "MSAC": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/SA/causes.html",

    "MJSD": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JS/demographics.html",
    "MJSA": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JS/absolute.html",
    "MJSR": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JS/relative.html",
    "MJSC": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JS/causes.html",

    "MJAD": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JA/demographics.html",
    "MJAA": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JA/absolute.html",
    "MJAR": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JA/relative.html",
    "MJAC": "https://www.cs.technik.fhnw.ch/lostintransition/mortality/JA/causes.html",

    "ESSA": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SSA/",
    "ESSB": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SSB/",
    "ESSC": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SSC/",
    "ESSD": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SSD/",

    "ESAA": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SAA/",
    "ESAB": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SAB/",
    "ESAC": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SAC/",
    "ESAD": "https://www.cs.technik.fhnw.ch/lostintransition/energy/SAD/",

    "EJSA": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JSA/",
    "EJSB": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JSB/",
    "EJSC": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JSC/",
    "EJSD": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JSD/",

    "EJAA": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JAA/",
    "EJAB": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JAB/",
    "EJAC": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JAC/",
    "EJAD": "https://www.cs.technik.fhnw.ch/lostintransition/energy/JAD/",
}


export const flows = {
    "subjType1": ["MSAD", "MSAA", "MSAR", "MSAC", "middle", "EJAA", "EJAB", "EJAC", "EJAD", "end"],
    "subjType2": ["MJSD", "MJSA", "MJSR", "MJSC", "middle", "ESSA", "ESSB", "ESSC", "ESSD", "end"],
    "subjType3": ["MSSD", "MSSA", "MSSR", "MSSC", "middle", "EJSA", "EJSB", "EJSC", "EJSD", "end"],
    "subjType4": ["MJAD", "MJAA", "MJAR", "MJAC", "middle", "ESAA", "ESAB", "ESAC", "ESAD", "end"],

    "et1": ["MJAD", "MJAA", "MJSR", "MJSC", "ESAA", "ESAB", "ESSC", "ESSD", "thanks"],
    "et2": ["MJSD", "MJSA", "MJAR", "MJAC", "ESSA", "ESSB", "ESAC", "ESAD", "thanks"],
    "et3": ["MSAD", "MSAA", "MSSR", "MSSC", "EJAA", "EJAB", "EJSC", "EJSD", "thanks"],
    "et4": ["MSSD", "MSSA", "MSAR", "MSAC", "EJSA", "EJSB", "EJAC", "EJAD", "thanks"],
    "et5": ["EJAA", "EJAB", "EJSC", "EJSD", "MSAD", "MSAA", "MSSR", "MSSC", "thanks"],
    "et6": ["EJSA", "EJSB", "EJAC", "EJAD", "MSSD", "MSSA", "MSAR", "MSAC", "thanks"],
    "et7": ["ESAA", "ESAB", "ESSC", "ESSD", "MJAD", "MJAA", "MJSR", "MJSC", "thanks"],
    "et8": ["ESSA", "ESSB", "ESAC", "ESAD", "MJSD", "MJSA", "MJAR", "MJAC", "thanks"],
}



