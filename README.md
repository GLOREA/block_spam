# Blocks Spam

Form への機械入力を阻止する jQuery を利用したプラグイン。

## Usage
jQuery 2.1.3 以上推奨

プラグインを読み込み、DOMツリー構築完了後に blocksSpamMethods.init(); を実行してください。
name 属性の末尾に、オプションパラメータ safix で指定した文字列が付いている input または textarea タグに対する機械入力を阻止します。

### オプション
* safix  
    任意の文字列を指定します。デフォルト値は blocks_spam_dummy
* check_time  
    入力の監視時間を指定します。短ければ短いほど負荷が上がります。デフォルト値は 33

## Sample
<>


[Demo]: http://glorea.sub.jp/demo/blocks_spam.html        "Blocks spam demo."
