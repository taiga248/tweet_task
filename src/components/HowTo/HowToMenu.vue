<template>
  <section>
    <v-list rounded>
      <v-list-group no-action sub-group v-for="(data, i) in HowToData" :key="i">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="data.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <p>{{ data.content }}</p>
      </v-list-group>
    </v-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      HowToData: [
        {
          title: "Knowderとは",
          content:
            "あなたの作業に費やした時間と内容を記録することができます。グラフによって視覚的に時間を体感でき、あなたの振り返りとモチベーションを助けます。"
        },
        {
          title: "作業を記録する",
          content:
            "作業内容を記録しましょう。記録できる項目は「仕事」、「勉強」、「課題」の３種類です。記入した後、送信するとグラフに反映されます。"
        },
        {
          title: "ツイートする",
          content:
            "総作業時間をシェアできます。積極的にツイートし、あなたのフォロワーと競いましょう。ツイートするアカウントはTwitter上で選択してください。"
        },
        {
          title: "みんなの記録を見る",
          content:
            "(未実装)Knowderに登録している全てのユーザーの現状を知ることができます。他のユーザーとコンタクトをとることはできません。今後トーク機能が実装され、コンタクトが取れるようになるかもしれません。"
        },
        {
          title: "プロフィールを変更する",
          content:
            "アカウントページEditボタンで編集できます。画像、名前の変更はできません。これらはGoogleアカウントの情報に紐付いています。変更したい場合はGoogle上で変更してください"
        },
        {
          title: "ログアウトする",
          content:
            "サイドナビゲーション下部のボタンでログアウトできます。ログアウトしてもデータはGooGleアカウントに紐付いて保存されており、消えることはありません。"
        }
      ]
    };
  }
};
</script>
