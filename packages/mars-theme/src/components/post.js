import React, { useEffect, Fragment } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // ACF
  const liste_dingredients = post.acf["liste_dingredients"];
  const liste_detapes = post.acf["liste_detapes"];
  const recipe_serves = post.acf["recipe_serves"];
  const recipe_preparation_time = post.acf["recipe_preparation_time"];
  const recipe_just_cooking_time = post.acf["recipe_just_cooking_time"];
  const recipe_cooking_time = post.acf["recipe_cooking_time"];
  const recipe_cooking_temperature = post.acf["recipe_cooking_temperature"];


  const categories_names = post["categories_names"];

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      {/* Look at the settings to see if we should include the featured image */}
          <div className="card header text-white rounded-0">
              {state.theme.featured.showOnPost && (
                <FeaturedMedia id={post.featured_media} className="card-img mt-0"/>
              )}
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                <Categorie_name><Html2React html={categories_names[0]} /></Categorie_name>
                <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="display-4 text-center w-75" />
                
              </div>
          </div>

          <div className="content container py-5">

          <div class="card recette mb-3 my-5 rounded-0" >
            <div class="row no-gutters">
              <div class="col-md-8">
                <FeaturedMedia id={post.featured_media} className="card-img mt-0"/>
              </div>
              <div class="col-md-4 p-0">
                <div class="card-body h-100 p-5">
                  
                  {(recipe_serves !== "") && <div><Html2React html={recipe_serves} /> Personnes</div>}
                  {(recipe_preparation_time !== "") && <div><span>Préparation</span> <Html2React html={recipe_preparation_time} /></div>}
                  {(recipe_just_cooking_time !== "") && <div>Cuisson <Html2React html={recipe_just_cooking_time} /></div>}
                  {(recipe_cooking_time !== "") && <div>Temps total <Html2React html={recipe_cooking_time} /></div>}
                  {(recipe_cooking_temperature !== "") && <div>Température <Html2React html={recipe_cooking_temperature} /></div>}

                 
                </div>
              </div>
            </div>
          </div>

          <div className="row ingredients-etapes my-5">
            
            <div className="col-12 col-sm-6">
              <div className="card rounded-0 p-5 h-100">
                <h3>Ingrédients</h3>
                <Html2React html={liste_dingredients} />
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="card rounded-0 p-5 h-100">
                <h3>Étapes</h3>
                <Html2React html={liste_detapes} />
              </div>
            </div>
          </div>
        

        {/* Only display author and date on posts */}
        {data.isPost && (
          <Fragment>
             

            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              on <b>{date.toDateString()}</b>
            </DateWrapper>
            

            
          </Fragment>
        )}
      </div>

      

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={post.content.rendered} />
        
      </Content>
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

.card.header{
  background:#000;

  .featured-image2{
    opacity:0.4;
  }
}

.card.recette{

  .card-body{
    background-color: #44CFCB;
    color: #fff;
    font-size: 24px;
  }
}
  

  .ingredients-etapes{
    .card{
      background:#F6F5AE;
      color:#2E0014;

      h3{
        color:#2E0014;
        font-family: 'Pacifico', cursive;
        text-align: center;
        margin-bottom: 25px;
      }

      ul, ol{
        font-size: 18px;
        padding:0;

        li{
          padding: 15px 0;
          border-top: 1px solid #44CFCB;
        }
      }
    }
  }
`;

const Categorie_name = styled.h2`
  color: #44CFCB;
  font-family: 'Pacifico', cursive;
`;

const Title = styled.h1`
  
  margin-bottom: 8px;
  color: #fff;
  
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  .card{
    border-radius: 0;
    background-color:red!important;

    img{
      opacity:0.4;
    }
  }
  .featured-image2{
    opacity:0.5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
