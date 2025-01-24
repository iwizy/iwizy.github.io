---
sidebar_position: 4
slug: /sql/subquery
---

# Вложенные запросы

Вложенные запросы (или подзапросы, субзапросы) в SQL — это запросы, которые используются внутри других запросов. Они позволяют выполнять операции, требующие промежуточных вычислений или извлечения данных из одной таблицы для использования в другой. Подзапросы могут быть вложены в такие конструкции, как `SELECT`, `FROM`, `WHERE`, `HAVING`, и другие.

## Основные виды вложенных запросов

1. **Вложенные запросы в `WHERE`**  
2. **Вложенные запросы в `FROM`**  
3. **Вложенные запросы в `SELECT`**

### Вложенные запросы в `WHERE`

Этот тип подзапросов используется для фильтрации данных в основном запросе на основе результата вложенного запроса.

**Пример**:  
Вывести всех сотрудников, которые работают в отделе с названием "HR".

```sql
SELECT name
FROM employees
WHERE department_id = (
    SELECT id
    FROM departments
    WHERE name = 'HR'
);
```

**Объяснение**:  

1. Вложенный запрос `SELECT id FROM departments WHERE name = 'HR'` находит идентификатор отдела с названием "HR".
2. Основной запрос использует этот результат для фильтрации сотрудников.

### Вложенные запросы в `FROM`

Подзапросы в `FROM` часто называют "таблицами-представлениями". Они создают временные таблицы, которые используются основным запросом.

**Пример**:  
Вывести среднюю зарплату по каждому отделу, но с учетом только тех сотрудников, у которых зарплата выше 3000.

```sql
SELECT department_id, AVG(salary) AS avg_salary
FROM (
    SELECT department_id, salary
    FROM employees
    WHERE salary > 3000
) AS filtered_employees
GROUP BY department_id;
```

**Объяснение**:  

1. Вложенный запрос формирует временную таблицу `filtered_employees`, содержащую данные только о сотрудниках с зарплатой выше 3000.
2. Основной запрос рассчитывает среднюю зарплату по отделам.

### Вложенные запросы в `SELECT`

Эти подзапросы используются для добавления вычисляемых значений в результаты основного запроса.

**Пример**:  
Вывести имя каждого сотрудника и количество сотрудников в его отделе.

```sql
SELECT name, (
    SELECT COUNT(*)
    FROM employees AS e2
    WHERE e2.department_id = e1.department_id
) AS department_size
FROM employees AS e1;
```

**Объяснение**:  

1. Для каждого сотрудника из основного запроса выполняется подзапрос, который подсчитывает количество сотрудников в его отделе.
2. Основной запрос выводит имя сотрудника и размер его отдела.

## Другие важные моменты

1. **Коррелированные подзапросы**  
   Это подзапросы, которые зависят от данных основного запроса. В примере с подсчетом сотрудников по отделу приведен именно коррелированный подзапрос.

2. **Некоррелированные подзапросы**  
   Они выполняются один раз и не зависят от внешнего запроса.

3. **Операторы для работы с подзапросами**:
   - `IN`: Используется для проверки принадлежности значения списку.
   - `EXISTS`: Проверяет наличие строк в подзапросе.
   - `ANY` / `ALL`: Используется для сравнения значений с результатом подзапроса.

**Пример с `EXISTS`**:  
Вывести всех сотрудников, которые работают в отделах с более чем 5 сотрудниками.

```sql
SELECT name
FROM employees e1
WHERE EXISTS (
    SELECT 1
    FROM employees e2
    WHERE e1.department_id = e2.department_id
    GROUP BY department_id
    HAVING COUNT(*) > 5
);
```

## Когда использовать вложенные запросы

- Когда нужно разделить сложные вычисления на несколько этапов.
- Для повышения читаемости и разделения логики.
- Если альтернативой является использование временных таблиц.

Вложенные запросы помогают сделать SQL-запросы мощными и гибкими, но их следует использовать с осторожностью, чтобы избежать снижения производительности.