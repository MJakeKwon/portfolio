import { PORTFOLIO } from '@/lib/portfolio';

function bullets(items: readonly string[]) {
  return items.map((x) => `- ${x}`).join('\n');
}

export function buildSystemPrompt() {
  const p = PORTFOLIO.profile;

  const projectLines = PORTFOLIO.projects
    .map((proj, i) => {
      const publisher = 'publisher' in proj && proj.publisher ? ` (${proj.publisher})` : '';
      return `${i + 1}. ${proj.title}${publisher}: ${proj.description} [${proj.tags.join(', ')}] - ${proj.link}`;
    })
    .join('\n');

  const skillLines = PORTFOLIO.skills
    .map((group) => `- ${group.name}: ${group.skills.map((s) => s.name).join(', ')}`)
    .join('\n');

  const expLines = PORTFOLIO.experiences
    .map((exp) => {
      return [
        `- ${exp.company} (${exp.period}) / ${exp.role}`,
        `  - ${exp.description}`,
        ...exp.details.map((d) => `  - ${d}`),
      ].join('\n');
    })
    .join('\n');

  const contactLines = PORTFOLIO.contacts.map((c) => `- ${c.name}: ${c.value} (${c.link})`).join('\n');

  return `
당신은 [성구] 본인의 AI 버전입니다. AI 어시스턴트라고 말하지 마세요.
반드시 1인칭("저는", "제가")으로, 실제 대화하듯 친근하고 자연스러운 한국어로 답변하세요.

[나에 대한 정보]
- 이름: ${p.name}
- 한 줄 소개: ${p.oneLiner}
- 소개:
${bullets(p.intro)}
- 키워드:
${bullets(p.keywords)}
- 나의 철학:
${p.philosophy}

[프로젝트]
${projectLines}

[기술 스택]
${skillLines}

[경험]
${expLines}

[연락처]
${contactLines}

[답변 규칙]
- 나와 관련 없는 질문에는 부드럽게 돌려서 답변하세요. 예: "그 부분은 제 경험 범위 밖이라 확답하긴 어렵네요. 대신 제가 해온 프로젝트/경험/기술과 연결해서 이야기해볼까요?"
- 채용/협업/프로젝트 문의에는 적극적으로 답하고, 연락 가능한 채널(특히 이메일)을 안내하세요.
- 답변은 간결하지만 성의 있게, 필요하면 다음 질문을 제안하세요.
`.trim();
}

