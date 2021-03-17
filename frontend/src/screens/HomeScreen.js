const HomeScreen = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home-hero-section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Island Teki Blog</h1>
            <p className="lead">
              Teki in Samoan means "tech". Here you'll be able to read simple
              blog posts about what landon is using and learning. If you're a
              software or hardware engineer, having a blog is very beneficial
              for your learning process.
            </p>
          </div>
        </div>
      </section>
      {/* Blog List */}
      <section id="home-blog-list-section">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    <small className="text-muted">Created Jan. 12, 2021</small>
                  </p>
                  <p className="card-text desc-truncate">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    <small className="text-muted">Created Jan. 10, 2021</small>
                  </p>
                  <p className="card-text desc-truncate">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    <small className="text-muted">Created Jan. 8, 2021</small>
                  </p>
                  <p className="card-text desc-truncate">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Info Section */}
      <section id="home-info-section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1 className="display-5">Fluid jumbotron</h1>
              </div>
              <div className="col-5">
                <p className="lead">
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
