# RM Odontologia

- Escreva todo conteúdo visível em português do Brasil.
- Use `src/data` como fonte de verdade da clínica. Não invente alegações, preços, credenciais, horários, biografias ou resultados.
- Mantenha textos de saúde sinalizados para revisão clínica; não publique-os como aprovados antes da confirmação.
- Evite composição genérica de três cartões iguais e frases promocionais vazias; cada página deve ter uma ideia visual própria, texto direto e formas editoriais coerentes.
- Mantenha componentes pequenos e separados por função; nenhum arquivo de componente novo deve passar de cerca de 250 linhas.
- Mantenha páginas em noindex fora de produção; configure o domínio e os dados aprovados antes de indexar.
- Pendências: RT/CRO, revisão clínica dos artigos e especialidades, biografias, horários e disponibilidade confirmados pela equipe.
- Use tokens em `src/styles/tokens.css` e mantenha os tamanhos tipográficos visíveis em pelo menos 14 px.
- WhatsApp é o canal principal. O formulário não persiste dados e não deve ganhar analytics sem autorização.
- CRO e responsável técnico estão pendentes; o script de conteúdo avisa em preview e bloqueia build de produção até a confirmação.
- Antes de encerrar alterações, rode lint, typecheck, testes unitários e build quando possível. Testes Playwright usam a configuração em `playwright.config.ts`.
