import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Apple, Utensils } from 'lucide-react';
import { MastraClient } from '@mastra/client-js';
import './DietAssistant.css';

const DietAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '你好！我是你的AI饮食管理助手 🍎 我可以帮你制定饮食计划、分析营养成分、推荐健康食谱。有什么可以帮助你的吗？',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // 简化的 Mastra 客户端
  const client = new MastraClient({
    baseUrl: 'https://diet-assistant-agent.xiehaitao229.workers.dev'
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 添加用户消息
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const agent = client.getAgent("dietAgent");
      const response = await agent.generate({
        messages: [{ role: 'user', content: currentInput }],
        runId: `diet-${Date.now()}`
      }); 

      // 简化的响应处理
      const botContent = response?.content || response?.text || response || '抱歉，我没有收到有效回复。';

      // 添加机器人回复
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: botContent,
        timestamp: new Date()
      }]);

    } catch (error) {
      console.error('发送失败:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: '抱歉，连接失败了，请稍后重试。',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="diet-assistant-container">
      <div className="diet-assistant-main">
        {/* Header */}
        <div className="diet-assistant-header">
          <div className="header-content">
            <div className="header-icon">
              <Utensils />
            </div>
            <div className="header-text">
              <h1>AI饮食管理助手</h1>
              <p>您的专属营养顾问</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-wrapper ${message.type}`}
            >
              <div className={`message ${message.type}`}>
                {message.type === 'bot' && (
                  <div className="bot-header">
                    <Apple />
                    <span className="bot-name">AI助手</span>
                  </div>
                )}
                <p className="message-content">
                  {message.content}
                </p>
                <p className={`message-time ${message.type}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="loading-message">
              <div className="loading-content">
                <div className="bot-header">
                  <Apple />
                  <span className="bot-name">AI助手</span>
                </div>
                <div className="loading-dots">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="input-section">
          <div className="input-container">
            <div className="input-wrapper">
              <MessageCircle className="input-icon" />
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="请输入您的问题，比如：我想要一个减脂食谱..."
                className="input-field"
                rows="1"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="send-button"
            >
              <Send />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="quick-actions">
            {[
              '制定减脂食谱',
              '推荐健康早餐',
              '运动后饮食建议'
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => setInput(action)}
                className="quick-action-button"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietAssistant;