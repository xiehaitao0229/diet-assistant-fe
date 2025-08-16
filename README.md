# AI饮食管理助手 🍎

一个基于React和AI技术的智能饮食管理应用，为用户提供个性化的营养建议、健康食谱推荐和饮食规划服务。

## 功能特性 ✨

- **智能对话**：基于AI的自然语言交互，支持中文对话
- **个性化建议**：根据用户需求提供定制化的饮食建议
- **食谱推荐**：智能推荐健康食谱和营养搭配
- **实时响应**：快速响应用户询问，提供即时帮助
- **美观界面**：现代化UI设计，支持响应式布局
- **快捷操作**：预设常用问题，一键快速咨询

## 技术栈 🛠️

- **前端框架**：React 18
- **UI组件**：Lucide React (图标)
- **AI集成**：Mastra Client JS
- **样式**：CSS3 (渐变、动画、响应式)
- **构建工具**：Create React App

## 快速开始 🚀

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd diet-assistant
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 可用脚本

- `npm start` - 启动开发服务器
- `npm test` - 运行测试
- `npm run build` - 构建生产版本
- `npm run eject` - 弹出CRA配置（不可逆）

## 项目结构 📁

```
src/
├── components/
│   ├── DietAssistant.js      # 主要组件
│   └── DietAssistant.css     # 样式文件
├── App.js                    # 应用入口
├── App.css                   # 全局样式
└── index.js                  # React渲染入口
```

## 核心组件 🏗️

### DietAssistant

主要的聊天界面组件，包含以下功能：

- **消息管理**：处理用户和AI的对话消息
- **实时通信**：与AI后端服务进行异步通信
- **界面交互**：提供流畅的用户体验
- **响应式设计**：适配不同设备屏幕

### 主要功能模块

1. **消息显示区域**
   - 支持用户和AI消息的差异化显示
   - 消息时间戳
   - 流畅的动画效果

2. **输入区域**
   - 多行文本输入
   - 快捷发送（Enter键）
   - 发送状态管理

3. **快捷操作**
   - 预设常用问题
   - 一键填充输入框

## AI集成 🤖

项目使用Mastra Client连接到AI服务：

```javascript
const client = new MastraClient({
  baseUrl: 'XXX'
});
```

### API调用流程

1. 用户输入问题
2. 发送到AI代理服务
3. 处理AI响应
4. 在界面中显示结果

## 样式设计 🎨

### 设计特点

- **现代化界面**：采用卡片式设计和毛玻璃效果
- **渐变背景**：多层次渐变营造视觉深度
- **动画效果**：流畅的过渡动画和加载动画
- **响应式布局**：适配手机和桌面设备

### 主要样式

- 渐变背景和毛玻璃效果
- 消息气泡设计
- 悬浮动画效果
- 自定义滚动条样式

## 使用示例 💡

用户可以向AI助手咨询：

- **"制定减脂食谱"** - 获取减脂期间的营养搭配建议
- **"推荐健康早餐"** - 了解营养丰富的早餐选项
- **"运动后饮食建议"** - 获取运动后的营养补充方案

## 部署 🚀

### 构建生产版本

```bash
npm run build
```

构建完成后，`build` 文件夹包含优化后的静态文件，可以部署到任何静态托管服务。

### 部署选项

- **Netlify**：拖拽部署
- **Vercel**：Git集成自动部署
- **GitHub Pages**：免费静态托管
- **服务器**：传统Web服务器部署

## 开发说明 👩‍💻

### 添加新功能

1. 在 `components` 目录下创建新组件
2. 更新主组件引用
3. 添加对应的CSS样式
4. 测试功能完整性

### 自定义AI服务

修改 `DietAssistant.js` 中的client配置：

```javascript
const client = new MastraClient({
  baseUrl: 'your-ai-service-url'
});
```

## 浏览器兼容性 🌐

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## 贡献指南 🤝

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证 📄

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。



**祝您使用愉快！健康饮食，从今天开始！** 🌟