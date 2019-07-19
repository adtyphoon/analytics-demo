# frozen_string_literal: true
source "https://gems.ysh.io/repository/gems/"
########################################################################
# infra
gem "health_check", "~> 3.0"
gem "puma", "= 3.6.2"
gem "rails", "~> 5.2.3"
# In memory storage
gem "actionpack-page_caching", "~> 1.1", ">= 1.1.1"
gem "hiredis", "~> 0.6.1" # Redis.new(driver: :hiredis) to speed up
gem "redis", "~> 4.1"
# Use ActiveModel has_secure_password
gem "bcrypt", "~> 3.1.7"
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.0"
# Ensure net/https uses OpenSSL::SSL::VERIFY_PEER to verify SSL certificates and provides certificate bundle in case OpenSSL cannot find one
gem "certified"
# Boot large ruby/rails apps faster
gem "bootsnap", require: false
# Needed for delayed_job
gem "daemons", "~> 1.2.2"
########################################################################
# database
gem "activerecord-import"
gem "activerecord-postgis-adapter", "~> 5.2.2"
gem "dynamoid", "~> 3.1.0"
gem "geokit-rails", "~> 2.3.1"
gem "migration_comments"
gem "pg", "0.18.4"
gem "pg_query", ">= 0.9.0"
gem "pghero", "~> 2.2", ">= 2.2.1"
gem "rein" # DB level validations
########################################################################
# model
gem "active_interaction", "~> 3.7"
gem "acts_as_list"
gem "date_validator"
gem "fast_blank" # C extension which provides a fast implementation of Active Support's String#blank?
gem "nilify_blanks", ">= 1.2.1"
gem "virtus", "~> 1.0.5"
########################################################################
# view
gem "bootstrap-sass", ">= 3.4.1"
gem "bootstrap3-datetimepicker-rails", "~> 4.15.35"
gem "coffee-rails", ">= 4.1.0"
gem "google_static_maps_helper"
gem "jquery-rails", ">= 4.0.4"
gem "momentjs-rails", ">= 2.9.0" # bootstrap datetimepicker
gem "rails-ujs"
gem "sass-rails", ">= 5.0.6"
gem "uglifier", ">= 1.3.0"
########################################################################
# website
gem "hashids", "~> 1.0", ">= 1.0.2"
gem "sitemap_generator", "~> 6.0.2"
########################################################################
# business
gem "quickbooks-ruby", "~> 0.6"
gem "routific"
gem "stripe", ">= 2.0.3"
gem "twilio-ruby", "~> 4.0.0"
########################################################################
# developing
gem "sentry-raven"
########################################################################
# tooling
gem "alchemist", "~> 0.1.7"
gem "awesome_print", "~> 1.6", ">= 1.6.1", require: "ap"
gem "binding_of_caller", "~> 0.8"
gem "bluecloth", "~> 2.2.0" # render markdown
gem "decent_exposure", "3.0.0"
gem "discard", "~> 1.0"
gem "httparty"
gem "maxminddb", "~> 0.1.8" # The MaxMind DB file format is a database format that maps IPv4 and IPv6 addresses to data records using an efficient binary search tree.
gem "nori" # XML parser
gem "pagy", "~> 0.22.0" # pagination
gem "rest-client", "~> 1.8.0"
gem "rubocop", "= 0.67.2"
gem "rubocop-performance"
gem "rubocop-rails_config"
gem "rubocop-rspec"
gem "tod", "~> 2.1.1" # Time of day and shift types for Ruby
gem "verbs" # convert word in past tense
########################################################################
# image uploading
gem "aws-sdk-cloudwatch", "~> 1"
gem "aws-sdk-rails", "~> 2"
gem "aws-sdk-s3"
gem "aws-sdk-sns", "~> 1"
gem "aws-sdk-sqs", "~> 1.10"
gem "carrierwave"
gem "carrierwave-base64"
gem "fog-aws"
gem "mini_magick", "~> 4.9"
########################################################################
# admin
gem "activeadmin"
gem "activeadmin-ajax_filter"
gem "activeadmin_reorderable"
gem "analytics-ruby", "~> 2.0.0", require: "segment/analytics"
gem "blazer", ">= 1.8"
gem "devise_token_auth", "~> 1.1.0"
gem "rails_email_preview", "~> 2.0.1"
########################################################################
# API
gem "active_model_serializers", "~> 0.10.0"
gem "jwt"
########################################################################
# async worker
gem "delayed_job_active_record", "~> 4.1.2"
gem "responders", "~> 2.0"
# Simple, efficient background processing for Ruby
gem "sidekiq", "~> 5.2"
gem "sidekiq-cron", "~> 1.1"
gem "sidekiq-failures", "~> 1.0"
# debug tooling
gem "scout_apm", "~> 3.0.x"
# CORS
gem "rack-cors", "~> 1.0"
group :development do
  gem "better_errors", "~> 2.1", ">= 2.1.1"
  gem "guard-rspec", "~> 4.6.4", require: false
  gem "listen", "~> 3.0.4"
  gem "web-console", "~> 3.0" # Access an IRB console on exception pages or by using <%= console %> in views
  # Documentation
  gem "guard-yard"
  gem "yard", ">= 0.9.20"
  # Annotate Rails classes with schema and routes info
  gem "annotate"
  gem "bullet"
  # RubyGems API
  gem "gems", "~> 1.1", ">= 1.1.1"
end
# rails testing
group :test do
  gem "database_cleaner", "~> 1.6"
  gem "factory_bot_rails", "~> 4.8", ">= 4.8.2"
  gem "faker", "~> 1.8", ">= 1.8.7"
  gem "fuubar", "~> 2.0.0" # RSpec formatter
  gem "rails-controller-testing"
  gem "rspec-parameterized"
  gem "shoulda-matchers"
  gem "simplecov", require: false
  # WebMock allows stubbing HTTP requests and setting expectations on HTTP requests.
  gem "webmock", "~> 3.3"
end
group :development, :test do
  gem "byebug"
  gem "pry"
  gem "pry-byebug", "~> 3.4"
  gem "pry-rails"
  gem "rspec-collection_matchers"
  gem "rspec-rails", "~> 3.5" # needed in development to make rake spec work
  # Tooling
  gem "solargraph"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-commands-rspec"
  # mock the stripe API
  gem "stripe-ruby-mock", "~> 2.5.5", require: "stripe_mock"
  # A tool to manage and configure Git hooks
  gem "overcommit"
  # manipulate time in tests
  gem "timecop"
  # profiling
  gem "rblineprof"
  gem "parallel_tests"
  gem "zeus-parallel_tests"
end
group :production do
  # metrics & analysis
  gem "ddtrace", ">= 0.21" # Datadog APM client library
end
