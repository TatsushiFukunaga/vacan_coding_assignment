# nekonote-programiming-quiz

## What

ねこのてチームのプログラミングクイズです。  
コードを通して、お互いに対する理解を深めることを第一の目的としています。

プログラミング言語は TypeScript を利用しています。

## How to setup

### install node and npm

以下のコマンドが通るようにセットアップを行ってください。  
方法は検索すると多数でてくるので、好きな方法でセットアップを行っていただいて構いません。

```
$ npm -v
6.14.9

$ node -v
v14.15.3

$ npm run exec:hello-world
...
Hello World!
```

## How to start

`package.json` のあるディレクトリをターミナルで開いた状態で、以下のコマンドを実行してみてください

```
$ npm run exec 100 dirty
```

引数で支払う金額（`paymentYen`）と、衣服の現在の状態（`Cloth.status`）を各々第 1、第 2 引数で渡します。  
以下のように実行され、結果が返却されれば、準備は完了です！

```
$ npm run exec 100 dirty
...
[Info] Start with paymentYen:100 clothStatus:dirty
[Info] Put cloth in washing machine.
[Info] Cloth status is now dirty
[Success] Cloth is clean!
```

## What is this

これは、 Online 洗濯機システムです。  
ユーザーはお金と自分の衣服を渡すことで、この洗濯機を利用します。  
洗濯コースは現在、1 回 100 円で利用できる「洗濯（`Wash`）」のみで、多額のお金を払ってもお釣りがでないのですが、これを機能拡張してみましょう！

## Quiz

### 課題 1

最後のログに、渡したお金のお釣りを表示するように修正してください

[要件]

-   最後のログを以下のように変更してください

```
[Success] Cloth is clean! Your change is 100 yen.
```

※最後の `100` は渡したお金に応じた適切なお釣りの額に変更してください

### 課題 2

洗濯機の洗濯コースに「乾燥」を足してください

[要件]

-   乾燥には 150 円かかります
-   汚れた衣服は乾燥させることはできません
-   すでに乾燥しているきれいな衣服を乾燥させることは可能ですが、その場合は状態は遷移しません
-   課題 2 は、比較的自由な課題です。書いていない要件は前提を自由に置いてかまいません。情報を整理して要件を詰め、決めるところまでトライしてみてください！

## Hints

-   わからなかったこと・悩んだこと・考えたこと・工夫したこと等を通じて、お互いのことを理解したいと思います。修正時に考えたことや感じたことをメモしておいていただけると良いかもしれません。
-   質問はいつでも受け付けますが、土日は対応できないのでご了承ください m(\_\_)m
