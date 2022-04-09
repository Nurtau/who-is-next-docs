---
label: Что использовано
title: Что использовано
sidebar_position: 2
---
# Что использовано

## Технологии

- Alamofire - для взаимодействие с сервером(get, post запросы)
- Websocket - нативный фреймворк для получение веб-сокетов
- Swift 5.2
- Combine - для асинхронных задач

### Веб-сокеты

Ниже мы используем вебсокеты для отображения и парсинга данных:

```swift 
func createWebSocketTask() {
    let urlSession = URLSession(configuration: .default)
    webSocketTask = urlSession.webSocketTask(with: URL(string: "wss://echo.websocket.org")!)
  }
  
  func receive() {
    webSocketTask?.receive { result in
      switch result {
      case .failure(let error):
        print(error.localizedDescription)
      case .success(let message):
        switch message {
        case .string(let text):
          self.textView.text += text
        case .data(let data):
          print("Received data: \(data)")
        @unknown default:
          break
        }
      }
      
      self.receive()
    }
  }
```
