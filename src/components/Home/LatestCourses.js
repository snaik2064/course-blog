import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Course from '../Courses/Course'
import styles from '../../css/courses.module.css'
import Title from '../Title'

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }, limit: 6) {
      nodes {
        title
        size
        url
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
`

const Courses = () => {
  const {
    allStrapiCourse: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="all" subtitle="courses"></Title>
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
      <Link to="/courses" className="btn-primary">
        all courses
      </Link>
    </section>
  )
}

export default Courses
