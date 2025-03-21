import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex justify-center h-screen w-screen m-2.5 p-2.5">
      <div className="w-[80%] flex flex-col gap-4 p-4">
        {/* 用户消息 - 靠右 */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-lg bg-gray-200 p-3 shadow-sm">
            <p className="text-lg font-semibold text-gray-800">LangChain是什么？</p>
          </div>
        </div>

        {/* 助手消息 - 靠左 */}
        <div className="flex justify-start">
          <div className="max-w-[70%] rounded-lg bg-gray-100 p-3 shadow-sm">
            <p className="text-gray-800">
              <strong>LangChain</strong> 是一个由大型语言模型 (LLM) 驱动的应用程序开发框架。
            </p>
            <p className="mt-2 text-gray-700">
              LangChain 简化了 LLM 应用程序生命周期的每个阶段：
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                <strong>开发</strong>：使用 LangChain 的开源{" "}
                <a href="/docs/concepts/lcel" className="text-blue-600 hover:underline">
                  构建块
                </a>
                、{" "}
                <a href="/docs/concepts" className="text-blue-600 hover:underline">
                  组件
                </a>{" "}
                和{" "}
                <a
                  href="/docs/integrations/platforms/"
                  className="text-blue-600 hover:underline"
                >
                  第三方集成
                </a>{" "}
                构建您的应用程序。使用{" "}
                <a
                  href="/docs/concepts/architecture#langgraph"
                  className="text-blue-600 hover:underline"
                >
                  LangGraph.js
                </a>{" "}
                构建具有一流流媒体和人机交互支持的状态代理。
              </li>
              <li className="mt-1">
                <strong>生产化</strong>：使用{" "}
                <a
                  href="https://docs.smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LangSmith
                </a>{" "}
                检查、监控和评估您的链，以便您可以不断优化和自信地部署。
              </li>
              <li className="mt-1">
                <strong>部署</strong>：使用{" "}
                <a
                  href="https://langchain-ai.github.io/langgraph/cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LangGraph Cloud
                </a>{" "}
                将您的 LangGraph 应用程序转变为可用于生产的 API 和助手。
              </li>
            </ul>
          </div>
        </div>

        {/* 用户消息 - 靠右 */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-lg bg-gray-200 p-3 shadow-sm">
            <h1 className="text-lg font-semibold text-gray-800">
              如何理解 LangChain 框架？它对我的开发工作有什么帮助？
            </h1>
          </div>
        </div>

        {/* 助手消息 - 靠左 */}
        <div className="flex justify-start">
          <div className="max-w-[70%] rounded-lg bg-gray-100 p-3 shadow-sm">
            <img
              src="https://js.langchain.com/svg/langchain_stack_062024.svg"
              alt="LangChain 框架概述"
              title="该图概述了 LangChain 框架的层次组织"
              className="w-[400px] mb-2"
            />
            <p className="text-gray-700">
              具体来说，该框架由以下开源库组成：
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                <strong>
                  <code>@langchain/core</code>
                </strong>
                ：基础抽象和 LangChain 表达语言。
              </li>
              <li>
                <strong>
                  <code>@langchain/community</code>
                </strong>
                ：第三方集成。
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    合作伙伴包（例如{" "}
                    <strong>
                      <code>@langchain/openai</code>
                    </strong>
                    、{" "}
                    <strong>
                      <code>@langchain/anthropic</code>
                    </strong>
                    等）：一些集成被进一步拆分成仅依赖于{" "}
                    <strong>
                      <code>@langchain/core</code>
                    </strong>
                    的轻量级包。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>langchain</code>
                </strong>
                ：构成应用程序认知架构的链、代理和检索策略。
              </li>
              <li>
                <strong>
                  <a
                    href="https://langchain-ai.github.io/langgraphjs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LangGraph.js
                  </a>
                </strong>
                ：通过将步骤建模为图中的边和节点，使用 LLM 构建健壮且有状态的多参与者应用程序。
              </li>
              <li>
                <strong>
                  <a
                    href="https://docs.smith.langchain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LangSmith
                  </a>
                </strong>
                ：一个开发人员平台，可让您调试、测试、评估和监控 LLM 应用程序。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;