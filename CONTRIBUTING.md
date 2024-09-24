# Contribute Guide: Pulsate Website

Pulsate Website (`pulsate.dev`) への貢献方法についてのガイドです。

> [!NOTE]
>
> - このドキュメントは, Pulsate Website の貢献方法についてのガイドです. Pulsate 本体への貢献については, [Pulsateのリポジトリ](https://github.com/pulsate-dev/pulsate)を参照してください。
> - 全てのコントリビューターとメンテナは [行動規範](https://github.com/pulsate-dev/.github?tab=coc-ov-file) に従う必要があります.

## Pull Request の提出

Pulsate Website に対する Pull Request を提出する際は, 以下の注意点に従ってください.

- 全ての Pull Request は, `main` ブランチに対して提出してください.
- Pull Request には, その変更に関する説明を含めてください.
- Pull Request には, 関連する Issue がある場合は, その Issue を参照してください. (`fix: #23` などの形式で記述することで, 自動的に Issue とリンクされます.)

終了後, `pnpm format` を実行してコードを整形してください. (VSCode を使用している場合は自動的にフォーマットされています.)

Pulsate のメンテナのレビューと承認を得られれば, マージすることができます.

> [!WARNING]
>
> Pulsate Website で使用しているフォーマッタである Biome は現時点で `.mdx` ファイルのフォーマットをサポートしていません.
> 大きく形式が崩れていなければ, マージしてもよいと判断しているため, そのまま提出してください.

### コミットメッセージの提出

コミットメッセージは、[Conventional Commit](https://www.conventionalcommits.org/ja/v1.0.0/) に従う必要があります. コミットメッセージは以下の形式にします.

```md
<type>[オプションのスコープ]： <説明

[オプションの本文］

[オプションのフッター]
```

- タイプは変更に対応する正しいタイプでなければなりません。.
  - 例えば、新機能追加は `feat`, 不具合修正は `fix` です。
- 後方互換性を破壊するような変更を行う場合は、scope を `!` に設定し、`body` に破壊的な変更の説明を追加しなければなりません。
- そのような変更をしたら、IssueかDiscussionでメンテナに連絡してください。ほとんどの場合、そのような変更は望まれていません。
