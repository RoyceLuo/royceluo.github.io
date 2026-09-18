---
layout: blog
title: Blog
description: Posts and thoughts
permalink: /blog/
hide_title: true
---

<div class="post-cards" id="post-list">
{% for post in site.posts %}
  {% assign tag_text = post.tags | join: " " %}
  {% assign search_text = post.title | strip_html | append: " " | append: post.excerpt | strip_html | append: " " | append: tag_text | downcase | escape %}
  <article class="post-card" data-year="{{ post.date | date: '%Y' }}" data-search="{{ search_text }}">
    <p class="post-card-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2 class="post-card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    {% if post.tags.size > 0 %}
    <div class="post-card-tags">
      {% for tag in post.tags %}<button type="button" class="post-tag" data-tag="{{ tag | downcase }}">{{ tag }}</button>{% endfor %}
    </div>
    {% endif %}
  </article>
{% endfor %}
</div>

<p class="no-results" id="no-results" hidden>No posts match your search.</p>
