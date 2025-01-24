---
sidebar_position: 3
slug: /sql/group
---

# Группировка и сортировка 

В SQL группировка и сортировка являются важными инструментами для анализа и организации данных. Они используются для управления порядком вывода строк и для объединения данных по определённым критериям. Рассмотрим их подробнее:

## Группировка (GROUP BY)

Группировка позволяет объединять строки с одинаковыми значениями в одну группу, чтобы применять к ним агрегатные функции, такие как `SUM()`, `AVG()`, `COUNT()`, `MAX()`, `MIN()`.

### Синтаксис

```sql
SELECT столбец1, столбец2, агрегатная_функция(столбец3)
FROM таблица
WHERE условие
GROUP BY столбец1, столбец2
HAVING условие_на_группу
```

### Этапы работы

1. **WHERE** — фильтрует строки перед группировкой.
2. **GROUP BY** — объединяет строки в группы по указанным столбцам.
3. **АГРЕГАТНЫЕ ФУНКЦИИ** — выполняют вычисления внутри каждой группы.
4. **HAVING** — фильтрует группы (аналогично `WHERE`, но после группировки).

### Пример

Предположим, у вас есть таблица `sales` с колонками `category`, `product` и `revenue`. Вы хотите узнать общую выручку по категориям:

```sql
SELECT category, SUM(revenue) AS total_revenue
FROM sales
GROUP BY category;
```

### HAVING для фильтрации групп

Например, вывести только те категории, где выручка больше 1000:

```sql
SELECT category, SUM(revenue) AS total_revenue
FROM sales
GROUP BY category
HAVING SUM(revenue) > 1000;
```

## Сортировка (ORDER BY)

Сортировка используется для упорядочивания строк результата запроса на основе одного или нескольких столбцов.

### Синтаксис

```sql
SELECT столбец1, столбец2
FROM таблица
WHERE условие
ORDER BY столбец1 [ASC|DESC], столбец2 [ASC|DESC];
```

- **ASC** — сортировка по возрастанию (по умолчанию).
- **DESC** — сортировка по убыванию.

### Пример

1. Сортировка по одной колонке:

   ```sql
   SELECT product, revenue
   FROM sales
   ORDER BY revenue DESC;
   ```

2. Сортировка по нескольким колонкам:

   ```sql
   SELECT category, product, revenue
   FROM sales
   ORDER BY category ASC, revenue DESC;
   ```

## Комбинирование GROUP BY и ORDER BY

Вы можете использовать группировку и сортировку в одном запросе. Например, если вы хотите сначала сгруппировать данные, а затем упорядочить группы по итоговым значениям:

### Пример

```sql
SELECT category, SUM(revenue) AS total_revenue
FROM sales
GROUP BY category
ORDER BY total_revenue DESC;
```

## Особенности и ограничения

1. **GROUP BY должен включать все столбцы, которые не используются в агрегатных функциях.**

   ```sql
   SELECT category, product, SUM(revenue)
   FROM sales
   GROUP BY category, product;
   ```

2. **ORDER BY может ссылаться на псевдонимы столбцов или номера их позиций:**

   ```sql
   SELECT category, SUM(revenue) AS total_revenue
   FROM sales
   GROUP BY category
   ORDER BY total_revenue DESC;
   ```

3. **HAVING нельзя использовать без GROUP BY, если нет агрегатной функции.**

## Заключение

- Используйте **GROUP BY** для объединения строк в группы и применения к ним агрегатных функций.
- Применяйте **ORDER BY** для сортировки результатов.
- Комбинирование этих инструментов даёт возможность создавать сложные запросы для анализа данных.