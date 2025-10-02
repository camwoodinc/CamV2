import { useState, useEffect, useRef } from "react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  HelpCircle,
} from "lucide-react";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash-preview-05-20";

if (!API_KEY) {
    console.error("CRITICAL: GEMINI_API_KEY is missing. Check your .env file and ensure it uses the VITE_ prefix.");
}

const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${API_KEY}`;

// System instruction to guide the chatbot's generative responses
const SYSTEM_INSTRUCTION = `You are the Camwood Inc. Intelligence Assistant. Your role is to provide sophisticated, professional, and confident responses about the company's services, which center around transforming complex data into clear, actionable decision engines. Use Camwood's philosophy: "AI should serve people, not the other way around." Keep answers concise, business-focused, and project an image of clarity and expertise.`;

const knowledgeBase = {
  "categories": {
    "core_identity": {
      "name": "Core Identity & Vision",
      "questions": [
        {
          "id": "about-company",
          "keywords": ["about", "company", "who are you", "what do you do", "decision intelligence"],
          "question": "What does Camwood Inc. do?",
          "answer": "Camwood Inc. is a global decision intelligence company that transforms overwhelming data into clear, actionable direction. We design decision engines that deliver clarity, confidence, and a competitive edge, specializing in human-centered AI."
        },
        {
          "id": "mission-philosophy",
          "keywords": ["mission", "philosophy", "purpose", "why", "serve people"],
          "question": "What is Camwood's philosophy and purpose?",
          "answer": "Our philosophy is that AI should serve people, not the other way around. Our purpose is to provide decision intelligence that sharpens businesses and makes life more vivid by returning time, focus, and attention back to people."
        },
        {
          "id": "vision",
          "keywords": ["vision", "future", "goals", "connective tissue", "adaptive organizations"],
          "question": "What is Camwood's long-term vision?",
          "answer": "Our vision is to establish decision intelligence as the connective tissue between AI, data, and human decision-making, shaping adaptive organizations that are ready for the future."
        },
        {
          "id": "differentiator",
          "keywords": ["different", "unique", "edge", "why camwood", "clarity", "elevation", "direction"],
          "question": "How is Camwood different from other AI companies?",
          "answer": "Where others sell algorithms or just automate, Camwood delivers clarity in motion and elevates experiences. We turn data into direction and engineer outcomes, focusing on adaptive, human-centered systems."
        }
      ]
    },
    "services": {
      "name": "Services & Solutions",
      "questions": [
        {
          "id": "ai-ml-services",
          "keywords": ["decision engines", "machine learning", "artificial intelligence", "ai models", "custom ai", "executive support", "operational efficiency"],
          "question": "What AI and Decision Intelligence services do you offer?",
          "answer": "We offer custom Decision Engine Engineering (pipelines, models, systems), Executive Decision Support, Operational Efficiency solutions, and Customer Experience Enhancement. It's about transforming complexity into clear, actionable intelligence."
        },
        {
          "id": "data-integration",
          "keywords": ["data analytics", "business intelligence", "data noise", "integration", "unifying systems", "fragmented"],
          "question": "Do you handle data integration and noise reduction?",
          "answer": "Yes. A core focus is Data Integration & Noise Reduction—unifying fragmented systems and data sources into singular, actionable intelligence that provides clarity, not just dashboards."
        },
        {
          "id": "engagement-model",
          "keywords": ["engagement", "work with", "how to start", "consulting", "engineering", "partnership"],
          "question": "What is your engagement model?",
          "answer": "Engagements start with Consulting & Strategy to design tailored decision frameworks, followed by Custom Engineering, seamless Deployment & Integration, and an Ongoing Partnership for continuous scaling."
        },
        {
          "id": "future-readiness",
          "keywords": ["adaptive", "future-readiness", "scale", "enterprise", "deployments", "growth"],
          "question": "How do you ensure solutions are future-ready and scalable?",
          "answer": "We prioritize Scalable Impact, designing adaptive intelligence that grows with organizations. Our solutions are engineered for Future-Readiness, ensuring longevity from initial pilots to enterprise-wide deployments."
        }
      ]
    },
    "technical_and_industries": {
      "name": "Technical & Industry Fit",
      "questions": [
        {
          "id": "technologies",
          "keywords": ["technologies", "tech stack", "tools", "platforms", "ecosystem", "aws", "azure", "gcp", "databricks"],
          "question": "What technologies and platforms do you integrate with?",
          "answer": "Camwood integrates seamlessly within the modern data ecosystem, including platforms like AWS, Azure, GCP, Databricks, Snowflake, and Salesforce. We leverage cutting-edge AI/ML frameworks like Python, TensorFlow, and PyTorch."
        },
        {
          "id": "industries",
          "keywords": ["industries", "sectors", "verticals", "domains", "clients", "finance", "healthcare", "retail", "manufacturing"],
          "question": "Which industries do you serve?",
          "answer": "We serve a wide range of industries including Financial Services (risk modeling), Healthcare & Life Sciences (patient flow optimization), Retail & E-commerce (demand forecasting), Manufacturing & Logistics (predictive maintenance), and Technology/SaaS."
        },
        {
          "id": "compliance",
          "keywords": ["compliance", "security", "hipaa", "gdpr", "soc2", "ethical"],
          "question": "Is Camwood's work compliant and ethical?",
          "answer": "Yes. Our systems are designed with GDPR, HIPAA, SOC 2, and ISO 27001 compliance in mind. Ethical and Human-Centered Intelligence is at the heart of our philosophy."
        }
      ]
    },
    "consultation_contact": {
      "name": "Consultation & Contact",
      "questions": [
        {
          "id": "pricing-model",
          "keywords": ["pricing", "cost", "price", "how much", "rates", "budget", "roi", "financial"],
          "question": "How do you price your services and what ROI can I expect?",
          "answer": "Our pricing is customized based on project scope. We focus on outcomes like faster time-to-decision, reduced workflow noise, and measurable trust. For specific pricing, cost breakdowns, or financial ROI projections, I will need to connect you with our team."
        },
        {
          "id": "free-consultation",
          "keywords": ["consultation", "free", "assessment", "evaluation", "schedule"],
          "question": "Do you offer free consultations?",
          "answer": "Yes, we offer free initial strategy consultations to understand your requirements and discuss how our decision intelligence solutions can benefit your business. Schedule a consultation through our contact form or call us directly."
        },
        {
          "id": "contact-info",
          "keywords": ["contact", "phone", "email", "address", "reach", "number"],
          "question": "How can I contact Camwood Inc.?",
          "answer": "You can reach us via email at info@camwood.com, or call us at +1 (343) 630-0727. Engagements typically start with a strategy consultation to align goals."
        }
      ]
    }
  }
};

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date; 
  category?: string;
  isEscalation?: boolean;
}

interface KnowledgeItem {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
}

const findBestMatch = (query: string): KnowledgeItem | null => {
  const queryLower = query.toLowerCase();
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  Object.values(knowledgeBase.categories).forEach((category: any) => {
    category.questions.forEach((item: KnowledgeItem) => {
      let score = 0;
      
      item.keywords.forEach((keyword) => {
        if (queryLower.includes(keyword.toLowerCase())) {
          score += keyword.length; 
        }
      });
      
      if (queryLower.includes(item.question.toLowerCase()) || 
          item.question.toLowerCase().includes(queryLower)) {
        score += 10;
      }
      
      if (score > highestScore && score > 3) {
        highestScore = score;
        bestMatch = item;
      }
    });
  });
  return bestMatch;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keyup', handleEscKey);

    return () => {
      document.removeEventListener('keyup', handleEscKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm your Camwood Inc. Decision Intelligence Assistant. I can help you transform complex data into clear direction. How can I assist you today?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  /**
   * Helper function to call the Gemini API with exponential backoff.
   * @param userPrompt The prompt to send to the model.
   * @param systemPrompt The system instruction to guide the model's behavior.
   * @param history The optional conversation history.
   */
  const generateContent = async (
    userPrompt: string, 
    systemPrompt: string, 
    history: Message[] = []
  ): Promise<string | null> => {
    if (!API_KEY) {
        return null;
    }


    const chatHistory = history
      .filter(m => !m.text.startsWith('(✨'))
      .map(msg => ({
        role: msg.isBot ? "model" : "user",
        parts: [{ text: msg.text.replace('(✨ AI Insight):\n\n', '') }],
      }));

    chatHistory.push({ role: "user", parts: [{ text: userPrompt }] });

    const payload = {
      contents: chatHistory,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    };

    let response = null;
    let delay = 1000;
    const maxRetries = 3;

    for (let i = 0; i < maxRetries; i++) {
      try {
        const fetchResponse = await fetch(BASE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        // Handle rate limiting with exponential backoff
        if (fetchResponse.status === 429 && i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; 
          continue;
        }

        if (!fetchResponse.ok) throw new Error(`API call failed with status ${fetchResponse.status}`);

        response = await fetchResponse.json();
        break; 

      } catch (error) {
        console.error("Gemini API call failed:", error);
        if (i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
          continue;
        }
        return null;
      }
    }

    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || null;
  };


  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);


    await new Promise(resolve => setTimeout(resolve, 300));

    const bestMatch = findBestMatch(userMessage.text);
    
    let botResponse: Message;
    let shouldSendFollowUpOptions = false;

    if (bestMatch) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: bestMatch.answer,
        isBot: true,
        timestamp: new Date(),
        category: bestMatch.question,
        isEscalation: bestMatch.id === 'pricing-model', 
      };
      
      if (bestMatch.id === 'pricing-model' || bestMatch.id === 'contact-info') {
          shouldSendFollowUpOptions = true;
      }

    } else {
      const historyWithoutWelcome = messages.slice(1);
      const generatedResponse = await generateContent(userMessage.text, SYSTEM_INSTRUCTION, historyWithoutWelcome);

      if (generatedResponse) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: `(✨ AI Insight):\n\n${generatedResponse}`,
          isBot: true,
          timestamp: new Date(),
          category: "Generative Intelligence",
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "I'm sorry, I couldn't find a specific answer and the generative AI service is currently unavailable or improperly configured. For complex or proprietary questions, I'll connect you with a specialist. Would you like me to schedule a consultation?",
          isBot: true,
          timestamp: new Date(),
          isEscalation: true,
        };
      }
      shouldSendFollowUpOptions = true;
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);

    if (shouldSendFollowUpOptions) {
      setTimeout(() => {
        const followUp: Message = {
          id: (Date.now() + 2).toString(),
          text: "Here are your options for connecting with our team:\n• Schedule a free strategy consultation\n• Call us at +1 (343) 630-0727\n• Email us at info@camwood.com\n\nOr feel free to ask me about our Decision Engines, industry focus, or philosophy!",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, followUp]);
      }, 1500);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What does Camwood Inc. do?",
    "What AI and Decision Intelligence services do you offer?",
    "How is Camwood different from other AI companies?",
    "How can I contact Camwood Inc.?",
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  const PrimaryClasses = `bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]`;
  const SecondaryClasses = `bg-[var(--secondary)] text-[var(--secondary-foreground)]`;
  const AccentBgClasses = `bg-[var(--accent)]/10 text-[var(--primary)]`;
  const BadgeClasses = `bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--border)]`;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${PrimaryClasses} flex items-center justify-center`}
          aria-label="Open Chatbot"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

<div 
        className={`fixed bottom-6 right-6 w-96 max-h-[90vh] bg-card text-foreground rounded-xl shadow-2xl z-50 flex flex-col border border-border transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ height: isOpen ? 'min(85vh, 500px)' : '0', visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="flex-shrink-0 p-4 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${AccentBgClasses}`}>
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-semibold">Camwood Chatbot</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition"
              aria-label="Close Chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-border"></div>

        <div className="flex-1 flex flex-col p-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex w-full ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 shadow-sm ${
                    message.isBot ? SecondaryClasses : PrimaryClasses
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    {message.isBot ? (
                      <Bot className={`h-4 w-4 mt-0.5 flex-shrink-0 ${message.text.startsWith('(✨') ? 'text-yellow-400' : 'text-primary'}`} />
                    ) : (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="text-sm leading-relaxed whitespace-pre-line break-words"> 
                      {message.text}
                    </div>
                  </div>
                  
                  {message.category && (
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium mt-2 ${BadgeClasses}`}>
                      {message.category}
                    </span>
                  )}

                  {message.isEscalation && (
                    <div className="flex items-center gap-1 mt-2 text-xs font-medium text-destructive/80">
                      <HelpCircle className="h-3 w-3" />
                      Hand-off Suggested for Specialist Topic
                    </div>
                  )}

                  <div className={`mt-1 text-right text-xs ${message.isBot ? 'text-secondary-foreground/70' : 'text-primary-foreground/70'}`}>
                    {formatTime(message.timestamp)}
                  </div>

                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className={`${SecondaryClasses} rounded-xl p-3 max-w-[80%] shadow-sm`}>
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-1 text-muted-foreground">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>


          {messages.length === 1 && (
            <div className="p-4 border-t border-border flex-shrink-0">
              <div className="text-xs text-muted-foreground mb-2">Try asking:</div>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="text-xs h-8 px-3 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-border flex-shrink-0">
            <div className="flex gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me a question about decision intelligence or services..."
                className="flex-1 p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground text-xs"
                disabled={isTyping} 
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping} 
                className={`px-3 h-10 rounded-lg flex items-center justify-center ${PrimaryClasses} disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}