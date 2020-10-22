# r-donaldtrump

## Local API Reference

```text
-----------------------------------
r-donaldtrump - Local API Reference
-----------------------------------
Reddit-API-v-1-0-0
Commit Date: 2020-10-21
```

-----

[//]:# 'Dev'

[//]:# '### **Links:**'
[//]:# ''
[//]:# '// Josh Wardle Reddit API Guide (2015)'
[//]:# ''
[//]:# '// https://github.com/reddit-archive/reddit/wiki/API'
[//]:# ''
[//]:# '// Reddit Live API Docs'
[//]:# ''
[//]:# '// https://www.reddit.com/dev/api'
[//]:# ''
[//]:# '// Reddit Live API Docs / GET_api_me'
[//]:# 'https://www.reddit.com/dev/api#GET_api_me.json'
[//]:# ''

[//]:# 'Dev'

-----

[//]:# 'Dev'

[//]:# '// Reddit RSS Docs'
[//]:# 'https://www.reddit.com/wiki/rss'

[//]:# '// Notes //' 
[//]:# 'To,'
[//]:# 'RSS feed -> add ".rss"'
[//]:# 'To end of existing reddit URL'

[//]:# '// Notes - Examples - RSS //'

[//]:# 'Front page:'

[//]:# '```'
[//]:# 'http://www.reddit.com/.rss'
[//]:# '```'

[//]:# 'A subreddit:'

[//]:# '```'
[//]:# 'http://www.reddit.com/r/news/.rss'
[//]:# '```'

[//]:# 'A user:'

[//]:# '```'
[//]:# 'http://www.reddit.com/user/alienth/.rss'
[//]:# '```'

[//]:# 'A "multireddit":'

[//]:# '```'
[//]:# 'http://www.reddit.com/r/news+wtf.rss'
[//]:# '```'

[//]:# '- Note:'
[//]:# '  - Slash is optional'

[//]:# 'A "Comments" on a specific reddit post:'

[//]:# '```'
[//]:# 'http://www.reddit.com/r/technology/comments/1uc9ro/wearing_a_mind_controlled_exoskeleton_a_paralyzed/.rss'
[//]:# '```'

[//]:# 'A "Submissions" from a domain:'

[//]:# '```'
[//]:# 'http://www.reddit.com/domain/microsoft.com/.rss'
[//]:# '```'

[//]:# '// /u/pathogendavid RSS Guide //'

[//]:# '["RSS, reddit, and you" v-LIVE](/r/pathogendavid/comments/tv8m9/pathogendavids_guide_to_rss_and_reddit/)'
[//]:# '["RSS, reddit, and you" v-OLD](https://www.reddit.com/r/pathogendavid/comments/tv8m9/pathogendavids_guide_to_rss_and_reddit/)'

[//]:# 'Dev'

-----

[//]:# 'Dev'


**// Quick Links //**

[docs/GET_api_me](https://www.reddit.com/dev/api#GET_api_me)

[docs/GET_api_trending_subreddits](https://www.reddit.com/dev/api#GET_api_trending_subreddits)

[docs/GET_new](https://www.reddit.com/dev/api#GET_new)


[//]:# 'Dev'

-----

# Versioning

[Reddit-API-v-1-0-0](https://www.reddit.com/dev/api)

[Reddit API Guide (2015)](https://github.com/reddit-archive/reddit/wiki/API)

## start

**>>>> Reddit-API-v-1-0-0 Start <<<<**

-----

```text

openapi: 3.0.0
x-schemes:
  - https
info:
  title: Reddit API
  version: "1.0.0"
  x-providerName: reddit.com
externalDocs:
  url: 'https://www.reddit.com/dev/api'
x-consumes:
  - application/json
x-produces:
  - application/json
x-securityDefinitions:
  accessCode:
    type: oauth2
    tokenUrl: 'http://example.com/oauth/token'
    authorizationUrl: 'http://example.com/oauth/auth'
    flow: accessCode
    scopes:
      write: allows modifying resources
      read: allows reading resources
    description: 'https://github.com/reddit-archive/reddit/wiki/OAuth2'
security:
  - accessCode:
      - read
      - write
paths:
  /api/trending_subreddits:
    get:
      security: []
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/listing'
  /duplicates/{id}:
    get:
      parameters:
      - name: id
        in: path
        schema: {type: string}
        required: true
      - name: after
        in: query
        schema: {type: string}
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/listing'
      security: []
  /api/save:
    post:
      externalDocs:
        url: https://www.reddit.com/dev/api#POST_api_save
      parameters:
      - name: id
        in: query
        schema: {type: string}
        description: fullname
      - name: type
        schema: {type: string}
        in: query
      responses:
        '200':
          description: OK
  /api/unsave:
    post:
      externalDocs:
        url: https://www.reddit.com/dev/api#POST_api_unsave
      parameters:
      - name: id
        in: query
        schema: {type: string}
        description: fullname
      responses:
        '200':
          description: OK
  /user/{username}/saved:
    get:
      summary: Get saved items
      parameters:
      - name: username
        in: path
        schema: {type: string}
        required: true
      - name: type
        in: query
        schema:
          type: string
          enum: ['links', 'comments']
      - name: after
        in: query
        schema: {type: string}
      - name: limit
        in: query
        schema: {type: string}
      - name: raw_json
        in: query
        schema: {type: string}
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                oneOf:
                - $ref: '#/components/schemas/Post'
                - $ref: '#/components/schemas/Comment'
  /api/multi/mine:
    get:
      summary: Get multireddits
      parameters:
      - name: expand_srs
        in: query
        description: 'Expand subreddits'
        schema: {type: boolean}
        x-default: 1
      - name: raw_json
        in: query
        schema: {type: boolean}
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Multireddit'
  /api/subscribe:
    post:
      summary: Subscribe to a subreddit
      description: "at most 250 at a time"
      parameters:
      - name: action
        in: query
        schema:
          type: string
          enum: ['sub', 'unsub']
      - name: skip_initial_defaults
        in: query
        schema: {type: boolean}
      - name: sr
        in: query
        schema: {type: string}
        description: comma separated fullnames
      - name: sr_name
        in: query
        schema: {type: string}
        description: comma separated subreddit
      responses:
        '200':
          description: OK
  /subreddits/mine/subscriber:
    get:
      summary: Get reddit subscriptions
      parameters:
      - name: after
        in: query
        schema: {type: string}
      - name: limit
        in: query
        schema: {type: integer}
      - name: raw_json
        in: query
        schema: {type: boolean}
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Subreddit'
components:
  schemas:
#    x-description: 'https://github.com/reddit-archive/reddit/wiki/JSON'
    uint:
      type: integer
      minimum: 0
    id:
      type: string
      pattern: "[a-z0-9]{7}"
      description: this item's identifier; prepend `kind_` to get fullname
      example: "c3y9tyh"
    name:
      type: string
      description: "See [API: Glossary](https://github.com/reddit-archive/reddit/wiki/API) for details on what FULLNAMEs are."
      example: "t1_c3v7f8u"
    thing:
      type: object
      properties:
        kind:
          type: string
          description: "All things have a kind. The kind is a String identifier that denotes the object's type. Some examples: Listing, more, t1, t2"
          example: 
        data:
          type: object
          description: >
            A custom data structure used to hold valuable information. This object's format will follow the data structure respective of its kind. See below for specific structures.
          properties:
            id:
              $ref: "#/components/schemas/id"
            name:
              $ref: "#/components/schemas/name"
    listing:
      type: object
      properties:
        before:
          type: string
          description: >
            The fullname of the listing that follows before this page. null if there is no previous page.
        after:
          type: string
          description: >
            The fullname of the listing that follows after this page. null if there is no next page.
        modhash:
          type: string
          description: >
            This modhash is not the same modhash provided upon login. You do not need to update your user's modhash everytime you get a new modhash. You can reuse the modhash given upon login.
        children:
          type: array
          items:
            $ref: '#/components/schemas/thing'
          description: >
            A list of things that this Listing wraps.
    more:
      allOf:
      - $ref: '#/components/schemas/thing'
      - type: object
        properties:
          kind:
            type: string
            enum: ['more']
          data:
            type: object
            properties:
              name:
                example: "t1_c3y9tyh"
              id:
                example: "c3y9tyh"
              children:
                type: array
                description: A list of String `id`s that are the additional things that can be downloaded but are not because there are too many to list.
                items:
                  type: string
                  example: "c3y9tyh"
    votable:
      type: object
      properties:
        score:
          $ref: '#/components/schemas/uint'
          description: "the net-score of the link. note: A submission's score is simply the number of upvotes minus the number of downvotes. If five users like the submission and three users don't it will have a score of 2. Please note that the vote numbers are not 'real' numbers, they have been 'fuzzed' to prevent spam bots etc. So taking the above example, if five users upvoted the submission, and three users downvote it, the upvote/downvote numbers may say 23 upvotes and 21 downvotes, or 12 upvotes, and 10 downvotes. The points score is correct, but the vote totals are 'fuzzed'."
        ups:
          $ref: '#/components/schemas/uint'
        downs:
          example: 0
        likes:
          type: boolean
          nullable: true
          description: >
            how the logged-in user has voted on the comment - True = upvoted, False = downvoted, null = no vote
    created:
      type: object
      properties:
        created:
          type: number
          description: the time of creation in local epoch-second format.
          example: 1331042771.0
        created_utc:
          type: number
          description: the time of creation in UTC epoch-second format. Note that neither of these ever have a non-zero fraction.
    message:
      allOf:
      - $ref: '#/components/schemas/created'
      - type: object
        properties:
          author:
            type: string
          body:
            type: string
            description: the message itself
          body_html:
            type: string
            description: the message itself with HTML formatting
          context:
            type: string
            description: if the message is a comment, then the permalink to the comment with ?context=3 appended to the end, otherwise an empty string
          first_message:
            $ref: '#/components/schemas/uint'
            nullable: true
            description: either null or the first message's ID represented as base 10 (wtf)
          first_message_name:
            type: string
            nullable: true
            description: either null or the first message's fullname
          likes:
            type: boolean
            nullable: true
            description: how the logged-in user has voted on the message - True = upvoted, False = downvoted, null = no vote
          link_title:
            type: string
            description: if the message is actually a comment, contains the title of the thread it was posted in
          new:
            type: boolean
            description: unread? not sure
          parent_id:
            $ref: "#/components/schemas/id"
            nullable: true
            description: null if no parent is attached
          replies:
            type: string
            nullable: true
            description: Again, an empty string if there are no replies.
          subject:
            type: string
            description: subject of message
          subreddit:
            type: string
            nullable: true
            description: null if not a comment.
          was_comment:
            type: boolean
    account:
      allOf:
      - $ref: '#/components/schemas/created'
      - type: object
        properties:
          comment_karma:
            type: integer
            description: user's comment karma
          has_mail:
            type: boolean
            nullable: true
            description: user has unread mail? null if not your account
          has_mod_mail:
            type: boolean
            nullable: true
            description: user has unread mod mail? null if not your account
          has_verified_email:
            type: boolean
            description: user has provided an email address and got it verified?
          inbox_count:
            type: integer
            description: Number of unread messages in the inbox. Not present if not your account
          is_friend:
            type: boolean
            description: whether the logged-in user has this user set as a friend
          is_gold:
            type: boolean
            description: reddit gold status
          is_mod:
            type: boolean
            description: whether this account moderates any subreddits
          link_karma:
            type: integer
            description: user's link karma
          modhash:
            type: string
            description: current modhash. not present if not your account
          over_18:
            type: boolean
            description: whether this account is set to be over 18
          name:
            type: string
            description: The username of the account in question. This attribute overrides the superclass's name attribute. Do not confuse an account's name which is the account's username with a thing's name which is the thing's FULLNAME.
    Multireddit:
      type: object
      default: optional
      properties:
        kind:
          type: string
          enum: [LabeledMulti]
        data:
          allOf:
          - $ref: '#/components/schemas/created'
          - type: object
            properties:
              can_edit:
                example: true
              copied_from:
                type: string
                nullable: true
              description_html:
                type: string
              description_md:
                type: string
              display_name:
                type: string
              icon_name:
                type: string
                enum:
                - art and design
                - ask
                - books
                - business
                - cars
                - comics
                - cute animals
                - diy
                - entertainment
                - food and drink
                - funny
                - games
                - grooming
                - health
                - life advice
                - military
                - models pinup
                - music
                - news
                - philosophy
                - pictures and gifs
                - science
                - shopping
                - sports
                - style
                - tech
                - travel
                - unusual stories
                - video
                - ''
                - None
              icon_url:
                type: string
                format: uri
                nullable: true
              key_color:
                example: '#cee3f8'
              over_18:
                type: boolean
              path:
                type: string
              subreddits:
                type: array
                items:
                  $ref: '#/components/schemas/MultiSubreddit'
              visibility:
                type: string
                enum:
                  - private
                  - public
                  - hidden
              weighting_scheme:
                type: string
                enum:
                  - classic
                  - fresh
    Richtext:
      type: array
      items:
        type: object
        properties:
          t:
            type: string
          e:
            example: text
    Image:
      type: object
      properties:
        url:
          type: string
          format: uri
        width:
          $ref: '#/components/schemas/uint'
        height:
          $ref: '#/components/schemas/uint'
    ImageDimensions:
      type: object
      properties:
        source:
          $ref: '#/components/schemas/Image'
        resolutions:
          type: array
          items:
            $ref: '#/components/schemas/Image'
    Media:
      type: object
      default: optional
      nullable: true
      description: Used for streaming video. Detailed information about the video and it's origins are placed here
      properties:
        type:
          type: string
        oembed:
          type: object
          x-optional: false
          properties:
            description:
              x-optional: true
              type: string
            thumbnail_height:
              $ref: '#/components/schemas/uint'
            height:
              $ref: '#/components/schemas/uint'
            url:
              type: string
              format: uri
              x-optional: true
            provider_name:
              type: string
            thumbnail_url:
              type: string
              format: uri
            version:
              example: '1.0'
            html:
              type: string
            thumbnail_width:
              $ref: '#/components/schemas/uint'
            title:
              type: string
            provider_url:
              type: string
              format: uri
            mean_alpha:
              type: number
              x-optional: true
            author_url:
              type: string
              format: uri
              x-optional: true
            width:
              $ref: '#/components/schemas/uint'
            author_name:
              type: string
              x-optional: true
        reddit_video:
          type: object
          properties:
            scrubber_media_url:
              type: string
              format: uri
            fallback_url:
              type: string
              format: uri
            height:
              $ref: '#/components/schemas/uint'
            hls_url:
              type: string
              format: uri
            duration:
              $ref: '#/components/schemas/uint'
            is_gif:
              type: boolean
            width:
              $ref: '#/components/schemas/uint'
            dash_url:
              type: string
              format: uri
            transcoding_status:
              example: completed
    MediaEmbed:
      type: object
      default: optional
      description: Used for streaming video. Technical embed specific information is found here.
      properties:
        media_domain_url:
          type: string
          format: uri
        scrolling:
          type: boolean
        content:
          type: string
        width:
          $ref: '#/components/schemas/uint'
        height:
          $ref: '#/components/schemas/uint'
    Preview:
      type: object
      properties:
        reddit_video_preview:
          type: object
          x-optional: true
          properties:
            scrubber_media_url:
              type: string
              format: uri
            fallback_url:
              type: string
              format: uri
            height:
              $ref: '#/components/schemas/uint'
            hls_url:
              type: string
              format: uri
            duration:
              $ref: '#/components/schemas/uint'
            is_gif:
              example: true
            width:
              $ref: '#/components/schemas/uint'
            dash_url:
              type: string
              format: uri
            transcoding_status:
              example: completed
        enabled:
          type: boolean
        images:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
              source:
                $ref: '#/components/schemas/Image'
              variants:
                x-optional: true
                properties:
                  obfuscated:
                    $ref: '#/components/schemas/ImageDimensions'
                  gif:
                    $ref: '#/components/schemas/ImageDimensions'
                  nsfw:
                    $ref: '#/components/schemas/ImageDimensions'
                  mp4:
                    $ref: '#/components/schemas/ImageDimensions'
              resolutions:
                type: array
                items:
                  $ref: '#/components/schemas/Image'
    SubredditCommon:
      allOf:
      - $ref: '#/components/schemas/created'
      - type: object
        properties:
          audience_target:
            type: string
          banner_img:
            type: string
            nullable: true
          banner_size:
            type: array
            items:
              $ref: '#/components/schemas/uint'
            nullable: true
          community_icon:
            type: string
            nullable: true
          description:
            type: string
            description: sidebar text
            nullable: true
          display_name:
            type: string
            description: human name of the subreddit
          display_name_prefixed:
            type: string
          header_img:
            type: string
            format: uri
            nullable: true
            description: full URL to the header image, or null
          header_size:
            type: array
            items:
              $ref: '#/components/schemas/uint'
            minItems: 2
            maxItems: 2
            description: width and height of the header image, or null
            nullable: true
          icon_img:
            type: string
            nullable: true
          icon_size:
            type: array
            items:
              $ref: '#/components/schemas/uint'
            nullable: true
            minItems: 2
            maxItems: 2
          is_default_banner:
            type: boolean
            x-optional: true
          is_default_icon:
            type: boolean
            x-optional: true
          key_color:
            type: string
            nullable: true
          link_flair_enabled:
            type: boolean
            nullable: true
          link_flair_position:
            type: string
            nullable: true
          over18:
            type: boolean
            description: whether the subreddit is marked as NSFW
          primary_color:
            type: string
            nullable: true
          public_description:
            type: string
            description: Description shown in subreddit search results?
          show_media:
            type: boolean
            nullable: true
          subscribers:
            $ref: '#/components/schemas/uint'
            nullable: true
            description: the number of redditors subscribed to this subreddit
          title:
            type: string
            description: title of the main page
          url:
            type: string
            format: uri
            description: The relative URL of the subreddit
            example: "/r/pics/"
          user_is_banned:
            type: boolean
            example: false
            description: whether the logged-in user is banned from the subreddit
          user_is_contributor:
            type: boolean
            example: false
            description: whether the logged-in user is an approved submitter in the subreddit
          user_is_moderator:
            type: boolean
            example: false
            description: whether the logged-in user is a moderator of the subreddit
          user_is_muted:
            type: boolean
            example: false
            nullable: true
          user_is_subscriber:
            type: boolean
            example: true
            nullable: true
            description: whether the logged-in user is subscribed to the subreddit
    MultiSubreddit:
      type: object
      properties:
        name:
          type: string
        data:
          allOf:
          - $ref: '#/components/schemas/SubredditCommon'
          - type: object
            properties:
              default_set:
                type: boolean
              icon_color:
                type: string
                nullable: true
              subreddit_type:
                type: string
                description: the subreddit's type - one of "public", "private", "restricted", or in very special cases "gold_restricted" or "archived"
                enum:
                - "public"
                - "private"
                - "restricted"
                - "gold_restricted"
                - "archived"
    Subreddit:
      type: object
      properties:
        kind:
          type: string
          enum:
            - t5
        data:
          allOf:
          - $ref: '#/components/schemas/created'
            type: object
            properties:
              description_html:
                type: string
                nullable: true
                description: sidebar text, escaped HTML format
              accounts_active:
                nullable: true
                description: number of users active in last 15 minutes
              accounts_active_is_fuzzed:
                example: false
              active_user_count:
                nullable: true
              advertiser_category:
                type: string
                nullable: true
              all_original_content:
                example: false
              allow_discovery:
                type: boolean
              allow_images:
                type: boolean
              allow_videogifs:
                type: boolean
              allow_videos:
                type: boolean
              banner_background_color:
                type: string
              banner_background_image:
                type: string
              can_assign_link_flair:
                type: boolean
              can_assign_user_flair:
                type: boolean
              collapse_deleted_comments:
                type: boolean
              comment_score_hide_mins:
                $ref: '#/components/schemas/uint'
                description: number of minutes the subreddit initially hides comment scores
              content_category:
                type: string
                optional: true
              emojis_enabled:
                type: boolean
              has_menu_widget:
                type: boolean
              header_title:
                type: string
                description: description of header image shown on hover, or null
                nullable: true
              hide_ads:
                example: false
              is_enrolled_in_new_modmail:
                nullable: true
              lang:
                type: string
              notification_level:
                type: string
                nullable: true
              original_content_tag_enabled:
                type: boolean
              public_description_html:
                type: string
                nullable: true
              public_traffic:
                example: false
                description: whether the subreddit's traffic page is publicly-accessible
              quarantine:
                example: false
              show_media_preview:
                type: boolean
              spoilers_enabled:
                type: boolean
              submission_type:
                type: string
                description: the type of submissions the subreddit allows
                enum:
                - "any"
                - "link"
                - "self"
              submit_link_label:
                type: string
                nullable: true
                description: the subreddit's custom label for the submit link button, if any
              submit_text:
                type: string
              submit_text_html:
                type: string
                nullable: true
              submit_text_label:
                type: string
                nullable: true
                description: the subreddit's custom label for the submit text button, if any
              suggested_comment_sort:
                type: string
                nullable: true
              user_can_flair_in_sr:
                nullable: true
              user_flair_background_color:
                nullable: true
              user_flair_css_class:
                nullable: true
              user_flair_enabled_in_sr:
                example: false
              user_flair_position:
                type: string
              user_flair_richtext:
                $ref: '#/components/schemas/Richtext'
              user_flair_template_id:
                nullable: true
              user_flair_text:
                nullable: true
              user_flair_text_color:
                nullable: true
              user_flair_type:
                example: text
              user_has_favorited:
                example: false
              user_sr_flair_enabled:
                nullable: true
              user_sr_theme_enabled:
                example: true
              videostream_links_count:
                $ref: '#/components/schemas/uint'
                optional: true
                default: 0
              whitelist_status:
                type: string
                nullable: true
              wiki_enabled:
                type: boolean
                nullable: true
              wls:
                $ref: '#/components/schemas/uint'
                nullable: true
    Comment:
      type: object
      properties:
        kind:
          type: string
          enum:
            - t1
        data:
          allOf:
            - $ref: '#/components/schemas/PostCommentCommon'
            - type: object
              properties:
                body:
                  type: string
                  description: "the raw text. this is the unformatted text which includes the raw markup characters such as ** for bold. <, >, and & are escaped."
                body_html:
                  type: string
                  description: "the formatted HTML text as displayed on reddit. For example, text that is emphasised by * will now have <em> tags wrapping it. Additionally, bullets and numbered lists will now be in HTML list format. NOTE: The HTML string will be escaped. You must unescape to get the raw HTML."
                collapsed:
                  example: false
                collapsed_reason:
                  nullable: true

                controversiality:
                  $ref: '#/components/schemas/uint'

                is_submitter:
                  type: boolean
                link_author:
                  type: string
                  description: >
                    present if the comment is being displayed outside its thread (user pages, /r/subreddit/comments/.json, etc.). Contains the author of the parent link
                link_id:
                  type: string
                  description: ID of the link this comment is in
                link_permalink:
                  type: string
                  format: uri
                link_title:
                  type: string
                  description: >
                    present if the comment is being displayed outside its thread (user pages, /r/subreddit/comments/.json, etc.). Contains the title of the parent link
                link_url:
                  type: string
                  format: uri
                  description: >
                    present if the comment is being displayed outside its thread (user pages, /r/subreddit/comments/.json, etc.). Contains the URL of the parent link

                mod_note:
                  nullable: true
                mod_reason_by:
                  nullable: true
                mod_reason_title:
                  nullable: true
                mod_reports:
                  type: array
                  items:
                    type: array
                    items: {type: string}
                num_reports:
                  nullable: true
                  description: >
                    how many times this comment has been reported, null if not a mod
                removal_reason:
                  nullable: true

                no_follow:
                  type: boolean
                parent_id:
                  $ref: "#/components/schemas/id"
                  description: >
                    ID of the thing this comment is a reply to, either the link or a comment in it
                over_18:
                  type: boolean
                quarantine:
                  example: false
                replies:
                  example: ''
                  description: A list of replies to this comment

                report_reasons:
                  nullable: true
                send_replies:
                  example: true
    PostCommentCommon:
      allOf:
      - $ref: '#/components/schemas/votable'
      - $ref: '#/components/schemas/created'
      - type: object
        properties:
          approved_at_utc:
            nullable: true
          approved_by:
            type: string
            nullable: true
            description: who approved this comment. null if nobody or you are not a mod
          archived:
            type: boolean
          author:
            type: string
            description: the account name of the poster. null if this is a promotional link
          author_flair_background_color:
            nullable: true
            type: string
          author_flair_css_class:
            nullable: true
            type: string
            description: the CSS class of the author's flair. subreddit specific
          author_flair_richtext:
            $ref: '#/components/schemas/Richtext'
            optional: true
          author_flair_template_id:
            nullable: true
            type: string
          author_flair_text:
            nullable: true
            type: string
            description: the text of the author's flair. subreddit specific
          author_flair_text_color:
            nullable: true
            type: string
          author_flair_type:
            type: string
            x-optional: true
          author_id:
            $ref: "#/components/schemas/id"
            nullable: true
            x-optional: true
          banned_at_utc:
            nullable: true
          banned_by:
            nullable: true
            description: who removed this comment. null if nobody or you are not a mod
          can_gild:
            type: boolean
          can_mod_post:
            example: false
          subreddit:
            type: string
            description: "subreddit of thing excluding the /r/ prefix."
            example: "pics"
          subreddit_id:
            $ref: "#/components/schemas/id"
            description: >
              the id of the subreddit in which the thing is located
          subreddit_name_prefixed:
            type: string
          subreddit_type:
            example: public
          gilded:
            $ref: '#/components/schemas/uint'
            description: the number of times this comment received reddit gold
          rte_mode:
            type: string
            example: markdown
            x-optional: true
          permalink:
            type: string
            format: uri
            description: relative URL of the permanent link for this link
          saved:
            type: boolean
            description: >
              true if this post is saved by the logged in user
          user_reports:
            type: array
            items:
              type: array
              items: {type: string}
          stickied:
            example: false
            description: true if the post is set as the sticky in its subreddit.
          edited:
            anyOf:
              - type: string
              - type: boolean
              - type: number
            description: "Indicates if link has been edited. false if not edited, edit date in UTC epoch-seconds otherwise. NOTE: for some old edited comments on reddit.com, this will be set to true instead of edit date. https://github.com/reddit/reddit/issues/581"
          num_comments:
            $ref: '#/components/schemas/uint'
            description: the number of comments that belong to this link. includes removed comments.
          distinguished:
            nullable: true
            description: "to allow determining whether they have been distinguished by moderators/admins. null = not distinguished. moderator = the green [M]. admin = the red [A]. special = various other special distinguishes http://redd.it/19ak1b"
    PostData:
      allOf:
        - $ref: '#/components/schemas/PostCommentCommon'
        - type: object
          properties:
            score_hidden:
              example: false
              description: >
                Whether the comment's score is currently hidden.
            category:
              nullable: true
            clicked:
              example: false
              description: probably always returns false
            content_categories:
              type: array
              items:
                type: string
              nullable: true
            contest_mode:
              example: false
            crosspost_parent:
              type: string
              x-optional: true
            crosspost_parent_list:
              type: array
              items:
                $ref: '#/components/schemas/Crosspost'
              x-optional: true
            hidden:
              type: boolean
              description: true if the post is hidden by the logged in user. false if not logged in or not hidden.
            hide_score:
              example: false
            is_crosspostable:
              type: boolean
            link_flair_background_color:
              type: string
              x-optional: true
            link_flair_css_class:
              type: string
              nullable: true
              description: the CSS class of the link's flair.
            link_flair_richtext:
              $ref: '#/components/schemas/Richtext'
            link_flair_template_id:
              type: string
              nullable: true
              x-optional: true
            link_flair_text:
              type: string
              nullable: true
              description: the text of the link's flair.
            link_flair_text_color:
              type: string
            link_flair_type:
              type: string
            locked:
              type: boolean
              description: whether the link is locked (closed to new comments) or not.
            mod_note:
              nullable: true
            mod_reason_by:
              nullable: true
            mod_reason_title:
              nullable: true
            mod_reports:
              type: array
              items:
                type: array
                items: {type: string}
            no_follow:
              type: boolean
            num_crossposts:
              $ref: '#/components/schemas/uint'
            num_reports:
              nullable: true
            over_18:
              type: boolean
              description: true if the post is tagged as NSFW. False if otherwise
            parent_whitelist_status:
              type: string
              nullable: true
            pinned:
              example: false
            post_categories:
              nullable: true
              x-optional: true
            post_hint:
              type: string
              x-optional: true
            previous_visits:
              type: array
              items:
                type: number
              x-optional: true
            pwls:
              nullable: true
              $ref: '#/components/schemas/uint'
            quarantine:
              example: false
            removal_reason:
              type: string
              nullable: true
            report_reasons:
              nullable: true
            spoiler:
              type: boolean
            subreddit_subscribers:
              $ref: '#/components/schemas/uint'
            suggested_sort:
              type: string
              nullable: true
            view_count:
              nullable: true
            visited:
              example: false
            whitelist_status:
              type: string
              nullable: true
            wls:
              $ref: '#/components/schemas/uint'
              nullable: true
# content
            thumbnail:
              type: string
              format: uri
              description: full URL to the thumbnail for this link; "self" if this is a self post; "image" if this is a link to an image but has no thumbnail; "default" if a thumbnail is not available
            thumbnail_height:
              $ref: '#/components/schemas/uint'
              nullable: true
            thumbnail_width:
              $ref: '#/components/schemas/uint'
              nullable: true
            title:
              type: string
              description: the title of the link. may contain newlines for some reason
            url:
              type: string
              format: uri
              description: the link of this post. the permalink if this is a self-post
            secure_media:
              $ref: '#/components/schemas/Media'
            secure_media_embed:
              $ref: '#/components/schemas/MediaEmbed'
            selftext:
              type: string
              description: the raw text. this is the unformatted text which includes the raw markup characters such as `**` for bold. `<`, `>`, and `&` are escaped. Empty if not present.
            selftext_html:
              type: string
              description: "the formatted escaped HTML text. this is the HTML formatted version of the marked up text. Items that are boldened by `**` or `***` will now have `<em>` or `***` tags on them. Additionally, bullets and numbered lists will now be in HTML list format. *NOTE*: The HTML string will be escaped. You must unescape to get the raw HTML. Null if not present."
            media:
              $ref: '#/components/schemas/Media'
            media_embed:
              $ref: '#/components/schemas/MediaEmbed'
            media_metadata:
              nullable: true
              x-optional: true
            media_only:
              example: false
            preview:
              $ref: '#/components/schemas/Preview'
              x-optional: true
            is_original_content:
              type: boolean
            is_reddit_media_domain:
              type: boolean
            is_self:
              type: boolean
              description: true if this link is a selfpost
            is_meta:
              type: boolean
            is_video:
              type: boolean
            domain:
              type: string
              format: hostname
              description: the domain of this link. Self posts will be self.<subreddit> while other examples include en.wikipedia.org and s3.amazon.com
    Crosspost:
      allOf:
        - $ref: '#/components/schemas/PostData'
        - type: object
          properties:
            is_meta:
              type: boolean
            hidden:
              example: false
            media:
              $ref: '#/components/schemas/Media'
            can_gild:
              example: true
            gilded:
              $ref: '#/components/schemas/uint'
            can_mod_post:
              example: false
            num_reports:
              example: None
            stickied:
              example: false
            hide_score:
              example: false
            clicked:
              example: false
            subreddit_id:
              $ref: "#/components/schemas/id"
            removal_reason:
              nullable: true
            banned_by:
              nullable: true
            thumbnail_height:
              $ref: '#/components/schemas/uint'
            rte_mode:
              example: markdown
              x-optional: true
            subreddit_subscribers:
              $ref: '#/components/schemas/uint'
            mod_reason_title:
              nullable: true
            post_hint:
              type: string
            selftext:
              example: ''
            parent_whitelist_status:
              type: string
              nullable: true
            spoiler:
              example: false
            secure_media_embed:
              $ref: '#/components/schemas/MediaEmbed'
            url:
              type: string
              format: uri
            thumbnail:
              type: string
              format: uri
            pwls:
              $ref: '#/components/schemas/uint'
              nullable: true
            mod_reason_by:
              nullable: true
            mod_note:
              nullable: true
            whitelist_status:
              type: string
              nullable: true
            wls:
              $ref: '#/components/schemas/uint'
              nullable: true
            author:
              type: string
            contest_mode:
              example: false
            archived:
              type: boolean
            subreddit_name_prefixed:
              type: string
            user_reports:
              type: array
              items:
                type: array
                items: {type: string}
            saved:
              example: false
            media_only:
              example: false
            num_crossposts:
              $ref: '#/components/schemas/uint'
            over_18:
              type: boolean
            mod_reports:
              type: array
              items:
                type: array
                items: {type: string}
            report_reasons:
              nullable: true
            banned_at_utc:
              nullable: true
            selftext_html:
              nullable: true
            preview:
              $ref: '#/components/schemas/Preview'
            approved_at_utc:
              nullable: true
            send_replies:
              type: boolean
            edited:
              example: false
            content_categories:
              type: array
              items:
                type: string
                example: photography
              nullable: true
            category:
              nullable: true
            quarantine:
              example: false
            no_follow:
              example: false
            suggested_sort:
              type: string
              nullable: true
            author_id:
              nullable: true
              x-optional: true
              $ref: "#/components/schemas/id"
            title:
              type: string
            pinned:
              example: false
            post_categories:
              nullable: true
              x-optional: true
            visited:
              example: false
            num_comments:
              $ref: '#/components/schemas/uint'
            distinguished:
              nullable: true
            locked:
              example: false
            media_embed:
              $ref: '#/components/schemas/MediaEmbed'
            view_count:
              nullable: true
            domain:
              type: string
            secure_media:
              $ref: '#/components/schemas/Media'
            approved_by:
              nullable: true
            subreddit:
              type: string
            thumbnail_width:
              example: 140
    Post:
      type: object
      properties:
        kind:
          type: string
          enum:
            - t3
        data:
          $ref: '#/components/schemas/PostData'
```

**>>>> Reddit-API-v-1-0-0 End <<<<**

### end

```js
r-donaldtrump - Local API Reference // (Reddit-API-v-1-0-0)
2020-10-21
v.1.0.0

MIT License

Copyright (c) 2020 Jeffrey Bodin
```

## Integrations:

[r/DonaldTrump](https://www.reddit.com/r/donaldtrump/wiki)
