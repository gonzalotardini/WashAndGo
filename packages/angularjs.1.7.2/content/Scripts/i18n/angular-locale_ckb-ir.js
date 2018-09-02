  CkyMunge: ISAPI filter for ASP session state for cookieless browsers
  ====================================================================


Table of Contents
=================

    Overview
    Installation
    Build Notes
    Support
    Change Notes


Overview
========

This filter is a workaround that helps Active Server Pages deal with
browsers that don't understand cookies or that refuse to accept
cookies.  ASP uses the ASPSESSIONID cookie to maintain its session
state.  ASP expects the browser to send this cookie to the server with
every request that it makes.  The ASPSESSIONID cookie is unique to a
session.  Without it, ASP does not know which session the user owns and
it cannot keep the Session object up to date as the user moves from page
to page.

The CkyMunge filter works like this:

1. The filter receives a request for a particular URL.  If the
   headers of the request contain either "Cookie: ASPSESSIONID=xxx"
   (IIS 3.0) or "Cookie: ASPSESSIONIDxxxxxxxx=xxx" (IIS 4.0)
   header that ASPSESSIONID is recorded.  If the URL contains an
   encoded ASPSESSIONID (see step 2), the ASPSESSIONID is
   removed from the URL and a Cookie header is generated
   instead.  The ASPSESSIONID, if present, is recorded for this
   transaction.

2. CkyMunge filters all outgoing data.  When ASP sends out a page in
   response to the above request, CkyMunge removes the ASPSESSIONID
   Set-Cookie headers, if present (so that browsers with cookie
   warnings will have nothing to complain about), and munges any
   local, relative URLs embedded in the page (e.g., http:foo/bar.asp will
   become something like http:foo/bar.asp-ASP=PVZQGHUMEAYAHMFV).

3. If the user clicks on one of those modified URLs, the request
   comes back to the server (and filter) and step 1 starts all
   over again.

Notes:

* Filtering outgoing raw data is an expensive process.  Every
  single byte of data sent out by IIS must be streamed through
  the filter.  The filter goes to some pains to be smart about
  not unneccesarily processing data it's not interested in (such
  as GIFs), but there are unavoidable performance costs
  associated with IIS needing to copy all data from kernel to
  user memory.

  It is impossible to give an accurate prediction of how much
  performance will degrade on your server if the CkyMunge filter
  is installed.  On a lightly loaded server, the difference
  should not matter.  On a heavily loaded server, the
  performance might become unacceptable.

  It is up to you to measure the performance of your server both
  with and without the filter installed and see if the
  convenience of supporting paranoid users or users with old
  browsers outweighs the cost of poorer performance.

  User education may be a better solution in the long run.
	The ASPSESSIONID cookie is not used to track longterm
	information about you.  The cookie is destroyed as soon
	as your browser shuts down and it is not stored on your
	machine.  It simply allows our webserver to keep track
	of what's in your shopping basket as you move from page
	to page in our application.

	If your browser doesn't support cookies, we'd like to
	suggest that you upgrade to a newer one that does.  When
	you do, you'll enjoy our site much more because your
	browser will also support frames and tables and other
	newer features of HTML that we've made use of.

* If you elect not to install this filter, you can minimize the
  number of cookies sent by Active Server Pages in one of two ways:
    * Put something into the Session object:
      <% Session("something") = whatever %>
    * Put a global.asa into the virtual root for your
      application, with a do-nothing Session_OnStart subroutine.

* The filter has 3 modes: off, on, and smart.  In the off mode
  the filter does no work (a better way of turning it off would
  be to remove it from the list of filters).  In On mode, all
  URLs will be munged as normal, and no cookies will be sent
  out.  In smart mode, the filter will munge and let cookies
  go out to the browser.  If the cookie comes back it will
  stop munging URLs and use the cookies.  If the cookie doesn't
  come back it will begin eating outgoing cookies and continue
  to munge URLs.  This will result in slightly better performance.
  The mode is controlled by a registry setting:
  /HKEY_LOCAL_MACHINE/software/microsoft/ckymunge/mungemode.  A
  mode of 0 is off, 1 is on, and 2 is smart.

* URLs will look ugly (http:foo/bar.asp-ASP=PVZQGHUMEAYAHMFV).
  Users can still bookmark them, however.  If the ASPSESSIONID
  is stale, the server will assign them a new session ID and
  start a new session.  If CkyMunge has been disabled in the
  meantime, then the URL will be unreachable.

* Only local, relative URLs are modified.  Ab