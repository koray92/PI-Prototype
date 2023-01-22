import clsx from "clsx";
console.log("b")
const topside = () => (
  <div class="container">
      <div class="row clearfix">
          <div class="col-lg-12">
              <div class="card chat-app">
                  <div id="plist" class="people-list">
                      <div class="input-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fa fa-search"></i></span>
                          </div>
                          <input type="text" className="form-control" placeholder="Online Friends"/>
                      </div>
                      <ul class="list-unstyled chat-list mt-2 mb-0">
                          <li className="clearfix">
                              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>
                                  <div class="about">
                                      <div class="name">Koray17</div>
                                      <div class="status"><i class="fa fa-circle offline"></i> left 7 mins ago</div>
                                  </div>
                          </li>
                          <li className="clearfix active">
                              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                  <div class="about">
                                      <div class="name">Murat38</div>
                                      <div class="status"><i class="fa fa-circle online"></i> online</div>
                                  </div>
                          </li>
                          <li className="clearfix">
                              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                  <div class="about">
                                      <div class="name">Emir27</div>
                                      <div class="status"><i class="fa fa-circle online"></i> online</div>
                                  </div>
                          </li>
                          <li className="clearfix">
                              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                                  <div class="about">
                                      <div class="name">Christian22</div>
                                      <div class="status"><i class="fa fa-circle offline"></i> left 10 hours ago</div>
                                  </div>
                          </li>
                          <li className="clearfix">
                              <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"/>
                                  <div class="about">
                                      <div class="name">Monica99</div>
                                      <div class="status"><i class="fa fa-circle online"></i> online</div>
                                  </div>
                          </li>
                          <li className="clearfix">
                              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                                  <div class="about">
                                      <div class="name">Dean-212</div>
                                      <div class="status"><i class="fa fa-circle offline"></i> offline since Oct 28
                                      </div>
                                  </div>
                          </li>
                      </ul>
                  </div>
                  <div class="chat">
                      <div class="chat-header clearfix">
                          <div class="row">
                              <div class="col-lg-6">
                                  <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                  </a>
                                  <div class="chat-about">
                                      <h6 class="m-b-0">Aiden Chavez</h6>
                                      <small>Last seen: 2 hours ago</small>
                                  </div>
                              </div>
                              <div class="col-lg-6 hidden-sm text-right">
                                  <a href="javascript:void(0);" className="btn btn-outline-secondary"><i
                                    class="fa fa-camera"></i></a>
                                  <a href="javascript:void(0);" className="btn btn-outline-primary"><i
                                    class="fa fa-image"></i></a>
                                  <a href="javascript:void(0);" className="btn btn-outline-info"><i
                                    class="fa fa-cogs"></i></a>
                                  <a href="javascript:void(0);" className="btn btn-outline-warning"><i
                                    class="fa fa-question"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="chat-history">
                          <ul class="m-b-0">
                              <li className="clearfix">
                                  <div class="message-data text-right">
                                      <span class="message-data-time">10:10 AM, Today</span>
                                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                                  </div>
                                  <div class="message other-message float-right"> Hi
                                  </div>
                              </li>
                              <li className="clearfix">
                                  <div class="message-data">
                                      <span class="message-data-time">10:12 AM, Today</span>
                                  </div>
                                  <div class="message my-message">Are we playing today?</div>
                              </li>
                              <li className="clearfix">
                                  <div class="message-data">
                                      <span class="message-data-time">10:15 AM, Today</span>
                                  </div>
                                  <div class="message my-message">I invited you
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="chat-message clearfix">
                          <div class="input-group mb-0">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="fa fa-send"></i></span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter text here..."/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default topside;
