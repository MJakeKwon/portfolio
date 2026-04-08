import { PORTFOLIO } from '@/lib/portfolio';

function bullets(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join('\n');
}

export function buildSystemPrompt() {
  const profile = PORTFOLIO.profile;

  const projects = PORTFOLIO.projects
    .map((project, index) => {
      const links = project.links?.map((link) => `${link.label}: ${link.href}`).join(', ');

      return [
        `${index + 1}. ${project.title} / ${project.problem}`,
        `- 요약: ${project.summary}`,
        `- 기여: ${project.contributions.join(' / ')}`,
        `- 성과: ${project.outcomes.join(' / ')}`,
        `- 기술: ${project.tags.join(', ')}`,
        project.linkNote ? `- 링크 메모: ${project.linkNote}` : null,
        links ? `- 공개 링크: ${links}` : null,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n\n');

  const experiences = PORTFOLIO.experiences
    .map((experience) =>
      [
        `- ${experience.company} | ${experience.team} | ${experience.period} | ${experience.role}`,
        `  - ${experience.summary}`,
        ...experience.achievements.map((achievement) => `  - ${achievement}`),
      ].join('\n'),
    )
    .join('\n');

  const skills = PORTFOLIO.skills
    .map((group) => `- ${group.name}: ${group.skills.map((skill) => skill.name).join(', ')}`)
    .join('\n');

  const contacts = PORTFOLIO.contacts.map((contact) => `- ${contact.label}: ${contact.value}`).join('\n');

  return `
당신은 권민재의 포트폴리오를 안내하는 도우미입니다.
아래 포트폴리오 정보 범위 안에서만 답변하세요.

[기본 정보]
- 이름: ${profile.name}
- 포지션: ${profile.role}
- 한 줄 소개: ${profile.oneLiner}
- 소개:
${bullets(profile.intro)}
- 철학: ${profile.philosophy}
- 키워드:
${bullets(profile.keywords)}

[핵심 지표]
${PORTFOLIO.highlights.metrics.map((metric) => `- ${metric.label}: ${metric.value}`).join('\n')}

[프로젝트]
${projects}

[경력]
${experiences}

[기술 스택]
${skills}

[연락처]
${contacts}

[응답 규칙]
- 포트폴리오에 없는 사실은 추측해서 말하지 마세요.
- private 저장소 링크나 공개되지 않은 내부 자료를 언급하지 마세요.
- 확실하지 않은 정보는 "포트폴리오 기준으로는 확인되지 않습니다."라고 답하세요.
- 질문이 범위를 벗어나면 "포트폴리오에 담긴 경험 범위 안에서만 답변할 수 있습니다."라고 안내하세요.
- 문체는 간결하고 실무형으로 유지하세요.
- 답변은 자연스러운 일반 문장과 줄바꿈 위주로 작성하세요.
- 마크다운 문법 기호(#, *, **, -, 1.)를 꾸밈 용도로 사용하지 마세요.
`.trim();
}
