export async function Comments({ postId }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/wp/v2/comments?post=${postId}`,
      {
        next: {
          revalidate: 60
        }
      }
    );
    const comments = await res.json();
  
    // Crea un objeto de mapeo para agrupar los comentarios anidados por ID del padre
    const commentMap = {};
    comments.forEach(comment => {
      const parentId = comment.parent;
      if (commentMap[parentId]) {
        commentMap[parentId].push(comment);
      } else {
        commentMap[parentId] = [comment];
      }
    });
  
    // Función recursiva para generar el HTML de los comentarios y sus respuestas anidadas
    const generateCommentHtml = comment => {
        
      let commentHtml = `<li><p>${comment.content.rendered}</p></li>`;
  
      if (commentMap[comment.id]) {
        commentHtml += '<ul>';
        commentMap[comment.id].forEach(nestedComment => {
          commentHtml += generateCommentHtml(nestedComment);
        });
        commentHtml += '</ul>';
      }
  
      return commentHtml;
    };
  
    // Genera el HTML para todos los comentarios principales
    const html = comments
      .filter(comment => !comment.parent)
      .map(comment => generateCommentHtml(comment))
      .join('');
  
    return (
      <>
        <div className="comments-box pt-5">
          {comments.length > 0 ? (
            <>
            <h3>Comentarios</h3>
            <ul dangerouslySetInnerHTML={{ __html: html }}></ul>
            </>
          ) : (
            <h5>No hay comentarios en éste post</h5>
          )}
        </div>
      </>
    );
  }
  