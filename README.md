# Get Url From Google
## そもそも何なのか
現在ブラウザで表示されているGoogle検索結果のURLリストを抽出し、それをクリップボードにコピーしてくれるChromeのアドオン(Extension)です。

## 作った動機
Excelと組み合わせて、あるキーワードに対する競合サイトの順位を把握したりするのに使います。

## 作った動機
無料のWebサービスでも似たようなものがあるが、頻繁に「しばらく時間をおいてからお試しください」状態になる。お金を払えば使えるサービスはあるが手は出せない。Google Search APIだと制限強いし高い。結果のスクレイピングだとGoogleのBot対策にすぐ引っかかりそう。ということで作りました。

## 導入方法
以下の手順2を参考にすれば1分くらいで入れられると思います。簡単に書くと、
1. Chromeの「設定」を開く  
2. 左側にある「拡張機能」を選択  
3. 右上の「デベロッパーモード」にチェック  
4. 左上の「パッケージ化されていない拡張機能を読み込む」を選択  
5. ダウンロードして解凍してきたgoogle-result-analyzerを読み込む  
※これで、インストール完了です。  
http://qiita.com/suin/items/2b31079056f1356257cb

## 備考
「こうしたらいいんじゃない？」とか「こういう機能欲しい」などのコメントくれれば、作るかもしれません。
