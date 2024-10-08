import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Blog({ readTime, link, content, title, stack }) {
  return (
    <Card className={link ? 'blogCard' : 'blogCard disabled'} onClick={link ? () => window.open(link) : () => { }} style={{ width: '18rem', 'text-align': 'left', background: 'rgba(255, 255, 255, 0.2)' }}>
      <Card.Body>
        {/* {!link && <Badge bg="rgba(243, 244, 246)" className='blogTech'><h6>To be published</h6></Badge>} */}
        {stack.map(stack => <Badge bg="rgb(244 244 244 / 99%)" className='blogTech'><h6>{stack}</h6></Badge>)}
        <Card.Title className='blogTitle purple'>{title.split(' ').slice(0, 10).join(' ')}</Card.Title>
        <Card.Text className='blogContent'>
          {content}
        </Card.Text>
        <Card.Footer className="text-muted blogFooter">
          {link ?
            <>
              <Card.Link href={link} style={{textDecoration: 'none'}} className='purple'>Read Blog</Card.Link>
              <Card.Text>{readTime} read</Card.Text>
            </>
            :
            <Card.Text>Stay Tuned!</Card.Text>
          }
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Blog;