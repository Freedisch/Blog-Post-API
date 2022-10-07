# BLOG POST API

This is an API for a blog where you run CRUD operations on differents endpoints

## API Reference

#### Get all the blogs

```bash
  GET /api/blogs
```

#### Get Blog

```bash
  GET /api/blogs/${id}
```

#### Create a Blog

```bash
  POST /api/blogs/
```

#### Update Blog

```bash
  PUT /api/blogs/${id}
```

#### Delete Blog

```bash
  DELETE /api/blogs/${id}
```

#### Get all the comments for a blog

```bash
  GET /api/blogs/${id}/comments
```

#### Get a Comment

```bash
  GET /api/blogs/${id}/comments/${id}
```

#### Create a Comment

```bash
  POST /api/blogs/${id}/comments
```

#### Update Comment

```bash
  PUT /api/blogs/${id}/comments/${id}
```

#### Delete Comment

```bash
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
