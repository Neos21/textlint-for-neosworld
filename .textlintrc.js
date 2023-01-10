module.exports = {
  "filters": {},
  "rules": {
    "@textlint-ja/no-synonyms": true,
    "@textlint-ja/textlint-rule-no-insert-dropping-sa": true,
    "@textlint-rule/no-invalid-control-character": true,
    "ja-hiragana-fukushi": {
      "rulePath": "./sources/ja-hiragana-fukushi.yaml"  // 個人的に使いたい漢字を許可するため辞書をフォークした
    },
    //"ja-hiragana-hojodoushi": true,  // 「致し」だけ許してほしい
    //"ja-hiragana-keishikimeishi": false,  // 「方」「時」が回避できないため使用しない
    //"ja-joyo-or-jinmeiyo-kanji": false,  // 「游」「梱」などがアウトになるため使用しない
    "ja-no-abusage": true,
    // "ja-no-inappropriate-words": false,  // 「バカ」が回避できないため使用しない
    //"ja-no-orthographic-variants": true,
    "ja-unnatural-alphabet": {
      "allow": [
        "a", "i", "u", "e", "o", "n",
        "/[A-Z]/",
        "w", "ｗ",  // 「笑」のつもりの「w」を除外する
        "v", "ｖ"   // ピースのつもりの「v」を除外する
      ]
    },
    //"joyo-kanji": false,  // 「々」が回避できないため使用しない
    "no-dropping-the-ra": true,
    //"no-hoso-kinshi-yogo": false,  // 「子供」が回避できないため使用しない
    "no-kangxi-radicals": true,
    "no-nfd": true,
    "no-zero-width-spaces": true
  },
  "plugins": [
    "html"
  ]
};
