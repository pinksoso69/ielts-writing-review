const TASK_TYPES = {
  task2: ["双边讨论", "单边讨论", "问题措施", "复合问题"],
  task1: ["折线", "饼图", "柱状", "表格", "流程图", "地图", "混合图"],
};

const TASK2_TOPICS = ["教育", "科技", "社会", "政府", "媒体", "国际", "犯罪", "文化", "旅游", "环境", "健康", "工作"];
const SCORE_OPTIONS = ["", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"];

const BANK_SCHEMAS = {
  task2: {
    collocations: "固定搭配",
    synonyms: "同义替换",
    sentences: "句型",
    vocabulary: "陌生词",
    ideas: "主题论据",
    keyNotes: "重点摘记",
  },
  task1: {
    vocabulary: "陌生词",
    chartWords: "题型词汇",
    trendPhrases: "趋势表达",
    sentences: "句式",
    collocations: "固定搭配",
    keyNotes: "重点摘记",
  },
};

const HIGHLIGHTS = [
  ["#fff0a6", "好表达 / 可复用"],
  ["#ffd8d2", "错误 / 待修改"],
  ["#d9ecff", "逻辑 / 结构"],
  ["#dff5e8", "搭配 / 句型"],
];

const STORAGE_KEY = "ielts-writing-review-v3";
const LEGACY_KEYS = ["ielts-writing-review-v2", "ielts-writing-review-v1"];
const PREF_KEY = "ielts-writing-review-preferences-v1";
const BACKUP_VERSION = 1;
const LIBRARY_PAGE_SIZE = 6;
const SUMMARY_DEFAULT =
  "大作文：先判断题型，再决定段落任务。单边讨论要立场清晰，双边讨论要两边都回应，问题措施要原因和措施对应，复合问题要逐问回答。\n\n小作文：先写总览，再分组写细节。不要一上来堆数字，先看最高、最低、变化最大、趋势相反。\n\n考前提醒：少写空泛词，多写具体动作；注意 government / environment / convenient / comparison 这些易错拼写。";

const demoEntries = [
  {
    id: "demo-task2",
    mode: "task2",
    title: "城市居民运动减少：原因与措施",
    essayType: "问题措施",
    topic: "健康",
    practiceDate: "2026-04-25",
    taskImage: "",
    prompt:
      "People are walking less than before. Why is this the case, and what measures can be taken to solve this problem?",
    meaning: "现在人们走路比以前少。为什么会这样？可以采取哪些措施解决这个问题？",
    draftHtml:
      "Nowadays, people walk less than before because they rely on cars and public transport too much.<br>Another reason is that many people have sedentary jobs and spend long hours in offices.<br><br>To solve this problem, governments should build safer walking paths and encourage people to walk one stop earlier. Companies can also remind employees to take active breaks during the working day.",
    modelHtml:
      "In many cities, walking has become a less common part of daily life, largely because modern transport has made short journeys effortless and office work has encouraged a sedentary routine.<br><br>A multi-pronged approach is therefore needed. Urban planners can create pedestrian-only zones and aesthetically pleasing walking paths, while employers can incentivize active breaks so that walking becomes a convenient habit again.",
    draftScore: "5.5",
    modelScore: "7",
    bank: {
      collocations:
        "sedentary lifestyle 久坐的生活方式\ncity zoning 城市分区\nunderlying drivers 根本原因\na multi-pronged approach 多管齐下的方法\npedestrian-only zones 步行专区\nprioritise A over B\ndrive sb toward A rather than B\nincorporate ... into ...",
      synonyms:
        "health experts = health professionals\na discernible decline in = a noticeable decrease in\nmunicipal governments = public authorities",
      sentences:
        "This can be achieved by investing in + 名词\nA multi-pronged approach is needed to address this trend.",
      vocabulary: "incentivize 激励\ninfrastructural 基础设施的\naccessibility 可达性",
      ideas: "原因：久坐工作、汽车依赖、城市分区导致步行成本变高。\n解决：步行专区、安全道路、提前一站下车、公司健康激励。",
      keyNotes: "a multi-pronged approach：特别适合问题措施类作文，用在解决方案段开头。",
    },
    corrections: [
      {
        source: "rely on cars and public transport too much",
        fix: "modern transport has made short journeys effortless",
        reason: "too much 比较口语，范文表达更具体，也解释了为什么人们不走路。",
        comment: "可以记住 effortless 这个角度。",
        kind: "词汇",
      },
    ],
    stance: "核心观点：走路减少主要来自交通便利和久坐工作；解决方案要让步行重新变得安全、方便、有激励。",
    arguments:
      "原因：\n1. 个人：工作久坐，通勤依赖汽车或公共交通。\n2. 城市：城市分区让居住、工作、消费地点相隔较远，步行成本变高。\n\n解决：\n1. 政府/urban planners：建安全步道、步行专区、改善空气与交通安全。\n2. 公司/学校：鼓励走路休息、健康打卡。\n3. 个人：提前一站下车，把步行融入日常。",
  },
  {
    id: "demo-task1",
    mode: "task1",
    title: "能源使用变化折线图",
    essayType: "折线",
    topic: "",
    practiceDate: "2026-04-22",
    taskImage: "",
    prompt:
      "The graph below shows changes in the consumption of three energy sources in a country from 1990 to 2020.",
    meaning: "图表展示某国 1990 年到 2020 年三种能源消耗量的变化。",
    draftHtml:
      "The line graph shows the changes of three energy sources from 1990 to 2020. Overall, coal decreased while renewable energy increased.",
    modelHtml:
      "The line graph compares the consumption of three energy sources in a country between 1990 and 2020. Overall, coal use declined steadily, whereas renewable energy experienced a marked rise.",
    draftScore: "5",
    modelScore: "7",
    bank: {
      collocations: "a marked rise 明显上升\na steady decline 稳定下降\nenergy consumption 能源消耗\nreach a peak 达到峰值",
      chartWords: "show = compare / illustrate / present\nincrease = rise / grow / climb\ndecrease = decline / fall / drop",
      trendPhrases: "experience a rise\nwitness a decline\nreach a peak\nremain stable",
      sentences: "Overall, X declined steadily, whereas Y experienced a marked rise.\nThe figure for X stood at ... before falling to ...",
      vocabulary: "whereas 然而\nmarked 明显的",
      ideas: "Task 1 总览：coal 下降，renewables 上升，gas 相对稳定。",
      keyNotes: "Overall 句要优先写主趋势，不要堆具体数字。",
    },
    corrections: [
      {
        source: "shows the changes of three energy sources",
        fix: "compares the consumption of three energy sources",
        reason: "Task 1 常用 compare / illustrate；consumption 比 changes 更准确。",
        comment: "",
        kind: "词汇",
      },
    ],
    stance: "Task 1 不写观点，重点是总览趋势：谁上升、谁下降、谁最稳定。",
    arguments: "总览：coal 下降，renewables 上升，gas 相对稳定。\n细节段 1：描述 coal 和 gas。\n细节段 2：描述 renewables 的增长与最终位置。",
  },
];

const state = {
  entries: [],
  currentId: "",
  mode: "task2",
  libraryMode: "task2",
  libraryGroup: "all",
  libraryBankTab: "keyNotes",
  libraryPage: 1,
  bankTab: "collocations",
  selectedEditor: null,
  selectedText: "",
  highlightLabels: Object.fromEntries(HIGHLIGHTS),
  examSummary: SUMMARY_DEFAULT,
  editingSummary: false,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const els = {
  appShell: $("#appShell"),
  welcomeView: $("#welcomeView"),
  libraryView: $("#libraryView"),
  detailView: $("#detailView"),
  metricGrid: $("#metricGrid"),
  entryList: $("#entryList"),
  typeFilter: $("#typeFilter"),
  topicFilter: $("#topicFilter"),
  topicFilterField: $("#topicFilterField"),
  promptCard: $("#promptCard"),
  essayType: $("#essayType"),
  topicSelect: $("#topicSelect"),
  topicField: $("#topicField"),
  entryModeLabel: $("#entryModeLabel"),
  entryTitle: $("#entryTitle"),
  promptText: $("#promptText"),
  meaningText: $("#meaningText"),
  practiceDate: $("#practiceDate"),
  taskImageField: $("#taskImageField"),
  taskImageInput: $("#taskImageInput"),
  taskImagePreview: $("#taskImagePreview"),
  removeTaskImageBtn: $("#removeTaskImageBtn"),
  imageModal: $("#imageModal"),
  imageModalImg: $("#imageModalImg"),
  imageModalClose: $("#imageModalClose"),
  draftEditor: $("#draftEditor"),
  modelEditor: $("#modelEditor"),
  draftScore: $("#draftScore"),
  modelScore: $("#modelScore"),
  draftStats: $("#draftStats"),
  modelStats: $("#modelStats"),
  bankText: $("#bankText"),
  stanceText: $("#stanceText"),
  argumentsText: $("#argumentsText"),
  correctionList: $("#correctionList"),
  correctionTemplate: $("#correctionTemplate"),
  selectionToolbar: $("#selectionToolbar"),
  highlightLegend: $("#highlightLegend"),
  bankSubmenu: $("#bankSubmenu"),
  detailBankTabs: $("#detailBankTabs"),
  thinkingPrimaryLabel: $("#thinkingPrimaryLabel"),
  thinkingSecondaryLabel: $("#thinkingSecondaryLabel"),
  summaryDisplay: $("#summaryDisplay"),
  summaryEditor: $("#summaryEditor"),
  editSummaryBtn: $("#editSummaryBtn"),
  saveSummaryBtn: $("#saveSummaryBtn"),
  openLibraryBtn: $("#openLibraryBtn"),
  exportBackupBtn: $("#exportBackupBtn"),
  importBackupInput: $("#importBackupInput"),
  libraryHomeBtn: $("#libraryHomeBtn"),
  libraryGroupLabel: $("#libraryGroupLabel"),
  libraryGroupSelect: $("#libraryGroupSelect"),
  libraryBankTabs: $("#libraryBankTabs"),
  libraryContent: $("#libraryContent"),
  libraryPagination: $("#libraryPagination"),
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadEntries() {
  const prefs = localStorage.getItem(PREF_KEY);
  if (prefs) {
    const parsed = JSON.parse(prefs);
    state.highlightLabels = { ...state.highlightLabels, ...(parsed.highlightLabels || {}) };
    state.examSummary = parsed.examSummary || state.examSummary;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    state.entries = JSON.parse(stored).map(normalizeEntry);
    return;
  }

  const legacyValue = LEGACY_KEYS.map((key) => localStorage.getItem(key)).find(Boolean);
  if (legacyValue) {
    state.entries = JSON.parse(legacyValue).map(normalizeEntry);
    persist();
    return;
  }

  state.entries = clone(demoEntries).map(normalizeEntry);
  persist();
}

function normalizeEntry(entry) {
  const inferredTopic = entry.topic || inferTopic(entry.tags);
  const normalized = {
    ...entry,
    essayType: normalizeEssayType(entry.mode, entry.essayType),
    topic: entry.mode === "task2" ? inferredTopic || TASK2_TOPICS[0] : "",
    practiceDate: entry.practiceDate || "",
    taskImage: entry.taskImage || "",
    prompt: entry.prompt || "",
    meaning: entry.meaning || "",
    draftHtml: entry.draftHtml || textToHtml(entry.draft || ""),
    modelHtml: entry.modelHtml || textToHtml(entry.model || ""),
    draftScore: normalizeScore(entry.draftScore),
    modelScore: normalizeScore(entry.modelScore),
    bank: {
      collocations: "",
      synonyms: "",
      sentences: "",
      vocabulary: "",
      ideas: "",
      keyNotes: "",
      chartWords: "",
      trendPhrases: "",
      ...(entry.bank || {}),
    },
    corrections: (entry.corrections || []).map(normalizeCorrection),
    stance: entry.stance || "",
    arguments: entry.arguments || "",
  };
  normalized.bank.collocations = appendLine(normalized.bank.collocations, entry.bank?.verbObjects || "");
  return normalized;
}

function normalizeCorrection(correction) {
  const reason = correction.reason || "";
  const comment = correction.comment || "";
  const mergedComment = [reason, comment].filter(Boolean).join(comment && reason ? "\n" : "");
  return {
    source: correction.source || "",
    fix: correction.fix || "",
    comment: mergedComment,
    kind: correction.kind || "语法",
  };
}

function normalizeEssayType(mode, type) {
  const options = TASK_TYPES[mode] || TASK_TYPES.task2;
  if (options.includes(type)) return type;
  if (["问题解决", "报告类"].includes(type)) return "问题措施";
  if (["观点类", "是否同意", "优缺点"].includes(type)) return "单边讨论";
  if (type === "折线图") return "折线";
  if (type === "柱状图") return "柱状";
  return options[0];
}

function normalizeScore(score) {
  const value = String(score || "");
  return SCORE_OPTIONS.includes(value) ? value : "";
}

function inferTopic(tags = "") {
  return TASK2_TOPICS.find((topic) => tags.includes(topic)) || "";
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries));
  localStorage.setItem(PREF_KEY, JSON.stringify({ highlightLabels: state.highlightLabels, examSummary: state.examSummary }));
}

function buildBackup() {
  updateCurrentFromInputs();
  return {
    app: "ielts-writing-review",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    entries: clone(state.entries),
    preferences: {
      highlightLabels: { ...state.highlightLabels },
      examSummary: state.examSummary,
    },
  };
}

function downloadBackup() {
  const backup = buildBackup();
  const date = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ielts-writing-review-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(String(reader.result || ""));
      const entries = Array.isArray(data) ? data : data.entries;
      if (!Array.isArray(entries)) throw new Error("Invalid backup");
      if (!window.confirm("导入后会替换当前浏览器里的所有复盘数据，确定继续吗？")) return;

      state.entries = entries.map(normalizeEntry);
      const preferences = data.preferences || {};
      state.highlightLabels = { ...Object.fromEntries(HIGHLIGHTS), ...(preferences.highlightLabels || {}) };
      state.examSummary = preferences.examSummary || state.examSummary || SUMMARY_DEFAULT;
      state.currentId = "";
      state.mode = "task2";
      state.libraryMode = "task2";
      state.libraryGroup = "all";
      state.libraryPage = 1;
      state.bankTab = "collocations";
      persist();
      renderAll();
      window.alert("导入完成。");
    } catch {
      window.alert("导入失败，请确认选择的是 IELTS Writing Review 的 JSON 备份文件。");
    } finally {
      els.importBackupInput.value = "";
    }
  });
  reader.readAsText(file);
}

function currentEntry() {
  return state.entries.find((entry) => entry.id === state.currentId);
}

function makeEmptyEntry(mode = state.mode) {
  return normalizeEntry({
    id: `entry-${Date.now()}`,
    mode,
    title: mode === "task2" ? "新的大作文复盘" : "新的小作文复盘",
    essayType: TASK_TYPES[mode][0],
    topic: mode === "task2" ? TASK2_TOPICS[0] : "",
    practiceDate: new Date().toISOString().slice(0, 10),
    taskImage: "",
    prompt: "",
    meaning: "",
    draftHtml: "",
    modelHtml: "",
    draftScore: "",
    modelScore: "",
    bank: {},
    corrections: [],
    stance: "",
    arguments: "",
  });
}

function renderTypeOptions() {
  const selectedTypeFilter = els.typeFilter.value || "all";
  const selectedEssayType = currentEntry()?.essayType || TASK_TYPES[state.mode][0];
  const options = TASK_TYPES[state.mode];
  els.typeFilter.innerHTML = `<option value="all">全部题型</option>${options
    .map((type) => `<option value="${type}">${type}</option>`)
    .join("")}`;
  els.typeFilter.value = options.includes(selectedTypeFilter) ? selectedTypeFilter : "all";
  els.essayType.innerHTML = options.map((type) => `<option value="${type}">${type}</option>`).join("");
  els.essayType.value = options.includes(selectedEssayType) ? selectedEssayType : options[0];
}

function renderScoreOptions() {
  const options = SCORE_OPTIONS.map((score) => `<option value="${score}">${score || "未记录"}</option>`).join("");
  els.draftScore.innerHTML = options;
  els.modelScore.innerHTML = options;
}

function renderTopicOptions() {
  const selectedTopicFilter = els.topicFilter.value || "all";
  const selectedTopic = currentEntry()?.topic || TASK2_TOPICS[0];
  const optionsHtml = TASK2_TOPICS.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
  els.topicFilter.innerHTML = `<option value="all">全部话题</option>${optionsHtml}`;
  els.topicFilter.value = TASK2_TOPICS.includes(selectedTopicFilter) ? selectedTopicFilter : "all";
  els.topicSelect.innerHTML = optionsHtml;
  els.topicSelect.value = TASK2_TOPICS.includes(selectedTopic) ? selectedTopic : TASK2_TOPICS[0];

  const isTask2 = state.mode === "task2";
  els.topicFilterField.classList.toggle("hidden", !isTask2);
  els.topicField.classList.toggle("hidden", currentEntry()?.mode !== "task2");
}

function renderMetrics() {
  const total = state.entries.length;
  const task2 = state.entries.filter((entry) => entry.mode === "task2").length;
  const task1 = state.entries.filter((entry) => entry.mode === "task1").length;
  const lastDate = getLastPracticeDate();

  els.metricGrid.innerHTML = `
    <div class="metric-card overview-card">
      <strong>${total}</strong>
      <span>总复盘 · 大作文 ${task2} / 小作文 ${task1}</span>
    </div>
    <div class="metric-card streak-card">
      <strong>${lastDate || "-"}</strong>
      <span>${lastDate ? "上一次练作文是这一天" : "还没有练习记录"}</span>
    </div>
    <div class="metric-card distribution-card">
      <div class="metric-card-head"><strong>${task2}</strong><span>大作文话题</span></div>
      ${renderDistribution(topicCounts(), TASK2_TOPICS)}
    </div>
    <div class="metric-card distribution-card">
      <div class="metric-card-head"><strong>${task1}</strong><span>小作文题型</span></div>
      ${renderDistribution(typeCounts(), TASK_TYPES.task1)}
    </div>
  `;
  renderSummary();
}

function topicCounts() {
  return state.entries
    .filter((entry) => entry.mode === "task2")
    .reduce((acc, entry) => ({ ...acc, [entry.topic]: (acc[entry.topic] || 0) + 1 }), {});
}

function typeCounts() {
  return state.entries
    .filter((entry) => entry.mode === "task1")
    .reduce((acc, entry) => ({ ...acc, [entry.essayType]: (acc[entry.essayType] || 0) + 1 }), {});
}

function renderDistribution(counts, order) {
  const max = Math.max(1, ...Object.values(counts));
  const rows = order
    .map(
      (key) => {
        const count = counts[key] || 0;
        return `
        <div class="dist-row">
          <span>${key}</span>
          <div class="dist-bar"><i style="width:${(count / max) * 100}%"></i></div>
          <b>${count}</b>
        </div>
      `;
      },
    )
    .join("");
  return rows;
}

function getLastPracticeDate() {
  const dates = state.entries.map((entry) => entry.practiceDate).filter(Boolean).sort();
  return dates.at(-1) || "";
}

function daysSince(dateString) {
  const start = new Date(`${dateString}T00:00:00`);
  const now = new Date();
  return Math.max(0, Math.floor((now - start) / 86400000));
}

function renderSummary() {
  els.summaryDisplay.textContent = state.examSummary || "还没有写总结。";
  els.summaryEditor.value = state.examSummary;
  els.summaryDisplay.classList.toggle("hidden", state.editingSummary);
  els.summaryEditor.classList.toggle("hidden", !state.editingSummary);
  els.editSummaryBtn.classList.toggle("hidden", state.editingSummary);
  els.saveSummaryBtn.classList.toggle("hidden", !state.editingSummary);
}

function renderEntryList() {
  const typeFilter = els.typeFilter.value || "all";
  const topicFilter = els.topicFilter.value || "all";
  const entries = state.entries.filter((entry) => {
    const typeMatch = entry.mode === state.mode && (typeFilter === "all" || entry.essayType === typeFilter);
    const topicMatch = state.mode !== "task2" || topicFilter === "all" || entry.topic === topicFilter;
    return typeMatch && topicMatch;
  });

  els.entryList.innerHTML = entries
    .map((entry) => {
      const tagLabel = entry.mode === "task2" ? entry.topic : entry.essayType;
      const tagClass = getTagTone(entry.mode, tagLabel);
      const typeText = entry.mode === "task2" ? entry.essayType : "小作文";
      return `
        <button class="entry-card ${entry.id === state.currentId ? "active" : ""}" data-entry-id="${entry.id}">
          <strong>${escapeHtml(entry.title || "未命名复盘")}</strong>
          <span class="entry-meta">
            <em>${escapeHtml(typeText)}</em>
            <b class="mini-tag ${tagClass}">${escapeHtml(tagLabel || "未分类")}</b>
            <em>${entry.practiceDate || "未记录日期"}</em>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderEditor() {
  const entry = currentEntry();
  const hasEntry = Boolean(entry);
  els.welcomeView.classList.toggle("hidden", hasEntry);
  els.libraryView.classList.add("hidden");
  els.detailView.classList.toggle("hidden", !hasEntry);
  renderMetrics();

  if (!entry) return;

  els.entryModeLabel.textContent = entry.mode === "task2" ? "大作文复盘" : "小作文复盘";
  els.promptCard.classList.toggle("task1-layout", entry.mode === "task1");
  els.promptCard.classList.toggle("task2-layout", entry.mode === "task2");
  els.entryTitle.value = entry.title;
  els.promptText.value = entry.prompt;
  els.meaningText.value = entry.meaning;
  els.essayType.value = entry.essayType;
  els.practiceDate.value = entry.practiceDate;
  els.topicSelect.value = entry.topic || TASK2_TOPICS[0];
  els.topicField.classList.toggle("hidden", entry.mode !== "task2");
  els.taskImageField.classList.toggle("hidden", entry.mode !== "task1");
  renderTaskImage(entry);
  els.draftEditor.innerHTML = entry.draftHtml;
  els.modelEditor.innerHTML = entry.modelHtml;
  els.draftScore.value = entry.draftScore || "";
  els.modelScore.value = entry.modelScore || "";
  els.stanceText.value = entry.stance;
  els.argumentsText.value = entry.arguments;

  updateStats();
  renderCorrections();
  renderBankTabs(entry.mode);
  renderHighlightLegend();
  renderBankSubmenu();
  renderThinkingLabels(entry.mode);
  autoResizeTextareas();
}

function showHome() {
  updateCurrentFromInputs();
  state.currentId = "";
  els.welcomeView.classList.remove("hidden");
  els.detailView.classList.add("hidden");
  els.libraryView.classList.add("hidden");
  renderAll();
}

function showLibrary() {
  updateCurrentFromInputs();
  state.currentId = "";
  els.welcomeView.classList.add("hidden");
  els.detailView.classList.add("hidden");
  els.libraryView.classList.remove("hidden");
  renderLibrary();
  renderEntryList();
}

function renderLibrary() {
  const schema = BANK_SCHEMAS[state.libraryMode];
  if (!schema[state.libraryBankTab]) state.libraryBankTab = Object.keys(schema)[0];
  renderLibraryGroups();
  els.libraryBankTabs.innerHTML = Object.entries(schema)
    .map(
      ([key, label]) =>
        `<button class="note-tab ${key === state.libraryBankTab ? "active" : ""}" data-library-bank="${key}">${label}</button>`,
    )
    .join("");
  renderLibraryContent();
  $$("[data-library-mode]").forEach((button) =>
    button.classList.toggle("active", button.dataset.libraryMode === state.libraryMode),
  );
}

function renderLibraryGroups() {
  const groups = state.libraryMode === "task2" ? TASK2_TOPICS : TASK_TYPES.task1;
  els.libraryGroupLabel.textContent = state.libraryMode === "task2" ? "话题" : "题型";
  if (state.libraryGroup !== "all" && !groups.includes(state.libraryGroup)) state.libraryGroup = "all";
  els.libraryGroupSelect.innerHTML = `<option value="all">全部${state.libraryMode === "task2" ? "话题" : "题型"}</option>${groups
    .map((group) => `<option value="${group}">${group}</option>`)
    .join("")}`;
  els.libraryGroupSelect.value = state.libraryGroup;
}

function renderLibraryContent() {
  const entries = state.entries.filter((entry) => {
    if (entry.mode !== state.libraryMode) return false;
    if (state.libraryGroup === "all") return true;
    return state.libraryMode === "task2" ? entry.topic === state.libraryGroup : entry.essayType === state.libraryGroup;
  });
  const allCards = entries
    .map((entry) => {
      const content = (entry.bank[state.libraryBankTab] || "").trim();
      if (!content) return null;
      return {
        group: state.libraryMode === "task2" ? entry.topic : entry.essayType,
        title: entry.title || "未命名复盘",
        date: entry.practiceDate || "未记录日期",
        content,
      };
    })
    .filter(Boolean)
    .sort((a, b) => getDateTime(b.date) - getDateTime(a.date));

  const pageCount = Math.max(1, Math.ceil(allCards.length / LIBRARY_PAGE_SIZE));
  state.libraryPage = Math.min(state.libraryPage, pageCount);
  const pageCards = allCards.slice((state.libraryPage - 1) * LIBRARY_PAGE_SIZE, state.libraryPage * LIBRARY_PAGE_SIZE);
  const html = pageCards
    .map(
      (card) => `
        <article class="library-card">
          <div class="library-card-head">
            <div class="library-card-title">
              <strong>${escapeHtml(card.title)}</strong>
              <span class="library-tag ${getLibraryTagTone(card.group)}">${escapeHtml(card.group || "未分类")}</span>
            </div>
            <span class="library-date">${escapeHtml(card.date)}</span>
          </div>
          <pre>${escapeHtml(card.content)}</pre>
        </article>
      `,
    )
    .join("");
  els.libraryContent.innerHTML = html ? `<div class="library-card-grid">${html}</div>` : `<div class="empty-library">这里还没有可复习的素材。</div>`;
  renderLibraryPagination(pageCount, allCards.length);
}

function getDateTime(date) {
  const time = new Date(date).getTime();
  return Number.isNaN(time) ? 0 : time;
}

function getLibraryTagTone(group) {
  return getTagTone(state.libraryMode, group);
}

function getTagTone(mode, group) {
  const order = mode === "task2" ? TASK2_TOPICS : TASK_TYPES.task1;
  const index = Math.max(0, order.indexOf(group));
  return `tag-tone-${index % 12}`;
}

function renderLibraryPagination(pageCount, total) {
  els.libraryPagination.innerHTML =
    total > LIBRARY_PAGE_SIZE
      ? `
        <button class="secondary-button" data-library-page="prev" ${state.libraryPage === 1 ? "disabled" : ""}>上一页</button>
        <span>第 ${state.libraryPage} / ${pageCount} 页 · 共 ${total} 条</span>
        <button class="secondary-button" data-library-page="next" ${state.libraryPage === pageCount ? "disabled" : ""}>下一页</button>
      `
      : "";
}

function renderTaskImage(entry) {
  els.taskImagePreview.classList.toggle("empty", !entry.taskImage);
  els.taskImagePreview.disabled = !entry.taskImage;
  els.removeTaskImageBtn.classList.toggle("hidden", !entry.taskImage);
  els.taskImagePreview.innerHTML = entry.taskImage ? `<img src="${entry.taskImage}" alt="题目图片预览" />` : "暂无图片";
}

function renderBankTabs(mode) {
  const schema = BANK_SCHEMAS[mode] || BANK_SCHEMAS.task2;
  if (!schema[state.bankTab]) state.bankTab = Object.keys(schema)[0];
  const tabs = Object.entries(schema)
    .map(
      ([key, label]) =>
        `<button class="note-tab ${key === state.bankTab ? "active" : ""}" data-bank="${key}">${label}</button>`,
    )
    .join("");
  els.detailBankTabs.innerHTML = tabs;
  els.bankText.value = currentEntry()?.bank[state.bankTab] || "";
}

function renderCorrections() {
  const entry = currentEntry();
  els.correctionList.innerHTML = "";

  entry.corrections.forEach((correction, index) => {
    const node = els.correctionTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.index = index;
    node.querySelector('[data-correction="source"]').value = correction.source || "";
    node.querySelector('[data-correction="fix"]').value = correction.fix || "";
    node.querySelector('[data-correction="comment"]').value = correction.comment || "";
    node.querySelector('[data-correction="kind"]').value = correction.kind || "语法";
    els.correctionList.appendChild(node);
  });
}

function renderHighlightLegend() {
  els.highlightLegend.innerHTML = HIGHLIGHTS.map(
    ([color, label]) => `
      <label class="legend-item">
        <span class="legend-dot" style="background:${color}"></span>
        <input data-highlight-label="${color}" value="${escapeHtml(state.highlightLabels[color] || label)}" />
      </label>
    `,
  ).join("");
}

function renderBankSubmenu() {
  const schema = BANK_SCHEMAS[currentEntry()?.mode || state.mode] || BANK_SCHEMAS.task2;
  els.bankSubmenu.innerHTML = Object.entries(schema)
    .map(([key, label]) => `<button data-add-bank="${key}">${label}</button>`)
    .join("");
}

function renderThinkingLabels(mode) {
  if (mode === "task1") {
    els.thinkingPrimaryLabel.textContent = "概括段思路";
    els.thinkingSecondaryLabel.textContent = "细节段安排";
    return;
  }
  els.thinkingPrimaryLabel.textContent = "整体思路";
  els.thinkingSecondaryLabel.textContent = "论点与论据";
}

function renderAll() {
  renderScoreOptions();
  renderTypeOptions();
  renderTopicOptions();
  renderEntryList();
  renderEditor();
  $$(".mode-tab").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.mode));
}

function updateCurrentFromInputs() {
  const entry = currentEntry();
  if (!entry) return;

  entry.title = els.entryTitle.value;
  entry.prompt = els.promptText.value;
  entry.meaning = els.meaningText.value;
  entry.essayType = els.essayType.value;
  entry.practiceDate = els.practiceDate.value;
  entry.topic = entry.mode === "task2" ? els.topicSelect.value : "";
  entry.taskImage = entry.mode === "task1" ? entry.taskImage || "" : "";
  entry.draftHtml = cleanEditorHtml(els.draftEditor.innerHTML);
  entry.modelHtml = cleanEditorHtml(els.modelEditor.innerHTML);
  entry.draftScore = els.draftScore.value;
  entry.modelScore = els.modelScore.value;
  entry.bank[state.bankTab] = els.bankText.value;
  entry.stance = els.stanceText.value;
  entry.arguments = els.argumentsText.value;
}

function updateStats() {
  els.draftStats.textContent = `${wordCount(els.draftEditor.textContent)} words`;
  els.modelStats.textContent = `${wordCount(els.modelEditor.textContent)} words`;
}

function bindEvents() {
  $("#collapseBtn").addEventListener("click", () => {
    els.appShell.classList.toggle("sidebar-collapsed");
    $("#collapseBtn").textContent = els.appShell.classList.contains("sidebar-collapsed") ? "›" : "‹";
  });

  els.exportBackupBtn.addEventListener("click", downloadBackup);
  els.importBackupInput.addEventListener("change", () => importBackup(els.importBackupInput.files[0]));

  $("#newEntryBtn").addEventListener("click", () => {
    updateCurrentFromInputs();
    const entry = makeEmptyEntry();
    state.entries.unshift(entry);
    state.currentId = entry.id;
    persist();
    renderAll();
  });

  $("#backHomeBtn").addEventListener("click", () => {
    showHome();
  });

  els.openLibraryBtn.addEventListener("click", showLibrary);
  els.libraryHomeBtn.addEventListener("click", showHome);

  $$("[data-library-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.libraryMode = button.dataset.libraryMode;
      state.libraryGroup = "all";
      state.libraryBankTab = state.libraryMode === "task2" ? "keyNotes" : "keyNotes";
      renderLibrary();
    });
  });

  els.libraryGroupSelect.addEventListener("change", () => {
    state.libraryGroup = els.libraryGroupSelect.value;
    state.libraryPage = 1;
    renderLibraryContent();
  });

  els.libraryBankTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-library-bank]");
    if (!button) return;
    state.libraryBankTab = button.dataset.libraryBank;
    state.libraryPage = 1;
    renderLibrary();
  });

  els.libraryPagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-library-page]");
    if (!button) return;
    state.libraryPage += button.dataset.libraryPage === "next" ? 1 : -1;
    renderLibraryContent();
  });

  els.editSummaryBtn.addEventListener("click", () => {
    state.editingSummary = true;
    renderSummary();
    els.summaryEditor.focus();
  });

  els.saveSummaryBtn.addEventListener("click", () => {
    state.examSummary = els.summaryEditor.value;
    state.editingSummary = false;
    persist();
    renderSummary();
  });

  $("#deleteEntryBtn").addEventListener("click", () => {
    const entry = currentEntry();
    if (!entry) return;
    if (!window.confirm(`确定删除「${entry.title || "未命名复盘"}」吗？`)) return;
    state.entries = state.entries.filter((item) => item.id !== entry.id);
    state.currentId = "";
    persist();
    renderAll();
  });

  $$(".mode-tab").forEach((button) => {
    button.addEventListener("click", () => {
      updateCurrentFromInputs();
      state.mode = button.dataset.mode;
      state.currentId = "";
      persist();
      renderAll();
    });
  });

  els.typeFilter.addEventListener("change", renderEntryList);
  els.topicFilter.addEventListener("change", renderEntryList);

  els.entryList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-entry-id]");
    if (!card) return;
    updateCurrentFromInputs();
    persist();
    state.currentId = card.dataset.entryId;
    const entry = currentEntry();
    if (entry) state.mode = entry.mode;
    renderAll();
  });

  [els.entryTitle, els.promptText, els.meaningText, els.essayType, els.practiceDate, els.topicSelect, els.stanceText, els.argumentsText].forEach(
    (input) => {
      input.addEventListener("input", () => {
        updateCurrentFromInputs();
        persist();
        renderEntryList();
        autoResizeTextareas();
      });
    },
  );

  els.entryTitle.addEventListener("mouseenter", () => {
    els.entryTitle.title = els.entryTitle.value;
  });

  els.taskImageInput.addEventListener("change", () => {
    const file = els.taskImageInput.files?.[0];
    const entry = currentEntry();
    if (!file || !entry) return;
    const reader = new FileReader();
    reader.onload = () => {
      entry.taskImage = String(reader.result || "");
      persist();
      renderTaskImage(entry);
    };
    reader.readAsDataURL(file);
  });

  els.removeTaskImageBtn.addEventListener("click", () => {
    const entry = currentEntry();
    if (!entry) return;
    if (!window.confirm("确定移除这张题目图片吗？")) return;
    entry.taskImage = "";
    els.taskImageInput.value = "";
    persist();
    renderTaskImage(entry);
  });

  els.taskImagePreview.addEventListener("click", () => {
    const entry = currentEntry();
    if (!entry?.taskImage) return;
    els.imageModalImg.src = entry.taskImage;
    els.imageModal.classList.remove("hidden");
  });

  els.imageModalClose.addEventListener("click", closeImageModal);
  els.imageModal.addEventListener("click", (event) => {
    if (event.target === els.imageModal) closeImageModal();
  });

  [els.draftEditor, els.modelEditor].forEach((editor) => {
    editor.addEventListener("input", () => {
      updateCurrentFromInputs();
      updateStats();
      persist();
    });
    editor.addEventListener("mouseup", () => showToolbarForSelection(editor));
    editor.addEventListener("keyup", () => showToolbarForSelection(editor));
  });

  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const editor = selection.anchorNode?.parentElement?.closest?.(".rich-editor");
    if (editor) showToolbarForSelection(editor);
  });

  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".selection-toolbar")) return;
    if (event.target.closest(".rich-editor")) {
      window.setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) hideToolbar();
      }, 60);
      return;
    }
    hideToolbar();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideToolbar();
    if (event.key === "Escape") closeImageModal();
  });

  els.selectionToolbar.addEventListener("pointerdown", (event) => event.preventDefault());

  els.selectionToolbar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.highlight) applyHighlight(button.dataset.highlight);
    if (button.dataset.clearHighlight !== undefined) clearHighlight();
    if (button.dataset.addCorrection) addSelectionToCorrection(button.dataset.addCorrection);
    if (button.dataset.addBank) addSelectionToBank(button.dataset.addBank);
  });

  els.bankText.addEventListener("input", () => {
    updateCurrentFromInputs();
    persist();
  });

  [els.draftScore, els.modelScore].forEach((select) => {
    select.addEventListener("change", () => {
      updateCurrentFromInputs();
      persist();
    });
  });

  els.detailBankTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".note-tab");
    if (!button) return;
    updateCurrentFromInputs();
    state.bankTab = button.dataset.bank;
    renderAll();
  });

  $("#addCorrectionBtn").addEventListener("click", (event) => {
    event.preventDefault();
    addCorrection({ source: "", fix: "", comment: "", kind: "语法" });
  });

  els.correctionList.addEventListener("input", (event) => {
    const item = event.target.closest(".correction-item");
    const key = event.target.dataset.correction;
    if (!item || !key) return;
    currentEntry().corrections[Number(item.dataset.index)][key] = event.target.value;
    persist();
  });

  els.correctionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-correction]");
    if (!button) return;
    if (!window.confirm("确定删除这条错误标注吗？")) return;
    const item = event.target.closest(".correction-item");
    currentEntry().corrections.splice(Number(item.dataset.index), 1);
    persist();
    renderCorrections();
    renderMetrics();
  });

  els.highlightLegend.addEventListener("input", (event) => {
    const color = event.target.dataset.highlightLabel;
    if (!color) return;
    state.highlightLabels[color] = event.target.value;
    persist();
  });
}

function closeImageModal() {
  els.imageModal.classList.add("hidden");
  els.imageModalImg.removeAttribute("src");
}

function showToolbarForSelection(editor) {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !editor.contains(selection.anchorNode)) return;
  const text = selection.toString().trim();
  if (!text) return;

  state.selectedEditor = editor;
  state.selectedText = text;
  const rect = selection.getRangeAt(0).getBoundingClientRect();
  const toolbarWidth = 156;
  const left = Math.min(window.innerWidth - toolbarWidth - 10, rect.right + 12);
  const top = Math.min(window.innerHeight - 240, Math.max(10, rect.bottom + 8));
  els.selectionToolbar.style.left = `${Math.max(8, left)}px`;
  els.selectionToolbar.style.top = `${Math.max(8, top)}px`;
  els.selectionToolbar.classList.remove("hidden");
}

function hideToolbar() {
  els.selectionToolbar.classList.add("hidden");
  state.selectedText = "";
}

function applyHighlight(color) {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !state.selectedEditor) return;
  const range = selection.getRangeAt(0);
  if (!state.selectedEditor.contains(range.commonAncestorContainer)) return;

  const fragment = stripHighlights(range.extractContents());
  const span = document.createElement("span");
  span.style.backgroundColor = color;
  span.dataset.highlight = color;
  span.appendChild(fragment);
  range.insertNode(span);
  state.selectedEditor.normalize();
  selection.removeAllRanges();
  updateCurrentFromInputs();
  persist();
  hideToolbar();
}

function clearHighlight() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !state.selectedEditor) return;
  const range = selection.getRangeAt(0);
  if (!state.selectedEditor.contains(range.commonAncestorContainer)) return;
  range.insertNode(stripHighlights(range.extractContents()));
  state.selectedEditor.normalize();
  selection.removeAllRanges();
  updateCurrentFromInputs();
  persist();
  hideToolbar();
}

function stripHighlights(fragment) {
  fragment.querySelectorAll?.("[data-highlight]").forEach((node) => {
    node.replaceWith(...Array.from(node.childNodes));
  });
  return fragment;
}

function addSelectionToCorrection(field) {
  if (!state.selectedText) return;
  const correction = { source: "", fix: "", comment: "", kind: "词汇" };
  correction[field] = state.selectedText;
  addCorrection(correction);
  closeToolbarFully();
}

function addSelectionToBank(target) {
  const entry = currentEntry();
  if (!entry || !state.selectedText) return;
  entry.bank[target] = appendLine(entry.bank[target], state.selectedText);
  state.bankTab = target;
  persist();
  renderAll();
  closeToolbarFully();
}

function closeToolbarFully() {
  hideToolbar();
  window.getSelection()?.removeAllRanges();
  document.activeElement?.blur?.();
}

function addCorrection(correction) {
  const entry = currentEntry();
  if (!entry) return;
  entry.corrections.push(correction);
  persist();
  renderCorrections();
  renderMetrics();
}

function autoResizeTextareas() {
  [els.promptText, els.meaningText].forEach((textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 86), 220)}px`;
  });
}

function wordCount(text) {
  const words = text.trim().match(/[A-Za-z]+(?:[-'][A-Za-z]+)?|\d+(?:\.\d+)?/g);
  return words ? words.length : 0;
}

function appendLine(existing, line) {
  const next = String(line || "").trim();
  if (!next) return existing || "";
  return existing ? `${existing.trim()}\n${next}` : next;
}

function textToHtml(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function cleanEditorHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html || "";
  div.querySelectorAll("script, style").forEach((node) => node.remove());
  return div.innerHTML;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loadEntries();
bindEvents();
renderAll();
