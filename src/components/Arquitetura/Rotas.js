const rotas = [];
const arquivosRouter = require.context('@/app', true, /Router.js$/)

arquivosRouter.keys().forEach((fileName) => {
  const content = arquivosRouter(fileName).default;

  if (Array.isArray(content)) {
    return content.forEach((route) => {
      routes.push(route);
    });
  }

  return routes.push(content);
});

export default routes;
