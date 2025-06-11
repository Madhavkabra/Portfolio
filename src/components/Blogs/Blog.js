import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Blog({ readTime, link, content, title, stack }) {
  const snippet = content ? content.substring(0, 200) + "..." : "No content available";

  return (
    <Card
      className={link ? 'blogCard' : 'blogCard disabled'}
      onClick={link ? () => window.open(link, '_blank') : () => {}}
      style={{
        width: '18rem',
        textAlign: 'left',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Card.Body>
        {stack.map((tech, i) => (
          <Badge key={i} bg="rgb(244 244 244 / 99%)" className="blogTech">
            <h6>{tech}</h6>
          </Badge>
        ))}

        <Card.Title className="blogTitle purple">
          {title.split(' ').slice(0, 10).join(' ')}
        </Card.Title>

        <Card.Text className="blogContent normal-font">
          {snippet}
        </Card.Text>

        <Card.Footer className="text-muted blogFooter">
          {link ? (
            <>
              <Card.Link href={link} style={{ textDecoration: 'none' }} className="purple">
                Read Blog
              </Card.Link>
              <Card.Text>{readTime} read</Card.Text>
            </>
          ) : (
            <Card.Text>Stay Tuned!</Card.Text>
          )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Blog;