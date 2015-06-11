# Block Spam

Form への機械入力を阻止する jQuery を利用したプラグイン。

## Usage
jQuery 2.1.3 以上推奨

プラグインを読み込み、DOMツリー構築完了後に blockSpam.init(); を実行してください。
name 属性の末尾に、オプションパラメータ safix で指定した文字列が付いている input または textarea タグに対する機械入力を阻止します。
送信されるパラメータの名称は safix を取り除いたものになります。

例：test_block_spam_dummy → test

### Options
* safix  
    任意の文字列を指定します。デフォルト値は block_spam_dummy
* check_time  
    入力の監視時間を指定します。短ければ短いほど負荷が上がります。デフォルト値は 33

### Notice
機械入力を全て弾きます。JavaScript での入力も防ぎますので注意してください。
JavaScript で値を操作したい場合は safix を取り除いた name を指定してください。

例：

    <input name="test_block_spam_dummy" type="text">

の値を修正したい場合は

    $("input[name=test]").val("sample");

## Sample
    <!DOCTYPE html>  
    <html>  
        <head>  
            <title>Sample</title>  
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>  
            <script src="js/block_spam_min.js"></script>  
        </head>  
        <body>  
            <form>  
                <input type="text" name="test1_sample">  
                <textarea name="area1"></textarea>  
                <button type="submit">Submit</button>  
            </form>  
            <script>  
                $(function(){  
                    blockSpam.init( { safix: "sample" } );  
                });  
            </script>  
        </body>  
    </html>  

## LICENCE

    The MIT License (MIT)
    Copyright (c) 2015 Yusuke.Iwai
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

