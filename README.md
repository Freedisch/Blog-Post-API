# BLOG POST API

This is an API for a blog where you run CRUD operations on differents endpoints

## API Reference

#### Get all the blogs

```http
  GET /api/blogs
```

#### Get Blog

```http
  GET /api/blogs/${id}
```

#### Create a Blog

```http
  POST /api/blogs/
```

#### Update Blog

```http
  PUT /api/blogs/${id}
```

#### Delete Blog

```http
  DELETE /api/blogs/${id}
```

#### Get all the comments for a blog

```http
  GET /api/blogs/${id}/comments
```

#### Get a Comment

```http
  GET /api/blogs/${id}/comments/${id}
```

#### Create a Comment

```http
  POST /api/blogs/${id}/comments
```

#### Update Comment

```http
  PUT /api/blogs/${id}/comments/${id}
```

#### Delete Comment

```http
  DELETE /api/blogs/${id}/comments/${id}
```

## Deployment

To deploy this project run

```bash
  git clone https://github.com/Freedisch/Blog-Post-API.git
```

```bash
  cd Blog-Post-API
```

```bash
  npm install
```

```bash
  nodemon index.js
```
