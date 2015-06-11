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
&lt;!DOCTYPE html&gt;  
&lt;html&gt;  
    &lt;head&gt;  
        &lt;title&gt;Sample&lt;/title&gt;  
        &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/script&gt;  
        &lt;script src="js/blocks_spam_min.js"&gt;&lt;/script&gt;  
    &lt;/head&gt;  
    &lt;body&gt;  
        &lt;form&gt;  
            &lt;input type="text" name="test1_sample"&gt;  
            &lt;textarea name="area1"&gt;&lt;/textarea&gt;  
            &lt;button type="submit"&gt;Submit&lt;/button&gt;  
        &lt;/form&gt;  
        &lt;script&gt;  
            $(function(){  
                blocksSpamMethods.init( { safix: "sample" } );  
            });  
        &lt;/script&gt;  
    &lt;/body&gt;  
&lt;/html&gt;  

