<template>
  <v-container>
    <div class="text-center">
      <h1>使い方</h1>
      <h2>ほにゃらら</h2>
    </div>
  </v-container>
</template>

<script>
<<<<<<< Updated upstream
export default {};
=======
import HowToMenu from "@/components/HowTo/HowToMenu";
import HowToIndex from "@/components/HowTo/HowToIndex";
export default {
  components: {
    HowToMenu,
    HowToIndex
  },
  data() {
    return {
      titles: [
        {
          title: "・Knowderとは",
          content:
            "作業した時間と作業の内容を記録し、あなたの振り返りとモチベーションを助けます。"
        },
        {
          title: "・作業を記録する",
          content:
            "今日の作業内容を記録しましょう。記録できる項目は「仕事」、「勉強」、「課題」の３種類用意されています。タグを選択し、作業内容を入力します。そして記録を選択すると記録ページのグラフに反映させることができます。"
        },
        {
          title: "・ツイートする",
          content:
            "今までの作業内容をみんなに知らせることができます。積極的にツイートし、あなたのフォロワーに知らせましょう。ツイートするアカウントはTwitter上で選択してください。"
        },
        {
          title: "・みんなの記録を見る",
          content:
            "(未実装)自分の記録を確認できるのは当然として、Knowderに登録している全てのユーザーの現状を知ることができます。他のユーザーとコンタクトをとることはできません。今後トーク機能が実装され、コンタクトが取れるようになるかもしれません。"
        },
        {
          title: "・プロフィールを変更する",
          content:
            "アカウントページのプロフィールにあるEditボタンで編集できます。Knowder上で画像、名前の変更はできません。これらはGoogleアカウントに紐付いています。変更したい場合はGoogleアカウント単位での変更をよろしくお願いします。"
        },
        {
          title: "・ログアウトする",
          content:
            "左上のメニューバー下部に置かれたログアウトボタンをクリックするとログアウトすることができます。ログアウトをしてもデータが消えるわけではありません、アカウントに紐付き残ります。他のGoogleアカウントでログインすると、新しいアカウントとして新たに記録できます。"
        }
      ]
    };
  }
};
>>>>>>> Stashed changes
</script>
