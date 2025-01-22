---
sidebar_position: 6
slug: /requirements-technics
---

# Подходы к спецификации требований

Спецификация требований — это важный этап разработки продукта, который помогает сформулировать ожидания, задачи и характеристики будущей системы или продукта. Она необходима для координации работы команд, создания прозрачности и минимизации рисков недопонимания. Рассмотрим популярные подходы и техники спецификации требований максимально подробно, с примерами, структурой и рекомендациями по применению.

## User Story (Пользовательская история)

**Описание**:
User Story (Пользовательская история) — это техника, которая описывает требование с точки зрения конечного пользователя. Она помогает определить, какую ценность продукт или функция предоставляют пользователю. User Story формулируется кратко и лаконично, в формате:  
*Как [тип пользователя], я хочу [действие], чтобы [цель/результат].*

**Структура**:  

- Роль пользователя: кто взаимодействует с системой.  
- Действие: что пользователь хочет сделать.  
- Цель: зачем пользователь это делает, какой результат ожидает.  

**Пример**:  

- *Как покупатель интернет-магазина, я хочу добавить товар в корзину, чтобы купить его позже.*  
- *Как администратор, я хочу видеть список пользователей, чтобы управлять их доступом.*

**Преимущества**:  

- Простота написания и восприятия.  
- Фокус на потребностях пользователя.  
- Легкость интеграции в Agile-процессы (например, Scrum).  

**Недостатки**:  

- Могут быть слишком общими.  
- Не хватает деталей для сложных сценариев.  

**Когда использовать**:  

- В Agile-разработке.  
- Для постановки задач, ориентированных на пользователей.  
- Когда важно быстро создать иерархию требований.

## Job Story (Рабочая история)

**Описание**:  
Job Story (Рабочая история) — это расширенная версия User Story, ориентированная на контекст, мотивацию и задачи пользователя. Job Story фокусируется на том, что движет пользователем, и на конкретных условиях, в которых он действует. Формат:  
*Когда [ситуация], я хочу [действие/мотивация], чтобы [желаемый результат].*

**Структура**:  

1. Контекст: в какой ситуации находится пользователь.  
2. Действие или мотивация: что пользователь хочет сделать или достичь.  
3. Результат: ожидаемая выгода или эффект.  

**Пример**:  

- *Когда я просматриваю товары на сайте и нахожу нужный, я хочу быстро добавить его в корзину, чтобы продолжить поиск других товаров.*  
- *Когда я забываю пароль, я хочу получить доступ к системе через временный код, чтобы быстро продолжить работу.*

**Преимущества**:  

- Учитывает контекст использования.  
- Ориентирована на мотивацию пользователя.  
- Более точная, чем User Story.  

**Недостатки**:  

- Требует больше времени на формулировку.  
- Менее интуитивна для новичков.  

**Когда использовать**:  

- Для UX-дизайна.  
- При создании новых функций, где важно понимать мотивацию пользователя.  
- В сложных или неоднозначных сценариях.

## Use Case (Сценарий использования)

**Описание**:  
Use Case (Сценарий использования) — это техника, описывающая взаимодействие пользователя (или другого актора) с системой для достижения конкретной цели. Сценарии детализируют процесс выполнения задачи, включая основные и альтернативные пути.

**Структура**:  

1. Название: короткое описание сценария.  
2. Акторы: пользователи или системы, которые участвуют.  
3. Предусловия: что должно быть выполнено до начала сценария.  
4. Основной поток: последовательность действий для достижения цели.  
5. Альтернативные пути: что происходит, если что-то идет не так.  
6. Постусловия: состояние системы после выполнения сценария.  

**Пример**:  
**Название:** Оформление заказа.  
**Актор:** Покупатель.  
**Основной поток:**  

1. Покупатель выбирает товары и добавляет их в корзину.  
2. Покупатель переходит в корзину и нажимает "Оформить заказ".  
3. Покупатель вводит адрес доставки и контактные данные.  
4. Покупатель выбирает способ оплаты и подтверждает заказ.  
5. Система отправляет подтверждение заказа.

**Преимущества**:  

- Подходит для сложных систем.  
- Описывает полное взаимодействие пользователя и системы.  
- Учитывает альтернативные сценарии.  

**Недостатки**:  

- Требует больше времени для составления.  
- Может быть сложной для восприятия.  

**Когда использовать**:  

- Для проектирования сложных систем.  
- Для документирования бизнес-процессов.  
- На этапе детализации требований.

## SRS (Software Requirements Specification)

**Описание**:  
SRS (Спецификация требований к программному обеспечению) — это подробный документ, содержащий функциональные и нефункциональные требования к системе, технические детали и ограничения. Это стандартный формат для фиксированных требований в крупных проектах.

**Структура SRS**:  

1. **Введение**: цели, назначение документа, обзор системы.  
2. **Обзор продукта**: функции, характеристики, ограничения.  
3. **Функциональные требования**: описание всех функций системы.  
4. **Нефункциональные требования**: производительность, безопасность, доступность.  
5. **Ограничения**: технологии, стандарты, платформы.  

**Пример (выдержка):**  
**Функция:** Авторизация.  

- Пользователь вводит логин и пароль.  
- Система проверяет данные на сервере.  
- При успешной проверке пользователь получает доступ.  
- При ошибке выводится сообщение.

**Преимущества**:  

- Подробность и полнота описания.  
- Удобен для контрактов и тендеров.  
- Стандартизация формата.  

**Недостатки**:  

- Долгое составление и обновление.  
- Мало гибкости в условиях изменения требований.  

**Когда использовать**:  

- В крупных и сложных проектах.  
- Для внешних подрядчиков или регулируемых проектов.  
- В проектах с фиксированной стоимостью и сроками.

## GWT (Given-When-Then)

**Описание**:  
GWT (Дано-Когда-Тогда) используется для описания поведения системы в рамках BDD (Behavior-Driven Development). Эта техника помогает создавать тест-кейсы, которые точно отражают ожидаемое поведение.  

**Формат**:  

- *Дано* (Given): начальные условия.  
- *Когда* (When): действие пользователя или системы.  
- *Тогда* (Then): ожидаемый результат.  

**Пример**:  

- Дано: Пользователь авторизован и находится в корзине.  
- Когда: Он нажимает кнопку "Оформить заказ".  
- Тогда: Отображается форма ввода данных доставки.

**Преимущества**:  

- Простота интеграции с автоматизированным тестированием.  
- Ясность и однозначность.  
- Помогает согласовать ожидания между командами.  

**Недостатки**:  

- Фокусируется только на поведении, игнорируя детали реализации.  
- Требует общего понимания методологии BDD.  

**Когда использовать**:  

- Для описания тест-кейсов.  
- В Agile или DevOps-командах.  
- Когда требуется автоматизация тестов.

## BRD (Business Requirements Document)

**Описание**:  
BRD (Документ бизнес-требований) описывает цели и ценности проекта с точки зрения бизнеса. Он отвечает на вопрос: *Что нужно бизнесу и почему?*

**Структура BRD**:  

1. **Введение**: цель документа, заинтересованные стороны.  
2. **Бизнес-требования**: ключевые задачи и проблемы.  
3. **Цели проекта**: что бизнес хочет достичь.  
4. **Критерии успеха (KPI)**: как измерять успех.  
5. **Ограничения**: временные, бюджетные и ресурсные.  

**Пример:**  
Цель: Увеличить конверсию на 20%.  
Требование: Добавить возможность оплаты через Apple Pay.  
KPI: Снижение времени оформления заказа до 1 минуты.  

**Преимущества**:  

- Понятен для бизнес-стейкхолдеров.  
- Фокусируется на ценности.  
- Помогает согласовать ожидания.  

**Недостатки**:  

- Не учитывает технические детали.  
- Может быть слишком общим.  

**Когда использовать**:  

- На этапе инициации проекта.  
- Для согласования целей с заказчиком.  
- Для бизнес-ориентированных проектов.

## Docs as Code

**Описание**:  
Docs as Code — это подход, при котором документация создается, как программный код. Документы хранятся в системах контроля версий (например, Git), обновляются через pull requests и могут генерироваться автоматически.

**Пример использования**:  

- Документация API в формате OpenAPI (Swagger).  
- Markdown-файлы с инструкциями и сценариями использования.  
- CI/CD для автоматической публикации изменений в документации.  

**Преимущества**:  

- Обновления синхронизированы с кодом.  
- Автоматизация процесса документирования.  
- Простота контроля версий.  

**Недостатки**:  

- Требует технических знаний от авторов документации.  
- Непривычен для нетехнических специалистов.  

**Когда использовать**:  

- В DevOps-командах.  
- Для технической документации (например, API).  
- При разработке продуктов с частыми изменениями.

## Итоги  

- **User Story**: простой и быстрый способ описания требований.  
- **Job Story**: акцент на контекст и мотивацию.  
- **Use Case**: подробные сценарии взаимодействия.  
- **SRS**: максимально детализированные требования.  
- **GWT**: описание тестируемого поведения.  
- **BRD**: фокус на бизнес-целях.  
- **Docs as Code**: автоматизация и интеграция документации в разработку.

Выбор подхода зависит от контекста проекта, целей и особенностей команды. В реальной практике часто комбинируют несколько техник для достижения максимальной эффективности.