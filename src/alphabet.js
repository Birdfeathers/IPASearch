const monophthong = 1;
const diphthong = 2;
const rColored = "r-colored";
const longMonophthong = "long";
const Phoneme = 
[
    // vowels
    {IPA: "ɑ",  type:  "vowel", articulation: [monophthong]},
    {IPA: "æ",  type:  "vowel", articulation: [monophthong]},
    {IPA: "ə",  type:  "vowel", articulation: [monophthong]},
    {IPA: "ɔ",  type:  "vowel", articulation: [longMonophthong]},
    {IPA: "aw",  type:  "vowel", articulation: [diphthong]},
    {IPA: "aj",  type:  "vowel", articulation: [diphthong]},
    {IPA: "ɛ",  type:  "vowel", articulation: [monophthong]},
    {IPA: "ɚ",  type:  "vowel", articulation: [rColored]},
    {IPA: "ej",  type:  "vowel", articulation: [diphthong]},
    {IPA: "ɪ",  type:  "vowel", articulation: [monophthong]},
    {IPA: "i",  type:  "vowel", articulation: [longMonophthong]},
    {IPA: "ow",  type:  "vowel", articulation: [diphthong]},
    {IPA: "oj",  type:  "vowel", articulation: [diphthong]},
    {IPA: "ʊ",  type:  "vowel", articulation: [monophthong]},
    {IPA: "uw",  type:  "vowel", articulation: [diphthong]},
    //consonents
    // voicedness, place, manner
    {IPA: "b",  type:  "consonant", articulation: ["voiced", "labial", "stop"]},
    {IPA: "tʃ",  type:  "consonant", articulation:["voiceless", "postalveolar", "affricate"]}, //potentially confusing
    {IPA: "d",  type:  "consonant", articulation: ["voiced", "alveolar", "stop"]},
    {IPA: "ð",  type:  "consonant", articulation: ["voiced", "interdental", "fricative"]},
    {IPA: "f",  type:  "consonant", articulation: ["voiceless", "labiodental", "labial", "fricative"]},
    {IPA: "g",  type:  "consonant", articulation: ["voiced", "velar", "stop"]},
    {IPA: "h",  type:  "consonant", articulation: ["voiceless", "glottal", "fricative"]},
    {IPA: "dʒ",  type:  "consonant", articulation:["voiced", "postalveolar", "affricate"]}, //potentially confusing
    {IPA: "k",  type:  "consonant", articulation: ["voiceless", "velar", "stop"]},
    {IPA: "l",  type:  "consonant", articulation: ["voiced", "alveolar", "lateral", "approximant"]},
    {IPA: "m",  type:  "consonant", articulation: ["voiced", "labial", "nasal"]},
    {IPA: "n",  type:  "consonant", articulation: ["voiced", "alveolar", "nasal"]},
    {IPA: "ŋ",  type:  "consonant", articulation: ["voiced", "velar", "nasal"]},
    {IPA: "p",  type:  "consonant", articulation: ["voiceless", "labial", "stop"]},
    {IPA: "ɹ",  type:  "consonant", articulation: ["voiced", "postalveolar", "approximant"]},
    {IPA: "s",  type:  "consonant", articulation: ["voiceless", "alveolar", "fricative", "sibilant"]},
    {IPA: "ʃ",  type:  "consonant", articulation: ["voiceless", "postalveolar", "fricative", "sibilant"]},
    {IPA: "t",  type:  "consonant", articulation: ["voiceless", "alveolar", "stop"]},
    {IPA: "θ",  type:  "consonant", articulation: ["voiceless", "interdental", "fricative"]},
    {IPA: "v",  type:  "consonant", articulation: ["voiced", "labiodental", "labial", "fricative"]},
    {IPA: "w",  type:  "consonant", articulation: ["voiced", "labiovelar", "labial", "approximant"]},
    {IPA: "j",  type:  "consonant", articulation: ["voiced", "palatal","approximant"]},
    {IPA: "z",  type:  "consonant", articulation: ["voiced", "alveolar","sibilant", "fricative"]},
    {IPA: "z",  type:  "consonant", articulation: ["voiced", "postalveolar","sibilant", "fricative"]},
]