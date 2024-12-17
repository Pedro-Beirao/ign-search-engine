---
marp: true
theme: uncover
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# IGN Review Search
#### PRI - Milestone #3

Pedro Beirão - up202108718

---

- Solr Improvements
- GUI Interface
- Semantic Search

---

#### Solr Improvements

### Synonyms

- Used during index
- Solr filter using a very big file with many synonyms of the english language

---

#### Solr Improvements

### Field Boost

- Used during query
- Boost certain fields like the Title

---

#### Solr Improvements

### Fuzz Match

- Used during index
- Splits words into Grams

---

### GUI Interface

![](../website.jpg)

---

### Semantic Search

![height:13em](../semantic.jpg)

---

#### Precision Recall

### Query: Controls

M2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M3

![left height:10em](../pr_controls.jpg)

---

#### Precision Recall

### Query: Multiplayer

M2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M3

![left height:10em](../pr_multiplayer.jpg)