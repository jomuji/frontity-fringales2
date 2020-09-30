import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

import people from '../svg/customer.svg';
import apron from '../svg/apron.svg';
import cookingtime from '../svg/cooking-time.svg';
import meal from '../svg/meal.svg';
import gasstove from '../svg/gas-stove.svg';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  // Get the data of the post.
  const post = state.source[item.type][item.id];
  const date = new Date(item.date);

  // ACF
  const liste_dingredients = post.acf["liste_dingredients"];
  const liste_detapes = post.acf["liste_detapes"];
  const recipe_serves = post.acf["recipe_serves"];
  const recipe_preparation_time = post.acf["recipe_preparation_time"];
  const recipe_just_cooking_time = post.acf["recipe_just_cooking_time"];
  const recipe_cooking_time = post.acf["recipe_cooking_time"];
  const recipe_cooking_temperature = post.acf["recipe_cooking_temperature"];

  return (
    <article className="card rounded-0 mb-5">
      <div className="row no-gutters">
        <div className="col-12 col-md-6">
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}
        </div>
        <div className="col-12 col-md-6">
          <div className="card-body px-sm-5 d-flex flex-column justify-content-between h-100">
            <div className="small text-muted">
              {/* If the post has an author, we render a clickable author text. */}
              {author && (
                <StyledLink link={author.link}>
                  <AuthorName>
                    Par <b>{author.name}</b>
                  </AuthorName>
                </StyledLink>
              )}
              <PublishDate>
                {" "}
                le <b>{date.toDateString()}</b>
              </PublishDate>
            </div>
            
            <Link link={item.link}>
              <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </Link> 

            <Icons className="d-flex align-items-center justify-content-between w-100">
              {(recipe_serves) &&<div className="d-inline-flex align-items-center"><img src={people} className="icon d-inline-block mr-1" alt="icon" width="24px" />{recipe_serves} pers.</div>}
              {(recipe_preparation_time) && <div className="d-inline-flex align-items-center"><img src={apron} className="icon d-inline-block mr-1" alt="icon" width="24px" />{recipe_preparation_time}</div>}
              {(recipe_just_cooking_time) && <div className="d-inline-flex align-items-center"><img src={cookingtime} className="icon d-inline-block mr-1" alt="icon" width="24px" />{recipe_just_cooking_time}</div>}
              {(recipe_cooking_time) && <div className="d-inline-flex align-items-center"><img src={meal} className="icon d-inline-block mr-1" alt="icon" width="24px" />{recipe_cooking_time}</div>}
              {(recipe_cooking_temperature) && <div className="d-inline-flex align-items-center"><img src={gasstove} className="icon d-inline-block mr-1" alt="icon" width="24px" />{recipe_cooking_temperature}</div>}
            </Icons>      
          </div>
        </div>
      </div>

      

      

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      

      {/* If the post has an excerpt (short summary text), we render it */}
      {/* {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )} */}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2.2rem;
  color: #2E0014;
  margin: 0;
  
  box-sizing: border-box;
  font-family: 'Merriweather', serif;
`;

const Icons = styled.div`
color: #F24236;
.icon{
  filter: invert(54%) sepia(62%) saturate(5711%) hue-rotate(336deg) brightness(92%) contrast(107%);
}
`

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.5);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.5);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
