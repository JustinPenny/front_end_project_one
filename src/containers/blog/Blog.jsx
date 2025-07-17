import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className='content__blog section__padding' id="blog">
      <div className='content__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='content__blog-container'>
        <div className='content__blog-container_groupA'>
          <Article imgUrl = {blog01} date="July 27, 2025" title="Content is the future. Let's explore how it is."/>
        </div>
        <div className='content__blog-container_groupB'>
          <Article imgUrl = {blog02} date="July 27, 2025" title="Content is the future. Let's explore how it is."/>
          <Article imgUrl = {blog03} date="July 27, 2025" title="Content is the future. Let's explore how it is."/>
          <Article imgUrl = {blog04} date="July 27, 2025" title="Content is the future. Let's explore how it is."/>
          <Article imgUrl = {blog05} date="July 27, 2025" title="Content is the future. Let's explore how it is."/>
        </div>
      </div>
    </div>
  )
}

export default Blog