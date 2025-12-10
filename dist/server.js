import express, { Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import crypto$1, { randomUUID } from 'crypto';
import argon2 from 'argon2';
import 'url';
import path from 'path';
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import debugModule from 'debug';
import { Resend } from 'resend';
import axios from 'axios';
import 'nanoid';
import jwt from 'jsonwebtoken';
import 'date-fns';
import Bottleneck from 'bottleneck';
import { Worker, Queue as Queue$1 } from 'bullmq';
import IORedis from 'ioredis';
import Joi from 'joi';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fs from 'fs';

// src/prisma/client.ts
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};
const prisma = new PrismaClient({
// log: ['query', 'error', 'warn'],
});

var forgotPassword$1 = (message) => {
    return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
      <style type="text/css" rel="stylesheet" media="all">
      /* Base ------------------------------ */
      
      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
      body {
        width: 100% !important;
        height: 100%;
        margin: 0;
        -webkit-text-size-adjust: none;
      }
      
      a {
        color: #3869D4;
      }
      
      a img {
        border: none;
      }
      
      td {
        word-break: break-word;
      }
      
      .preheader {
        display: none !important;
        visibility: hidden;
        mso-hide: all;
        font-size: 1px;
        line-height: 1px;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
      }
      /* Type ------------------------------ */
      
      body,
      td,
      th {
        font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      }
      
      h1 {
        margin-top: 0;
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        text-align: left;
      }
      
      h2 {
        margin-top: 0;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }
      
      h3 {
        margin-top: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }
      
      td,
      th {
        font-size: 16px;
      }
      
      p,
      ul,
      ol,
      blockquote {
        margin: .4em 0 1.1875em;
        font-size: 16px;
        line-height: 1.625;
      }
      
      p.sub {
        font-size: 13px;
      }
      /* Utilities ------------------------------ */
      
      .align-right {
        text-align: right;
      }
      
      .align-left {
        text-align: left;
      }
      
      .align-center {
        text-align: center;
      }
      /* Buttons ------------------------------ */
      
      .button {
        background-color: #3869D4;
        border-top: 10px solid #3869D4;
        border-right: 18px solid #3869D4;
        border-bottom: 10px solid #3869D4;
        border-left: 18px solid #3869D4;
        display: inline-block;
        color: #FFF;
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
        -webkit-text-size-adjust: none;
        box-sizing: border-box;
      }
      
      .button--green {
        background-color: #22BC66;
        border-top: 10px solid #22BC66;
        border-right: 18px solid #22BC66;
        border-bottom: 10px solid #22BC66;
        border-left: 18px solid #22BC66;
      }
      
      .button--red {
        background-color: #FF6136;
        border-top: 10px solid #FF6136;
        border-right: 18px solid #FF6136;
        border-bottom: 10px solid #FF6136;
        border-left: 18px solid #FF6136;
      }
      
      @media only screen and (max-width: 500px) {
        .button {
          width: 100% !important;
          text-align: center !important;
        }
      }
      /* Attribute list ------------------------------ */
      
      .attributes {
        margin: 0 0 21px;
      }
      
      .attributes_content {
        background-color: #F4F4F7;
        padding: 16px;
      }
      
      .attributes_item {
        padding: 0;
      }
      /* Related Items ------------------------------ */
      
      .related {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .related_item {
        padding: 10px 0;
        color: #CBCCCF;
        font-size: 15px;
        line-height: 18px;
      }
      
      .related_item-title {
        display: block;
        margin: .5em 0 0;
      }
      
      .related_item-thumb {
        display: block;
        padding-bottom: 10px;
      }
      
      .related_heading {
        border-top: 1px solid #CBCCCF;
        text-align: center;
        padding: 25px 0 10px;
      }
      /* Discount Code ------------------------------ */
      
      .discount {
        width: 100%;
        margin: 0;
        padding: 24px;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #F4F4F7;
        border: 2px dashed #CBCCCF;
      }
      
      .discount_heading {
        text-align: center;
      }
      
      .discount_body {
        text-align: center;
        font-size: 15px;
      }
      /* Social Icons ------------------------------ */
      
      .social {
        width: auto;
      }
      
      .social td {
        padding: 0;
        width: auto;
      }
      
      .social_icon {
        height: 20px;
        margin: 0 8px 10px 8px;
        padding: 0;
      }
      /* Data table ------------------------------ */
      
      .purchase {
        width: 100%;
        margin: 0;
        padding: 35px 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .purchase_content {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .purchase_item {
        padding: 10px 0;
        color: #51545E;
        font-size: 15px;
        line-height: 18px;
      }
      
      .purchase_heading {
        padding-bottom: 8px;
        border-bottom: 1px solid #EAEAEC;
      }
      
      .purchase_heading p {
        margin: 0;
        color: #85878E;
        font-size: 12px;
      }
      
      .purchase_footer {
        padding-top: 15px;
        border-top: 1px solid #EAEAEC;
      }
      
      .purchase_total {
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: #333333;
      }
      
      .purchase_total--label {
        padding: 0 15px 0 0;
      }
      
      body {
        background-color: #F4F4F7;
        color: #51545E;
      }
      
      p {
        color: #51545E;
      }
      
      p.sub {
        color: #6B6E76;
      }
      
      .email-wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #F4F4F7;
      }
      
      .email-content {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      /* Masthead ----------------------- */
      
      .email-masthead {
        padding: 25px 0;
        text-align: center;
      }
      
      .email-masthead_logo {
        width: 94px;
      }
      
      .email-masthead_name {
        font-size: 16px;
        font-weight: bold;
        color: #A8AAAF;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
      }
      /* Body ------------------------------ */
      
      .email-body {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #FFFFFF;
      }
      
      .email-body_inner {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #FFFFFF;
      }
      
      .email-footer {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }
      
      .email-footer p {
        color: #6B6E76;
      }
      
      .body-action {
        width: 100%;
        margin: 30px auto;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }
      
      .body-sub {
        margin-top: 25px;
        padding-top: 25px;
        border-top: 1px solid #EAEAEC;
      }
      
      .content-cell {
        padding: 35px;
      }
      /*Media Queries ------------------------------ */
      
      @media only screen and (max-width: 600px) {
        .email-body_inner,
        .email-footer {
          width: 100% !important;
        }
      }
      
      @media (prefers-color-scheme: dark) {
        body,
        .email-body,
        .email-body_inner,
        .email-content,
        .email-wrapper,
        .email-masthead,
        .email-footer {
          background-color: #333333 !important;
          color: #FFF !important;
        }
        p,
        ul,
        ol,
        blockquote,
        h1,
        h2,
        h3 {
          color: #FFF !important;
        }
        .attributes_content,
        .discount {
          background-color: #222 !important;
        }
        .email-masthead_name {
          text-shadow: none !important;
        }
      }
      
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      </style>
      <!--[if mso]>
      <style type="text/css">
        .f-fallback  {
          font-family: Arial, sans-serif;
        }
      </style>
    <![endif]-->
    </head>
    <body>
      <span class="preheader">Use this link to reset your password. The link is only valid for 24 hours.</span>
      <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center">
            <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="email-masthead">
                  <a href="https://masteringbackend.com?source=forgot_password_email" class="f-fallback email-masthead_name">
                  <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                  <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell">
                        <div class="f-fallback">
                          <h1>Hi ${message.to_name},</h1>
                          <p>You recently requested to reset your password for your ${process.env.APP_NAME} account. Use the button below to reset it. <strong>This password reset is only valid for the next 60 minutes.</strong></p>
                          <!-- Action -->
                          <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center">
                                     <!-- <a href="${message.link}" class="f-fallback button button--green" target="_blank">Reset your password</a> -->
                                     <h3>${message.code}</h3>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p>For security, if you did not request a password reset, please ignore this email or <a href="mailto:support@profaili.com">contact support</a> if you have questions.</p>
                          <p>Talk soon,
                            <br>The ${process.env.APP_NAME} Team</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell" align="center">
                    <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                    <p class="f-fallback sub align-center">
                      ${process.env.APP_NAME}
                      <br>No. 100 Ogologo Street, Rumuigbo.
                      <br>Port Harcourt, Rivers, Nigeria
                    </p>
                  </td>
                </tr>
              </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

var passwordChanged = (message) => {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="color-scheme" content="light dark" />
            <meta name="supported-color-schemes" content="light dark" />
            <title></title>
            <style type="text/css" rel="stylesheet" media="all">
            /* Base ------------------------------ */
            
            @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
            body {
              width: 100% !important;
              height: 100%;
              margin: 0;
              -webkit-text-size-adjust: none;
            }
            
            a {
              color: #3869D4;
            }
            
            a img {
              border: none;
            }
            
            td {
              word-break: break-word;
            }
            
            .preheader {
              display: none !important;
              visibility: hidden;
              mso-hide: all;
              font-size: 1px;
              line-height: 1px;
              max-height: 0;
              max-width: 0;
              opacity: 0;
              overflow: hidden;
            }
            /* Type ------------------------------ */
            
            body,
            td,
            th {
              font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
            }
            
            h1 {
              margin-top: 0;
              color: #333333;
              font-size: 22px;
              font-weight: bold;
              text-align: left;
            }
            
            h2 {
              margin-top: 0;
              color: #333333;
              font-size: 16px;
              font-weight: bold;
              text-align: left;
            }
            
            h3 {
              margin-top: 0;
              color: #333333;
              font-size: 14px;
              font-weight: bold;
              text-align: left;
            }
            
            td,
            th {
              font-size: 16px;
            }
            
            p,
            ul,
            ol,
            blockquote {
              margin: .4em 0 1.1875em;
              font-size: 16px;
              line-height: 1.625;
            }
            
            p.sub {
              font-size: 13px;
            }
            /* Utilities ------------------------------ */
            
            .align-right {
              text-align: right;
            }
            
            .align-left {
              text-align: left;
            }
            
            .align-center {
              text-align: center;
            }
            /* Buttons ------------------------------ */
            
            .button {
              background-color: #3869D4;
              border-top: 10px solid #3869D4;
              border-right: 18px solid #3869D4;
              border-bottom: 10px solid #3869D4;
              border-left: 18px solid #3869D4;
              display: inline-block;
              color: #FFF;
              text-decoration: none;
              border-radius: 3px;
              box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
              -webkit-text-size-adjust: none;
              box-sizing: border-box;
            }
            
            .button--green {
              background-color: #22BC66;
              border-top: 10px solid #22BC66;
              border-right: 18px solid #22BC66;
              border-bottom: 10px solid #22BC66;
              border-left: 18px solid #22BC66;
            }
            
            .button--red {
              background-color: #FF6136;
              border-top: 10px solid #FF6136;
              border-right: 18px solid #FF6136;
              border-bottom: 10px solid #FF6136;
              border-left: 18px solid #FF6136;
            }
            
            @media only screen and (max-width: 500px) {
              .button {
                width: 100% !important;
                text-align: center !important;
              }
            }
            /* Attribute list ------------------------------ */
            
            .attributes {
              margin: 0 0 21px;
            }
            
            .attributes_content {
              background-color: #F4F4F7;
              padding: 16px;
            }
            
            .attributes_item {
              padding: 0;
            }
            /* Related Items ------------------------------ */
            
            .related {
              width: 100%;
              margin: 0;
              padding: 25px 0 0 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .related_item {
              padding: 10px 0;
              color: #CBCCCF;
              font-size: 15px;
              line-height: 18px;
            }
            
            .related_item-title {
              display: block;
              margin: .5em 0 0;
            }
            
            .related_item-thumb {
              display: block;
              padding-bottom: 10px;
            }
            
            .related_heading {
              border-top: 1px solid #CBCCCF;
              text-align: center;
              padding: 25px 0 10px;
            }
            /* Discount Code ------------------------------ */
            
            .discount {
              width: 100%;
              margin: 0;
              padding: 24px;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #F4F4F7;
              border: 2px dashed #CBCCCF;
            }
            
            .discount_heading {
              text-align: center;
            }
            
            .discount_body {
              text-align: center;
              font-size: 15px;
            }
            /* Social Icons ------------------------------ */
            
            .social {
              width: auto;
            }
            
            .social td {
              padding: 0;
              width: auto;
            }
            
            .social_icon {
              height: 20px;
              margin: 0 8px 10px 8px;
              padding: 0;
            }
            /* Data table ------------------------------ */
            
            .purchase {
              width: 100%;
              margin: 0;
              padding: 35px 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .purchase_content {
              width: 100%;
              margin: 0;
              padding: 25px 0 0 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .purchase_item {
              padding: 10px 0;
              color: #51545E;
              font-size: 15px;
              line-height: 18px;
            }
            
            .purchase_heading {
              padding-bottom: 8px;
              border-bottom: 1px solid #EAEAEC;
            }
            
            .purchase_heading p {
              margin: 0;
              color: #85878E;
              font-size: 12px;
            }
            
            .purchase_footer {
              padding-top: 15px;
              border-top: 1px solid #EAEAEC;
            }
            
            .purchase_total {
              margin: 0;
              text-align: right;
              font-weight: bold;
              color: #333333;
            }
            
            .purchase_total--label {
              padding: 0 15px 0 0;
            }
            
            body {
              background-color: #F4F4F7;
              color: #51545E;
            }
            
            p {
              color: #51545E;
            }
            
            p.sub {
              color: #6B6E76;
            }
            
            .email-wrapper {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #F4F4F7;
            }
            
            .email-content {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            /* Masthead ----------------------- */
            
            .email-masthead {
              padding: 25px 0;
              text-align: center;
            }
            
            .email-masthead_logo {
              width: 94px;
            }
            
            .email-masthead_name {
              font-size: 16px;
              font-weight: bold;
              color: #A8AAAF;
              text-decoration: none;
              text-shadow: 0 1px 0 white;
            }
            /* Body ------------------------------ */
            
            .email-body {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #FFFFFF;
            }
            
            .email-body_inner {
              width: 570px;
              margin: 0 auto;
              padding: 0;
              -premailer-width: 570px;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #FFFFFF;
            }
            
            .email-footer {
              width: 570px;
              margin: 0 auto;
              padding: 0;
              -premailer-width: 570px;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              text-align: center;
            }
            
            .email-footer p {
              color: #6B6E76;
            }
            
            .body-action {
              width: 100%;
              margin: 30px auto;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              text-align: center;
            }
            
            .body-sub {
              margin-top: 25px;
              padding-top: 25px;
              border-top: 1px solid #EAEAEC;
            }
            
            .content-cell {
              padding: 35px;
            }
            /*Media Queries ------------------------------ */
            
            @media only screen and (max-width: 600px) {
              .email-body_inner,
              .email-footer {
                width: 100% !important;
              }
            }
            
            @media (prefers-color-scheme: dark) {
              body,
              .email-body,
              .email-body_inner,
              .email-content,
              .email-wrapper,
              .email-masthead,
              .email-footer {
                background-color: #333333 !important;
                color: #FFF !important;
              }
              p,
              ul,
              ol,
              blockquote,
              h1,
              h2,
              h3 {
                color: #FFF !important;
              }
              .attributes_content,
              .discount {
                background-color: #222 !important;
              }
              .email-masthead_name {
                text-shadow: none !important;
              }
            }
            
            :root {
              color-scheme: light dark;
              supported-color-schemes: light dark;
            }
            </style>
            <!--[if mso]>
            <style type="text/css">
              .f-fallback  {
                font-family: Arial, sans-serif;
              }
            </style>
          <![endif]-->
          </head>
          <body>
            <span class="preheader">You have successfully changed your password successfully.</span>
            <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center">
                  <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="email-masthead">
                        <a href="https://masteringbackend.com?source=password_changed_email" class="f-fallback email-masthead_name">
                        <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                      </a>
                      </td>
                    </tr>
                    <!-- Email Body -->
                    <tr>
                      <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                        <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                          <!-- Body content -->
                          <tr>
                            <td class="content-cell">
                              <div class="f-fallback">
                                <h1>Hi ${message.to_name},</h1>
                                <p>The password connected to your Masteringbackend account was changed. If you didn't request this change, talk to us to revert it.</p>
                                <p>If you have any questions, please <a href="mailto:support@masteringbackend.com">contact support</a> if you have questions. — we're always happy to help out.</p>
                                <p>Talk soon,
                                  <br>The ${process.env.APP_NAME} Team</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td class="content-cell" align="center">
                              <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                              <p class="f-fallback sub align-center">
                                ${process.env.APP_NAME}
                                <br>No. 100 Ogologo Street, Rumuigbo.
                                <br>Port Harcourt, Rivers, Nigeria
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>`;
};

var welcome = (message) => {
    return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
      <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
  
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          -webkit-text-size-adjust: none;
        }
  
        a {
          color: #3869d4;
        }
  
        a img {
          border: none;
        }
  
        td {
          word-break: break-word;
        }
  
        .preheader {
          display: none !important;
          visibility: hidden;
          mso-hide: all;
          font-size: 1px;
          line-height: 1px;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
        }
        /* Type ------------------------------ */
  
        body,
        td,
        th {
          font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
        }
  
        h1 {
          margin-top: 0;
          color: #333333;
          font-size: 22px;
          font-weight: bold;
          text-align: left;
        }
  
        h2 {
          margin-top: 0;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
  
        h3 {
          margin-top: 0;
          color: #333333;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
  
        td,
        th {
          font-size: 16px;
        }
  
        p,
        ul,
        ol,
        blockquote {
          margin: 0.4em 0 1.1875em;
          font-size: 16px;
          line-height: 1.625;
        }
  
        p.sub {
          font-size: 13px;
        }
        /* Utilities ------------------------------ */
  
        .align-right {
          text-align: right;
        }
  
        .align-left {
          text-align: left;
        }
  
        .align-center {
          text-align: center;
        }
        /* Buttons ------------------------------ */
  
        .button {
          background-color: #3869d4;
          border-top: 10px solid #3869d4;
          border-right: 18px solid #3869d4;
          border-bottom: 10px solid #3869d4;
          border-left: 18px solid #3869d4;
          display: inline-block;
          color: #fff;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          -webkit-text-size-adjust: none;
          box-sizing: border-box;
        }
  
        .button--green {
          background-color: #22bc66;
          border-top: 10px solid #22bc66;
          border-right: 18px solid #22bc66;
          border-bottom: 10px solid #22bc66;
          border-left: 18px solid #22bc66;
        }
  
        .button--red {
          background-color: #ff6136;
          border-top: 10px solid #ff6136;
          border-right: 18px solid #ff6136;
          border-bottom: 10px solid #ff6136;
          border-left: 18px solid #ff6136;
        }
  
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        /* Attribute list ------------------------------ */
  
        .attributes {
          margin: 0 0 21px;
        }
  
        .attributes_content {
          background-color: #f4f4f7;
          padding: 16px;
        }
  
        .attributes_item {
          padding: 0;
        }
        /* Related Items ------------------------------ */
  
        .related {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .related_item {
          padding: 10px 0;
          color: #cbcccf;
          font-size: 15px;
          line-height: 18px;
        }
  
        .related_item-title {
          display: block;
          margin: 0.5em 0 0;
        }
  
        .related_item-thumb {
          display: block;
          padding-bottom: 10px;
        }
  
        .related_heading {
          border-top: 1px solid #cbcccf;
          text-align: center;
          padding: 25px 0 10px;
        }
        /* Discount Code ------------------------------ */
  
        .discount {
          width: 100%;
          margin: 0;
          padding: 24px;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #f4f4f7;
          border: 2px dashed #cbcccf;
        }
  
        .discount_heading {
          text-align: center;
        }
  
        .discount_body {
          text-align: center;
          font-size: 15px;
        }
        /* Social Icons ------------------------------ */
  
        .social {
          width: auto;
        }
  
        .social td {
          padding: 0;
          width: auto;
        }
  
        .social_icon {
          height: 20px;
          margin: 0 8px 10px 8px;
          padding: 0;
        }
        /* Data table ------------------------------ */
  
        .purchase {
          width: 100%;
          margin: 0;
          padding: 35px 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .purchase_content {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .purchase_item {
          padding: 10px 0;
          color: #51545e;
          font-size: 15px;
          line-height: 18px;
        }
  
        .purchase_heading {
          padding-bottom: 8px;
          border-bottom: 1px solid #eaeaec;
        }
  
        .purchase_heading p {
          margin: 0;
          color: #85878e;
          font-size: 12px;
        }
  
        .purchase_footer {
          padding-top: 15px;
          border-top: 1px solid #eaeaec;
        }
  
        .purchase_total {
          margin: 0;
          text-align: right;
          font-weight: bold;
          color: #333333;
        }
  
        .purchase_total--label {
          padding: 0 15px 0 0;
        }
  
        body {
          background-color: #f4f4f7;
          color: #51545e;
        }
  
        p {
          color: #51545e;
        }
  
        p.sub {
          color: #6b6e76;
        }
  
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #f4f4f7;
        }
  
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        /* Masthead ----------------------- */
  
        .email-masthead {
          padding: 25px 0;
          text-align: center;
        }
  
        .email-masthead_logo {
          width: 94px;
        }
  
        .email-masthead_name {
          font-size: 16px;
          font-weight: bold;
          color: #a8aaaf;
          text-decoration: none;
          text-shadow: 0 1px 0 white;
        }
        /* Body ------------------------------ */
  
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #ffffff;
        }
  
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #ffffff;
        }
  
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
  
        .email-footer p {
          color: #6b6e76;
        }
  
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
  
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #eaeaec;
        }
  
        .content-cell {
          padding: 35px;
        }
        /*Media Queries ------------------------------ */
  
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
  
        @media (prefers-color-scheme: dark) {
          body,
          .email-body,
          .email-body_inner,
          .email-content,
          .email-wrapper,
          .email-masthead,
          .email-footer {
            background-color: #333333 !important;
            color: #fff !important;
          }
          p,
          ul,
          ol,
          blockquote,
          h1,
          h2,
          h3 {
            color: #fff !important;
          }
          .attributes_content,
          .discount {
            background-color: #222 !important;
          }
          .email-masthead_name {
            text-shadow: none !important;
          }
        }
  
        :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }
      </style>
      <!--[if mso]>
        <style type="text/css">
          .f-fallback {
            font-family: Arial, sans-serif;
          }
        </style>
      <![endif]-->
    </head>
    <body>
      <span class="preheader"
        >Welcome to Masteringbackend! I'm super excited to welcome you
        aboard.</span
      >
      <table
        class="email-wrapper"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tr>
          <td align="center">
            <table
              class="email-content"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td class="email-masthead">
                  <a
                    href="https://masteringbackend.com?source=welcome_email"
                    class="f-fallback email-masthead_name"
                  >
                  <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                  </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td
                  class="email-body"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <table
                    class="email-body_inner"
                    align="center"
                    width="570"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell">
                        <div class="f-fallback">
                          <h1>Hi ${message.to_name},</h1>
                          <p>
                            Welcome to Masteringbackend! I'm super excited to welcome you
                            aboard. My name is Solomon and I'll support you with
                            any questions you have.
                          </p>
                          <p>
                            Now that you're here, let me briefly recap the most
                            important features Masteringbackend can offer you:
                          </p>
                          <ul>
                            <li>Video and Text based Backend Engineering courses</li>
                            <li>
                              Personal Backend Portfolio to showcase your skills
                            </li>
                            <li>Learn to build from Thousands Real-world Projects</li>
                            <li>Track your learnings and set schedules</li>
                            <li>
                              Follow Expert Vetted roadmaps to learn backend engineering.
                            </li>
                              <li>
                              Map courses to Backend Projects to help you master your skills
                            </li>
                            <li>Online coding challenges by experts to improve your skills</li>
                            <li>Pick projects from different business domains to practice.</li>
                          </ul>
  
                          <p>Here are some of the features on the way:</p>
                          <ol>
                            <li>
                              <strong>Roadmaps => </strong>MB Roadmap enables structured-based learning approach for Backend engineers.
                            </li>
                            <li>
                              <strong>Project Land => </strong>MB Projects enables Backend engineers through a learn-by-building model. Build real-world backend projects without coding the frontend.
                            </li>
                            <li>
                              <strong>Backend Portfolio => </strong
                              >Create and manage your backend portfolio with tons of real world backend projects.
                            </li>
                            <li>
                              <strong>BackLand => </strong
                              >Learn backend engineering by solving challenges in a gamifying way.
                            </li>
                             
                          </ol>
                        </div>
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Arial', sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        If you have any questions, don't be shy and reach out to
                        our team on
                        <a
                          style="font-weight: bold;"
                          href="mailto:info@masteringbackend.com"
                          >info@masteringbackend.com</a
                        >.
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Arial', sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        To help you get started in no time, here's a link to our
                        <a style="font-weight: bold;" href="#"
                          >demo video</a
                        >
                        and
                        <a
                          style="font-weight: bold; color:"
                          href="https://masteringbackend.com/posts"
                          >blog</a
                        >.
                        <p style="padding: 20px 0 0 0">
                          Talk soon, <br />Solomon from ${process.env.APP_NAME}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td>
                  <table
                    class="email-footer"
                    align="center"
                    width="570"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td class="content-cell" align="center">
                        <p class="f-fallback sub align-center">
                          &copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.
                        </p>
                        <p class="f-fallback sub align-center">
                          ${process.env.APP_NAME}
                          <br />No. 100 Ogologo Street, Rumuigbo. <br />Port
                          Harcourt, Rivers, Nigeria
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  
  `;
};

var verificationEmail = (message) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title></title>
        <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
        
        @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          -webkit-text-size-adjust: none;
        }
        
        a {
          color: #3869D4;
        }
        
        a img {
          border: none;
        }
        
        td {
          word-break: break-word;
        }
        
        .preheader {
          display: none !important;
          visibility: hidden;
          mso-hide: all;
          font-size: 1px;
          line-height: 1px;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
        }
        /* Type ------------------------------ */
        
        body,
        td,
        th {
          font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
        }
        
        h1 {
          margin-top: 0;
          color: #333333;
          font-size: 22px;
          font-weight: bold;
          text-align: left;
        }
        
        h2 {
          margin-top: 0;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
        
        h3 {
          margin-top: 0;
          color: #333333;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        
        td,
        th {
          font-size: 16px;
        }
        
        p,
        ul,
        ol,
        blockquote {
          margin: .4em 0 1.1875em;
          font-size: 16px;
          line-height: 1.625;
        }
        
        p.sub {
          font-size: 13px;
        }
        /* Utilities ------------------------------ */
        
        .align-right {
          text-align: right;
        }
        
        .align-left {
          text-align: left;
        }
        
        .align-center {
          text-align: center;
        }
        /* Buttons ------------------------------ */
        
        .button {
          background-color: #3869D4;
          border-top: 10px solid #3869D4;
          border-right: 18px solid #3869D4;
          border-bottom: 10px solid #3869D4;
          border-left: 18px solid #3869D4;
          display: inline-block;
          color: #FFF;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          -webkit-text-size-adjust: none;
          box-sizing: border-box;
        }
        
        .button--green {
          background-color: #22BC66;
          border-top: 10px solid #22BC66;
          border-right: 18px solid #22BC66;
          border-bottom: 10px solid #22BC66;
          border-left: 18px solid #22BC66;
        }
        
        .button--red {
          background-color: #FF6136;
          border-top: 10px solid #FF6136;
          border-right: 18px solid #FF6136;
          border-bottom: 10px solid #FF6136;
          border-left: 18px solid #FF6136;
        }
        
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        /* Attribute list ------------------------------ */
        
        .attributes {
          margin: 0 0 21px;
        }
        
        .attributes_content {
          background-color: #F4F4F7;
          padding: 16px;
        }
        
        .attributes_item {
          padding: 0;
        }
        /* Related Items ------------------------------ */
        
        .related {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .related_item {
          padding: 10px 0;
          color: #CBCCCF;
          font-size: 15px;
          line-height: 18px;
        }
        
        .related_item-title {
          display: block;
          margin: .5em 0 0;
        }
        
        .related_item-thumb {
          display: block;
          padding-bottom: 10px;
        }
        
        .related_heading {
          border-top: 1px solid #CBCCCF;
          text-align: center;
          padding: 25px 0 10px;
        }
        /* Discount Code ------------------------------ */
        
        .discount {
          width: 100%;
          margin: 0;
          padding: 24px;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F4F4F7;
          border: 2px dashed #CBCCCF;
        }
        
        .discount_heading {
          text-align: center;
        }
        
        .discount_body {
          text-align: center;
          font-size: 15px;
        }
        /* Social Icons ------------------------------ */
        
        .social {
          width: auto;
        }
        
        .social td {
          padding: 0;
          width: auto;
        }
        
        .social_icon {
          height: 20px;
          margin: 0 8px 10px 8px;
          padding: 0;
        }
        /* Data table ------------------------------ */
        
        .purchase {
          width: 100%;
          margin: 0;
          padding: 35px 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_content {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_item {
          padding: 10px 0;
          color: #51545E;
          font-size: 15px;
          line-height: 18px;
        }
        
        .purchase_heading {
          padding-bottom: 8px;
          border-bottom: 1px solid #EAEAEC;
        }
        
        .purchase_heading p {
          margin: 0;
          color: #85878E;
          font-size: 12px;
        }
        
        .purchase_footer {
          padding-top: 15px;
          border-top: 1px solid #EAEAEC;
        }
        
        .purchase_total {
          margin: 0;
          text-align: right;
          font-weight: bold;
          color: #333333;
        }
        
        .purchase_total--label {
          padding: 0 15px 0 0;
        }
        
        body {
          background-color: #F4F4F7;
          color: #51545E;
        }
        
        p {
          color: #51545E;
        }
        
        p.sub {
          color: #6B6E76;
        }
        
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F4F4F7;
        }
        
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        /* Masthead ----------------------- */
        
        .email-masthead {
          padding: 25px 0;
          text-align: center;
        }
        
        .email-masthead_logo {
          width: 94px;
        }
        
        .email-masthead_name {
          font-size: 16px;
          font-weight: bold;
          color: #A8AAAF;
          text-decoration: none;
          text-shadow: 0 1px 0 white;
        }
        /* Body ------------------------------ */
        
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #FFFFFF;
        }
        
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #FFFFFF;
        }
        
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .email-footer p {
          color: #6B6E76;
        }
        
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #EAEAEC;
        }
        
        .content-cell {
          padding: 35px;
        }
        /*Media Queries ------------------------------ */
        
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          body,
          .email-body,
          .email-body_inner,
          .email-content,
          .email-wrapper,
          .email-masthead,
          .email-footer {
            background-color: #333333 !important;
            color: #FFF !important;
          }
          p,
          ul,
          ol,
          blockquote,
          h1,
          h2,
          h3 {
            color: #FFF !important;
          }
          .attributes_content,
          .discount {
            background-color: #222 !important;
          }
          .email-masthead_name {
            text-shadow: none !important;
          }
        }
        
        :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }
        </style>
        <!--[if mso]>
        <style type="text/css">
          .f-fallback  {
            font-family: Arial, sans-serif;
          }
        </style>
      <![endif]-->
      </head>
      <body>
        <span class="preheader">Use this code to verify your email address. The code is only valid for 24 hours.</span>
        <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center">
              <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="email-masthead">
                    <a href="https://masteringbackend.com?source=verification_email" class="f-fallback email-masthead_name">
                    <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                  </a>
                  </td>
                </tr>
                <!-- Email Body -->
                <tr>
                  <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                    <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <!-- Body content -->
                      <tr>
                        <td class="content-cell">
                          <div class="f-fallback">
                            <h1>Hi ${message.to_name},</h1>
                            <p>Thanks for signing up for ${process.env.APP_NAME}! This email verification step is required to make sure we have an accurate email address to communicate important account events to you.</p>
                            <p>To confirm your email address, please copy and paste the code below in your browser, back to the sign up workflow inside our app:</p>
                            <!-- Action -->
                            <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td align="center">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td align="center">
                                       <h1>${message.code}</h1>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <p>If you have any questions, please <a href="mailto:support@masteringbackend.com">contact support</a> if you have questions. — we're always happy to help out.</p>
                            <p>Talk soon,
                              <br>The ${process.env.APP_NAME} Team</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="content-cell" align="center">
                          <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                          <p class="f-fallback sub align-center">
                            ${process.env.APP_NAME}
                            <br>No. 100 Ogologo Street, Rumuigbo.
                            <br>Port Harcourt, Rivers, Nigeria
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`;
};

const defaultPort = 3000;
const context = process.env.CONTEXT || 'LOCAL';
const environment = {
    context,
    port: process.env.PORT || defaultPort,
    appName: process.env.APP_NAME,
    domain: process.env.FE_URL,
    debug: process.env.DEBUG,
    password: {
        passwordResetsIn: Number(process.env.PASSWORD_RESET_EXPIRES_MIN),
    },
    database: {
        url: process.env.DATABASE_URL,
    },
    aws: {
        projectId: process.env.GCP_PROIECT_ID,
        bucket: process.env.GCP_BUCKET_NAME,
    },
    jwt: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        refreshDays: process.env.REFRESH_TOKEN_EXPIRES_DAYS,
        secret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        saltRounds: Number(process.env.AUTH_SALT_ROUNDS) || 10,
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT || '6379'),
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 2525,
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD,
        sender: process.env.MAIL_SENDER,
    },
    google: {
        projectId: process.env.GCP_PROJECT_ID,
        clientEmail: process.env.GCP_CLIENT_EMAIL,
        privateKey: process.env.GCP_PRIVATE_KEY,
        bucketName: process.env.GCP_BUCKET,
        bucketNameTemporary: process.env.GCP_BUCKET_TEMPORARY,
        asyncFunction: process.env.GCP_ASYNC_FUNCTION,
        taskQueue: process.env.GCP_ASYNC_TASK_QUEUE,
        taskQueueHandler: process.env.GCP_ASYNC_TASK_QUEUE_HANDLER,
        taskQueueLocation: process.env.GCP_ASYNC_TASK_QUEUE_LOCATION,
        oauthGoogleClientToken: process.env.OAUTH_GOOGLE_CLIENT_TOKEN,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
    },
    youverify: {
        url: process.env.YOUVERIFY_URL,
        key: process.env.YOUVERIFY_KEY,
    },
    embedly: {
        id: process.env.EMBEDLY_ID,
        key: process.env.EMBEDLY_KEY,
        url: process.env.EMBEDLY_URL,
        payoutURL: process.env.EMBEDLY_PAYOUT_URL,
        webhookURL: process.env.EMBEDLY_WEBHOOK_URL,
        orgAccount: Number(process.env.EMBEDLY_ORGANIZATION_ACCOUNT),
        orgName: process.env.EMBEDLY_ORGANIZATION_NAME,
    },
    cloudflare: {
        bucket: process.env.CLOUDFLARE_BUCKET_NAME,
        key: process.env.CLOUDFLARE_ACCESS_KEY_ID,
        secret: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
        url: process.env.CLOUDFLARE_BUCKET_URL,
    },
    qoreId: {
        url: process.env.QOREID_BASE_URL,
        client: process.env.QOREID_CLIENT,
        secret: process.env.QOREID_SECRET,
    },
    akuuk: {
        url: process.env.AKUUK_BASE_URL,
        id: process.env.AKUUK_ACCOUNT_ID,
        key: process.env.AKUUK_KEY,
        sender: process.env.AKUUK_SENDER,
    },
};

const debug = debugModule;
debug('api:info');
const logError = debug('api:error');
debug('api:field-resolver');
debug('api:query');
debug('api:mutation');
debug('api:helper');

var sendEmail = async ({ to, template, variables, templateId }) => {
    if (!template)
        throw new Error('No mail template specified');
    const { subject, template: temp } = await selectTemplate({
        template,
        variables,
    });
    if (['PRODUCTION', 'DEVELOP'].includes(environment.context)) {
        const resend = new Resend(process.env.RESEND_KEY);
        const { data, error } = await resend.emails.send({
            from: `"${process.env.APP_NAME}" <info@emails.masteringbackend.com>`,
            to: to,
            subject: subject,
            html: temp ?? '<h2>Check the subject </h2>',
        });
        if (error) {
            console.log(error);
            return;
        }
        return data;
    }
    new Promise((resolve, reject) => {
        // create message
        const mailOptions = {
            from: `"${process.env.APP_NAME}" <info@pressmoni.com>`,
            to,
            subject,
            html: temp ?? '<h2>Check the subject </h2>',
        };
        const mailConfig = {
            host: environment.mail?.host || 'smtp.mailtrap.io',
            port: environment.mail?.port,
            secure: true,
            auth: {
                user: environment.mail?.username || 'a3d1159bbbe3a6', //generated by Mailtrap
                pass: environment.mail?.password || '2b4668fe2d6a67', //generated by Mailtrap
            },
            connectionTimeout: 10000, // 10 seconds
            greetingTimeout: 10000,
            socketTimeout: 10000,
        };
        // console.log(mailOptions, mailConfig);
        if (environment.mail?.host?.includes('gmail'))
            mailConfig['service'] = environment.mail?.host;
        const transporter = nodemailer.createTransport(mailConfig);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                logError('sendEmail %o', { mailOptions, error });
                reject(new Error('try email again later'));
                return;
            }
            console.log(info);
            transporter.close();
            resolve(info);
        });
        return;
    });
};
const selectTemplate = async ({ template, variables }) => {
    let subject = ``;
    let _template = undefined;
    switch (template) {
        case 'forgot-password':
            subject += `Password Reset`;
            _template = forgotPassword$1(variables);
            break;
        case 'verification':
            subject += `Email Verification`;
            _template = verificationEmail(variables);
            break;
        case 'password-changed':
            subject += `Password Changed`;
            _template = passwordChanged(variables);
            break;
        case 'welcome':
            subject += `Welcome to Masteringbackend!`;
            _template = welcome(variables);
            break;
    }
    return { template: _template, subject };
};

class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

const countryCodes = [
    {
        name: 'Afghanistan',
        dial_code: '+93',
        code: 'AF',
    },
    {
        name: 'Aland Islands',
        dial_code: '+358',
        code: 'AX',
    },
    {
        name: 'Albania',
        dial_code: '+355',
        code: 'AL',
    },
    {
        name: 'Algeria',
        dial_code: '+213',
        code: 'DZ',
    },
    {
        name: 'AmericanSamoa',
        dial_code: '+1684',
        code: 'AS',
    },
    {
        name: 'Andorra',
        dial_code: '+376',
        code: 'AD',
    },
    {
        name: 'Angola',
        dial_code: '+244',
        code: 'AO',
    },
    {
        name: 'Anguilla',
        dial_code: '+1264',
        code: 'AI',
    },
    {
        name: 'Antarctica',
        dial_code: '+672',
        code: 'AQ',
    },
    {
        name: 'Antigua and Barbuda',
        dial_code: '+1268',
        code: 'AG',
    },
    {
        name: 'Argentina',
        dial_code: '+54',
        code: 'AR',
    },
    {
        name: 'Armenia',
        dial_code: '+374',
        code: 'AM',
    },
    {
        name: 'Aruba',
        dial_code: '+297',
        code: 'AW',
    },
    {
        name: 'Australia',
        dial_code: '+61',
        code: 'AU',
    },
    {
        name: 'Austria',
        dial_code: '+43',
        code: 'AT',
    },
    {
        name: 'Azerbaijan',
        dial_code: '+994',
        code: 'AZ',
    },
    {
        name: 'Bahamas',
        dial_code: '+1242',
        code: 'BS',
    },
    {
        name: 'Bahrain',
        dial_code: '+973',
        code: 'BH',
    },
    {
        name: 'Bangladesh',
        dial_code: '+880',
        code: 'BD',
    },
    {
        name: 'Barbados',
        dial_code: '+1246',
        code: 'BB',
    },
    {
        name: 'Belarus',
        dial_code: '+375',
        code: 'BY',
    },
    {
        name: 'Belgium',
        dial_code: '+32',
        code: 'BE',
    },
    {
        name: 'Belize',
        dial_code: '+501',
        code: 'BZ',
    },
    {
        name: 'Benin',
        dial_code: '+229',
        code: 'BJ',
    },
    {
        name: 'Bermuda',
        dial_code: '+1441',
        code: 'BM',
    },
    {
        name: 'Bhutan',
        dial_code: '+975',
        code: 'BT',
    },
    {
        name: 'Bolivia, Plurinational State of',
        dial_code: '+591',
        code: 'BO',
    },
    {
        name: 'Bosnia and Herzegovina',
        dial_code: '+387',
        code: 'BA',
    },
    {
        name: 'Botswana',
        dial_code: '+267',
        code: 'BW',
    },
    {
        name: 'Brazil',
        dial_code: '+55',
        code: 'BR',
    },
    {
        name: 'British Indian Ocean Territory',
        dial_code: '+246',
        code: 'IO',
    },
    {
        name: 'Brunei Darussalam',
        dial_code: '+673',
        code: 'BN',
    },
    {
        name: 'Bulgaria',
        dial_code: '+359',
        code: 'BG',
    },
    {
        name: 'Burkina Faso',
        dial_code: '+226',
        code: 'BF',
    },
    {
        name: 'Burundi',
        dial_code: '+257',
        code: 'BI',
    },
    {
        name: 'Cambodia',
        dial_code: '+855',
        code: 'KH',
    },
    {
        name: 'Cameroon',
        dial_code: '+237',
        code: 'CM',
    },
    {
        name: 'Canada',
        dial_code: '+1',
        code: 'CA',
    },
    {
        name: 'Cape Verde',
        dial_code: '+238',
        code: 'CV',
    },
    {
        name: 'Cayman Islands',
        dial_code: '+345',
        code: 'KY',
    },
    {
        name: 'Central African Republic',
        dial_code: '+236',
        code: 'CF',
    },
    {
        name: 'Chad',
        dial_code: '+235',
        code: 'TD',
    },
    {
        name: 'Chile',
        dial_code: '+56',
        code: 'CL',
    },
    {
        name: 'China',
        dial_code: '+86',
        code: 'CN',
    },
    {
        name: 'Christmas Island',
        dial_code: '+61',
        code: 'CX',
    },
    {
        name: 'Cocos (Keeling) Islands',
        dial_code: '+61',
        code: 'CC',
    },
    {
        name: 'Colombia',
        dial_code: '+57',
        code: 'CO',
    },
    {
        name: 'Comoros',
        dial_code: '+269',
        code: 'KM',
    },
    {
        name: 'Congo',
        dial_code: '+242',
        code: 'CG',
    },
    {
        name: 'Congo, The Democratic Republic of the Congo',
        dial_code: '+243',
        code: 'CD',
    },
    {
        name: 'Cook Islands',
        dial_code: '+682',
        code: 'CK',
    },
    {
        name: 'Costa Rica',
        dial_code: '+506',
        code: 'CR',
    },
    {
        name: "Cote d'Ivoire",
        dial_code: '+225',
        code: 'CI',
    },
    {
        name: 'Croatia',
        dial_code: '+385',
        code: 'HR',
    },
    {
        name: 'Cuba',
        dial_code: '+53',
        code: 'CU',
    },
    {
        name: 'Cyprus',
        dial_code: '+357',
        code: 'CY',
    },
    {
        name: 'Czech Republic',
        dial_code: '+420',
        code: 'CZ',
    },
    {
        name: 'Denmark',
        dial_code: '+45',
        code: 'DK',
    },
    {
        name: 'Djibouti',
        dial_code: '+253',
        code: 'DJ',
    },
    {
        name: 'Dominica',
        dial_code: '+1767',
        code: 'DM',
    },
    {
        name: 'Dominican Republic',
        dial_code: '+1849',
        code: 'DO',
    },
    {
        name: 'Ecuador',
        dial_code: '+593',
        code: 'EC',
    },
    {
        name: 'Egypt',
        dial_code: '+20',
        code: 'EG',
    },
    {
        name: 'El Salvador',
        dial_code: '+503',
        code: 'SV',
    },
    {
        name: 'Equatorial Guinea',
        dial_code: '+240',
        code: 'GQ',
    },
    {
        name: 'Eritrea',
        dial_code: '+291',
        code: 'ER',
    },
    {
        name: 'Estonia',
        dial_code: '+372',
        code: 'EE',
    },
    {
        name: 'Ethiopia',
        dial_code: '+251',
        code: 'ET',
    },
    {
        name: 'Falkland Islands (Malvinas)',
        dial_code: '+500',
        code: 'FK',
    },
    {
        name: 'Faroe Islands',
        dial_code: '+298',
        code: 'FO',
    },
    {
        name: 'Fiji',
        dial_code: '+679',
        code: 'FJ',
    },
    {
        name: 'Finland',
        dial_code: '+358',
        code: 'FI',
    },
    {
        name: 'France',
        dial_code: '+33',
        code: 'FR',
    },
    {
        name: 'French Guiana',
        dial_code: '+594',
        code: 'GF',
    },
    {
        name: 'French Polynesia',
        dial_code: '+689',
        code: 'PF',
    },
    {
        name: 'Gabon',
        dial_code: '+241',
        code: 'GA',
    },
    {
        name: 'Gambia',
        dial_code: '+220',
        code: 'GM',
    },
    {
        name: 'Georgia',
        dial_code: '+995',
        code: 'GE',
    },
    {
        name: 'Germany',
        dial_code: '+49',
        code: 'DE',
    },
    {
        name: 'Ghana',
        dial_code: '+233',
        code: 'GH',
    },
    {
        name: 'Gibraltar',
        dial_code: '+350',
        code: 'GI',
    },
    {
        name: 'Greece',
        dial_code: '+30',
        code: 'GR',
    },
    {
        name: 'Greenland',
        dial_code: '+299',
        code: 'GL',
    },
    {
        name: 'Grenada',
        dial_code: '+1473',
        code: 'GD',
    },
    {
        name: 'Guadeloupe',
        dial_code: '+590',
        code: 'GP',
    },
    {
        name: 'Guam',
        dial_code: '+1671',
        code: 'GU',
    },
    {
        name: 'Guatemala',
        dial_code: '+502',
        code: 'GT',
    },
    {
        name: 'Guernsey',
        dial_code: '+44',
        code: 'GG',
    },
    {
        name: 'Guinea',
        dial_code: '+224',
        code: 'GN',
    },
    {
        name: 'Guinea-Bissau',
        dial_code: '+245',
        code: 'GW',
    },
    {
        name: 'Guyana',
        dial_code: '+595',
        code: 'GY',
    },
    {
        name: 'Haiti',
        dial_code: '+509',
        code: 'HT',
    },
    {
        name: 'Holy See (Vatican City State)',
        dial_code: '+379',
        code: 'VA',
    },
    {
        name: 'Honduras',
        dial_code: '+504',
        code: 'HN',
    },
    {
        name: 'Hong Kong',
        dial_code: '+852',
        code: 'HK',
    },
    {
        name: 'Hungary',
        dial_code: '+36',
        code: 'HU',
    },
    {
        name: 'Iceland',
        dial_code: '+354',
        code: 'IS',
    },
    {
        name: 'India',
        dial_code: '+91',
        code: 'IN',
    },
    {
        name: 'Indonesia',
        dial_code: '+62',
        code: 'ID',
    },
    {
        name: 'Iran, Islamic Republic of Persian Gulf',
        dial_code: '+98',
        code: 'IR',
    },
    {
        name: 'Iraq',
        dial_code: '+964',
        code: 'IQ',
    },
    {
        name: 'Ireland',
        dial_code: '+353',
        code: 'IE',
    },
    {
        name: 'Isle of Man',
        dial_code: '+44',
        code: 'IM',
    },
    {
        name: 'Israel',
        dial_code: '+972',
        code: 'IL',
    },
    {
        name: 'Italy',
        dial_code: '+39',
        code: 'IT',
    },
    {
        name: 'Jamaica',
        dial_code: '+1876',
        code: 'JM',
    },
    {
        name: 'Japan',
        dial_code: '+81',
        code: 'JP',
    },
    {
        name: 'Jersey',
        dial_code: '+44',
        code: 'JE',
    },
    {
        name: 'Jordan',
        dial_code: '+962',
        code: 'JO',
    },
    {
        name: 'Kazakhstan',
        dial_code: '+77',
        code: 'KZ',
    },
    {
        name: 'Kenya',
        dial_code: '+254',
        code: 'KE',
    },
    {
        name: 'Kiribati',
        dial_code: '+686',
        code: 'KI',
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: '+850',
        code: 'KP',
    },
    {
        name: 'Korea, Republic of South Korea',
        dial_code: '+82',
        code: 'KR',
    },
    {
        name: 'Kuwait',
        dial_code: '+965',
        code: 'KW',
    },
    {
        name: 'Kyrgyzstan',
        dial_code: '+996',
        code: 'KG',
    },
    {
        name: 'Laos',
        dial_code: '+856',
        code: 'LA',
    },
    {
        name: 'Latvia',
        dial_code: '+371',
        code: 'LV',
    },
    {
        name: 'Lebanon',
        dial_code: '+961',
        code: 'LB',
    },
    {
        name: 'Lesotho',
        dial_code: '+266',
        code: 'LS',
    },
    {
        name: 'Liberia',
        dial_code: '+231',
        code: 'LR',
    },
    {
        name: 'Libyan Arab Jamahiriya',
        dial_code: '+218',
        code: 'LY',
    },
    {
        name: 'Liechtenstein',
        dial_code: '+423',
        code: 'LI',
    },
    {
        name: 'Lithuania',
        dial_code: '+370',
        code: 'LT',
    },
    {
        name: 'Luxembourg',
        dial_code: '+352',
        code: 'LU',
    },
    {
        name: 'Macao',
        dial_code: '+853',
        code: 'MO',
    },
    {
        name: 'Macedonia',
        dial_code: '+389',
        code: 'MK',
    },
    {
        name: 'Madagascar',
        dial_code: '+261',
        code: 'MG',
    },
    {
        name: 'Malawi',
        dial_code: '+265',
        code: 'MW',
    },
    {
        name: 'Malaysia',
        dial_code: '+60',
        code: 'MY',
    },
    {
        name: 'Maldives',
        dial_code: '+960',
        code: 'MV',
    },
    {
        name: 'Mali',
        dial_code: '+223',
        code: 'ML',
    },
    {
        name: 'Malta',
        dial_code: '+356',
        code: 'MT',
    },
    {
        name: 'Marshall Islands',
        dial_code: '+692',
        code: 'MH',
    },
    {
        name: 'Martinique',
        dial_code: '+596',
        code: 'MQ',
    },
    {
        name: 'Mauritania',
        dial_code: '+222',
        code: 'MR',
    },
    {
        name: 'Mauritius',
        dial_code: '+230',
        code: 'MU',
    },
    {
        name: 'Mayotte',
        dial_code: '+262',
        code: 'YT',
    },
    {
        name: 'Mexico',
        dial_code: '+52',
        code: 'MX',
    },
    {
        name: 'Micronesia, Federated States of Micronesia',
        dial_code: '+691',
        code: 'FM',
    },
    {
        name: 'Moldova',
        dial_code: '+373',
        code: 'MD',
    },
    {
        name: 'Monaco',
        dial_code: '+377',
        code: 'MC',
    },
    {
        name: 'Mongolia',
        dial_code: '+976',
        code: 'MN',
    },
    {
        name: 'Montenegro',
        dial_code: '+382',
        code: 'ME',
    },
    {
        name: 'Montserrat',
        dial_code: '+1664',
        code: 'MS',
    },
    {
        name: 'Morocco',
        dial_code: '+212',
        code: 'MA',
    },
    {
        name: 'Mozambique',
        dial_code: '+258',
        code: 'MZ',
    },
    {
        name: 'Myanmar',
        dial_code: '+95',
        code: 'MM',
    },
    {
        name: 'Namibia',
        dial_code: '+264',
        code: 'NA',
    },
    {
        name: 'Nauru',
        dial_code: '+674',
        code: 'NR',
    },
    {
        name: 'Nepal',
        dial_code: '+977',
        code: 'NP',
    },
    {
        name: 'Netherlands',
        dial_code: '+31',
        code: 'NL',
    },
    {
        name: 'Netherlands Antilles',
        dial_code: '+599',
        code: 'AN',
    },
    {
        name: 'New Caledonia',
        dial_code: '+687',
        code: 'NC',
    },
    {
        name: 'New Zealand',
        dial_code: '+64',
        code: 'NZ',
    },
    {
        name: 'Nicaragua',
        dial_code: '+505',
        code: 'NI',
    },
    {
        name: 'Niger',
        dial_code: '+227',
        code: 'NE',
    },
    {
        name: 'Nigeria',
        dial_code: '+234',
        code: 'NG',
    },
    {
        name: 'Niue',
        dial_code: '+683',
        code: 'NU',
    },
    {
        name: 'Norfolk Island',
        dial_code: '+672',
        code: 'NF',
    },
    {
        name: 'Northern Mariana Islands',
        dial_code: '+1670',
        code: 'MP',
    },
    {
        name: 'Norway',
        dial_code: '+47',
        code: 'NO',
    },
    {
        name: 'Oman',
        dial_code: '+968',
        code: 'OM',
    },
    {
        name: 'Pakistan',
        dial_code: '+92',
        code: 'PK',
    },
    {
        name: 'Palau',
        dial_code: '+680',
        code: 'PW',
    },
    {
        name: 'Palestinian Territory, Occupied',
        dial_code: '+970',
        code: 'PS',
    },
    {
        name: 'Panama',
        dial_code: '+507',
        code: 'PA',
    },
    {
        name: 'Papua New Guinea',
        dial_code: '+675',
        code: 'PG',
    },
    {
        name: 'Paraguay',
        dial_code: '+595',
        code: 'PY',
    },
    {
        name: 'Peru',
        dial_code: '+51',
        code: 'PE',
    },
    {
        name: 'Philippines',
        dial_code: '+63',
        code: 'PH',
    },
    {
        name: 'Pitcairn',
        dial_code: '+872',
        code: 'PN',
    },
    {
        name: 'Poland',
        dial_code: '+48',
        code: 'PL',
    },
    {
        name: 'Portugal',
        dial_code: '+351',
        code: 'PT',
    },
    {
        name: 'Puerto Rico',
        dial_code: '+1939',
        code: 'PR',
    },
    {
        name: 'Qatar',
        dial_code: '+974',
        code: 'QA',
    },
    {
        name: 'Romania',
        dial_code: '+40',
        code: 'RO',
    },
    {
        name: 'Russia',
        dial_code: '+7',
        code: 'RU',
    },
    {
        name: 'Rwanda',
        dial_code: '+250',
        code: 'RW',
    },
    {
        name: 'Reunion',
        dial_code: '+262',
        code: 'RE',
    },
    {
        name: 'Saint Barthelemy',
        dial_code: '+590',
        code: 'BL',
    },
    {
        name: 'Saint Helena, Ascension and Tristan Da Cunha',
        dial_code: '+290',
        code: 'SH',
    },
    {
        name: 'Saint Kitts and Nevis',
        dial_code: '+1869',
        code: 'KN',
    },
    {
        name: 'Saint Lucia',
        dial_code: '+1758',
        code: 'LC',
    },
    {
        name: 'Saint Martin',
        dial_code: '+590',
        code: 'MF',
    },
    {
        name: 'Saint Pierre and Miquelon',
        dial_code: '+508',
        code: 'PM',
    },
    {
        name: 'Saint Vincent and the Grenadines',
        dial_code: '+1784',
        code: 'VC',
    },
    {
        name: 'Samoa',
        dial_code: '+685',
        code: 'WS',
    },
    {
        name: 'San Marino',
        dial_code: '+378',
        code: 'SM',
    },
    {
        name: 'Sao Tome and Principe',
        dial_code: '+239',
        code: 'ST',
    },
    {
        name: 'Saudi Arabia',
        dial_code: '+966',
        code: 'SA',
    },
    {
        name: 'Senegal',
        dial_code: '+221',
        code: 'SN',
    },
    {
        name: 'Serbia',
        dial_code: '+381',
        code: 'RS',
    },
    {
        name: 'Seychelles',
        dial_code: '+248',
        code: 'SC',
    },
    {
        name: 'Sierra Leone',
        dial_code: '+232',
        code: 'SL',
    },
    {
        name: 'Singapore',
        dial_code: '+65',
        code: 'SG',
    },
    {
        name: 'Slovakia',
        dial_code: '+421',
        code: 'SK',
    },
    {
        name: 'Slovenia',
        dial_code: '+386',
        code: 'SI',
    },
    {
        name: 'Solomon Islands',
        dial_code: '+677',
        code: 'SB',
    },
    {
        name: 'Somalia',
        dial_code: '+252',
        code: 'SO',
    },
    {
        name: 'South Africa',
        dial_code: '+27',
        code: 'ZA',
    },
    {
        name: 'South Sudan',
        dial_code: '+211',
        code: 'SS',
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        dial_code: '+500',
        code: 'GS',
    },
    {
        name: 'Spain',
        dial_code: '+34',
        code: 'ES',
    },
    {
        name: 'Sri Lanka',
        dial_code: '+94',
        code: 'LK',
    },
    {
        name: 'Sudan',
        dial_code: '+249',
        code: 'SD',
    },
    {
        name: 'Suriname',
        dial_code: '+597',
        code: 'SR',
    },
    {
        name: 'Svalbard and Jan Mayen',
        dial_code: '+47',
        code: 'SJ',
    },
    {
        name: 'Swaziland',
        dial_code: '+268',
        code: 'SZ',
    },
    {
        name: 'Sweden',
        dial_code: '+46',
        code: 'SE',
    },
    {
        name: 'Switzerland',
        dial_code: '+41',
        code: 'CH',
    },
    {
        name: 'Syrian Arab Republic',
        dial_code: '+963',
        code: 'SY',
    },
    {
        name: 'Taiwan',
        dial_code: '+886',
        code: 'TW',
    },
    {
        name: 'Tajikistan',
        dial_code: '+992',
        code: 'TJ',
    },
    {
        name: 'Tanzania, United Republic of Tanzania',
        dial_code: '+255',
        code: 'TZ',
    },
    {
        name: 'Thailand',
        dial_code: '+66',
        code: 'TH',
    },
    {
        name: 'Timor-Leste',
        dial_code: '+670',
        code: 'TL',
    },
    {
        name: 'Togo',
        dial_code: '+228',
        code: 'TG',
    },
    {
        name: 'Tokelau',
        dial_code: '+690',
        code: 'TK',
    },
    {
        name: 'Tonga',
        dial_code: '+676',
        code: 'TO',
    },
    {
        name: 'Trinidad and Tobago',
        dial_code: '+1868',
        code: 'TT',
    },
    {
        name: 'Tunisia',
        dial_code: '+216',
        code: 'TN',
    },
    {
        name: 'Turkey',
        dial_code: '+90',
        code: 'TR',
    },
    {
        name: 'Turkmenistan',
        dial_code: '+993',
        code: 'TM',
    },
    {
        name: 'Turks and Caicos Islands',
        dial_code: '+1649',
        code: 'TC',
    },
    {
        name: 'Tuvalu',
        dial_code: '+688',
        code: 'TV',
    },
    {
        name: 'Uganda',
        dial_code: '+256',
        code: 'UG',
    },
    {
        name: 'Ukraine',
        dial_code: '+380',
        code: 'UA',
    },
    {
        name: 'United Arab Emirates',
        dial_code: '+971',
        code: 'AE',
    },
    {
        name: 'United Kingdom',
        dial_code: '+44',
        code: 'GB',
    },
    {
        name: 'United States',
        dial_code: '+1',
        code: 'US',
    },
    {
        name: 'Uruguay',
        dial_code: '+598',
        code: 'UY',
    },
    {
        name: 'Uzbekistan',
        dial_code: '+998',
        code: 'UZ',
    },
    {
        name: 'Vanuatu',
        dial_code: '+678',
        code: 'VU',
    },
    {
        name: 'Venezuela, Bolivarian Republic of Venezuela',
        dial_code: '+58',
        code: 'VE',
    },
    {
        name: 'Vietnam',
        dial_code: '+84',
        code: 'VN',
    },
    {
        name: 'Virgin Islands, British',
        dial_code: '+1284',
        code: 'VG',
    },
    {
        name: 'Virgin Islands, U.S.',
        dial_code: '+1340',
        code: 'VI',
    },
    {
        name: 'Wallis and Futuna',
        dial_code: '+681',
        code: 'WF',
    },
    {
        name: 'Yemen',
        dial_code: '+967',
        code: 'YE',
    },
    {
        name: 'Zambia',
        dial_code: '+260',
        code: 'ZM',
    },
    {
        name: 'Zimbabwe',
        dial_code: '+263',
        code: 'ZW',
    },
];

const acc = btoa(`${environment.akuuk?.id}:${environment.akuuk?.key}`);
const Client$2 = axios.create({
    baseURL: environment.akuuk?.url,
    headers: {
        Authorization: `Basic ${acc}`,
    },
});
class Akuuk {
    static async sendSMS(payload) {
        const uuid = randomUUID();
        // Find country code
        const country = findItem(countryCodes, payload.country, 'code');
        // Format phone number
        const number = formatPhoneNumber(payload.number, country?.dial_code);
        if (!number)
            return;
        const res = await Client$2.post('/messaging/sms', {
            message: payload.message,
            mrcReference: uuid,
            sender: environment.akuuk.sender,
            type: 'text',
            countryCode: country?.dial_code,
            number,
        });
        const { data: result } = res;
        if (result.code !== 200)
            throw new CustomError(result.message, 500);
        return result;
    }
    static async airtime(payload) {
        const { amount, billing, country: code, number: phone } = payload;
        const uuid = randomUUID();
        // Find country code
        const country = findItem(countryCodes, code, 'code');
        // Format phone number
        const number = formatPhoneNumber(phone, country?.dial_code);
        console.log({
            mrcReference: uuid,
            countryCode: Number(country?.dial_code.split('+')[1]) + '',
            number: number + '',
            billing: billing,
            amount: parseFloat(amount).toFixed(2) + '',
        });
        const res = await Client$2.post('/payment/airtime', {
            mrcReference: uuid,
            countryCode: Number(country?.dial_code.split('+')[1]) + '',
            number: number + '',
            billing: billing,
            amount: parseFloat(amount).toFixed(2) + '',
        });
        const { data: result } = res;
        if (result.code !== 200)
            throw new CustomError(result.message, 500);
        return result;
    }
}

const useErrorParser = (err) => {
    console.log(err);
    return {
        message: err.message.includes('prisma')
            ? 'Internal Server Error'
            : (err?.message ?? 'Internal Server Error'),
        status: err?.status ?? 500,
        success: false,
    };
};
function generateRandomNumber(size) {
    if (size <= 0)
        throw new Error('Size must be greater than 0');
    const min = Math.pow(10, size - 1);
    const max = Math.pow(10, size) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isTestingBVN(bvn) {
    return (['DEVELOP', 'LOCAL'].includes(environment.context) &&
        ['22222222222', '95888168924'].includes(bvn));
}
function isDev() {
    return ['DEVELOP', 'LOCAL'].includes(environment.context);
}
const QUEUE_NAMES = {
    TRANSFER: 'transfer',
    AIRTIME: 'airtime',
    NOTIFICATION: 'notification',
    INTERNAL_TRANSFER: 'internal_transfer',
    CREATEWALLET: 'create_wallet',
};
async function sendOTP(user, type = 'PHONE') {
    const code = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    const verification = await prisma.verificationIntent.create({
        data: {
            refreshCode: code,
            userId: user.id,
            type: type === 'PHONE' ? 'PHONE' : 'EMAIL',
        },
    });
    if (!verification)
        throw new Error('OTP not saved');
    // Send SMS
    if (user.phone && type === 'PHONE')
        Akuuk.sendSMS({
            country: user?.country ?? 'NG',
            number: user.phone,
            message: `Your WePay verification code is: ${code}. Thanks you for choosing WePay`,
        }).catch((e) => console.log(e));
    if (user.email && type === 'EMAIL')
        sendEmail({
            to: user?.email,
            variables: {
                code: code,
                email: user.email,
                to_name: user.name,
            },
            template: 'verification',
        }).catch((e) => console.log(e));
}
function formatPhoneNumber(number, dailCode) {
    return number.toString().length > 11
        ? number
        : Number(`${dailCode.split('+')[1]}${number.toString().substring(1)}`);
}
const DAILY_LIMITS = {
    TIER_1: 200000n,
    TIER_2: 1000000n,
    TIER_3: 5000000n,
    TIER_4: 100000000000n,
};
/**
 * Converts any valid date string, timestamp, or Date object
 * to a standard ISO 8601 date string.
 *
 * @param {string | number | Date} input - The date input to convert.
 * @returns {string | null} The ISO date string or null if invalid.
 */
function toISODate(input) {
    try {
        // Handle empty or undefined input
        if (!input)
            return null;
        // Convert to Date object
        const date = new Date(input);
        // Check validity
        if (isNaN(date.getTime())) {
            return null; // Invalid date
        }
        // Return ISO string
        return date.toISOString();
    }
    catch (err) {
        return null;
    }
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 → 12 for 12 AM
    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}
function findItem(data, item, field) {
    return data.find((d) => d?.[field]?.toLowerCase()?.trim() === item?.toLowerCase()?.trim());
}
function amountInKobo(amount) {
    return BigInt(Math.round(amount * 100));
}
function amountInNaira(amount) {
    return Number(amount) / 100;
}
async function checkDailyLimit(fromWallet, fromUser, amt) {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const totalTransferredToday = await prisma.transfer.aggregate({
        _sum: { amount: true },
        where: {
            fromWalletId: fromWallet.id,
            createdAt: { gte: todayStart },
            status: { in: ['PENDING', 'COMPLETED'] },
        },
    });
    const transferred = BigInt(totalTransferredToday._sum.amount || 0);
    const tier = fromUser.currentTier;
    const dailyLimit = DAILY_LIMITS[tier] || DAILY_LIMITS.TIER_1;
    return transferred + amt > dailyLimit;
}
function wrapText(text, max = 32) {
    if (!text)
        return;
    const words = text.split(' ');
    let lines = [];
    let current = '';
    for (const w of words) {
        if ((current + ' ' + w).trim().length > max) {
            lines.push(current.trim());
            current = w;
        }
        else {
            current += ' ' + w;
        }
    }
    if (current.trim().length > 0)
        lines.push(current.trim());
    return lines.join('\n');
}
function shortenDesc(desc, max = 30) {
    if (!desc)
        return desc;
    if (desc.length <= max)
        return desc;
    return desc.slice(0, max - 3) + '...';
}
function formatTransferSMS({ account, amount, desc, currency, balance, date, type, }) {
    return `
Acct: ******${account.slice(-4)}
Amt: ${currency}${formatCurrency(amountInNaira(amount))} ${type}
Desc: ${wrapText(shortenDesc(desc))}
Avail Bal: ${currency}${formatCurrency(amountInNaira(balance))}
Date: ${formatDate(date)}
Thanks for using WePay`;
}

// src/utils/hash.ts
async function hashPassword(plain) {
    // default options for argon2 are fine; tune in prod if needed
    return bcrypt.hash(plain, 10);
}
function hashToken(token) {
    if (!token)
        return;
    if (isTestingBVN(token)) {
        return crypto$1
            .createHash('sha256')
            .update(token + new Date().getTime().toString().slice(6))
            .digest('hex');
    }
    return crypto$1.createHash('sha256').update(token).digest('hex');
}
async function hashPin(pin) {
    return await argon2.hash(pin, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16, // 64 MB
        timeCost: 3,
        parallelism: 1,
    });
}
async function verifyPin(hashedPin, inputPin) {
    return await argon2.verify(hashedPin, inputPin);
}

// src/utils/jwt.ts
function signAccessToken(payload) {
    return jwt.sign(payload, environment.jwt.secret, {
        expiresIn: `${environment.jwt?.expiresIn}h`,
    });
}
function verifyAccessToken(token) {
    return jwt.verify(token, environment.jwt.secret);
}

function generateUserSafeId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";
    for (let i = 0; i < 8; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const limiter$1 = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
async function register(data) {
    if (data?.email) {
        const existing = await prisma.user.findFirst({
            where: { email: data.email },
        });
        if (existing)
            throw new Error('Email already in use');
    }
    const record = {
        ...data.extra,
    };
    if (data.role === 'AGENT')
        record.agent = { create: {} };
    if (data.role === 'MERCHANT' || data.role === 'INSTITUTION')
        record.merchant = { create: {} };
    if (data?.email !== undefined)
        record.email = data.email;
    const uniqueId = generateUserSafeId();
    const user = await prisma.$transaction(async (tx) => {
        const _user = await tx.user.create({
            data: {
                bvn: data.bvn, //Hashing will come when user add emails,
                ...record,
                uniqueID: uniqueId,
            },
            include: { address: true },
        });
        await tx.auditLog.create({
            data: { userId: _user.id, action: 'REGISTER', ip: null },
        });
        return _user;
    });
    limiter$1.schedule(() => sendOTP(user));
    return user;
}
async function forgotPin(payload) {
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    phone: payload?.phone,
                },
                {
                    email: payload?.email,
                },
            ],
        },
    });
    if (!user)
        return false;
    limiter$1.schedule(() => sendOTP(user));
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'FORGOT_PIN_CODE' },
    });
    return true;
}
async function login(data) {
    const { email, phone, pin } = data;
    if (!pin)
        throw new CustomError('PIN is required', 422);
    if (!email && !phone)
        throw new CustomError('Email or phone is required', 422);
    // Find user by email or phone
    const user = await prisma.user.findFirst({
        where: {
            OR: [...(email ? [{ email }] : []), ...(phone ? [{ phone }] : [])],
        },
        include: {
            wallets: true,
        },
    });
    if (!user)
        throw new CustomError('Invalid credentials', 401);
    if (!user.pin)
        throw new CustomError('User has no pin set', 400);
    const ok = await verifyPin(user.pin, pin);
    if (!ok) {
        // Optional: increment failed login attempts here
        await prisma.auditLog.create({
            data: { userId: user.id, action: 'FAILED_LOGIN' },
        });
        throw new CustomError('Invalid credentials', 401);
    }
    // Successful login → Log it
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'LOGIN' },
    });
    return user;
}
async function loginWithFinger(data) {
    const { fingerPrint } = data;
    if (!fingerPrint) {
        throw new CustomError('Finger is required or invalid finger data', 422);
    }
    // Find user directly by fingerprint
    const user = await prisma.user.findFirst({
        where: { fingerPrint: fingerPrint },
    });
    if (!user) {
        throw new CustomError('Invalid fingerprint', 401);
    }
    // Log successful login
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'LOGIN' },
    });
    return user;
}
async function forgotPassword(data) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user)
        return false;
    limiter$1.schedule(() => sendOTP(user));
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'FORGOT_PASSWORD_CODE', ip: data.ip },
    });
    return true;
}
async function resetPassword(data) {
    const { token, newPassword, ip } = data;
    const verificationIntent = await prisma.verificationIntent.findFirst({
        where: { refreshCode: token }
    });
    if (!verificationIntent)
        throw new Error('Invalid or expired token');
    const newHash = await hashPassword(newPassword);
    const user = await prisma.user.update({
        where: { id: verificationIntent.userId },
        data: {
            password: newHash,
        },
    });
    // revoke all refresh tokens (safety)
    await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'RESET_PASSWORD', ip: ip },
    });
    return user;
}
async function resetPin(user, data) {
    await prisma.user.update({
        where: { id: user.id },
        data: {
            pin: data.pin,
        },
    });
    // revoke all refresh tokens (safety)
    await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'RESET_PIN' },
    });
    return user;
}
async function resendOTP(userId, data) {
    const user = await prisma.user.findFirst({
        where: { id: userId },
    });
    if (!user)
        throw new CustomError('User not found', 500);
    if (data.email && data.type === 'EMAIL') {
        const _user = await prisma.user.findFirst({
            where: {
                email: data.email,
            },
        });
        if (_user)
            throw new CustomError('User exist. Click on forgot pin', 409);
        limiter$1.schedule(() => sendOTP({
            ...user,
            email: data.email,
            name: data?.name ?? '',
        }, data.type));
        return;
    }
    limiter$1.schedule(() => sendOTP(user));
    return true;
}

const getUser = async (user) => {
    if (!user)
        throw new CustomError('User not found', 404);
    const _user = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
            merchant: true,
            agent: true,
            wallets: true,
            address: true,
        },
    });
    const { ...authUser } = _user;
    return {
        ...authUser,
        wallets: authUser.wallets.map((w) => {
            return {
                ...w,
                availableBalance: amountInNaira(w.availableBalance),
                reservedBalance: amountInNaira(w.reservedBalance),
                ledgerBalance: amountInNaira(w.ledgerBalance),
            };
        }),
    };
};

const types = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '0ed8b99b-8097-4e49-bd4c-ff0410c57d27',
            name: 'Corporate',
        },
        {
            id: 'f671da57-e281-4b40-965f-a96f4205405e',
            name: 'Individual',
        },
    ]
    : [
        {
            id: '46e68cf6-f355-4536-ae96-adf24682809f',
            name: 'Corporate',
        },
        {
            id: 'c92d5158-a4c5-4418-83f7-a813d3989a85',
            name: 'Individual',
        },
    ];
const countries = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '08dd5d6c-a9b4-452d-8872-4ada3d46b506',
            name: 'United States',
            countryCodeTwo: 'US',
            countryCodeThree: 'USA',
        },
        {
            id: '08dd7754-454d-4ab0-8ed1-5eed930ad067',
            name: 'Ghana',
            countryCodeTwo: 'GH',
            countryCodeThree: 'GHA',
        },
        {
            id: '08dd7764-e2ab-455e-8359-84809550f17c',
            name: 'Togo',
            countryCodeTwo: 'TG',
            countryCodeThree: 'TGO',
        },
        {
            id: '08dd782b-134c-4e7c-8726-4524b8e41fa8',
            name: 'Brazil',
            countryCodeTwo: 'BR',
            countryCodeThree: 'BRA',
        },
        {
            id: 'c15ad9ae-c4d7-4342-b70f-de5508627e3b',
            name: 'Nigeria',
            countryCodeTwo: 'NG',
            countryCodeThree: 'NGA',
        },
    ]
    : [
        {
            id: '4aa9d59e-04e7-4984-9794-85a55489d433',
            name: 'Nigeria',
            countryCodeTwo: 'NG',
            countryCodeThree: 'NGA',
        },
    ];
const currencies = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '6eeb54c8-24d7-11f0-a818-6045bd97b81d',
            name: 'Canadian Dollars4',
            shortName: 'CD4',
        },
        {
            id: '82647b29-1302-11f0-a8a9-6045bd97b81d',
            name: 'RAND',
            shortName: 'ZAR',
        },
        {
            id: '98d64583-fb7e-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars',
            shortName: 'CAD',
        },
        {
            id: 'af8c9168-fdc5-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars3',
            shortName: 'CD3',
        },
        {
            id: 'c8fe419f-fb7e-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars2',
            shortName: 'CD2',
        },
        {
            id: 'd98ba5ab-fb78-11ef-a8a9-6045bd97b81d',
            name: 'Tanzania Shillings',
            shortName: 'TZS',
        },
        {
            id: 'fd5e474d-bb42-4db1-ab74-e8d2a01047e9',
            name: 'Nigeria Naira',
            shortName: 'NGN',
        },
    ]
    : [
        {
            id: '45852f0c-84fa-410c-b66c-1ffec56e5cd8',
            name: 'Nigeria Naira',
            shortName: 'NGN',
        },
    ];
const banks = [
    {
        bankName: 'Access Bank',
        bankCode: '000014',
    },
    {
        bankName: 'Citi Bank',
        bankCode: '000009',
    },
    {
        bankName: 'Ecobank Bank',
        bankCode: '000010',
    },
    {
        bankName: 'Fidelity Bank',
        bankCode: '000007',
    },
    {
        bankName: 'First Bank of Nigeria',
        bankCode: '000016',
    },
    {
        bankName: 'First City Monument Bank',
        bankCode: '000003',
    },
    {
        bankName: 'GTBank Plc',
        bankCode: '000013',
    },
    {
        bankName: 'Heritage',
        bankCode: '000020',
    },
    {
        bankName: 'JAIZ Bank',
        bankCode: '000006',
    },
    {
        bankName: 'Keystone Bank',
        bankCode: '000002',
    },
    {
        bankName: 'Kuda Bank',
        bankCode: '090267',
    },
    {
        bankName: 'Paycom(OPAY)',
        bankCode: '100004',
    },
    {
        bankName: 'Providus Bank',
        bankCode: '000023',
    },
    {
        bankName: 'Rand Merchant Bank',
        bankCode: '000024',
    },
    {
        bankName: 'Polaris Bank',
        bankCode: '000008',
    },
    {
        bankName: 'StanbicIBTC Bank',
        bankCode: '000012',
    },
    {
        bankName: 'Standard Chartered Bank',
        bankCode: '000021',
    },
    {
        bankName: 'Sterling Bank',
        bankCode: '000001',
    },
    {
        bankName: 'SUNTRUST BANK',
        bankCode: '000022',
    },
    {
        bankName: 'Union Bank',
        bankCode: '000018',
    },
    {
        bankName: 'United Bank for Africa',
        bankCode: '000004',
    },
    {
        bankName: 'Unity Bank',
        bankCode: '000011',
    },
    {
        bankName: 'Wema/ALAT',
        bankCode: '000017',
    },
    {
        bankName: 'ZENITH BANK PLC',
        bankCode: '000015',
    },
    {
        bankName: 'VFD Microfinance Bank',
        bankCode: '090110',
    },
    {
        bankName: 'Tangerine Money',
        bankCode: '090426',
    },
    {
        bankName: 'Taj Bank',
        bankCode: '000026',
    },
    {
        bankName: 'Sparkle',
        bankCode: '090325',
    },
    {
        bankName: 'Hope PSBank',
        bankCode: '120002',
    },
    {
        bankName: 'Parralex Microfinance Bank',
        bankCode: '090004',
    },
    {
        bankName: 'Eyowo',
        bankCode: '090328',
    },
    {
        bankName: '9Payment Service Bank',
        bankCode: '120001',
    },
    {
        bankName: 'Nova Merchant Bank',
        bankCode: '060003',
    },
    {
        bankName: 'Titan Trust Bank',
        bankCode: '000025',
    },
    {
        bankName: 'Covenant MFB',
        bankCode: '070006',
    },
    {
        bankName: 'Page Financials',
        bankCode: '070008',
    },
    {
        bankName: 'Fortis Microfinance Bank',
        bankCode: '070002',
    },
    {
        bankName: 'FSDH Merchant Bank',
        bankCode: '400001',
    },
    {
        bankName: 'Globus Bank',
        bankCode: '000027',
    },
    {
        bankName: 'FBNQUEST Merchant Bank',
        bankCode: '060002',
    },
    {
        bankName: 'ASO Savings & Loans',
        bankCode: '090001',
    },
    {
        bankName: 'RenMoney Microfinance Bank',
        bankCode: '090198',
    },
    {
        bankName: 'Stanbic IBTC @ease wallet',
        bankCode: '100007',
    },
    {
        bankName: 'Futo Microfinance Bank',
        bankCode: '090158',
    },
    {
        bankName: 'Greenwich Merchant Bank',
        bankCode: '060004',
    },
    {
        bankName: 'Lapo Microfinance Bank',
        bankCode: '090177',
    },
    {
        bankName: 'NIRSAL Microfinance Bank',
        bankCode: '090194',
    },
    {
        bankName: 'ABU Microfinance Bank',
        bankCode: '090197',
    },
    {
        bankName: 'Accion Microfinance Bank',
        bankCode: '090134',
    },
    {
        bankName: 'Cellulant',
        bankCode: '100005',
    },
    {
        bankName: 'Bowen Microfinance Bank',
        bankCode: '090148',
    },
    {
        bankName: 'eTranzact',
        bankCode: '100006',
    },
    {
        bankName: 'Advans La Fayette  Microfinance Bank',
        bankCode: '090155',
    },
    {
        bankName: 'Carbon',
        bankCode: '100026',
    },
    {
        bankName: 'PalmPay Limited',
        bankCode: '100033',
    },
    {
        bankName: 'Moniepoint',
        bankCode: '090405',
    },
    {
        bankName: 'KONGAPAY',
        bankCode: '100025',
    },
    {
        bankName: 'Abbey Mortgage Bank',
        bankCode: '070010',
    },
    {
        bankName: 'Interswitch Limited',
        bankCode: '110003',
    },
    {
        bankName: 'Paystack Payments Limited',
        bankCode: '110006',
    },
    {
        bankName: 'Xpress Payments',
        bankCode: '090201',
    },
    {
        bankName: 'ACCELEREX NETWORK',
        bankCode: '090202',
    },
    {
        bankName: 'Arca Payments Company Limited',
        bankCode: '110011',
    },
    {
        bankName: 'UNIBADAN Microfinance Bank',
        bankCode: '090461',
    },
    {
        bankName: 'Premium Trust bank',
        bankCode: '000031',
    },
    {
        bankName: 'MoMo PSB',
        bankCode: '120003',
    },
    {
        bankName: 'SmartCash Payment Service Bank',
        bankCode: '120004',
    },
    {
        bankName: 'Money Master PSB',
        bankCode: '120005',
    },
    {
        bankName: 'FAIRMONEY MICROFINANCE BANK LTD',
        bankCode: '090551',
    },
    {
        bankName: 'SIGNATURE BANK',
        bankCode: '000034',
    },
    {
        bankName: 'OPTIMUS BANK',
        bankCode: '000036',
    },
    {
        bankName: 'Ampersand Microfinance Bank (Bankly)',
        bankCode: '090529',
    },
    {
        bankName: 'WAYA Microfinance Bank',
        bankCode: '090590',
    },
    {
        bankName: 'Paga',
        bankCode: '100002',
    },
    {
        bankName: 'AL-Barakah Microfinance Bank',
        bankCode: '090133',
    },
    {
        bankName: '3line Card Management Limited',
        bankCode: '110005',
    },
    {
        bankName: 'Above Only Microfinance Bank',
        bankCode: '090260',
    },
    {
        bankName: 'Access Yello',
        bankCode: '100052',
    },
    {
        bankName: 'AccessMobile',
        bankCode: '100013',
    },
    {
        bankName: 'Ada Microfinance Bank',
        bankCode: '090483',
    },
    {
        bankName: 'Addosser Microfinance Bank',
        bankCode: '090160',
    },
    {
        bankName: 'Adeyemi College Staff Microfinance Bank',
        bankCode: '090268',
    },
    {
        bankName: 'Afekhafe Microfinance Bank',
        bankCode: '090292',
    },
    {
        bankName: 'AG Mortgage Bank',
        bankCode: '100028',
    },
    {
        bankName: 'Alekun Microfinance Bank',
        bankCode: '090259',
    },
    {
        bankName: 'Alert Microfinance Bank',
        bankCode: '090297',
    },
    {
        bankName: 'Al-Hayat Microfinance Bank',
        bankCode: '090277',
    },
    {
        bankName: 'Allworkers Microfinance Bank',
        bankCode: '090131',
    },
    {
        bankName: 'Alpha Kapital Microfinance Bank',
        bankCode: '090169',
    },
    {
        bankName: 'Amac Microfinance Bank',
        bankCode: '090394',
    },
    {
        bankName: 'Amju Unique Microfinance Bank',
        bankCode: '090180',
    },
    {
        bankName: 'AMML MFB',
        bankCode: '090116',
    },
    {
        bankName: 'Anchorage Microfinance Bank',
        bankCode: '090476',
    },
    {
        bankName: 'Apeks Microfinance Bank',
        bankCode: '090143',
    },
    {
        bankName: 'Apple Microfinance Bank',
        bankCode: '090376',
    },
    {
        bankName: 'Arise Microfinance Bank',
        bankCode: '090282',
    },
    {
        bankName: 'AssetMatrix Microfinance Bank',
        bankCode: '090287',
    },
    {
        bankName: 'Assets Microfinance Bank',
        bankCode: '090473',
    },
    {
        bankName: 'Astrapolaris Microfinance Bank',
        bankCode: '090172',
    },
    {
        bankName: 'Auchi Microfinance Bank',
        bankCode: '090264',
    },
    {
        bankName: 'Baines Credit MFB',
        bankCode: '090188',
    },
    {
        bankName: 'Balogun Fulani Microfinance Bank',
        bankCode: '090181',
    },
    {
        bankName: 'Balogun Gambari Microfinance Bank',
        bankCode: '090326',
    },
    {
        bankName: 'BC Kash Microfinance Bank',
        bankCode: '090127',
    },
    {
        bankName: 'BIPC Microfinance Bank ',
        bankCode: '090336',
    },
    {
        bankName: 'Boctrust Microfinance Bank',
        bankCode: '090117',
    },
    {
        bankName: 'BOI Microfinance Bank',
        bankCode: '090444',
    },
    {
        bankName: 'Borgu  Microfinance Bank',
        bankCode: '090395',
    },
    {
        bankName: 'Bosak Microfinance Bank',
        bankCode: '090176',
    },
    {
        bankName: 'Brent Mortgage Bank',
        bankCode: '070015',
    },
    {
        bankName: 'Brethren Microfinance Bank',
        bankCode: '090293',
    },
    {
        bankName: 'Bridgeway Microfinance Bank',
        bankCode: '090393',
    },
    {
        bankName: 'Brightway Microfinance Bank',
        bankCode: '090308',
    },
    {
        bankName: 'Caretaker Microfinance Bank',
        bankCode: '090472',
    },
    {
        bankName: 'CashConnect Microfinance Bank',
        bankCode: '090360',
    },
    {
        bankName: 'CEMCS Microfinance Bank',
        bankCode: '090154',
    },
    {
        bankName: 'Changan RTS Microfinance Bank',
        bankCode: '090470',
    },
    {
        bankName: 'Chikum Microfinance Bank',
        bankCode: '090141',
    },
    {
        bankName: 'Chukwunenye MFB',
        bankCode: '090490',
    },
    {
        bankName: 'CIT Microfinance Bank',
        bankCode: '090144',
    },
    {
        bankName: 'Coalcamp Microfinance Bank',
        bankCode: '090254',
    },
    {
        bankName: 'Coastline Microfinance Bank',
        bankCode: '090374',
    },
    {
        bankName: 'Kredi MFB',
        bankCode: '090380',
    },
    {
        bankName: 'Consumer Microfinance Bank',
        bankCode: '090130',
    },
    {
        bankName: 'Contec Global Infotech Limited (NowNow)',
        bankCode: '100032',
    },
    {
        bankName: 'Coop Mortgage Bank',
        bankCode: '070021',
    },
    {
        bankName: 'Corestep Microfinance Bank',
        bankCode: '090365',
    },
    {
        bankName: 'Coronation Merchant Bank',
        bankCode: '060001',
    },
    {
        bankName: 'Credit Afrique Microfinance Bank',
        bankCode: '090159',
    },
    {
        bankName: 'Crowdforce',
        bankCode: '110017',
    },
    {
        bankName: 'Cyberspace Limited',
        bankCode: '110014',
    },
    {
        bankName: 'Davodani Microfinance Bank',
        bankCode: '090391',
    },
    {
        bankName: 'Daylight Microfinance Bank',
        bankCode: '090167',
    },
    {
        bankName: 'Eagle Flight Microfinance Bank',
        bankCode: '090294',
    },
    {
        bankName: 'Eartholeum',
        bankCode: '100021',
    },
    {
        bankName: 'e-Barcs Microfinance Bank',
        bankCode: '090156',
    },
    {
        bankName: 'Ecobank Xpress Account',
        bankCode: '100008',
    },
    {
        bankName: 'EcoMobile',
        bankCode: '100030',
    },
    {
        bankName: 'EdFin Microfinance Bank',
        bankCode: '090310',
    },
    {
        bankName: 'Ekondo MFB',
        bankCode: '090097',
    },
    {
        bankName: 'EK-Reliable Microfinance Bank',
        bankCode: '090389',
    },
    {
        bankName: 'Emeralds Microfinance Bank',
        bankCode: '090273',
    },
    {
        bankName: 'Empire trust MFB',
        bankCode: '090114',
    },
    {
        bankName: 'Enterprise Bank',
        bankCode: '000019',
    },
    {
        bankName: 'Esan Microfinance Bank',
        bankCode: '090189',
    },
    {
        bankName: 'Eso-E Microfinance Bank',
        bankCode: '090166',
    },
    {
        bankName: 'Evangel Microfinance Bank',
        bankCode: '090304',
    },
    {
        bankName: 'Evergreen Microfinance Bank',
        bankCode: '090332',
    },
    {
        bankName: 'FAST Microfinance Bank',
        bankCode: '090179',
    },
    {
        bankName: 'FBN Mortgages Limited',
        bankCode: '090107',
    },
    {
        bankName: 'FBNMobile',
        bankCode: '100014',
    },
    {
        bankName: 'FCMB Easy Account',
        bankCode: '100031',
    },
    {
        bankName: 'FCT Microfinance Bank',
        bankCode: '090290',
    },
    {
        bankName: 'Federal Polytechnic Nekede Microfinance Bank',
        bankCode: '090398',
    },
    {
        bankName: 'Federal University Dutse Microfinance Bank',
        bankCode: '090318',
    },
    {
        bankName: 'Fedeth Microfinance Bank',
        bankCode: '090482',
    },
    {
        bankName: 'FedPoly Nasarawa Microfinance Bank',
        bankCode: '090298',
    },
    {
        bankName: 'FET',
        bankCode: '100001',
    },
    {
        bankName: 'FFS Microfinance Bank',
        bankCode: '090153',
    },
    {
        bankName: 'Fidelity Mobile',
        bankCode: '100019',
    },
    {
        bankName: 'Fidfund Microfinance Bank',
        bankCode: '090126',
    },
    {
        bankName: 'FinaTrust Microfinance Bank',
        bankCode: '090111',
    },
    {
        bankName: 'Firmus Microfinance Bank',
        bankCode: '090366',
    },
    {
        bankName: 'First Apple Limited',
        bankCode: '110004',
    },
    {
        bankName: 'First Generation Mortgage Bank',
        bankCode: '070014',
    },
    {
        bankName: 'First Option Microfinance Bank',
        bankCode: '090285',
    },
    {
        bankName: 'First Royal Microfinance Bank',
        bankCode: '090164',
    },
    {
        bankName: 'Flutterwave Technology Solutions Limited',
        bankCode: '110002',
    },
    {
        bankName: 'FortisMobile',
        bankCode: '100016',
    },
    {
        bankName: 'Fullrange Microfinance Bank',
        bankCode: '090145',
    },
    {
        bankName: 'Gashua Microfinance Bank',
        bankCode: '090168',
    },
    {
        bankName: 'Gateway Mortgage Bank',
        bankCode: '0700009',
    },
    {
        bankName: 'Giant Stride Microfinance Bank',
        bankCode: '090475',
    },
    {
        bankName: 'Giginya Microfinance bank',
        bankCode: '090411',
    },
    {
        bankName: 'Girei Microfinance Bank',
        bankCode: '090186',
    },
    {
        bankName: 'Glory Microfinance Bank',
        bankCode: '090278',
    },
    {
        bankName: 'GMB Microfinance Bank',
        bankCode: '090408',
    },
    {
        bankName: 'Good Neigbours Microfinance Bank',
        bankCode: '090467',
    },
    {
        bankName: 'Gowans Microfinance Bank',
        bankCode: '090122',
    },
    {
        bankName: 'GreenBank Microfinance Bank',
        bankCode: '090178',
    },
    {
        bankName: 'Greenville Microfinance Bank',
        bankCode: '090269',
    },
    {
        bankName: 'Grooming Microfinance Bank',
        bankCode: '090195',
    },
    {
        bankName: 'GTI Microfinance Bank',
        bankCode: '090385',
    },
    {
        bankName: 'GTMobile',
        bankCode: '100009',
    },
    {
        bankName: 'Hackman Microfinance Bank',
        bankCode: '090147',
    },
    {
        bankName: 'Haggai Mortgage Bank Limited',
        bankCode: '070017',
    },
    {
        bankName: 'Hasal Microfinance Bank',
        bankCode: '090121',
    },
    {
        bankName: 'Headway Microfinance Bank',
        bankCode: '090363',
    },
    {
        bankName: 'Hedonmark',
        bankCode: '100017',
    },
    {
        bankName: 'IBILE Microfinance Bank',
        bankCode: '090118',
    },
    {
        bankName: 'Ikenne Microfinance Bank',
        bankCode: '090324',
    },
    {
        bankName: 'Ikire Microfinance Bank',
        bankCode: '090279',
    },
    {
        bankName: 'Ilisan Microfinance Bank',
        bankCode: '090370',
    },
    {
        bankName: 'Imo State Microfinance Bank',
        bankCode: '090258',
    },
    {
        bankName: 'Imperial Homes Mortgage Bank',
        bankCode: '100024',
    },
    {
        bankName: 'Infinity Microfinance Bank',
        bankCode: '090157',
    },
    {
        bankName: 'Infinity Trust Mortgage Bank',
        bankCode: '070016',
    },
    {
        bankName: 'Innovectives Kesh',
        bankCode: '100029',
    },
    {
        bankName: 'Intellifin',
        bankCode: '100027',
    },
    {
        bankName: 'Interland Microfinance Bank',
        bankCode: '090386',
    },
    {
        bankName: 'IRL Microfinance Bank',
        bankCode: '090149',
    },
    {
        bankName: 'Isaleoyo Microfinance Bank',
        bankCode: '090377',
    },
    {
        bankName: 'Jubilee-Life Mortgage Bank',
        bankCode: '090003',
    },
    {
        bankName: 'KadPoly Microfinance Bank',
        bankCode: '090320',
    },
    {
        bankName: 'KCMB Microfinance Bank',
        bankCode: '090191',
    },
    {
        bankName: 'Kegow',
        bankCode: '100015',
    },
    {
        bankName: 'Kontagora Microfinance Bank',
        bankCode: '090299',
    },
    {
        bankName: 'Lagos Building Investment Company',
        bankCode: '070012',
    },
    {
        bankName: 'Lavender Microfinance Bank',
        bankCode: '090271',
    },
    {
        bankName: 'Legend Microfinance Bank',
        bankCode: '090372',
    },
    {
        bankName: 'Light MFB',
        bankCode: '090477',
    },
    {
        bankName: 'Lovonus Microfinance Bank',
        bankCode: '090265',
    },
    {
        bankName: 'M36',
        bankCode: '100035',
    },
    {
        bankName: 'Mainland Microfinance Bank',
        bankCode: '090323',
    },
    {
        bankName: 'Mainstreet Microfinance Bank',
        bankCode: '090171',
    },
    {
        bankName: 'Maintrust Microfinance Bank',
        bankCode: '090465',
    },
    {
        bankName: 'Malachy Microfinance Bank',
        bankCode: '090174',
    },
    {
        bankName: 'Maritime Microfinance Bank',
        bankCode: '090410',
    },
    {
        bankName: 'MayFair Microfinance Bank',
        bankCode: '090321',
    },
    {
        bankName: 'MayFresh Mortgage Bank',
        bankCode: '070019',
    },
    {
        bankName: 'Megapraise Microfinance Bank',
        bankCode: '090280',
    },
    {
        bankName: 'Microcred Microfinance Bank',
        bankCode: '090136',
    },
    {
        bankName: 'Midland Microfinance Bank',
        bankCode: '090192',
    },
    {
        bankName: 'MintFinex Microfinance Bank',
        bankCode: '090281',
    },
    {
        bankName: 'Mkudi',
        bankCode: '100011',
    },
    {
        bankName: 'Molusi Microfinance Bank',
        bankCode: '090362',
    },
    {
        bankName: 'Money Trust Microfinance Bank',
        bankCode: '090129',
    },
    {
        bankName: 'MoneyBox',
        bankCode: '100020',
    },
    {
        bankName: 'Moyofade Microfinance Bank',
        bankCode: '090448',
    },
    {
        bankName: 'Mutual Benefits Microfinance Bank',
        bankCode: '090190',
    },
    {
        bankName: 'Mutual Trust Microfinance Bank',
        bankCode: '090151',
    },
    {
        bankName: 'Nagarta Microfinance Bank',
        bankCode: '090152',
    },
    {
        bankName: 'Navy Microfinance Bank',
        bankCode: '090263',
    },
    {
        bankName: 'Ndiorah Microfinance Bank',
        bankCode: '090128',
    },
    {
        bankName: 'Neptune Microfinance Bank',
        bankCode: '090329',
    },
    {
        bankName: 'New Dawn Microfinance Bank',
        bankCode: '090205',
    },
    {
        bankName: 'New Golden Pastures Microfinance Bank',
        bankCode: '090378',
    },
    {
        bankName: 'New Prudential Bank',
        bankCode: '090108',
    },
    {
        bankName: 'NIP Virtual Bank',
        bankCode: '999999',
    },
    {
        bankName: 'Nnew Women Microfinance Bank',
        bankCode: '090283',
    },
    {
        bankName: 'NPF MicroFinance Bank',
        bankCode: '70001',
    },
    {
        bankName: 'Nuture Microfinance Bank',
        bankCode: '090364',
    },
    {
        bankName: 'Nwannegadi Microfinance Bank',
        bankCode: '090399',
    },
    {
        bankName: 'Oche Microfinance Bank',
        bankCode: '090333',
    },
    {
        bankName: 'Ohafia Microfinance Bank',
        bankCode: '090119',
    },
    {
        bankName: 'Okpoga Microfinance Bank',
        bankCode: '090161',
    },
    {
        bankName: 'Olabisi Onabanjo University Microfinance Bank',
        bankCode: '090272',
    },
    {
        bankName: 'OLOFIN OWENA MICROFINANCE BANK ',
        bankCode: '090468',
    },
    {
        bankName: 'Oluchukwu Microfinance Bank',
        bankCode: '090471',
    },
    {
        bankName: 'Omiye Microfinance Bank',
        bankCode: '090295',
    },
    {
        bankName: 'Omoluabi savings and loans',
        bankCode: '070007',
    },
    {
        bankName: 'Oraukwu MFB',
        bankCode: '090492',
    },
    {
        bankName: 'Oscotech Microfinance Bank',
        bankCode: '090396',
    },
    {
        bankName: 'Parkway-ReadyCash',
        bankCode: '100003',
    },
    {
        bankName: 'PatrickGold Microfinance Bank',
        bankCode: '090317',
    },
    {
        bankName: 'PayAttitude Online',
        bankCode: '110001',
    },
    {
        bankName: 'PecanTrust Microfinance Bank',
        bankCode: '090137',
    },
    {
        bankName: 'Pennywise Microfinance Bank',
        bankCode: '090196',
    },
    {
        bankName: 'Personal Trust Microfinance Bank',
        bankCode: '090135',
    },
    {
        bankName: 'Petra Microfinance Bank',
        bankCode: '090165',
    },
    {
        bankName: 'Pillar Microfinance Bank',
        bankCode: '090289',
    },
    {
        bankName: 'Platinum Mortgage Bank',
        bankCode: '070013',
    },
    {
        bankName: 'Polyunwana Microfinance Bank',
        bankCode: '090296',
    },
    {
        bankName: 'Preeminent Microfinance Bank',
        bankCode: '090412',
    },
    {
        bankName: 'Prestige Microfinance Bank',
        bankCode: '090274',
    },
    {
        bankName: 'Purplemoney Microfinance Bank',
        bankCode: '090303',
    },
    {
        bankName: 'Pyramid Microfinance Bank',
        bankCode: '090657',
    },
    {
        bankName: 'Quickfund Microfinance Bank',
        bankCode: '090261',
    },
    {
        bankName: 'Refuge Mortgage Bank',
        bankCode: '070011',
    },
    {
        bankName: 'Regent Microfinance Bank',
        bankCode: '090125',
    },
    {
        bankName: 'Rehoboth Microfinance Bank',
        bankCode: '090463',
    },
    {
        bankName: 'Reliance Microfinance Bank',
        bankCode: '090173',
    },
    {
        bankName: 'Rephidim Microfinance Bank',
        bankCode: '090322',
    },
    {
        bankName: 'Richway Microfinance Bank',
        bankCode: '090132',
    },
    {
        bankName: 'Royal Exchange Microfinance Bank',
        bankCode: '090138',
    },
    {
        bankName: 'Safe Haven Microfinance Bank',
        bankCode: '090286',
    },
    {
        bankName: 'SafeTrust',
        bankCode: '090006',
    },
    {
        bankName: 'Sagamu Microfinance Bank',
        bankCode: '090140',
    },
    {
        bankName: 'Seed Capital Microfinance Bank',
        bankCode: '090112',
    },
    {
        bankName: 'Seedvest Microfinance Bank',
        bankCode: '090369',
    },
    {
        bankName: 'Stanford Microfinance Bak',
        bankCode: '090162',
    },
    {
        bankName: 'Stellas Microfinance Bank',
        bankCode: '090262',
    },
    {
        bankName: 'Sulspap Microfinance Bank',
        bankCode: '090305',
    },
    {
        bankName: 'TagPay',
        bankCode: '100023',
    },
    {
        bankName: 'TCF MFB',
        bankCode: '090115',
    },
    {
        bankName: 'TeasyMobile',
        bankCode: '100010',
    },
    {
        bankName: 'Think Finance Microfinance Bank',
        bankCode: '090373',
    },
    {
        bankName: 'Trident Microfinance Bank',
        bankCode: '090146',
    },
    {
        bankName: 'Trust Microfinance Bank',
        bankCode: '090327',
    },
    {
        bankName: 'Trustbond Mortgage Bank',
        bankCode: '090005',
    },
    {
        bankName: 'Trustfund Microfinance Bank',
        bankCode: '090276',
    },
    {
        bankName: 'U & C Microfinance Bank',
        bankCode: '090315',
    },
    {
        bankName: 'UNAAB Microfinance Bank',
        bankCode: '090331',
    },
    {
        bankName: 'Uniben Microfinance Bank',
        bankCode: '090266',
    },
    {
        bankName: 'Unical Microfinance Bank',
        bankCode: '090193',
    },
    {
        bankName: 'Unimaid Microfinance Bank',
        bankCode: '090464',
    },
    {
        bankName: 'UniUyo Microfinance Bank',
        bankCode: '090338',
    },
    {
        bankName: 'UNN MFB',
        bankCode: '090251',
    },
    {
        bankName: 'Vas2nets Limited',
        bankCode: '110015',
    },
    {
        bankName: 'Verdant Microfinance Bank',
        bankCode: '090474',
    },
    {
        bankName: 'Virtue Microfinance Bank',
        bankCode: '090150',
    },
    {
        bankName: 'Visa Microfinance Bank',
        bankCode: '090139',
    },
    {
        bankName: 'VTNetworks',
        bankCode: '100012',
    },
    {
        bankName: 'Xslnce Microfinance Bank',
        bankCode: '090124',
    },
    {
        bankName: 'YCT Microfinance Bank',
        bankCode: '090466',
    },
    {
        bankName: 'Yes Microfinance Bank',
        bankCode: '090142',
    },
    {
        bankName: 'Yobe Microfinance Bank',
        bankCode: '090252',
    },
    {
        bankName: 'Zenith Eazy Wallet',
        bankCode: '100034',
    },
    {
        bankName: 'ZenithMobile',
        bankCode: '100018',
    },
    {
        bankName: 'Titan-Paystack',
        bankCode: '100039',
    },
    {
        bankName: 'The Alternative Bank(AltBank)',
        bankCode: '000037',
    },
    {
        bankName: 'Mkobo Microfinance Bank',
        bankCode: '090455',
    },
    {
        bankName: 'Source Microfinance Bank',
        bankCode: '090641',
    },
    {
        bankName: 'BankIT MFB',
        bankCode: '090275',
    },
];
function sanitizeAddress(address) {
    if (!address)
        return '';
    const cleaned = address.replace(/[^a-zA-Z0-9\s,\-]/g, '');
    const normalized = cleaned.replace(/\s+/g, ' ').trim();
    return normalized;
}

const Client$1 = axios.create({
    baseURL: environment.embedly?.url ?? 'https://waas-staging.embedly.ng/api/v1',
    headers: {
        'x-api-key': environment.embedly?.key ?? '',
    },
});
Client$1.interceptors.request.use((config) => {
    const organizationId = environment.embedly.id;
    if (['post', 'put', 'patch'].includes(config.method || '')) {
        config.data = {
            ...config.data,
            organizationId,
        };
    }
    return config;
});
const PayoutClient = axios.create({
    baseURL: environment.embedly?.payoutURL ?? 'https://payout-staging.embedly.ng/api',
    headers: {
        'x-api-key': environment.embedly?.key ?? '',
    },
});
class Customer {
    static async personal(payload) {
        try {
            const customerType = findItem(types, 'Individual', 'name');
            const country = findItem(countries, payload.country, payload?.country?.length > 2 ? 'name' : 'countryCodeTwo');
            const { country: c, address, ...rest } = payload;
            const sanitizedAddress = sanitizeAddress(address);
            const data = {
                ...rest,
                customerTypeId: customerType?.id,
                countryId: country?.id,
                address: sanitizedAddress,
            };
            console.log(data, 'Embedly API Call');
            const res = await Client$1.post('/customers/add', data);
            const { data: result } = res;
            if (result.code !== '00')
                return;
            return result.data;
        }
        catch (error) {
            console.log(error, 'Error Embedly API Call');
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res?.message ?? res.title, res?.statusCode ?? res.status);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async get(id) {
        const res = await Client$1.get('/customers/get/id/' + id);
        const { data: result } = res;
        if (result?.code !== '00')
            throw new CustomError('Failed to retrieve Customer from Embedly', 404);
        return result.data;
    }
    static async corporate(payload) {
        try {
            const customerTypeId = findItem(types, payload.type, 'name')?.id;
            const eCountry = findItem(countries, payload.country, 'countryCodeTwo');
            const { country, type, ...rest } = payload;
            const data = {
                ...rest,
                customerTypeId,
                countryId: eCountry.id,
            };
            const res = await Client$1.post('/customers/add', data);
            const { data: result } = res;
            if (result.statuscode !== '00')
                throw new CustomError(result.message, 500);
            return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async verifyKYC(payload) {
        try {
            let bvn = payload.bvn;
            if (isTestingBVN(bvn))
                bvn = generateRandomNumber(11);
            const res = await Client$1.post('/customers/kyc/premium-kyc?verify=1', {
                ...payload,
                bvn,
            });
            const { data: result } = res;
            if (result.code !== '00')
                return;
            return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            const message = 'Customer has already completed BVN verification!';
            if (res && res.message.includes(message)) {
                return {
                    success: true,
                };
            }
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
}
class Validation {
    static async BVN() { }
    static async NIN() { }
    static async verifyWebhook(rawBody, signature) {
        const hmac = crypto$1.createHmac('sha512', environment.embedly.key);
        hmac.update(rawBody, 'utf8');
        const computedSignature = hmac.digest('hex');
        return computedSignature !== signature;
    }
}
class Wallet {
    static async create(wallet) {
        const currency = currencies.find((c) => c.shortName === wallet.currency);
        const { currency: c, userId, ...rest } = wallet;
        const res = await Client$1.post('/wallets/add', {
            ...rest,
            currencyId: currency?.id,
        });
        const { data: result } = res;
        if (result?.code !== '00')
            return;
        return result.data;
    }
    static async get(id) {
        const res = await Client$1.get('/wallets/get/wallet/' + id);
        const { data: result } = res;
        if (result?.code !== '00')
            return;
        return result.data;
    }
    static async getWalletByAccount(account) {
        const res = await Client$1.get('/wallets/get/account/' + account);
        const { data: result } = res;
        if (result?.code !== '200')
            throw new CustomError('Failed to retrieve Wallet from Embedly', 404);
        return result.data;
    }
    static async transfer(payload) {
        const res = await Client$1.put('/wallets/wallet/transaction/v2/wallet-to-wallet', payload);
        const { data: result } = res;
        return result.data;
    }
}
class Bank {
    static async getBanks() {
        const res = await Client$1.get('/banks');
        const { data: result } = res;
        if (result?.code !== '200')
            throw new CustomError('Failed to retrieve Wallet from Embedly', 404);
        return result.data;
    }
    static async transfer(payload) {
        const webhookUrl = environment.embedly.webhookURL;
        const organizationAccount = environment.embedly.orgAccount;
        const organizationName = environment.embedly.orgName;
        const currency = currencies.find((c) => c.shortName == payload.currency);
        const bank = banks.find((b) => b.bankName.toLowerCase().includes(payload.destinationBank.toLowerCase()));
        if (!bank)
            throw new CustomError('Bank not found', 404);
        const { currency: c, destinationBank, ...rest } = payload;
        const res = await PayoutClient.post('/inter-bank-transfer', {
            ...rest,
            webhookUrl,
            currencyId: currency?.id,
            destinationBankCode: bank?.bankCode,
            sourceAccountNumber: organizationAccount + '',
            sourceAccountName: organizationName,
        });
        const { data: result } = res;
        return result;
    }
}
class Embedly {
}
Embedly.customers = Customer;
Embedly.validations = Validation;
Embedly.wallets = Wallet;
Embedly.banks = Bank;

const Client = axios.create({
    baseURL: environment.youverify?.url ?? 'https://api.sandbox.youverify.co',
    headers: {
        token: environment.youverify?.key ?? '',
    },
});
class Youverify {
    static async verifyBVN(data) {
        try {
            // For testing purposes
            if (isTestingBVN(data.id))
                return {
                    firstName: 'Bunch',
                    lastName: 'Dillon',
                    dateOfBirth: '12-12-1994',
                    country: 'NG',
                    mobile: '080' + generateRandomNumber(8),
                    gender: 'Male',
                };
            const res = await Client.post('/v2/api/identity/ng/bvn', data);
            const { data: result } = res;
            if (result.data && result.data?.status?.includes('not_found'))
                throw new CustomError(result.data.reason, 404);
            if (result.data)
                return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async verifyAddress(phone) {
        try {
            const res = await axios.post('https://address.svc.youverify.co/v2/api/digital-addresses/lookup', {
                consent: true,
                phone,
            }, {
                headers: {
                    token: environment.youverify?.key ?? '',
                },
            });
            const { data } = res;
            console.log(data);
        }
        catch (error) {
            console.log(error, 'ADDRESS Very');
        }
    }
}

const TXNFEE$1 = process.env.EXTERNAL_PERCENT ?? 15;
async function processTransferEvent(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    if (!event)
        throw new CustomError('Event not found', 404);
    const payload = event?.payload;
    try {
        const result = await Embedly.banks.transfer({
            amount: Number(payload.amount),
            currency: payload.currency,
            destinationBank: payload.destinationBank,
            destinationAccountNumber: payload.destinationAccountNumber,
            destinationAccountName: payload.destinationAccountName,
            remarks: payload.remarks,
        });
        if (!result.succeeded)
            throw new CustomError('Transfer not succeeded', 500);
        const amount = amountInKobo(Number(payload.amount));
        const transferRecord = await prisma.$transaction(async (tx) => {
            // Add this transaction to the Provider account
            const provider = await tx.provider.upsert({
                where: { provider: 'EMBEDLY' },
                create: { provider: 'EMBEDLY', balance: amount },
                update: {
                    balance: { increment: amount },
                    total: { increment: 1 },
                },
            });
            // 3.1 Create pending transfer
            const transfer = await tx.transfer.update({
                where: { id: eventId },
                data: {
                    status: 'PROCESSING',
                    transactionReference: result.data,
                    metadata: {
                        providerId: provider.id,
                    },
                },
            });
            // 3.2 Debit user wallet
            const fromWallet = await tx.wallet.findUnique({
                where: { id: payload.fromWalletId },
            });
            if (!fromWallet)
                throw new CustomError('From wallet not found', 404);
            const newBalance = BigInt(fromWallet?.availableBalance) - amount;
            const wallet = await tx.wallet.update({
                where: { id: fromWallet?.id },
                data: {
                    availableBalance: newBalance,
                },
            });
            // Debit for FEEs
            const feeRate = amountInKobo(Number(TXNFEE$1));
            const newBalAfterFee = BigInt(wallet?.availableBalance) - feeRate;
            await tx.wallet.update({
                where: { id: fromWallet?.id },
                data: {
                    availableBalance: newBalAfterFee,
                },
            });
            // ============TRANSFER============================
            // create JournalEntry
            const journal = await tx.journalEntry.create({
                data: {
                    reference: transfer.id,
                    transferId: transfer.id,
                    description: 'external transfer',
                    metadata: {
                        fromWalletId: fromWallet.id,
                        providerId: provider.id,
                    },
                },
            });
            // 3.3 Create ledger entry (DEBIT)
            await tx.ledger.create({
                data: {
                    walletId: fromWallet.id,
                    transferId: transfer.id,
                    journalId: journal.id,
                    change: -amount,
                    balanceAfter: newBalance,
                    type: 'TRANSFER_DEBIT',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // provider float ledger row (credit)
            await tx.ledger.create({
                data: {
                    providerId: provider.id,
                    journalId: journal.id,
                    change: amount,
                    balanceAfter: BigInt(provider.balance) + amount,
                    type: 'TRANSFER_CREDIT',
                    metadata: {
                        transferId: transfer.id,
                        provider: 'EMBEDLY',
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // 3.4 Create outbox for async publish
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer.id,
                    topic: 'transfer.external.embedly.processing',
                    payload: {
                        transferId: transfer.id,
                        userId: payload.initiatedBy,
                        amount: payload.amount,
                        currency: payload.currency,
                        toBankCode: payload.destinationBank,
                        toAccountNumber: payload.destinationAccountNumber,
                        toAccountName: payload.destinationAccountName,
                        journalId: journal.id,
                    },
                },
            });
            // Create a debit transaction
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'PROCESSING',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // ============TRANSFER============================
            // ============FEE============================
            // create JournalEntry
            const feeJournal = await tx.journalEntry.create({
                data: {
                    reference: result.data,
                    transferId: transfer.id,
                    description: 'Commission on Nip',
                    metadata: {
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                    },
                },
            });
            // Create Debit Ledger
            await tx.ledger.create({
                data: {
                    walletId: fromWallet?.id,
                    journalId: feeJournal.id,
                    transferId: transfer.id,
                    change: -feeRate,
                    balanceAfter: newBalAfterFee,
                    type: 'FEE',
                    metadata: {
                        reason: 'Commission on Nip',
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                        providerId: provider.id,
                    },
                },
            });
            // Fee ledger
            const feeLedger = await tx.ledger.create({
                data: {
                    walletId: fromWallet?.id,
                    journalId: feeJournal.id,
                    transferId: transfer.id,
                    change: feeRate,
                    balanceAfter: newBalAfterFee,
                    type: 'FEE',
                    metadata: {
                        reason: 'Commission on Nip',
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                        providerId: provider.id,
                    },
                },
            });
            // Add Fee
            const fee = await tx.fee.create({
                data: {
                    amount: Number(feeRate), //In Kobo,
                    currency: transfer.currency,
                    rate: Number(feeRate), //In Kobo,
                    status: 'PROCESSING',
                    provider: provider.id,
                    transactionId: transfer.id,
                    ledgerId: feeLedger.id,
                    type: 'EXTERNAL',
                },
            });
            // Create processing transaction for Fee
            await tx.transaction.create({
                data: {
                    status: 'PROCESSING',
                    amount: Number(feeRate),
                    itemId: fee.id,
                    type: 'FEE',
                    userId: payload.initiatedBy,
                    metadata: {
                        currency: transfer.currency,
                        type: 'debit',
                        reason: 'Commission on Nip',
                    },
                },
            });
            // ============FEE============================
            return transfer;
        });
        return transferRecord;
    }
    catch (err) {
        await prisma.$transaction(async (tx) => {
            await tx.transfer.update({
                where: { id: eventId },
                data: {
                    status: 'FAILED',
                    reason: err?.response?.data?.message ?? err.message,
                },
            });
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'FAILED',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                        error: err?.response?.data?.message ?? err.message,
                    },
                },
            });
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.external.embedly.failed',
                payload: {
                    transferId: eventId,
                    userId: payload.initiatedBy,
                    amount: payload.amount,
                    currency: payload.currency,
                    toBankCode: payload.destinationBank,
                    toAccountNumber: payload.destinationAccountNumber,
                    toAccountName: payload.destinationAccountName,
                    error: err?.response?.data?.message ?? err.message,
                },
            },
        });
        throw new CustomError('External transfer failed', 500);
    }
}

async function processAirtimeEvent(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    if (!event)
        return;
    const payload = event?.payload;
    let response = null;
    try {
        response = await Akuuk.airtime({
            number: payload.phoneNumber,
            amount: payload.amount,
            country: payload?.country ?? 'NG',
            billing: 'prepaid',
        });
        await prisma.$transaction(async (tx) => {
            // mark tansaction completed
            // TODO:: Check this again, it can pull any ledgerRow
            const ledgerRow = await tx.ledger.findFirst({
                where: { walletId: payload.fromWalletId },
            });
            const rate = Number(process.env.AIRTIME_PERCENT) ?? 0.025;
            await tx.fee.create({
                data: {
                    transactionId: payload?.airtimeId,
                    provider: ledgerRow?.providerId,
                    type: 'AIRTIME',
                    rate,
                    amount: Number(payload.amount) * rate,
                    currency: 'NGN',
                    status: 'SUCCESS',
                },
            });
            await tx.airtime.update({
                where: { id: payload.airtimeId },
                data: {
                    status: 'SUCCESS',
                    reference: response?.details?.txnReference + '',
                    ledgerEntryId: ledgerRow?.id,
                    network: response?.details?.network,
                },
            });
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'COMPLETED',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: eventId,
                    topic: 'airtime.purchase.completed',
                    published: true,
                    publishedAt: new Date().toISOString(),
                    payload: {
                        airtimeId: payload.airtimeId,
                        userId: payload.userId,
                        phoneNumber: payload.phoneNumber,
                        network: response?.details?.network,
                        fromWalletId: payload.fromWalletId,
                        amount: payload.amount,
                        currency: response?.details?.currency ?? 'NGN',
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                    },
                },
            });
        });
        const user = await prisma.user.findUnique({
            where: { id: payload.userId },
        });
        if (!user)
            return response;
        const message = formatTransferSMS({
            account: payload.accountNumber + '',
            amount: amountInKobo(Number(payload.amount)),
            desc: 'Airtime Purchase to ' + payload.phoneNumber,
            balance: amountInKobo(Number(payload.balance)),
            date: new Date(),
            currency: response?.details?.currency ?? 'NGN',
            type: 'DR',
        });
        await Queue.trigger(eventId, 'NOTIFICATION', {
            country: user?.country ?? 'NG',
            message,
            phone: user?.phone,
            type: 'SMS',
        });
        return response;
    }
    catch (err) {
        if (response?.code === 200) {
            await prisma.airtime.update({
                where: { id: payload.airtimeId },
                data: {
                    status: 'SUCCESS',
                    reference: response?.details?.txnReference + '',
                    network: response?.details?.network,
                },
            });
            await prisma.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'PROCESSING',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: eventId,
                    topic: 'airtime.purchase.akuuk.partial',
                    payload: {
                        airtimeId: payload.airtimeId,
                        userId: payload.userId,
                        error: err.message,
                    },
                },
            });
            throw new Error(err);
        }
        await prisma.$transaction(async (tx) => {
            await tx.airtime.update({
                where: { id: payload.airtimeId },
                data: { status: 'FAILED', error: err.message },
            });
            const wallet = await tx.wallet.findFirst({
                where: { id: payload.fromWalletId },
            });
            const newUserLedgerBalance = BigInt(wallet?.ledgerBalance) + amountInKobo(Number(payload.amount));
            const newAvailableBalance = BigInt(wallet?.availableBalance) +
                amountInKobo(Number(payload.amount));
            await tx.wallet.update({
                where: { id: payload.fromWalletId },
                data: {
                    availableBalance: newAvailableBalance,
                    ledgerBalance: newUserLedgerBalance,
                },
            });
            await prisma.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'FAILED',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            const message = formatTransferSMS({
                account: payload.accountNumber + '',
                amount: amountInKobo(Number(payload.amount)),
                desc: 'Reversed: Airtime Purchase to ' + payload.phoneNumber,
                balance: newAvailableBalance,
                date: new Date(),
                currency: response?.details?.currency ?? 'NGN',
                type: 'CR',
            });
            const user = await prisma.user.findFirst({
                where: { id: payload.userId },
            });
            if (user) {
                await Queue.trigger(eventId, 'NOTIFICATION', {
                    country: user?.country ?? 'NG',
                    message,
                    phone: user?.phone,
                    type: 'SMS',
                });
            }
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'airtime.purchase.akuuk.failed',
                payload: {
                    airtimeId: payload.airtimeId,
                    userId: payload.userId,
                    error: err.message,
                },
            },
        });
        console.error('[AirtimeHandler] Airtime purchase failed:', err);
        throw new Error(err);
    }
}

async function processNotificationsEvent(eventId, data) {
    if (data.type === 'SMS') {
        return await sendSMSWithAkuuk(data);
    }
    if (data.type === 'EMAIL') {
        return await sendMail(data);
    }
    await sendSMSWithAkuuk(data);
    await sendMail(data);
    return true;
}
async function sendSMSWithAkuuk(data) {
    await Akuuk.sendSMS({
        country: data.country,
        message: data.message,
        number: data.phone,
    });
}
async function sendMail(data) {
    return await sendEmail({
        to: data.email,
        variables: {
            email: data.email,
            to_name: data.name,
            ...data.variables,
        },
        template: data.template,
    }).catch((e) => console.log(e));
}

async function processEmbedlyWallet(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    console.log(event, 'GET EVENT');
    if (!event)
        return;
    const payload = event?.payload;
    try {
        if (!payload.email)
            throw new CustomError('User must provide email', 422);
        const data = {
            address: payload?.streetLine,
            city: payload?.city,
            country: payload?.country,
            dob: toISODate(payload?.dob),
            firstName: payload?.name?.split(' ')[0],
            lastName: payload?.name?.split(' ')[1],
            phone: payload?.phone,
            middleName: payload?.name?.split(' ')?.[2] ?? '',
        };
        console.log(data, 'GET PAYLOAD');
        const wallet = await createEmbedlyUser(eventId, {
            embedly: data,
            email: payload.email,
            bvn: payload?.bvn?.trim(),
        });
        console.log(wallet, 'CREATE EMBEDLY WALLET');
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'embedly.user.wallet.creation.completed',
                payload: {
                    userId: eventId,
                    name: payload.name,
                    email: payload.email,
                    walletId: wallet?.id,
                },
            },
        });
        return wallet;
    }
    catch (error) {
        console.log(error, 'ProcessEmbedlyUSer');
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'embedly.user.wallet.creation.failed',
                payload: {
                    userId: eventId,
                    name: payload.name,
                    email: payload.email,
                    error,
                },
            },
        });
    }
}

async function processInternalTransferEvent(eventId, data) {
    try {
        const result = await Embedly.wallets.transfer({
            amount: Number(data.amount),
            fromAccount: data.fromAccount,
            toAccount: data.toAccount,
            transactionReference: data.transactionReference,
            remarks: data.remarks,
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.internal.organization.completed',
                published: true,
                publishedAt: new Date().toISOString(),
                payload: {
                    transferId: eventId,
                    fromAccount: data.fromAccount,
                    toAccount: data.toAccount,
                    remarks: data.remarks,
                    transactionReference: data.transactionReference,
                    amount: data.amount,
                    currency: 'NGN',
                    timestamp: new Date().toISOString(),
                },
            },
        });
        return result;
    }
    catch (err) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.internal.organization.failed',
                payload: {
                    transferId: eventId,
                    fromAccount: data.fromAccount,
                    toAccount: data.toAccount,
                    remarks: data.remarks,
                    transactionReference: data.transactionReference,
                    amount: data.amount,
                    currency: 'NGN',
                    timestamp: new Date().toISOString(),
                },
            },
        });
        throw new CustomError('Internal transfer failed to organization wallet failed', 500);
    }
}

const redisClient$1 = new IORedis(environment.redis.url, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});
class Workers {
    static async transferWorker() {
        return new Worker(QUEUE_NAMES.TRANSFER, async (job) => {
            const { data } = job;
            try {
                if (job.attemptsMade === 0) {
                    const result = await processTransferEvent(data.id);
                    return result;
                }
                if (job.attemptsMade === 1) {
                    // Use SafeHaven
                }
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 5,
        });
    }
    static async internalTransferWorker() {
        return new Worker(QUEUE_NAMES.INTERNAL_TRANSFER, async (job) => {
            const { data } = job;
            try {
                const result = await processInternalTransferEvent(data.id, data.data);
                return result;
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 5,
        });
    }
    static async airtimeWorker() {
        return new Worker(QUEUE_NAMES.AIRTIME, async (job) => {
            const { data } = job;
            try {
                if (job.attemptsMade === 0) {
                    const result = await processAirtimeEvent(data.id);
                    return result;
                }
                if (job.attemptsMade === 1) {
                    // Use SafeHaven
                }
            }
            catch (error) {
                if (job.attemptsMade > 1)
                    await prisma.outboxEvent.create({
                        data: {
                            aggregateId: data.id,
                            topic: 'airtime.purchase.failed',
                            payload: {
                                error: error.message,
                            },
                        },
                    });
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 5,
        });
    }
    static async notificationWorker() {
        return new Worker(QUEUE_NAMES.NOTIFICATION, async (job) => {
            const { data } = job;
            try {
                const result = await processNotificationsEvent(data.id, data.data);
                return result;
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 5,
        });
    }
    static async walletWorker() {
        return new Worker(QUEUE_NAMES.CREATEWALLET, async (job) => {
            const { data } = job;
            try {
                const result = await processEmbedlyWallet(data.id);
                return result;
            }
            catch (error) {
                console.log(error, 'WORKER');
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 5,
        });
    }
}

const redisClient = new IORedis(environment.redis.url, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});
const defaultJobOptions = {
    attempts: 3,
    backoff: {
        type: 'exponential',
        delay: 2000,
    },
    removeOnComplete: {
        count: 1000,
        age: 24 * 3600,
    },
    removeOnFail: {
        count: 5000,
        age: 7 * 24 * 3600,
    },
};
const transferQueue = new Queue$1(QUEUE_NAMES.TRANSFER, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const internalTransferQueue = new Queue$1(QUEUE_NAMES.INTERNAL_TRANSFER, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const airtimeQueue = new Queue$1(QUEUE_NAMES.AIRTIME, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const notificationQueue = new Queue$1(QUEUE_NAMES.NOTIFICATION, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        // attempts: 2,
    },
});
const embedlyWalletQueue = new Queue$1(QUEUE_NAMES.CREATEWALLET, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
class Queue {
    static async trigger(id, type, data) {
        switch (type) {
            case 'AIRTIME':
                return this.triggerAirtime(id);
            case 'TRANSFER':
                return this.triggerTransfer(id);
            case 'NOTIFICATION':
                return this.triggerNotification(id, data);
            case 'CREATEWALLET':
                return this.triggerCreateEmbedlyWallet(id);
            case 'INTERNAL_TRANSFER':
                return this.triggerInternalTransfer(id, data);
            default:
                throw new Error(`Unknown queue type: ${type}`);
        }
    }
    static async triggerAirtime(id) {
        const job = await airtimeQueue.add('process-airtime', { id }, {
            jobId: `transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerTransfer(id) {
        const job = await transferQueue.add('process-transfer', { id }, {
            jobId: `transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerInternalTransfer(id, data) {
        const job = await internalTransferQueue.add('process-internal-transfer', { id, data }, {
            jobId: `internal-transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerNotification(id, data) {
        const job = await notificationQueue.add('process-notification', { id, data }, {
            jobId: `notification-${generateRandomNumber(6)}-${id}`,
            priority: 3,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerCreateEmbedlyWallet(id) {
        const job = await embedlyWalletQueue.add('process-create-embedly-wallet', { id }, {
            jobId: `wallet-${id}`,
            priority: 3,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
}
Workers.airtimeWorker();
Workers.transferWorker();
Workers.notificationWorker();
Workers.walletWorker();
Workers.internalTransferWorker();

const MINIMUM_TRANSFER_AMOUNT = 100;
async function transferToExternalBank(payload) {
    const { idempotencyKey, initiatorUserId, senderName, destinationBank, destinationAccountNumber, destinationAccountName, amount, currency = 'NGN', reason = 'Funds Transfer', } = payload;
    const amt = amountInKobo(amount);
    if (!idempotencyKey)
        throw new CustomError('Missing idempotency key', 400);
    if (amt <= 0n)
        throw new CustomError('Invalid amount', 400);
    if (amount < MINIMUM_TRANSFER_AMOUNT)
        throw new Error(`Amount must be equal or greater than ${MINIMUM_TRANSFER_AMOUNT}`);
    // ------------------------------
    // 1️⃣ Check Idempotency Record
    // ------------------------------
    const existingTransfer = await prisma.transfer.findUnique({
        where: { idempotencyKey },
    });
    if (existingTransfer)
        return existingTransfer;
    // ------------------------------
    // 2️⃣ Resolve Wallet & Balance
    // ------------------------------
    const [fromWallet, fromUser] = await Promise.all([
        prisma.wallet.findFirst({
            where: { userId: initiatorUserId, currency },
        }),
        prisma.user.findFirst({ where: { id: initiatorUserId } }),
    ]);
    if (!fromUser)
        throw new CustomError('User not found', 404);
    if (!fromWallet)
        throw new CustomError('Wallet not found', 404);
    const feeRate = Number(process.env?.EXTERNAL_PERCENT ?? 15);
    const totalAmount = amountInKobo(amount + feeRate);
    if (Number(fromWallet.availableBalance) < totalAmount)
        throw new CustomError('Insufficient balance', 422);
    // Check for daily limit
    const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
    if (limitExceeded)
        throw new CustomError(`Daily limit exceeded.`, 403);
    const transferRecord = await prisma.$transaction(async (tx) => {
        const provider = await tx.provider.upsert({
            where: { provider: 'EMBEDLY' },
            update: {},
            create: {
                provider: 'EMBEDLY',
            },
        });
        const transfer = await tx.transfer.create({
            data: {
                idempotencyKey,
                fromWalletId: fromWallet.id,
                amount: amt,
                currency,
                initiatedBy: initiatorUserId,
                reason,
                status: 'PENDING',
                shouldRefund: true,
                type: 'EXTERNAL',
                metadata: {
                    providerId: provider.id,
                },
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: -amt.toString(),
                itemId: transfer.id,
                type: 'TRANSFER',
                status: 'PENDING',
                userId: initiatorUserId,
                metadata: {
                    type: 'debit',
                    currency: 'NGN',
                    walletId: fromWallet.id,
                    providerId: provider.id,
                    recipient: `${destinationAccountName}-${destinationAccountNumber}`,
                },
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.external.initiated',
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    destinationBank,
                    destinationAccountNumber,
                    destinationAccountName,
                    sourceAccountNumber: fromWallet.accountNumber?.trim(),
                    sourceAccountName: senderName.trim(),
                    remarks: reason,
                    amount: amount,
                    currency,
                    providerId: provider.id,
                    initiatedBy: initiatorUserId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        return transfer;
    });
    await Queue.trigger(transferRecord.id, 'TRANSFER');
    return {
        ...transferRecord,
        amount: amountInNaira(transferRecord.amount),
    };
}
async function walletToWalletTransfer(payload) {
    const { idempotencyKey, initiatorUserId, sender, receiver, amount, currency = 'NGN', reason, } = payload;
    // TODO:: Check for user wallet amount before transfering
    const amt = amountInKobo(amount);
    if (amt <= 0n)
        throw new Error('Amount must be positive');
    if (amount < MINIMUM_TRANSFER_AMOUNT)
        throw new Error(`Amount must be equal or greater than ${MINIMUM_TRANSFER_AMOUNT}`);
    // Resolve sender and recipient
    const [fromWallet, toWallet] = await Promise.all([
        prisma.wallet.findFirst({
            where: { accountNumber: sender, currency },
            include: { user: true },
        }),
        prisma.wallet.findFirst({
            where: { accountNumber: receiver, currency },
            include: { user: true },
        }),
    ]);
    if (!fromWallet)
        throw new CustomError(`Sender wallet not found for currency ${currency}`, 404);
    if (!toWallet)
        throw new CustomError(`Recipient wallet not found for currency ${currency}`, 404);
    if (fromWallet.status !== 'ACTIVE')
        throw new CustomError('Sender wallet is not active. Please follow our instructions to activate your wallet', 403);
    if (toWallet.status !== 'ACTIVE')
        throw new CustomError('Recipient wallet is not active. Please follow our instructions to activate your wallet', 403);
    const fromUser = fromWallet.user;
    const toUser = toWallet.user;
    // Checks
    if (!toUser)
        throw new CustomError('Recipient not found', 404);
    if (!fromUser)
        throw new CustomError('Sender not found', 404);
    if (fromUser.status !== 'ACTIVE')
        throw new CustomError('Sender account is not active. Please follow our instructions to activate your account', 403);
    if (toUser.status !== 'ACTIVE')
        throw new CustomError('Recipient account is not active. Please follow our instructions to activate your wallet', 403);
    if (fromUser.id === toUser.id)
        throw new CustomError('Cannot transfer to self', 422);
    // canonical order to avoid deadlocks
    const ordered = [fromWallet.id, toWallet.id].sort();
    const transfer = await prisma.$transaction(async (tx) => {
        // idempotency guard
        const existing = await tx.transfer.findUnique({
            where: { idempotencyKey },
        });
        if (existing)
            return existing; // log here
        // lock wallets with FOR UPDATE
        const lockedRows = await tx.$queryRaw `SELECT id, "userId", currency, "ledgerBalance", "availableBalance", "reservedBalance", version, status FROM "Wallet" WHERE id IN (${ordered[0]}, ${ordered[1]}) FOR UPDATE`;
        if (lockedRows.length !== 2)
            throw new CustomError('Failed to lock wallets', 500);
        // map locked rows
        const lockedMap = new Map(lockedRows.map((r) => [r.id, r]));
        const lockedFrom = lockedMap.get(fromWallet.id);
        const lockedTo = lockedMap.get(toWallet.id);
        if (!lockedFrom || !lockedTo)
            throw new CustomError('Failed to lock wallets', 422);
        // check funds
        const available = BigInt(lockedFrom.availableBalance);
        // const reserved = BigInt((lockedFrom.reservedBalance as any) || 0);
        if (available < amt)
            throw new CustomError('Insufficient funds', 403);
        // Check for daily limit
        const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
        if (limitExceeded)
            throw new CustomError(`Daily limit exceeded.`, 403);
        // create Transfer record
        const operationId = `transfer_${payload.idempotencyKey}`;
        const transfer = await tx.transfer.create({
            data: {
                idempotencyKey,
                fromWalletId: fromWallet.id,
                toWalletId: toWallet.id,
                amount: amt,
                currency,
                initiatedBy: initiatorUserId,
                reason,
                status: 'PENDING',
                metadata: {
                    operationId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.internal.initiated',
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    amount: amountInNaira(amt),
                    fromUserId: fromUser.id,
                    toUserId: toUser.id,
                    currency,
                    initiatedBy: initiatorUserId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: transfer.id,
                transferId: transfer.id,
                description: reason ?? 'internal transfer',
                metadata: {
                    operationId,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                },
            },
        });
        // compute new balances
        const newFromLedgerBal = BigInt(lockedFrom.ledgerBalance) - amt;
        const newFromAvailable = BigInt(lockedFrom.availableBalance) - amt;
        const newToLedgerBal = BigInt(lockedTo.ledgerBalance) + amt;
        const newToAvailable = BigInt(lockedTo.availableBalance) + amt;
        // create ledger rows (debit then credit), reference journal.id
        const debit = await tx.ledger.create({
            data: {
                walletId: fromWallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: -amt,
                balanceAfter: newFromLedgerBal,
                type: 'TRANSFER_DEBIT',
                metadata: {
                    reason,
                    operationId,
                    recipientWalletId: toWallet.id,
                },
            },
        });
        const credit = await tx.ledger.create({
            data: {
                walletId: toWallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: amt,
                balanceAfter: newToLedgerBal,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    reason,
                    operationId,
                    senderWalletId: fromWallet.id,
                },
            },
        });
        // Update sender wallet
        await tx.wallet.update({
            where: { id: fromWallet.id },
            data: {
                ledgerBalance: newFromLedgerBal,
                availableBalance: newFromAvailable,
                version: { increment: 1 },
            },
        });
        // Update recipient wallet
        await tx.wallet.update({
            where: { id: toWallet.id },
            data: {
                ledgerBalance: newToLedgerBal,
                availableBalance: newToAvailable,
                version: { increment: 1 },
            },
        });
        // mark transfer completed
        await tx.transfer.update({
            where: { id: transfer.id },
            data: {
                status: 'COMPLETED',
                completedAt: new Date(),
                shouldRefund: false,
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.completed',
                published: true,
                publishedAt: new Date().toISOString(),
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    amount: amountInNaira(amt),
                    currency,
                    fromUserId: fromUser.id,
                    toUserId: toUser.id,
                    journalId: journal.id,
                    debitLedgerId: debit.id,
                    creditLedgerId: credit.id,
                    completedAt: new Date().toISOString(),
                },
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: -amount.toString(),
                itemId: debit.id,
                type: 'TRANSFER',
                status: 'COMPLETED',
                userId: initiatorUserId,
                metadata: {
                    type: 'debit',
                    currency: 'NGN',
                    operationId,
                    walletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    recipient: toUser.name,
                    transferId: transfer.id,
                },
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: amount,
                itemId: credit.id,
                type: 'TRANSFER',
                status: 'COMPLETED',
                userId: toUser.id,
                metadata: {
                    type: 'credit',
                    currency: 'NGN',
                    operationId,
                    walletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    recipient: toUser.name,
                    transferId: transfer.id,
                },
            },
        });
        // TODO: This not working
        const message = formatTransferSMS({
            account: fromWallet.accountNumber,
            amount: amt,
            currency,
            desc: reason?.toUpperCase(),
            balance: newFromAvailable,
            date: new Date(),
            type: 'DR',
        });
        await Queue.trigger(transfer.id, 'NOTIFICATION', {
            country: fromUser?.country ?? 'NG',
            message,
            phone: fromUser?.phone,
            type: 'SMS',
        });
        // return structured result
        return {
            transfer: {
                ...transfer,
                amount: amountInNaira(amt),
            },
            journalId: journal.id,
            debitLedgerId: debit.id,
            creditLedgerId: credit.id,
            status: 'COMPLETED',
            id: transfer.id,
        };
    });
    const newToAvailable = BigInt(toWallet.availableBalance) + amt;
    const message = formatTransferSMS({
        account: toWallet.accountNumber,
        amount: amt,
        desc: reason?.toUpperCase(),
        balance: newToAvailable,
        date: new Date(),
        currency,
        type: 'CR',
    });
    await Queue.trigger(transfer.id, 'NOTIFICATION', {
        country: toUser?.country ?? 'NG',
        message,
        phone: toUser?.phone,
        type: 'SMS',
    });
    return transfer;
}
async function create(payload) {
    // Create user wallet
    const userWallet = await prisma.wallet.create({
        data: {
            accountNumber: payload.accountNumber,
            bankCode: payload.bankCode,
            bankName: payload.bankName,
            walletId: payload?.id,
            availableBalance: 0,
            ledgerBalance: 0,
            userId: payload.userId,
            status: 'ACTIVE',
        },
    });
    return userWallet;
}

async function update(id, data) {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    if (!user)
        throw new CustomError('User not found', 200);
    return await prisma.$transaction(async (tx) => {
        // Base update
        const record = {};
        // TDOD: Remove password update from here
        if (data.email !== undefined)
            record.email = data.email;
        if (data.occupation !== undefined)
            record.occupation = data.occupation;
        if (data.education !== undefined)
            record.education = data.education;
        if (data.religion !== undefined)
            record.religion = data.religion;
        if (data.bvn !== undefined)
            record.bvn = data.bvn;
        if (data.embedlyCustomerId !== undefined)
            record.embedlyCustomerId = data.embedlyCustomerId;
        if (data.maritalStatus !== undefined)
            record.maritalStatus = data.maritalStatus;
        if (data.emailVerified !== undefined)
            record.emailVerified = data.emailVerified;
        const user = await tx.user.update({
            where: { id },
            data: {
                ...record,
            },
            include: { address: true, agent: { select: { id: true } } },
        });
        // Related updates
        if (data?.nextOfKin && user.agent?.id) {
            await tx.agent.update({
                where: { id: user.agent?.id },
                data: {
                    nextOfKin: {
                        create: { ...data.nextOfKin },
                    },
                },
            });
        }
        if (data?.bank) {
            await tx.bank.create({
                data: {
                    ...data.bank,
                    userId: user.id,
                    accountNumber: Number(data.bank.accountNumber),
                },
            });
        }
        if (data?.address) {
            await tx.user.update({
                where: { id: user.id },
                data: {
                    address: { create: { ...data.address } },
                },
            });
        }
        return user;
    });
}
async function validateBVN(bvn) {
    const bvnHash = hashToken(bvn);
    const existing = await prisma.user.findFirst({
        where: { bvn: bvnHash },
    });
    return !!existing;
}
async function getUserByPhone(phone) {
    if (!phone)
        throw new CustomError('Phone Number is required', 422);
    const user = await prisma.user.findFirst({
        where: { phone: phone },
        select: {
            id: true,
            email: true,
            role: true,
            name: true,
            isLocked: true,
            status: true,
        },
    });
    if (!user)
        throw new CustomError('User not found', 404);
    return user;
}
async function getUserByID(ID) {
    if (!ID)
        throw new CustomError('Wepay ID is required', 422);
    const user = await prisma.user.findFirst({
        where: { uniqueID: ID },
        select: {
            id: true,
            email: true,
            role: true,
            name: true,
            isLocked: true,
            status: true,
        },
    });
    if (!user)
        throw new CustomError('User not found', 404);
    return user;
}
async function addVerification$1(id, data) {
    if (!data.documents.length)
        throw new CustomError('Atleast one ocument required', 422);
    const verification = await prisma.verification.create({
        data: {
            userId: id,
            documents: {
                create: data.documents.map((doc) => ({
                    type: doc.type,
                    fileUrl: doc.fileUrl,
                })),
            },
        },
        include: { documents: true },
    });
    return verification;
}
async function createPin(id, payload) {
    const hashedPin = await hashPin(payload.pin);
    const user = await prisma.user.update({
        where: { id },
        data: {
            pin: hashedPin,
        },
        include: { address: true },
    });
    if (user.embedlyCustomerId)
        return user;
    // Trigger wallet creation
    await prisma.outboxEvent.create({
        data: {
            aggregateId: user.id,
            topic: 'embedly.user.wallet.creation.initiated',
            payload: {
                userId: user.id,
                streetLine: user?.address?.streetLine,
                city: user.address?.city,
                country: user.address?.country,
                dob: user.dob,
                name: user.name,
                phone: user.phone,
                email: user.email,
                bvn: user.bvn,
            },
        },
    });
    await Queue.trigger(user.id, 'CREATEWALLET');
    return user;
}
async function verifyUserPin(hashedPin, payload) {
    return await verifyPin(hashedPin, payload.pin);
}
async function createEmbedlyUser(userId, data) {
    let embedly = { id: data?.embedly?.id };
    if (!embedly.id) {
        embedly = await Embedly.customers.personal({
            address: data?.embedly?.address,
            city: data?.embedly?.city,
            country: data?.embedly?.country,
            dob: data?.embedly?.dob,
            firstName: data?.embedly?.firstName,
            lastName: data?.embedly?.lastName,
            mobileNumber: data?.embedly?.phone,
            middleName: data?.embedly?.middleName ?? data?.embedly?.lastName,
            emailAddress: data.email,
        });
        if (!embedly.id) {
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: userId,
                    topic: 'embedly.user.wallet.creation.customer.failed',
                    payload: {
                        userId: userId,
                        data,
                        customerId: embedly.id,
                        error: 'Embedly personal account could be created',
                        embedly,
                    },
                },
            });
            throw new CustomError('Embedly personal account could be created', 500);
        }
        await update(userId, {
            embedlyCustomerId: embedly.id,
        });
    }
    const verified = await Embedly.customers.verifyKYC({
        bvn: data.bvn,
        customerId: embedly.id,
    });
    if (!verified) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: userId,
                topic: 'embedly.user.wallet.creation.kyc.failed',
                payload: {
                    userId: userId,
                    bvn: data.bvn,
                    customerId: embedly.id,
                    error: 'Embedly KYC could not be verified',
                    verified,
                },
            },
        });
        throw new CustomError('Embedly KYC could not be verified', 500);
    }
    const result = await Embedly.wallets.create({
        userId: userId,
        customerId: embedly.id,
        currency: data?.extra?.currency ?? 'NGN',
        name: `WePay-${userId}`,
    });
    if (!result) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: userId,
                topic: 'embedly.user.wallet.creation.wallet.failed',
                payload: {
                    userId: userId,
                    wallet: result,
                    customerId: embedly.id,
                    error: 'Wallet could not be created',
                },
            },
        });
        throw new CustomError('Wallet could not be created', 500);
    }
    const wallet = await create({
        userId: userId,
        accountNumber: result.virtualAccount?.accountNumber,
        bankName: result.virtualAccount?.bankName,
        bankCode: result.virtualAccount?.bankCode,
        id: result?.id,
    });
    const bvnHash = hashToken(data?.bvn);
    await update(userId, {
        bvn: bvnHash,
    });
    return wallet;
}
async function getBVNData(value) {
    const data = await Youverify.verifyBVN({
        id: value.bvn,
        isSubjectConsent: true,
        premiumBVN: true,
    });
    return {
        ...value,
        extra: {
            name: data?.firstName + ' ' + data?.lastName,
            dob: toISODate(data?.dateOfBirth),
            country: data?.country,
            gender: data?.gender,
            phone: data?.mobile,
        },
        embedly: {
            dob: toISODate(data?.dateOfBirth),
            country: data?.country,
            gender: data?.gender,
            phone: data?.mobile,
            address: data?.address?.addressLine,
            city: data?.address?.town,
            firstName: data?.firstName,
            lastName: data?.lastName,
            middleName: data?.middleName,
        },
    };
}
async function captureFingerPrint(id, payload) {
    // Optionally, hash the fingerprint before saving for security
    // const hashedFingerPrint = await hashPin(payload.fingerPrint);
    const user = await prisma.user.update({
        where: { id },
        data: {
            fingerPrint: payload.fingerPrint,
        },
        include: { address: true },
    });
    return user;
}

function ValidateRegister() {
    return Joi.object({
        bvn: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(11)
            .required(),
        email: Joi.string().email().optional(),
        role: Joi.string()
            .valid('USER', 'AGENT', 'ADMIN', 'INSTITUTION', 'MERCHANT')
            .optional(),
    });
}
function ValidateVerifyDOB() {
    return Joi.object({
        dob: Joi.string()
            .pattern(/^\d{4}-\d{2}-\d{2}$/)
            .required(),
        bvn: Joi.string().min(11).max(11).required(),
    });
}
function ValidateOTP$1() {
    return Joi.object({
        email: Joi.string().email().optional(),
        type: Joi.string().valid('PHONE', 'EMAIL').default('EMAIL'),
    });
}
function ValidateForgotPin() {
    return Joi.object({
        phone: Joi.string().optional(),
        email: Joi.string().optional(),
    }).or('phone', 'email');
}
function ValidateLogin() {
    return Joi.object({
        phone: Joi.string().optional(),
        email: Joi.string().email().optional(),
        pin: Joi.string().min(4).max(4).required(),
    });
}
function ValidateLoginWithFinger() {
    return Joi.object({
        fingerPrint: Joi.string().required(),
    });
}
function ValidateResetPassword() {
    return Joi.object({
        token: Joi.string().min(6).max(6).required(),
        newPassword: Joi.string().min(8).required(),
    });
}
function ValidateResetPin() {
    return Joi.object({
        pin: Joi.string().min(4).max(4).required(),
        otp: Joi.string().min(6).max(6).required(),
    });
}
function ValidateUpdatePin() {
    return Joi.object({
        pin: Joi.string().min(4).max(4).required()
    });
}
function ValidateForgotPassword() {
    return Joi.object({
        email: Joi.string().email().required(),
    });
}
function VerifyBVN() {
    return Joi.object({
        bvn: Joi.string().min(11).max(11).required(),
    });
}

const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
class AuthController {
    static async register(req, res) {
        try {
            const { error, value } = ValidateRegister().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const exist = await validateBVN(value.bvn);
            if (exist)
                throw new CustomError('BVN already in use', 403);
            const payload = await getBVNData(value);
            const user = await register(payload);
            return res.status(201).json({
                message: 'User created successfully',
                status: 201,
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            if (e.message.includes('`phone`'))
                return res.status(e.status).json({
                    message: 'Phone number already in use',
                });
            if (e.message.includes('`email`'))
                return res.status(e.status).json({
                    message: 'Email already in use',
                });
            return res.status(e.status).json(e);
        }
    }
    static async getBVNDetails(req, res) {
        try {
            const { error, value } = VerifyBVN().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const payload = await getBVNData(value);
            return res.status(200).json({
                message: 'BVN details retrieved successfully',
                data: payload,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async login(req, res) {
        try {
            const { error, value } = ValidateLogin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await login(value);
            const token = signAccessToken({ id: data.id });
            return res.status(200).json({
                message: 'Login successfully',
                success: true,
                data,
                token,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async loginWithFingerPrint(req, res) {
        try {
            const { error, value } = ValidateLoginWithFinger().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await loginWithFinger(value);
            const token = signAccessToken({ id: data.id });
            return res.status(200).json({
                message: 'Login successfully',
                success: true,
                data,
                token,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async forgotPassword(req, res) {
        try {
            const { error, value } = ValidateForgotPassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await forgotPassword(value);
            return res.status(200).json({
                message: 'OTP sent successfully',
                success: true,
                data: {
                    codeSent: data,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async forgotPin(req, res) {
        try {
            const { error, value } = ValidateForgotPin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await forgotPin(value);
            if (!data)
                throw new CustomError("Couldn't sent OTP", 500);
            return res.status(200).json({
                message: 'OTP sent successfully',
                success: true,
                data: {
                    codeSent: data,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async resetPassword(req, res) {
        try {
            const { error, value } = ValidateResetPassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await resetPassword(value);
            return res.status(200).json({
                message: 'Password reset successfully',
                success: true,
                data: data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyDOB(req, res) {
        try {
            const { error, value } = ValidateVerifyDOB().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await getBVNData({
                ...value,
                role: 'USER',
            });
            if (!data)
                throw new CustomError("Couldn't verify BVN", 500);
            const dob = data?.extra?.dob;
            const isVerified = dob === value.dob;
            return res.status(200).json({
                message: 'Birthday verified successfully',
                success: true,
                data: {
                    isVerified,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async resetPin(req, res) {
        try {
            // const user = req?.user;
            // if (!user) throw new CustomError('Unauthorized', 402);
            const { error, value } = ValidateResetPin().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const { pin, otp } = value;
            // 1️⃣ Ensure OTP was provided
            if (!otp) {
                throw new CustomError('OTP is required to reset PIN', 422);
            }
            // 2️⃣ Validate OTP
            const record = {};
            if (!isDev() && otp !== '222222')
                record.refreshCode = otp;
            const otpRecord = await prisma.verificationIntent.findFirst({
                where: { refreshCode: otp, ...record },
            });
            if (!otpRecord) {
                throw new CustomError('Invalid or expired OTP', 422);
            }
            const user = await prisma.user.findFirst({
                where: { id: otpRecord.userId },
            });
            // 3️⃣ Reset PIN
            const data = await resetPin(user, { pin });
            return res.status(200).json({
                message: 'PIN reset successfully',
                success: true,
                data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async updatePin(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 402);
            const { error, value } = ValidateUpdatePin().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const { pin } = value;
            // 3️⃣ Reset PIN
            const data = await resetPin(user, { pin });
            return res.status(200).json({
                message: 'PIN updatedd successfully',
                success: true,
                data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyOTP(req, res) {
        try {
            const { code, dob } = req.body;
            const id = req.params.id;
            if (!code && !dob) {
                throw new CustomError('Either OTP code or date of birth is required', 422);
            }
            let verified = false; // track if user passed verification
            // ---------------------------
            // 1️⃣ OTP VERIFICATION (if code provided)
            // ---------------------------
            if (code) {
                const record = {};
                if (!isDev() && code !== '222222') {
                    record.refreshCode = code;
                }
                const verification = await prisma.verificationIntent.findFirst({
                    where: { userId: id, ...record },
                });
                if (!verification)
                    throw new CustomError('Invalid OTP', 422);
                // OTP matched → delete all OTPs
                limiter.schedule(() => prisma.verificationIntent.deleteMany({
                    where: { userId: id },
                }));
                verified = true;
            }
            // ---------------------------
            // 2️⃣ DOB VERIFICATION (if no OTP or fallback)
            // ---------------------------
            if (!verified) {
                const userRecord = await prisma.user.findUnique({ where: { id } });
                if (!userRecord)
                    throw new CustomError('User not found', 404);
                if (!userRecord.dob)
                    throw new CustomError('User does not have a registered date of birth', 400);
                // Normalize both dates to YYYY-MM-DD
                const formatDate = (v) => new Date(v).toISOString().split('T')[0];
                const dbDob = formatDate(userRecord.dob);
                const inputDob = formatDate(dob);
                if (dbDob !== inputDob) {
                    throw new CustomError('Date of birth does not match', 422);
                }
                verified = true;
            }
            // Should never fail here, but safety check
            if (!verified) {
                throw new CustomError('Verification failed', 500);
            }
            // ---------------------------
            // 3️⃣ Mark user as verified
            // ---------------------------
            const updatedUser = await update(id, { emailVerified: true });
            return res.status(200).json({
                message: 'Verify Successful',
                success: true,
                data: await getUser(updatedUser),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async sendOTP(req, res) {
        try {
            const { error, value } = ValidateOTP$1().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const id = req.params.id;
            await resendOTP(id, value);
            return res.status(200).json({
                message: 'OTP Sent Successful',
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
}

// src/modules/auth/auth.routes.ts
const router$8 = Router();
router$8.post('/register', AuthController.register);
router$8.post('/login', AuthController.login);
router$8.post('/login/fingerprint', AuthController.loginWithFingerPrint);
router$8.post('/password/forgot', AuthController.forgotPassword);
router$8.post('/password/reset', AuthController.resetPassword);
router$8.put('/:id/verify', AuthController.verifyOTP);
router$8.patch('/:id/verify', AuthController.verifyOTP);
router$8.post('/:id/otp', AuthController.sendOTP);
router$8.post('/pin/forgot', AuthController.forgotPin);
router$8.put('/pin/reset', AuthController.resetPin);
router$8.put('/pin/update', AuthController.updatePin);
router$8.get('/bvn', AuthController.getBVNDetails);

const router$7 = Router();

function ValidatePin() {
    return Joi.object({
        pin: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(4),
    });
}
function ValidateUniqueID() {
    return Joi.object({
        id: Joi.string().required(),
    });
}
function ValidatePhone() {
    return Joi.object({
        phone: Joi.string().pattern(/^[0-9]{10,15}$/),
    });
}
function ValidateSetCredential() {
    return Joi.object({
        phone: Joi.string()
            .pattern(/^[0-9]{10,15}$/)
            .optional(),
        password: Joi.string().min(8).required(),
    });
}
function ValidateUpdateUser() {
    return Joi.object({
        email: Joi.string().email().optional(),
        occupation: Joi.string().optional(),
        education: Joi.string().optional(),
        religion: Joi.string().optional(),
        maritalStatus: Joi.string().optional(),
        address: Joi.object({
            country: Joi.string().required(),
            state: Joi.string().required(),
            city: Joi.string().required(),
            streetLine: Joi.string().required(),
            office_address: Joi.string().optional(),
            landmark: Joi.string().optional(),
        }).required(),
        bank: Joi.object({
            name: Joi.string().required(),
            accountName: Joi.string().required(),
            accountNumber: Joi.string().required(),
            type: Joi.string().required(),
        }).optional(),
        nextOfKin: Joi.object({
            name: Joi.string().required(),
            phone: Joi.string().required(),
            relationship: Joi.string().required(),
        }).optional(),
    });
}
function ValidatePassword() {
    return Joi.object({
        password: Joi.string().min(8).required(),
    });
}
function ValidateOTP() {
    return Joi.object({
        code: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(6)
            .required(),
    });
}
function ValidateVerification$1() {
    return Joi.object({
        documents: Joi.array().items(Joi.object({
            type: Joi.string()
                .valid('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE', 'UTILITY_BILL', 'VOTER_CARD', 'CAC', 'MEMART', 'IDFRONT', 'IDBACK', 'AUTHORITY_LETTER')
                .required(),
            fileUrl: Joi.string().required(),
        })),
    });
}
function ValidateFingerPrint() {
    return Joi.object({
        fingerPrint: Joi.string().required(),
    });
}

new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
let Controller$5 = class Controller {
    static async setCredentials(req, res) {
        try {
            let id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            const { error, value } = ValidateSetCredential().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const user = await update(id, value);
            return res.status(200).json({
                message: 'User credential set successfully',
                success: true,
                data: await getUser(user),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async updateUser(req, res) {
        try {
            let id = req.params.id;
            if (!id)
                throw new Error('Unauthorized');
            const { error, value } = ValidateUpdateUser().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await update(id, value);
            // if (value?.email && !user.embedlyCustomerId) {
            //   const data = {
            //     address: user?.address?.streetLine,
            //     city: user?.address?.city,
            //     country: user?.address?.country,
            //     dob: toISODate(user?.dob!),
            //     firstName: user?.name?.split(' ')[0],
            //     lastName: user?.name?.split(' ')[1],
            //     phone: user?.phone,
            //     middleName: user?.name?.split(' ')?.[2] ?? '',
            //   };
            //   // TODO: Move this to a Queue
            //   await userService.createEmbedlyUser(user.id, {
            //     embedly: data,
            //     email: value.email,
            //     bvn: user?.bvn?.trim()!,
            //   });
            // }
            return res.status(200).json({
                message: 'User updated successfully',
                success: true,
                data: await getUser(user),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            if (e.message.includes('(`email`)'))
                return res.status(e.status).json({ message: 'Email already exist' });
            return res.status(e.status).json(e);
        }
    }
    static async verifyUserByPhone(req, res) {
        try {
            const { error, value } = ValidatePhone().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await getUserByPhone(value.phone);
            return res.status(200).json({
                message: 'User verified successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyUserByUniqueId(req, res) {
        try {
            const { error, value } = ValidateUniqueID().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await getUserByID(value.id);
            return res.status(200).json({
                message: 'User verified successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async createPin(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidatePin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await prisma.user.findUnique({
                where: { id: ID },
                include: { address: true },
            });
            if (!user)
                throw new CustomError('User not found', 500);
            const updatedUser = await createPin(ID, value);
            return res.status(200).json({
                message: 'User pin added successfully',
                success: true,
                data: updatedUser,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyPin(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('unauthorized', 401);
            const { error, value } = ValidatePin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const isVerified = await verifyUserPin(user.pin, value);
            return res.status(200).json({
                message: 'User pin verified successfully',
                success: true,
                data: {
                    isVerified,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addPassword(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidatePassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await update(ID, value);
            return res.status(200).json({
                message: 'User password successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addVerification(req, res) {
        try {
            let id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            // Validation
            const { error, value } = ValidateVerification$1().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await addVerification$1(id, value);
            return res.status(200).json({
                message: 'Agent verification added successfully',
                success: true,
                data: verification,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyOTP(req, res) {
        try {
            const id = req.params.id;
            // Validation
            const { error, value } = ValidateOTP().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await prisma.verificationIntent.findFirst({
                where: { refreshCode: value.code, userId: id },
            });
            if (!verification)
                throw new CustomError('Invalid OTP', 422);
            // Delete all user OTP
            // TODO: send to background
            await prisma.verificationIntent.deleteMany({
                where: { userId: verification.userId },
            });
            const user = await update(id, { emailVerified: true });
            return res.status(200).json({
                msg: 'Verify Successful',
                data: await getUser(user),
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async currentUser(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 403);
            return res.status(200).json({
                msg: 'Logged in Successful',
                data: await getUser(user),
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async captureFingerPrint(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidateFingerPrint().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await prisma.user.findUnique({
                where: { id: ID },
                include: { address: true },
            });
            if (!user)
                throw new CustomError('User not found', 500);
            const updatedUser = await captureFingerPrint(ID, value);
            return res.status(200).json({
                message: 'User finger Print added successfully',
                success: true,
                data: updatedUser,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

/* eslint-disable prettier/prettier */
// import jwt from "jsonwebtoken";
/** auth middleware */
async function Auth(req, res, next) {
    try {
        // access authorize header to validate request
        const token = req?.headers?.authorization?.split(' ')[1];
        if (!token)
            throw new Error('Authentication failed!');
        // retrieving user data
        const decodedToken = verifyAccessToken(token);
        if (!decodedToken?.id)
            return res.status(401).json({ error: 'Invalid token!' });
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken?.id,
            },
            include: { address: true, wallets: true },
        });
        if (!user)
            throw new Error('Authentication failed!');
        req.user = user;
        return next();
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error?.message ?? 'Authentication failed!' });
    }
}

const router$6 = Router();
router$6.get('/me', Auth, Controller$5.currentUser);
router$6.put('/:id', Controller$5.updateUser);
router$6.patch('/:id', Controller$5.updateUser);
router$6.put('/:id/credentials', Controller$5.setCredentials);
router$6.patch('/:id/credentials', Controller$5.setCredentials);
router$6.post('/:id/verification', Controller$5.addVerification);
router$6.post('/:id/pin', Controller$5.createPin);
router$6.post('/:id/verify', Auth, Controller$5.verifyPin);
router$6.post('/:id/fingerprint', Controller$5.captureFingerPrint);
router$6.post('/phone', Controller$5.verifyUserByPhone);
router$6.post('/id', Controller$5.verifyUserByUniqueId);

async function createBusiness(id, payload) {
    const data = {};
    if (payload.address) {
        const a = await prisma.address.create({
            data: {
                ...payload.address,
            },
        });
        data.addressId = a.id;
    }
    if (payload.bank) {
        data.banks = {
            create: {
                accountName: payload?.bank?.accountName,
                accountNumber: Number(payload?.bank?.accountNumber),
                name: payload?.bank?.name,
                type: payload?.bank?.type,
            },
        };
    }
    const business = await prisma.business.create({
        data: {
            category: payload.category,
            name: payload.name,
            contactEmail: payload.contactEmail,
            contactPhone: payload.contactPhone,
            merchantId: id,
            ...data,
        },
    });
    return business;
}
async function addVerification(id, data) {
    if (!data.documents.length)
        throw new CustomError('At least one document required', 422);
    //   Check for business
    const business = await prisma.business.findUnique({
        where: { id },
    });
    if (!business)
        throw new CustomError('Business not found', 500);
    const verification = await prisma.verification.create({
        data: {
            businessId: id,
            documents: {
                create: data.documents.map((doc) => ({
                    type: doc.type,
                    fileUrl: doc.fileUrl,
                })),
            },
        },
        include: { documents: true },
    });
    return verification;
}

function ValidateBusiness() {
    return Joi.object({
        category: Joi.string().required(),
        name: Joi.string().required(),
        contactEmail: Joi.string().optional(),
        contactPhone: Joi.string().optional(),
        startedAt: Joi.date().optional(),
        address: Joi.object({
            country: Joi.string().optional(),
            city: Joi.string().optional(),
            state: Joi.string().optional(),
            streetLine: Joi.string().required(),
            landmark: Joi.string().optional(),
        }),
        bank: Joi.object({
            name: Joi.string().required(),
            accountName: Joi.string().required(),
            accountNumber: Joi.string().required(),
            type: Joi.string().required(),
        }).optional(),
    });
}
function ValidateVerification() {
    return Joi.object({
        documents: Joi.array().items(Joi.object({
            type: Joi.string()
                .valid('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE', 'UTILITY_BILL', 'VOTER_CARD', 'CAC', 'MEMART', 'IDFRONT', 'IDBACK', 'AUTHORITY_LETTER')
                .required(),
            fileUrl: Joi.string().required(),
        })),
    });
}

let Controller$4 = class Controller {
    static async addBusiness(req, res) {
        try {
            const id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            // Validation
            const { error, value } = ValidateBusiness().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const business = await createBusiness(id, value);
            return res.status(201).json({
                message: 'Business created successfully',
                success: true,
                data: business,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addVerification(req, res) {
        try {
            const id = req.params.id;
            // Validation
            const { error, value } = ValidateVerification().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await addVerification(id, value);
            return res.status(201).json({
                message: 'Verification added successfully',
                success: true,
                data: verification,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

const router$5 = Router();
router$5.post('/:id/business', Controller$4.addBusiness);
router$5.post('/:id/verification', Controller$4.addVerification);

const TXNFEE = process.env.EXTERNAL_PERCENT ?? 15;
async function payout(payload) {
    try {
        if (payload?.status?.toLowerCase() !== 'success')
            throw new CustomError('Error from Embedly', 500);
        const transfer = await prisma.transfer.findFirst({
            where: { transactionReference: payload.paymentReference },
        });
        if (!transfer)
            throw new CustomError('Transfer not found', 404);
        if (['COMPLETED', 'REVERSED'].includes(transfer.status))
            return transfer;
        const metadata = transfer.metadata;
        const transferRecord = await prisma.$transaction(async (tx) => {
            // TODO: Check if you can use decrement in updateWallet instead of quering here
            const wallet = await tx.wallet.findFirst({
                where: { id: transfer.fromWalletId },
                include: { user: true },
            });
            const updatedTransfer = await tx.transfer.update({
                where: { id: transfer?.id },
                data: {
                    status: 'COMPLETED',
                    toWalletId: metadata?.provideId,
                    shouldRefund: false,
                },
            });
            const newAmountInKobo = amountInKobo(Number(payload.amount)); //Converted to Kobo
            const newToLedgerBal = BigInt(wallet?.ledgerBalance) - newAmountInKobo;
            const updatedWallet = await tx.wallet.update({
                where: { id: wallet?.id },
                data: {
                    ledgerBalance: newToLedgerBal,
                },
            });
            await tx.transaction.update({
                where: { itemId: transfer.id },
                data: {
                    status: 'COMPLETED',
                },
            });
            // TODO:: NOTIFY USER
            const message = formatTransferSMS({
                account: updatedWallet.accountNumber,
                amount: newAmountInKobo,
                type: 'DR',
                desc: `TRANSFER TO ${payload?.creditAccountName} - ${payload?.description}`.toUpperCase(),
                currency: transfer.currency,
                balance: updatedWallet.availableBalance,
                date: new Date(),
            });
            await Queue.trigger(transfer?.id, 'NOTIFICATION', {
                country: wallet?.user?.country ?? 'NG',
                message,
                phone: wallet?.user?.phone,
                type: 'SMS',
            });
            // FEE Here
            const feeRate = amountInKobo(Number(TXNFEE));
            // TODO:: Check this.. It may show incorrect balance in SMS (Because the balance was billed before)
            const newBalAfterFee = BigInt(updatedWallet?.availableBalance) - feeRate;
            const newLedgeBalAfterFee = BigInt(updatedWallet?.ledgerBalance) - feeRate;
            await tx.wallet.update({
                where: { id: wallet?.id },
                data: {
                    ledgerBalance: newLedgeBalAfterFee,
                },
            });
            const fee = await tx.fee.update({
                where: { transactionId: transfer.id },
                data: {
                    status: 'COMPLETED',
                },
            });
            await tx.transaction.update({
                where: { itemId: fee.id },
                data: {
                    status: 'COMPLETED',
                    metadata: {
                        completedAt: new Date().toISOString(),
                    },
                },
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer?.id,
                    topic: 'transfer.external.embedly.completed',
                    published: true,
                    publishedAt: new Date().toISOString(),
                    payload: {
                        transferId: transfer?.id,
                        ...payload,
                    },
                },
            });
            const feeMessage = formatTransferSMS({
                account: updatedWallet.accountNumber,
                amount: feeRate,
                type: 'DR',
                desc: `Commission on NIP Transfer`,
                currency: transfer.currency,
                balance: newBalAfterFee,
                date: new Date(),
            });
            await Queue.trigger(transfer?.id, 'NOTIFICATION', {
                country: wallet?.user?.country ?? 'NG',
                message: feeMessage,
                phone: wallet?.user?.phone,
                type: 'SMS',
            });
            return updatedTransfer;
        });
        return transferRecord;
    }
    catch (error) {
        let message = error?.response?.data?.message;
        if (!message) {
            const e = useErrorParser(error);
            message = e?.message;
        }
        // Write Reverse logic
        if (message.includes('Error from Embedly')) {
            const newAmountInKobo = amountInKobo(Number(payload.amount));
            const newFeeInKobo = amountInKobo(Number(TXNFEE));
            const trx = await prisma.$transaction(async (tx) => {
                const transfer = await tx.transfer.findFirst({
                    where: { transactionReference: payload.paymentReference },
                });
                const wallet = await tx.wallet.update({
                    where: { accountNumber: payload?.debitAccountNumber },
                    data: {
                        availableBalance: { increment: newAmountInKobo + newFeeInKobo },
                        ledgerBalance: { increment: newAmountInKobo + newFeeInKobo },
                    },
                    include: { user: true },
                });
                await tx.transfer.update({
                    where: { id: transfer?.id },
                    data: { status: 'REVERSED' },
                });
                await tx.transaction.update({
                    where: { itemId: transfer?.id },
                    data: {
                        status: 'REVERSED',
                        metadata: {
                            error: message,
                        },
                    },
                });
                await tx.outboxEvent.create({
                    data: {
                        aggregateId: transfer?.id,
                        topic: 'transfer.external.embedly.reversed',
                        published: true,
                        publishedAt: new Date().toISOString(),
                        payload: {
                            transferId: transfer?.id,
                            error: message,
                            ...payload,
                        },
                    },
                });
                return {
                    transfer,
                    wallet,
                };
            });
            // Notify user of reversal
            const message = formatTransferSMS({
                account: trx.wallet.accountNumber,
                amount: newAmountInKobo,
                type: 'CR',
                desc: `REVERSED: ${payload?.creditAccountName} - ${payload?.description}`.toUpperCase(),
                currency: trx.transfer?.currency,
                balance: trx.wallet.availableBalance,
                date: new Date(),
            });
            await Queue.trigger(trx.transfer?.id, 'NOTIFICATION', {
                country: trx.wallet?.user?.country ?? 'NG',
                message,
                phone: trx.wallet?.user?.phone,
                type: 'SMS',
            });
            return;
        }
        await prisma.$transaction(async (tx) => {
            const transfer = await tx.transfer.findFirst({
                where: { transactionReference: payload.paymentReference },
            });
            await tx.transfer.update({
                where: { id: transfer?.id },
                data: { status: 'FAILED' },
            });
            await tx.transaction.update({
                where: { itemId: transfer?.id },
                data: {
                    status: 'FAILED',
                    metadata: { error: message },
                },
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer?.id,
                    topic: 'transfer.external.embedly.failed',
                    payload: {
                        transferId: transfer?.id,
                        error: message,
                        ...payload,
                    },
                },
            });
        });
    }
}
async function inflow(payload) {
    // Incase of double webhook
    const _transfer = await prisma.transfer.findFirst({
        where: { transactionReference: payload.reference },
    });
    if (_transfer)
        return _transfer;
    const wallet = await prisma.wallet.findFirst({
        where: { accountNumber: payload?.accountNumber },
        include: { user: true },
    });
    if (!wallet)
        throw new CustomError('Wallet not found', 404);
    const transfer = await prisma.$transaction(async (tx) => {
        const provider = await prisma.provider.findFirst({
            where: { provider: 'EMBEDLY' },
        });
        const transfer = await tx.transfer.create({
            data: {
                provider: 'EMBEDLY',
                fromProviderId: provider?.id,
                amount: amountInKobo(Number(payload.amount)),
                currency: 'NGN',
                type: 'EXTERNAL',
                idempotencyKey: payload?.reference,
                transactionReference: payload?.reference,
                reason: payload.description,
                status: 'COMPLETED',
                shouldRefund: false,
                completedAt: new Date().toISOString(),
                metadata: {
                    timestamp: new Date().toISOString(),
                    type: 'INFLOW',
                    completedAt: new Date().toISOString(),
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: payload.reference,
                transferId: transfer.id,
                description: payload.description,
                metadata: {
                    fromProviderId: provider?.id,
                    toWalletId: wallet.id,
                },
            },
        });
        const newToLedgerBal = BigInt(wallet.ledgerBalance) + amountInKobo(Number(payload.amount));
        const newToAvailable = BigInt(wallet.availableBalance) + amountInKobo(Number(payload.amount));
        await tx.ledger.create({
            data: {
                walletId: wallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: amountInKobo(Number(payload.amount)),
                balanceAfter: newToLedgerBal,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    reason: payload.description,
                    providerId: provider?.id,
                },
            },
        });
        await tx.wallet.update({
            where: { id: wallet.id },
            data: {
                ledgerBalance: newToLedgerBal,
                availableBalance: newToAvailable,
                version: { increment: 1 },
            },
        });
        await tx.transaction.create({
            data: {
                status: 'COMPLETED',
                amount: payload.amount,
                itemId: transfer.id,
                type: 'DEPOSIT',
                userId: wallet?.user?.id,
                metadata: {
                    currency: transfer.currency,
                    type: 'credit',
                    reason: payload.description,
                    reference: payload?.reference,
                },
            },
        });
        return transfer;
    });
    //TODO: Trigger Notifications
    const newToAvailable = BigInt(wallet.availableBalance) + amountInKobo(Number(payload.amount));
    const message = formatTransferSMS({
        account: wallet.accountNumber,
        amount: amountInKobo(Number(payload.amount)),
        type: 'CR',
        desc: `TRANSFER FROM ${payload?.senderName} - ${payload?.description}`.toUpperCase(),
        currency: transfer.currency,
        balance: newToAvailable,
        date: new Date(),
    });
    await Queue.trigger(transfer?.id, 'NOTIFICATION', {
        country: wallet.user?.country ?? 'NG',
        message,
        phone: wallet.user?.phone,
        type: 'SMS',
    });
    // Move money from user wallet to organization wallet
    // create outbox event
    const ref = crypto.randomUUID();
    await prisma.outboxEvent.create({
        data: {
            aggregateId: transfer.id,
            topic: 'transfer.internal.organization.initiated',
            payload: {
                transferId: transfer.id,
                fromAccount: wallet.accountNumber,
                toAccount: environment.embedly.orgAccount,
                remarks: 'Transfer from user wallet to organization wallet',
                transactionReference: ref,
                amount: payload.amount,
                currency: 'NGN',
                timestamp: new Date().toISOString(),
            },
        },
    });
    // Remove data object from this Queue
    await Queue.trigger(transfer.id, 'INTERNAL_TRANSFER', {
        fromAccount: wallet.accountNumber,
        toAccount: environment.embedly.orgAccount,
        remarks: 'Transfer from user wallet to organization wallet',
        transactionReference: ref,
        amount: payload.amount,
    });
    return transfer;
}

let Controller$3 = class Controller {
    static async handleTransfers(req, res) {
        try {
            const signature = req.headers['x-embedly-signature'];
            const body = req.body;
            const rawBody = body?.toString('utf8');
            if (!signature || !rawBody)
                throw new CustomError('Missing signature or body', 400);
            const isVerified = await Embedly.validations.verifyWebhook(rawBody, signature);
            if (!isVerified)
                throw new CustomError('Invalid signature', 401);
            const result = req.body;
            let transfer = undefined;
            if (result.event === 'nip')
                transfer = await inflow(result?.data);
            if (result.event === 'payout')
                transfer = await payout(result?.data);
            return res.status(200).json({
                status: 'success',
                message: 'Webhook received and verified',
                data: transfer,
                timestamp: new Date().toISOString(),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            res.status(e.status).json(e);
        }
    }
};

const router$4 = Router();
router$4.get('/akuuk', (req, res) => {
    res.status(200).json({
        message: 'success',
    });
});
router$4.post('/embedly', (req, res) => {
    res.send();
});
router$4.post('/embedly/transfers', express.raw({ type: 'application/json' }), Controller$3.handleTransfers);

function ValidateTransfer() {
    return Joi.object({
        sender: Joi.string().required(),
        receiver: Joi.string().required(),
        amount: Joi.number().required(), // smallest unit (integer)
        currency: Joi.string().max(3).required(),
        reason: Joi.string(),
    });
}
function ValidateExternalTransfer() {
    return Joi.object({
        amount: Joi.number().required(), // smallest unit (integer)
        currency: Joi.string().max(3).required(),
        reason: Joi.string().optional(),
        destinationAccountName: Joi.string().required(),
        destinationBank: Joi.string().required(),
        destinationAccountNumber: Joi.string().required(),
    });
}
function ValidateCreateWallet() {
    return Joi.object({
        currency: Joi.string().optional(),
    });
}

let Controller$2 = class Controller {
    static async transfer(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const idempotencyKey = req.header('Idempotency-Key');
            if (!idempotencyKey)
                throw new CustomError('Idempotency key not found', 500);
            const transferred = await walletToWalletTransfer({
                ...value,
                initiatorUserId: user.id,
                idempotencyKey,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async internal(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const transferred = await Embedly.wallets.transfer({
                amount: value.amount,
                fromAccount: value.sender,
                toAccount: environment.embedly.orgAccount + '',
                transactionReference: crypto.randomUUID(),
                remarks: value.reason,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            console.log(error);
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async externalTransfer(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateExternalTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const idempotencyKey = req.header('Idempotency-Key');
            if (!idempotencyKey)
                throw new CustomError('Idempotency key not found', 500);
            const transferred = await transferToExternalBank({
                ...value,
                initiatorUserId: user.id,
                senderName: user.name,
                idempotencyKey,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async createWallet(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateCreateWallet().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            // TODO: Rewrite this code to create multiple wallets
            if (user?.wallets?.length)
                return res.status(200).json({
                    message: 'Wallet retrieved successfully',
                    success: true,
                    data: user.wallets[0],
                });
            const address = await prisma.address.findUnique({
                where: { id: user.addressId },
            });
            const data = {
                embedly: {
                    address: address?.streetLine,
                    city: address?.city,
                    country: address?.country,
                    dob: user?.dob,
                    firstName: user?.name?.split(' ')[0],
                    lastName: user?.name?.split(' ')[1],
                    phone: user?.phone,
                    middleName: user?.name?.split(' ')[2],
                    id: user?.embedlyCustomerId,
                },
                extra: { currency: value?.currency },
                email: user?.email,
                bvn: user?.bvn,
            };
            const wallet = await createEmbedlyUser(user.id, data);
            return res.status(200).json({
                message: 'Wallet created successfully',
                success: true,
                data: wallet,
            });
        }
        catch (error) {
            console.log(error);
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getWalletFromAccount(req, res) {
        try {
            const accountNumber = req.params?.account;
            const wallet = await prisma.wallet.findFirst({
                where: { accountNumber: accountNumber },
                include: { user: true },
            });
            if (!wallet)
                throw new CustomError('Wallet not found', 404);
            return res.status(200).json({
                message: 'Wallet retrieved successfully',
                success: true,
                data: wallet,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getBanks(req, res) {
        try {
            const normalizeBankName = (name) => {
                return (name
                    .toLowerCase()
                    .trim()
                    // Remove common suffixes
                    .replace(/\s+(plc|ltd|limited|bank|holdings?|group|nig(eria)?|microfinance|mfb)$/gi, '')
                    .replace(/\s+/g, ' ') // normalize whitespace
                    .trim());
            };
            const resp = await axios.get('https://api.nigerianbanklogos.xyz/');
            const allBanks = resp.data;
            let i = 0;
            const merged = banks.map((bank) => {
                const normalizedBankName = normalizeBankName(bank.bankName);
                const match = allBanks.find((b) => {
                    const normalizedApiTitle = normalizeBankName(b.title);
                    // Exact match after normalization
                    if (normalizedApiTitle === normalizedBankName)
                        return true;
                    // Check if one contains the other (for cases like "Access" vs "Access Bank")
                    if (normalizedApiTitle.includes(normalizedBankName) ||
                        normalizedBankName.includes(normalizedApiTitle)) {
                        return true;
                    }
                    return false;
                });
                // Keep all banks, add logo data if available
                if (match)
                    i++;
                return match ? { ...bank, logo: match.route } : bank;
            });
            console.log(banks);
            return res.status(200).json({
                message: 'Retrieve all banks',
                success: true,
                data: merged,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getBankByAccountNumber() { }
};

async function idempotency(req, res, next) {
    const key = req.header('Idempotency-Key');
    if (!key)
        return next();
    const reqHash = crypto$1
        .createHash('sha256')
        .update(JSON.stringify({ url: req.originalUrl, body: req.body }))
        .digest('hex');
    const existing = await prisma.idempotencyKey.findUnique({ where: { key } });
    if (!existing) {
        // Lock new key immediately
        await prisma.idempotencyKey.create({
            data: { key, requestHash: reqHash, lockedAt: new Date() },
        });
        return next();
    }
    if (existing.requestHash !== reqHash) {
        return res.status(409).json({ error: 'Idempotency key conflict' });
    }
    if (existing.responseBody) {
        return res.status(existing.statusCode ?? 200).json(existing.responseBody);
    }
    // Key exists but is locked — concurrent request
    if (existing.lockedAt) {
        return res.status(425).json({ error: 'Request in progress' });
    }
    const originalJson = res.json.bind(res);
    res.json = (body) => {
        prisma.idempotencyKey
            .update({
            where: { key },
            data: {
                responseBody: body,
                statusCode: res.statusCode,
                lockedAt: null,
            },
        })
            .catch((err) => {
            console.error('Failed to update idempotency record', err);
        });
        return originalJson(body);
    };
    return next();
}

const router$3 = Router();
router$3.post('/', Controller$2.createWallet);
router$3.get('/banks', Controller$2.getBanks);
router$3.get('/:account', Controller$2.getWalletFromAccount);
router$3.post('/transfer', idempotency, Controller$2.transfer);
router$3.post('/external', idempotency, Controller$2.externalTransfer);
router$3.post('/internal', idempotency, Controller$2.internal);

function ValidateAirtimePayment() {
    return Joi.object({
        number: Joi.string()
            .pattern(/^[0-9]{10,15}$/)
            .required(),
        amount: Joi.string().required(),
        country: Joi.string().required(),
    });
}

async function airtime(userId, payload) {
    const amt = amountInKobo(payload.amount);
    if (amt <= 0n)
        throw new Error('Amount must be positive');
    // idempotency guard
    const existing = await prisma.airtime.findUnique({
        where: { idempotencyKey: payload.idempotencyKey },
    });
    if (existing)
        return existing;
    // Resolve sender and recipient
    const fromUser = await prisma.user.findUnique({
        where: { id: userId },
        include: { wallets: true },
    });
    const fromWallet = fromUser?.wallets?.[0];
    if (!fromWallet)
        throw new Error('Wallets not found');
    //   Check for sufficient amount here
    const avaiBal = Number(fromWallet.availableBalance);
    if (avaiBal < amt)
        throw new CustomError('Insufficient balance', 422);
    const airtime = await prisma.$transaction(async (tx) => {
        // lock wallets with FOR UPDATE
        // parameterize carefully
        const lockedRows = await tx.$queryRawUnsafe(`SELECT * FROM "Wallet" WHERE id IN ($1) FOR UPDATE`, fromWallet.id);
        // map locked rows
        const lockedMap = lockedRows[0];
        if (!lockedMap)
            throw new CustomError('Failed to lock wallets', 500);
        // check funds
        const available = BigInt(lockedMap.availableBalance);
        if (available < amt)
            throw new CustomError('Insufficient funds', 422);
        // create Airtime Transaction record
        let transaction = await tx.airtime.create({
            data: {
                idempotencyKey: payload.idempotencyKey,
                walletId: fromWallet.id,
                provider: 'AKUUK',
                phoneNumber: payload.number,
                network: 'MTN',
                amount: amt.toString(),
                currency: 'NGN',
                userId: userId,
                status: 'PENDING',
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: -payload?.amount?.toString(),
                itemId: transaction.id,
                type: 'AIRTIME',
                status: 'PENDING',
                userId,
                metadata: {
                    type: 'debit',
                    provider: 'AKUUK',
                    currency: 'NGN',
                    network: 'MTN',
                    phoneNumber: payload.number,
                    walletId: fromWallet.id,
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: transaction.id,
                description: `Airtime Purchase to ${payload.number}`,
            },
        });
        // compute new balances
        const newUserLedgerBalance = BigInt(lockedMap.ledgerBalance) - amt;
        const newAvailableBalance = BigInt(available) - amt;
        // create ledger rows (debit then credit), reference journal.id
        const debit = await tx.ledger.create({
            data: {
                wallet: { connect: { id: fromWallet.id } },
                journal: { connect: { id: journal?.id } },
                change: -amt,
                balanceAfter: newUserLedgerBalance,
                type: 'TRANSFER_DEBIT',
                metadata: {
                    airtimeId: transaction.id,
                    reason: `Airtime Purchase to ${payload.number}`,
                    provider: 'AKUUK',
                    network: 'MTN',
                    phoneNumber: payload.number,
                },
            },
        });
        // update wallets balances
        const wallet = await tx.wallet.update({
            where: { id: fromWallet.id },
            data: {
                ledgerBalance: newUserLedgerBalance,
                availableBalance: newAvailableBalance,
                version: { increment: 1 },
            },
        });
        // ++++++++++++++++++++++::+++++++++++++++++++++++++++++++++
        // Add this transaction to the Provider account
        const provider = await tx.provider.upsert({
            where: { provider: 'AKUUK' },
            create: { provider: 'AKUUK', balance: amt },
            update: {
                balance: { increment: amt.toString() },
                total: { increment: 1 },
            },
        });
        // provider float ledger row (credit)
        await tx.ledger.create({
            data: {
                providerId: provider.id,
                journalId: journal.id,
                change: amt,
                balanceAfter: BigInt(provider.balance) + amt,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    airtimeId: transaction.id,
                    provider: 'AKUUK',
                    network: 'MTN',
                    phoneNumber: payload.number,
                },
            },
        });
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // TODO:: Implement Kafka or SQS
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transaction.id,
                topic: 'airtime.purchase.initiated',
                payload: {
                    airtimeId: transaction.id,
                    userId,
                    phoneNumber: payload.number,
                    network: 'MTN',
                    fromWalletId: fromWallet.id,
                    amount: amountInNaira(amt),
                    currency: 'NGN',
                    country: payload.country,
                    accountNumber: wallet.accountNumber,
                    balance: amountInNaira(newAvailableBalance),
                },
            },
        });
        // return structured result
        return {
            transaction: {
                ...transaction,
                amount: amountInNaira(amt),
            },
            journalId: journal.id,
            debitLedgerId: debit.id,
        };
    });
    await Queue.trigger(airtime.transaction.id, 'AIRTIME');
    return {
        ...airtime,
        amount: amountInNaira(amt),
    };
}

let Controller$1 = class Controller {
    static async airtime(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateAirtimePayment().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const iKey = req.header('Idempotency-Key');
            if (!iKey)
                throw new CustomError('Idempotency key not found', 500);
            const payment = await airtime(user.id, {
                ...value,
                idempotencyKey: iKey,
            });
            return res.status(200).json({
                message: 'Airtime purchased successfully',
                success: true,
                data: payment,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

const router$2 = Router();
router$2.post('/airtime', idempotency, Controller$1.airtime);

class Controller {
    // Get all transactions by user
    static async all(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const filters = req.query?.filters ?? {};
            const page = Number(req.query?.page) ?? 0;
            const size = Number(req.query?.size) ?? 10;
            const transactions = await prisma.transaction.findMany({
                where: { userId: user.id },
                orderBy: { createdAt: "desc" },
                take: size,
                skip: page,
            });
            return res.status(200).json({
                message: 'Transactions retrieved successfully',
                success: true,
                data: transactions,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    // Get single transaction by ID
    static async get(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const id = req.params?.id;
            const transaction = await prisma.transaction.findUnique({
                where: { id },
            });
            return res.status(200).json({
                message: 'Transaction retrieved successfully',
                success: true,
                data: transaction,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
}

const router$1 = Router();
router$1.get('/:id', Controller.get);
router$1.get('/', Controller.all);

const r2 = new S3Client({
    region: 'auto', // Cloudflare R2 uses "auto"
    endpoint: environment.cloudflare.url,
    credentials: {
        accessKeyId: environment.cloudflare.key,
        secretAccessKey: environment.cloudflare.secret,
    },
});
class Cloudflare {
    constructor() { }
    async uploadToR2(filePath, keyPrefix = 'uploads') {
        const fileStream = fs.createReadStream(filePath);
        const fileName = path.basename(filePath);
        const objectKey = `${keyPrefix}/${Date.now()}-${fileName}`;
        try {
            await r2.send(new PutObjectCommand({
                Bucket: environment.cloudflare.bucket,
                Key: objectKey,
                Body: fileStream,
                ContentType: 'application/octet-stream', // adjust for images
            }));
            // Public URL if bucket policy allows
            return `${environment.cloudflare.url}/${environment.cloudflare.bucket}/${objectKey}`;
        }
        catch (err) {
            console.error('Cloudflare R2 upload failed:', err);
            throw new Error('Upload failed');
        }
    }
    async generateUploadURL(fileName, contentType, expiresIn = 60 * 5) {
        const key = `uploads/${crypto$1.randomUUID()}-${fileName}`;
        const command = new PutObjectCommand({
            Bucket: environment.cloudflare.bucket,
            Key: key,
            ContentType: contentType,
        });
        const signedUrl = await getSignedUrl(r2, command, { expiresIn });
        return { signedUrl, key };
    }
}

class BaseController {
    static async generateUploadURL(req, res) {
        try {
            const { fileName, contentType } = req.body;
            if (!fileName || !contentType)
                throw new CustomError('fileName and contentType required', 422);
            const cloudflare = new Cloudflare();
            const { signedUrl, key } = await cloudflare.generateUploadURL(fileName, contentType);
            res.status(200).json({
                uploadUrl: signedUrl,
                publicUrl: `${environment.cloudflare.url}/${key}`,
            });
        }
        catch (err) {
            const e = useErrorParser(err);
            res.status(e.status).json(e);
        }
    }
}

const router = Router();
router.use('/auth', router$8);
router.use('/users', router$6);
router.use('/webhooks', router$4);
router.use('/agents', Auth, router$7);
router.use('/merchants', Auth, router$5);
router.use('/wallets', Auth, router$3);
router.use('/payments', Auth, router$2);
router.use('/transactions', Auth, router$1);
router.post('/uploads/url', Auth, BaseController.generateUploadURL);

// src/app.ts
const app$1 = express();
app$1.use(helmet());
app$1.use(cors({ origin: '*' })); // tighten later
app$1.use(express.json());
app$1.use(express.urlencoded({ extended: true }));
app$1.use(morgan('combined'));
const createApp = () => {
    app$1.get('/', (_, res) => res.json({ ok: true }));
    app$1.get('/health', (_, res) => res.json({ ok: true }));
    // register routes
    app$1.use('/api/v1', router);
    // app.use(errorHandler);
    app$1.use((req, res) => {
        res.status(404).json({ message: "Endpoint not found. please, check the url and try again." });
    });
    return app$1;
};

const app = createApp();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Wepay backend listening on port: http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJpc21hL2NsaWVudC50cyIsIi4uL3NyYy9leHRlbnNpb25zL21haWwtc2VydmljZS90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy93ZWxjb21lLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwudHMiLCIuLi9zcmMvY29uZmlnL2Vudi50cyIsIi4uL3NyYy91dGlscy9sb2dnZXIudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbC50cyIsIi4uL3NyYy91dGlscy9jdXN0b21FcnJvci50cyIsIi4uL3NyYy9leHRlbnNpb25zL2FrdXVrL3V0aWxzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvYWt1dWsvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaGFzaC50cyIsIi4uL3NyYy91dGlscy9qd3QudHMiLCIuLi9zcmMvdXRpbHMvdW5pcXVlSWRHZW5lcmF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIi4uL3NyYy91dGlscy9nZXRVc2VyLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscy50cyIsIi4uL3NyYy9leHRlbnNpb25zL2VtYmVkbHkvaW5kZXgudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5L2luZGV4LnRzIiwiLi4vc3JjL2pvYnMvcHJvY2Vzcy10cmFuc2Zlci50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtYWlydGltZS50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucy50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQudHMiLCIuLi9zcmMvam9icy9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycy50cyIsIi4uL3NyYy9qb2JzL1dvcmtlcnMudHMiLCIuLi9zcmMvam9icy9xdWV1ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvYXV0aC92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvY29udHJvbGxlci50cyIsIi4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvc2VydmljZS50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93ZWJob29rcy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvd2ViaG9va3MvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3dhbGxldHMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvd2FsbGV0cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3ZhbGlkYXRvci50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy9wYXltZW50cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21vZHVsZXMvcGF5bWVudHMvcm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdHJhbnNhY3Rpb25zL2NvbnRyb2xsZXIudHMiLCIuLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvY2xvdWRmbGFyZS9pbmRleC50cyIsIi4uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIudHMiLCIuLi9zcmMvcm91dGVzLnRzIiwiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3ByaXNtYS9jbGllbnQudHNcclxuKEJpZ0ludC5wcm90b3R5cGUgYXMgYW55KS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaW50ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgcmV0dXJuIGludCA/PyB0aGlzLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgLy8gbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAvKiBCYXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByZWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtc28taGlkZTogYWxsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5LFxyXG4gICAgICB0ZCxcclxuICAgICAgdGgge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLFxyXG4gICAgICB1bCxcclxuICAgICAgb2wsXHJcbiAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAuc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyogVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFsaWduLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idXR0b24tLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbi0tcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MTM2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRjYxMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogUmVsYXRlZCBJdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0JDQ0NGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBEaXNjb3VudCBDb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBTb2NpYWwgSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfaGVhZGluZyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM4NTg3OEU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV90b3RhbC0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM2QjZFNzY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLW1hc3RoZWFkX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktc3ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQsXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcclxuICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuICAgICAgICAuZi1mYWxsYmFjayAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGUgbGluayBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPWZvcmdvdF9wYXNzd29yZF9lbWFpbFwiIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbS9fbnV4dC9pbWcvbG9nby4wNzc3OWUyLnBuZ1wiIGFsdD1cIk1hc3RlcmluZ2JhY2tlbmRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtYm9keVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYWNjb3VudC4gVXNlIHRoZSBidXR0b24gYmVsb3cgdG8gcmVzZXQgaXQuIDxzdHJvbmc+VGhpcyBwYXNzd29yZCByZXNldCBpcyBvbmx5IHZhbGlkIGZvciB0aGUgbmV4dCA2MCBtaW51dGVzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cImYtZmFsbGJhY2sgYnV0dG9uIGJ1dHRvbi0tZ3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lc3NhZ2UuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBzZWN1cml0eSwgaWYgeW91IGRpZCBub3QgcmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgb3IgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QHByb2ZhaWxpLmNvbVwiPmNvbnRhY3Qgc3VwcG9ydDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+VGhlICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9IFRlYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlBvcnQgSGFyY291cnQsIFJpdmVycywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIiA+XHJcbiAgICAgICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiY29sb3Itc2NoZW1lXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODY5RDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICBvbCxcclxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAuNGVtIDAgMS4xODc1ZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ1dHRvbi0tZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJDNjY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYxMzY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEF0dHJpYnV0ZSBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXNfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBSZWxhdGVkIEl0ZW1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWRfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9oZWFkaW5nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEwcHggOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogRGF0YSB0YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuc3ViIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLW1hc3RoZWFkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNBOEFBQUY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgb2wsXHJcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICAgIHN1cHBvcnRlZC1jb2xvci1zY2hlbWVzOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwhLS1baWYgbXNvXT5cclxuICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgICAgIC5mLWZhbGxiYWNrICB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIj5Zb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCB5b3VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXBhc3N3b3JkX2NoYW5nZWRfZW1haWxcIiBjbGFzcz1cImYtZmFsbGJhY2sgZW1haWwtbWFzdGhlYWRfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbWFpbCBCb2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBCb2R5IGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBjb25uZWN0ZWQgdG8geW91ciBNYXN0ZXJpbmdiYWNrZW5kIGFjY291bnQgd2FzIGNoYW5nZWQuIElmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzIGNoYW5nZSwgdGFsayB0byB1cyB0byByZXZlcnQgaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFsayBzb29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlRoZSAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSBUZWFtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM4NjlkNDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjY2NmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9oZWFkaW5nIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjY2NmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiY2NjZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50X2hlYWRpbmcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHggMTBweCA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBEYXRhIHRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaGVhZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICM4NTg3OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgY29sb3I6ICM2YjZlNzY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogOTRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YWFhZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZiNmU3NjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWNvbnRlbnQsXHJcbiAgICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgdWwsXHJcbiAgICAgICAgICBvbCxcclxuICAgICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgc3VwcG9ydGVkLWNvbG9yLXNjaGVtZXM6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIlxyXG4gICAgICAgID5XZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgYWJvYXJkLjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLW1hc3RoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXdlbGNvbWVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTcwXCJcclxuICAgICAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9hcmQuIE15IG5hbWUgaXMgU29sb21vbiBhbmQgSSdsbCBzdXBwb3J0IHlvdSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSdyZSBoZXJlLCBsZXQgbWUgYnJpZWZseSByZWNhcCB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIE1hc3RlcmluZ2JhY2tlbmQgY2FuIG9mZmVyIHlvdTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpZGVvIGFuZCBUZXh0IGJhc2VkIEJhY2tlbmQgRW5naW5lZXJpbmcgY291cnNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJhY2tlbmQgUG9ydGZvbGlvIHRvIHNob3djYXNlIHlvdXIgc2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXJuIHRvIGJ1aWxkIGZyb20gVGhvdXNhbmRzIFJlYWwtd29ybGQgUHJvamVjdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyYWNrIHlvdXIgbGVhcm5pbmdzIGFuZCBzZXQgc2NoZWR1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IEV4cGVydCBWZXR0ZWQgcm9hZG1hcHMgdG8gbGVhcm4gYmFja2VuZCBlbmdpbmVlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwIGNvdXJzZXMgdG8gQmFja2VuZCBQcm9qZWN0cyB0byBoZWxwIHlvdSBtYXN0ZXIgeW91ciBza2lsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25saW5lIGNvZGluZyBjaGFsbGVuZ2VzIGJ5IGV4cGVydHMgdG8gaW1wcm92ZSB5b3VyIHNraWxsczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGljayBwcm9qZWN0cyBmcm9tIGRpZmZlcmVudCBidXNpbmVzcyBkb21haW5zIHRvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIG9mIHRoZSBmZWF0dXJlcyBvbiB0aGUgd2F5OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9hZG1hcHMgPT4gPC9zdHJvbmc+TUIgUm9hZG1hcCBlbmFibGVzIHN0cnVjdHVyZWQtYmFzZWQgbGVhcm5pbmcgYXBwcm9hY2ggZm9yIEJhY2tlbmQgZW5naW5lZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0IExhbmQgPT4gPC9zdHJvbmc+TUIgUHJvamVjdHMgZW5hYmxlcyBCYWNrZW5kIGVuZ2luZWVycyB0aHJvdWdoIGEgbGVhcm4tYnktYnVpbGRpbmcgbW9kZWwuIEJ1aWxkIHJlYWwtd29ybGQgYmFja2VuZCBwcm9qZWN0cyB3aXRob3V0IGNvZGluZyB0aGUgZnJvbnRlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tlbmQgUG9ydGZvbGlvID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DcmVhdGUgYW5kIG1hbmFnZSB5b3VyIGJhY2tlbmQgcG9ydGZvbGlvIHdpdGggdG9ucyBvZiByZWFsIHdvcmxkIGJhY2tlbmQgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tMYW5kID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5MZWFybiBiYWNrZW5kIGVuZ2luZWVyaW5nIGJ5IHNvbHZpbmcgY2hhbGxlbmdlcyBpbiBhIGdhbWlmeWluZyB3YXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGRvbid0IGJlIHNoeSBhbmQgcmVhY2ggb3V0IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91ciB0ZWFtIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BtYXN0ZXJpbmdiYWNrZW5kLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPmluZm9AbWFzdGVyaW5nYmFja2VuZC5jb208L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCBpbiBubyB0aW1lLCBoZXJlJ3MgYSBsaW5rIHRvIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVtbyB2aWRlbzwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vcG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5ibG9nPC9hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjBweCAwIDAgMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRhbGsgc29vbiwgPGJyIC8+U29sb21vbiBmcm9tICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICBcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby4gPGJyIC8+UG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBcclxuICBgO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcmVoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgbXNvLWhpZGU6IGFsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCxcclxuICAgICAgICB1bCxcclxuICAgICAgICBvbCxcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRGlzY291bnQgQ29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU29jaWFsIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2Zvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwtLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZF9sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5LXN1YiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKk1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAsXHJcbiAgICAgICAgICB1bCxcclxuICAgICAgICAgIG9sLFxyXG4gICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgY29kZSB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBUaGUgY29kZSBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtY29udGVudFwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbT9zb3VyY2U9dmVyaWZpY2F0aW9uX2VtYWlsXCIgY2xhc3M9XCJmLWZhbGxiYWNrIGVtYWlsLW1hc3RoZWFkX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQm9keSBjb250ZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZi1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhhbmtzIGZvciBzaWduaW5nIHVwIGZvciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSEgVGhpcyBlbWFpbCB2ZXJpZmljYXRpb24gc3RlcCBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBhY2N1cmF0ZSBlbWFpbCBhZGRyZXNzIHRvIGNvbW11bmljYXRlIGltcG9ydGFudCBhY2NvdW50IGV2ZW50cyB0byB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSBjb3B5IGFuZCBwYXN0ZSB0aGUgY29kZSBiZWxvdyBpbiB5b3VyIGJyb3dzZXIsIGJhY2sgdG8gdGhlIHNpZ24gdXAgd29ya2Zsb3cgaW5zaWRlIG91ciBhcHA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBY3Rpb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHttZXNzYWdlLmNvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5UaGUgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gVGVhbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiNTcwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+JmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJjb25zdCBkZWZhdWx0UG9ydCA9IDMwMDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcclxuICBjb250ZXh0OiAnTE9DQUwnIHwgJ0RFVkVMT1AnIHwgJ1NUQUdJTkcnIHwgJ1BST0RVQ1RJT04nO1xyXG4gIGFwcE5hbWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwb3J0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgZGVidWc/OiBzdHJpbmc7XHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hTZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hEYXlzOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzSW46IHN0cmluZztcclxuICAgIHNhbHRSb3VuZHM6IG51bWJlcjtcclxuICB9O1xyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbiAgICBwb3J0OiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXdzOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGJ1Y2tldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IG51bWJlcjtcclxuICB9O1xyXG4gIHFvcmVJZDoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjbGllbnQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWt1dWs6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlbWJlZGx5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBheW91dFVSTDogc3RyaW5nO1xyXG4gICAgd2ViaG9va1VSTDogc3RyaW5nO1xyXG4gICAgb3JnQWNjb3VudDogbnVtYmVyO1xyXG4gICAgb3JnTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgbWFpbDoge1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgcG9ydDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGNsaWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lVGVtcG9yYXJ5OiBzdHJpbmc7XHJcbiAgICBhc3luY0Z1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrUXVldWU6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUhhbmRsZXI6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBvYXV0aEdvb2dsZUNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgICBjYWxsYmFja1VSTDogc3RyaW5nO1xyXG4gIH07XHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWNrZXQ6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9XHJcbiAgKHByb2Nlc3MuZW52LkNPTlRFWFQgYXNcclxuICAgIHwgJ0xPQ0FMJ1xyXG4gICAgfCAnREVWRUxPUCdcclxuICAgIHwgJ1NUQUdJTkcnXHJcbiAgICB8ICdQUk9EVUNUSU9OJ1xyXG4gICAgfCB1bmRlZmluZWQpIHx8ICdMT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xyXG4gIGNvbnRleHQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCBkZWZhdWx0UG9ydCxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5BUFBfTkFNRSBhcyBzdHJpbmcsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5GRV9VUkwgYXMgc3RyaW5nLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5ERUJVRyxcclxuXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IE51bWJlcihwcm9jZXNzLmVudi5QQVNTV09SRF9SRVNFVF9FWFBJUkVTX01JTiksXHJcbiAgfSxcclxuXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGF3czoge1xyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HQ1BfUFJPSUVDVF9JRCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVRfTkFNRSBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX0VYUElSRVNfSU4gYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaERheXM6IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fRVhQSVJFU19EQVlTIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVUIGFzIHN0cmluZyxcclxuICAgIHNhbHRSb3VuZHM6IE51bWJlcihwcm9jZXNzLmVudi5BVVRIX1NBTFRfUk9VTkRTKSB8fCAxMCxcclxuICB9LFxyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlJFRElTX1BPUlQgfHwgJzYzNzknKSxcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMIGFzIHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRURJU19QQVNTV09SRCxcclxuICB9LFxyXG4gIG1haWw6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfSE9TVCBhcyBzdHJpbmcsXHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTUFJTF9QT1JUKSB8fCAyNTI1LFxyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUgYXMgc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgYXMgc3RyaW5nLFxyXG4gICAgc2VuZGVyOiBwcm9jZXNzLmVudi5NQUlMX1NFTkRFUiBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR0NQX1BST0pFQ1RfSUQhLFxyXG4gICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUwhLFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuR0NQX1BSSVZBVEVfS0VZISxcclxuICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVQhLFxyXG4gICAgYnVja2V0TmFtZVRlbXBvcmFyeTogcHJvY2Vzcy5lbnYuR0NQX0JVQ0tFVF9URU1QT1JBUlkhLFxyXG4gICAgYXN5bmNGdW5jdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX0ZVTkNUSU9OISxcclxuICAgIHRhc2tRdWV1ZTogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUUhLFxyXG4gICAgdGFza1F1ZXVlSGFuZGxlcjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfSEFORExFUiEsXHJcbiAgICB0YXNrUXVldWVMb2NhdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfTE9DQVRJT04hLFxyXG4gICAgb2F1dGhHb29nbGVDbGllbnRUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfR09PR0xFX0NMSUVOVF9UT0tFTiEsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIGNhbGxiYWNrVVJMOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTEJBQ0shLFxyXG4gIH0sXHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LllPVVZFUklGWV9VUkwgYXMgc3RyaW5nLFxyXG4gICAga2V5OiBwcm9jZXNzLmVudi5ZT1VWRVJJRllfS0VZIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGVtYmVkbHk6IHtcclxuICAgIGlkOiBwcm9jZXNzLmVudi5FTUJFRExZX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuRU1CRURMWV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5FTUJFRExZX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBwYXlvdXRVUkw6IHByb2Nlc3MuZW52LkVNQkVETFlfUEFZT1VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgICB3ZWJob29rVVJMOiBwcm9jZXNzLmVudi5FTUJFRExZX1dFQkhPT0tfVVJMIGFzIHN0cmluZyxcclxuICAgIG9yZ0FjY291bnQ6IE51bWJlcihwcm9jZXNzLmVudi5FTUJFRExZX09SR0FOSVpBVElPTl9BQ0NPVU5UKSxcclxuICAgIG9yZ05hbWU6IHByb2Nlc3MuZW52LkVNQkVETFlfT1JHQU5JWkFUSU9OX05BTUUgYXMgc3RyaW5nLFxyXG4gIH0sXHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5DTE9VREZMQVJFX0JVQ0tFVF9OQU1FIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9BQ0NFU1NfS0VZX0lEIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9TRUNSRVRfQUNDRVNTX0tFWSBhcyBzdHJpbmcsXHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQlVDS0VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgfSxcclxuXHJcbiAgcW9yZUlkOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlFPUkVJRF9CQVNFX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjbGllbnQ6IHByb2Nlc3MuZW52LlFPUkVJRF9DTElFTlQgYXMgc3RyaW5nLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5RT1JFSURfU0VDUkVUIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGFrdXVrOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkFLVVVLX0JBU0VfVVJMIGFzIHN0cmluZyxcclxuICAgIGlkOiBwcm9jZXNzLmVudi5BS1VVS19BQ0NPVU5UX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQUtVVUtfS0VZIGFzIHN0cmluZyxcclxuICAgIHNlbmRlcjogcHJvY2Vzcy5lbnYuQUtVVUtfU0VOREVSIGFzIHN0cmluZyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZGVidWdNb2R1bGUgZnJvbSAnZGVidWcnO1xyXG5jb25zdCBkZWJ1ZyA9IGRlYnVnTW9kdWxlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luZm8gPSBkZWJ1ZygnYXBpOmluZm8nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gZGVidWcoJ2FwaTplcnJvcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc29sdmVyID0gZGVidWcoJ2FwaTpmaWVsZC1yZXNvbHZlcicpO1xyXG5leHBvcnQgY29uc3QgbG9nUXVlcnkgPSBkZWJ1ZygnYXBpOnF1ZXJ5Jyk7XHJcbmV4cG9ydCBjb25zdCBsb2dNdXRhdGlvbiA9IGRlYnVnKCdhcGk6bXV0YXRpb24nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0hlbHBlciA9IGRlYnVnKCdhcGk6aGVscGVyJyk7XHJcbiIsImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHBhc3N3b3JkQ2hhbmdlZCBmcm9tICcuL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi90ZW1wbGF0ZXMvd2VsY29tZSc7XHJcbmltcG9ydCB2ZXJpZmljYXRpb25FbWFpbCBmcm9tICcuL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnQC91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xyXG5pbXBvcnQgeyBNYWlsT3B0aW9ucywgU2VsZWN0VGVtcGxhdGUsIFNlbmRFbWFpbCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgdG8sIHRlbXBsYXRlLCB2YXJpYWJsZXMsIHRlbXBsYXRlSWQgfTogU2VuZEVtYWlsKSA9PiB7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdObyBtYWlsIHRlbXBsYXRlIHNwZWNpZmllZCcpO1xyXG5cclxuICBjb25zdCB7IHN1YmplY3QsIHRlbXBsYXRlOiB0ZW1wIH0gPSBhd2FpdCBzZWxlY3RUZW1wbGF0ZSh7XHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKFsnUFJPRFVDVElPTicsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkpIHtcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0tFWSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQGVtYWlscy5tYXN0ZXJpbmdiYWNrZW5kLmNvbT5gLFxyXG4gICAgICB0bzogdG8sXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnM6IE1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQHByZXNzbW9uaS5jb20+YCxcclxuICAgICAgdG8sXHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haWxDb25maWc6IGFueSA9IHtcclxuICAgICAgaG9zdDogZW52aXJvbm1lbnQubWFpbD8uaG9zdCB8fCAnc210cC5tYWlsdHJhcC5pbycsXHJcbiAgICAgIHBvcnQ6IGVudmlyb25tZW50Lm1haWw/LnBvcnQgfHwgMjUyNSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogZW52aXJvbm1lbnQubWFpbD8udXNlcm5hbWUgfHwgJ2EzZDExNTliYmJlM2E2JywgLy9nZW5lcmF0ZWQgYnkgTWFpbHRyYXBcclxuICAgICAgICBwYXNzOiBlbnZpcm9ubWVudC5tYWlsPy5wYXNzd29yZCB8fCAnMmI0NjY4ZmUyZDZhNjcnLCAvL2dlbmVyYXRlZCBieSBNYWlsdHJhcFxyXG4gICAgICB9LFxyXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcclxuICAgICAgZ3JlZXRpbmdUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgc29ja2V0VGltZW91dDogMTAwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1haWxPcHRpb25zLCBtYWlsQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQubWFpbD8uaG9zdD8uaW5jbHVkZXMoJ2dtYWlsJykpXHJcbiAgICAgIG1haWxDb25maWdbJ3NlcnZpY2UnXSA9IGVudmlyb25tZW50Lm1haWw/Lmhvc3Q7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChtYWlsQ29uZmlnKTtcclxuXHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBsb2dFcnJvcignc2VuZEVtYWlsICVvJywgeyBtYWlsT3B0aW9ucywgZXJyb3IgfSk7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndHJ5IGVtYWlsIGFnYWluIGxhdGVyJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgdHJhbnNwb3J0ZXIuY2xvc2UoKTtcclxuICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0VGVtcGxhdGUgPSBhc3luYyAoeyB0ZW1wbGF0ZSwgdmFyaWFibGVzIH06IFNlbGVjdFRlbXBsYXRlKSA9PiB7XHJcbiAgbGV0IHN1YmplY3QgPSBgYDtcclxuICBsZXQgX3RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcclxuICAgIGNhc2UgJ2ZvcmdvdC1wYXNzd29yZCc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFBhc3N3b3JkIFJlc2V0YDtcclxuICAgICAgX3RlbXBsYXRlID0gZm9yZ290UGFzc3dvcmQodmFyaWFibGVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2ZXJpZmljYXRpb24nOlxyXG4gICAgICBzdWJqZWN0ICs9IGBFbWFpbCBWZXJpZmljYXRpb25gO1xyXG4gICAgICBfdGVtcGxhdGUgPSB2ZXJpZmljYXRpb25FbWFpbCh2YXJpYWJsZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Bhc3N3b3JkLWNoYW5nZWQnOlxyXG4gICAgICBzdWJqZWN0ICs9IGBQYXNzd29yZCBDaGFuZ2VkYDtcclxuICAgICAgX3RlbXBsYXRlID0gcGFzc3dvcmRDaGFuZ2VkKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnd2VsY29tZSc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFdlbGNvbWUgdG8gTWFzdGVyaW5nYmFja2VuZCFgO1xyXG4gICAgICBfdGVtcGxhdGUgPSB3ZWxjb21lKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiB7IHRlbXBsYXRlOiBfdGVtcGxhdGUsIHN1YmplY3QgfTtcclxufTtcclxuIiwiY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHVibGljIHN0YXR1cztcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnlDb2RlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkzJyxcclxuICAgIGNvZGU6ICdBRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxhbmQgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdBWCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU1JyxcclxuICAgIGNvZGU6ICdBTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjEzJyxcclxuICAgIGNvZGU6ICdEWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW1lcmljYW5TYW1vYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY4NCcsXHJcbiAgICBjb2RlOiAnQVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZG9ycmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NicsXHJcbiAgICBjb2RlOiAnQUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ0JyxcclxuICAgIGNvZGU6ICdBTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5ndWlsbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNjQnLFxyXG4gICAgY29kZTogJ0FJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzInLFxyXG4gICAgY29kZTogJ0FRJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAgIGRpYWxfY29kZTogJysxMjY4JyxcclxuICAgIGNvZGU6ICdBRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1NCcsXHJcbiAgICBjb2RlOiAnQVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FybWVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NCcsXHJcbiAgICBjb2RlOiAnQU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FydWJhJyxcclxuICAgIGRpYWxfY29kZTogJysyOTcnLFxyXG4gICAgY29kZTogJ0FXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzYxJyxcclxuICAgIGNvZGU6ICdBVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXVzdHJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDMnLFxyXG4gICAgY29kZTogJ0FUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBemVyYmFpamFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTQnLFxyXG4gICAgY29kZTogJ0FaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCYWhhbWFzJyxcclxuICAgIGRpYWxfY29kZTogJysxMjQyJyxcclxuICAgIGNvZGU6ICdCUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFocmFpbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTczJyxcclxuICAgIGNvZGU6ICdCSCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuZ2xhZGVzaCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrODgwJyxcclxuICAgIGNvZGU6ICdCRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNDYnLFxyXG4gICAgY29kZTogJ0JCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxhcnVzJyxcclxuICAgIGRpYWxfY29kZTogJyszNzUnLFxyXG4gICAgY29kZTogJ0JZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxnaXVtJyxcclxuICAgIGRpYWxfY29kZTogJyszMicsXHJcbiAgICBjb2RlOiAnQkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAxJyxcclxuICAgIGNvZGU6ICdCWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmVuaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyOScsXHJcbiAgICBjb2RlOiAnQkonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jlcm11ZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE0NDEnLFxyXG4gICAgY29kZTogJ0JNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3NScsXHJcbiAgICBjb2RlOiAnQlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MScsXHJcbiAgICBjb2RlOiAnQk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NycsXHJcbiAgICBjb2RlOiAnQkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgIGRpYWxfY29kZTogJysyNjcnLFxyXG4gICAgY29kZTogJ0JXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU1JyxcclxuICAgIGNvZGU6ICdCUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAgIGRpYWxfY29kZTogJysyNDYnLFxyXG4gICAgY29kZTogJ0lPJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjczJyxcclxuICAgIGNvZGU6ICdCTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1OScsXHJcbiAgICBjb2RlOiAnQkcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0J1cmtpbmEgRmFzbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI2JyxcclxuICAgIGNvZGU6ICdCRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVydW5kaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU3JyxcclxuICAgIGNvZGU6ICdCSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FtYm9kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1NScsXHJcbiAgICBjb2RlOiAnS0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgIGRpYWxfY29kZTogJysyMzcnLFxyXG4gICAgY29kZTogJ0NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYW5hZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ0NBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcclxuICAgIGRpYWxfY29kZTogJysyMzgnLFxyXG4gICAgY29kZTogJ0NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzQ1JyxcclxuICAgIGNvZGU6ICdLWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJysyMzYnLFxyXG4gICAgY29kZTogJ0NGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGFkJyxcclxuICAgIGRpYWxfY29kZTogJysyMzUnLFxyXG4gICAgY29kZTogJ1REJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGlsZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTYnLFxyXG4gICAgY29kZTogJ0NMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrODYnLFxyXG4gICAgY29kZTogJ0NOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ1gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ0MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgIGRpYWxfY29kZTogJys1NycsXHJcbiAgICBjb2RlOiAnQ08nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbW9yb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OScsXHJcbiAgICBjb2RlOiAnS00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDInLFxyXG4gICAgY29kZTogJ0NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDMnLFxyXG4gICAgY29kZTogJ0NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4MicsXHJcbiAgICBjb2RlOiAnQ0snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwNicsXHJcbiAgICBjb2RlOiAnQ1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI1JyxcclxuICAgIGNvZGU6ICdDSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3JvYXRpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg1JyxcclxuICAgIGNvZGU6ICdIUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTMnLFxyXG4gICAgY29kZTogJ0NVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDeXBydXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NycsXHJcbiAgICBjb2RlOiAnQ1knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0N6ZWNoIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJys0MjAnLFxyXG4gICAgY29kZTogJ0NaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZW5tYXJrJyxcclxuICAgIGRpYWxfY29kZTogJys0NScsXHJcbiAgICBjb2RlOiAnREsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RqaWJvdXRpJyxcclxuICAgIGRpYWxfY29kZTogJysyNTMnLFxyXG4gICAgY29kZTogJ0RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc2NycsXHJcbiAgICBjb2RlOiAnRE0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg0OScsXHJcbiAgICBjb2RlOiAnRE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VjdWFkb3InLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MycsXHJcbiAgICBjb2RlOiAnRUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VneXB0JyxcclxuICAgIGRpYWxfY29kZTogJysyMCcsXHJcbiAgICBjb2RlOiAnRUcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcclxuICAgIGRpYWxfY29kZTogJys1MDMnLFxyXG4gICAgY29kZTogJ1NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQwJyxcclxuICAgIGNvZGU6ICdHUScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjkxJyxcclxuICAgIGNvZGU6ICdFUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXN0b25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcyJyxcclxuICAgIGNvZGU6ICdFRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoaW9waWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1MScsXHJcbiAgICBjb2RlOiAnRVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdGSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk4JyxcclxuICAgIGNvZGU6ICdGTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlqaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc5JyxcclxuICAgIGNvZGU6ICdGSicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdGSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJhbmNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMycsXHJcbiAgICBjb2RlOiAnRlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NCcsXHJcbiAgICBjb2RlOiAnR0YnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OScsXHJcbiAgICBjb2RlOiAnUEYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhYm9uJyxcclxuICAgIGRpYWxfY29kZTogJysyNDEnLFxyXG4gICAgY29kZTogJ0dBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYW1iaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMCcsXHJcbiAgICBjb2RlOiAnR00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlb3JnaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk5NScsXHJcbiAgICBjb2RlOiAnR0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQ5JyxcclxuICAgIGNvZGU6ICdERScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2hhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMycsXHJcbiAgICBjb2RlOiAnR0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpYnJhbHRhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUwJyxcclxuICAgIGNvZGU6ICdHSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMCcsXHJcbiAgICBjb2RlOiAnR1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dyZWVubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk5JyxcclxuICAgIGNvZGU6ICdHTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlbmFkYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTQ3MycsXHJcbiAgICBjb2RlOiAnR0QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MCcsXHJcbiAgICBjb2RlOiAnR1AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NzEnLFxyXG4gICAgY29kZTogJ0dVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwMicsXHJcbiAgICBjb2RlOiAnR1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1ZXJuc2V5JyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI0JyxcclxuICAgIGNvZGU6ICdHTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3VpbmVhLUJpc3NhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ1JyxcclxuICAgIGNvZGU6ICdHVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3V5YW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1OTUnLFxyXG4gICAgY29kZTogJ0dZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTA5JyxcclxuICAgIGNvZGU6ICdIVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3OScsXHJcbiAgICBjb2RlOiAnVkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbmR1cmFzJyxcclxuICAgIGRpYWxfY29kZTogJys1MDQnLFxyXG4gICAgY29kZTogJ0hOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MicsXHJcbiAgICBjb2RlOiAnSEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0h1bmdhcnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM2JyxcclxuICAgIGNvZGU6ICdIVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSWNlbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU0JyxcclxuICAgIGNvZGU6ICdJUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkxJyxcclxuICAgIGNvZGU6ICdJTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kb25lc2lhJyxcclxuICAgIGRpYWxfY29kZTogJys2MicsXHJcbiAgICBjb2RlOiAnSUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YgUGVyc2lhbiBHdWxmJyxcclxuICAgIGRpYWxfY29kZTogJys5OCcsXHJcbiAgICBjb2RlOiAnSVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYXEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2NCcsXHJcbiAgICBjb2RlOiAnSVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyZWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1MycsXHJcbiAgICBjb2RlOiAnSUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzbGUgb2YgTWFuJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnSU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcyJyxcclxuICAgIGNvZGU6ICdJTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSXRhbHknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM5JyxcclxuICAgIGNvZGU6ICdJVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSmFtYWljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg3NicsXHJcbiAgICBjb2RlOiAnSk0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phcGFuJyxcclxuICAgIGRpYWxfY29kZTogJys4MScsXHJcbiAgICBjb2RlOiAnSlAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0plcnNleScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDQnLFxyXG4gICAgY29kZTogJ0pFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdKb3JkYW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MicsXHJcbiAgICBjb2RlOiAnSk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzc3JyxcclxuICAgIGNvZGU6ICdLWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS2VueWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1NCcsXHJcbiAgICBjb2RlOiAnS0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgIGRpYWxfY29kZTogJys2ODYnLFxyXG4gICAgY29kZTogJ0tJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcclxuICAgIGRpYWxfY29kZTogJys4NTAnLFxyXG4gICAgY29kZTogJ0tQJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzgyJyxcclxuICAgIGNvZGU6ICdLUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS3V3YWl0JyxcclxuICAgIGRpYWxfY29kZTogJys5NjUnLFxyXG4gICAgY29kZTogJ0tXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTYnLFxyXG4gICAgY29kZTogJ0tHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYW9zJyxcclxuICAgIGRpYWxfY29kZTogJys4NTYnLFxyXG4gICAgY29kZTogJ0xBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYXR2aWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3MScsXHJcbiAgICBjb2RlOiAnTFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlYmFub24nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MScsXHJcbiAgICBjb2RlOiAnTEInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2NicsXHJcbiAgICBjb2RlOiAnTFMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYmVyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMScsXHJcbiAgICBjb2RlOiAnTFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxOCcsXHJcbiAgICBjb2RlOiAnTFknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpZWNodGVuc3RlaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQyMycsXHJcbiAgICBjb2RlOiAnTEknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcwJyxcclxuICAgIGNvZGU6ICdMVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUyJyxcclxuICAgIGNvZGU6ICdMVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFjYW8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MycsXHJcbiAgICBjb2RlOiAnTU8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg5JyxcclxuICAgIGNvZGU6ICdNSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFkYWdhc2NhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYxJyxcclxuICAgIGNvZGU6ICdNRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsYXdpJyxcclxuICAgIGRpYWxfY29kZTogJysyNjUnLFxyXG4gICAgY29kZTogJ01XJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjAnLFxyXG4gICAgY29kZTogJ01ZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxkaXZlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYwJyxcclxuICAgIGNvZGU6ICdNVicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIzJyxcclxuICAgIGNvZGU6ICdNTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NicsXHJcbiAgICBjb2RlOiAnTVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY5MicsXHJcbiAgICBjb2RlOiAnTUgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRpbmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NicsXHJcbiAgICBjb2RlOiAnTVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMicsXHJcbiAgICBjb2RlOiAnTVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGl1cycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjMwJyxcclxuICAgIGNvZGU6ICdNVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWF5b3R0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdZVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgIGRpYWxfY29kZTogJys1MicsXHJcbiAgICBjb2RlOiAnTVgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkxJyxcclxuICAgIGNvZGU6ICdGTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzczJyxcclxuICAgIGNvZGU6ICdNRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9uYWNvJyxcclxuICAgIGRpYWxfY29kZTogJyszNzcnLFxyXG4gICAgY29kZTogJ01DJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNb25nb2xpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTc2JyxcclxuICAgIGNvZGU6ICdNTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgyJyxcclxuICAgIGNvZGU6ICdNRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY2NCcsXHJcbiAgICBjb2RlOiAnTVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vcm9jY28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxMicsXHJcbiAgICBjb2RlOiAnTUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1OCcsXHJcbiAgICBjb2RlOiAnTVonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ015YW5tYXInLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk1JyxcclxuICAgIGNvZGU6ICdNTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjY0JyxcclxuICAgIGNvZGU6ICdOQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmF1cnUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NCcsXHJcbiAgICBjb2RlOiAnTlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05lcGFsJyxcclxuICAgIGRpYWxfY29kZTogJys5NzcnLFxyXG4gICAgY29kZTogJ05QJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzEnLFxyXG4gICAgY29kZTogJ05MJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk5JyxcclxuICAgIGNvZGU6ICdBTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjg3JyxcclxuICAgIGNvZGU6ICdOQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY0JyxcclxuICAgIGNvZGU6ICdOWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmljYXJhZ3VhJyxcclxuICAgIGRpYWxfY29kZTogJys1MDUnLFxyXG4gICAgY29kZTogJ05JJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOaWdlcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI3JyxcclxuICAgIGNvZGU6ICdORScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjM0JyxcclxuICAgIGNvZGU6ICdORycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTml1ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgzJyxcclxuICAgIGNvZGU6ICdOVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3MicsXHJcbiAgICBjb2RlOiAnTkYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY3MCcsXHJcbiAgICBjb2RlOiAnTVAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcndheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ05PJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdPbWFuJyxcclxuICAgIGRpYWxfY29kZTogJys5NjgnLFxyXG4gICAgY29kZTogJ09NJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTInLFxyXG4gICAgY29kZTogJ1BLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgwJyxcclxuICAgIGNvZGU6ICdQVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcwJyxcclxuICAgIGNvZGU6ICdQUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFuYW1hJyxcclxuICAgIGRpYWxfY29kZTogJys1MDcnLFxyXG4gICAgY29kZTogJ1BBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzUnLFxyXG4gICAgY29kZTogJ1BHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk1JyxcclxuICAgIGNvZGU6ICdQWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGVydScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTEnLFxyXG4gICAgY29kZTogJ1BFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjMnLFxyXG4gICAgY29kZTogJ1BIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaXRjYWlybicsXHJcbiAgICBkaWFsX2NvZGU6ICcrODcyJyxcclxuICAgIGNvZGU6ICdQTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUG9sYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys0OCcsXHJcbiAgICBjb2RlOiAnUEwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BvcnR1Z2FsJyxcclxuICAgIGRpYWxfY29kZTogJyszNTEnLFxyXG4gICAgY29kZTogJ1BUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTkzOScsXHJcbiAgICBjb2RlOiAnUFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1FhdGFyJyxcclxuICAgIGRpYWxfY29kZTogJys5NzQnLFxyXG4gICAgY29kZTogJ1FBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb21hbmlhJyxcclxuICAgIGRpYWxfY29kZTogJys0MCcsXHJcbiAgICBjb2RlOiAnUk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J1c3NpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNycsXHJcbiAgICBjb2RlOiAnUlUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUwJyxcclxuICAgIGNvZGU6ICdSVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV1bmlvbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdSRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTkwJyxcclxuICAgIGNvZGU6ICdCTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI5MCcsXHJcbiAgICBjb2RlOiAnU0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg2OScsXHJcbiAgICBjb2RlOiAnS04nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEx1Y2lhJyxcclxuICAgIGRpYWxfY29kZTogJysxNzU4JyxcclxuICAgIGNvZGU6ICdMQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcclxuICAgIGRpYWxfY29kZTogJys1OTAnLFxyXG4gICAgY29kZTogJ01GJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgIGRpYWxfY29kZTogJys1MDgnLFxyXG4gICAgY29kZTogJ1BNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc4NCcsXHJcbiAgICBjb2RlOiAnVkMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhbW9hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODUnLFxyXG4gICAgY29kZTogJ1dTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW4gTWFyaW5vJyxcclxuICAgIGRpYWxfY29kZTogJyszNzgnLFxyXG4gICAgY29kZTogJ1NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzOScsXHJcbiAgICBjb2RlOiAnU1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY2JyxcclxuICAgIGNvZGU6ICdTQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VuZWdhbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIxJyxcclxuICAgIGNvZGU6ICdTTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgIGRpYWxfY29kZTogJyszODEnLFxyXG4gICAgY29kZTogJ1JTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcclxuICAgIGRpYWxfY29kZTogJysyNDgnLFxyXG4gICAgY29kZTogJ1NDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMicsXHJcbiAgICBjb2RlOiAnU0wnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjUnLFxyXG4gICAgY29kZTogJ1NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTbG92YWtpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDIxJyxcclxuICAgIGNvZGU6ICdTSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2xvdmVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NicsXHJcbiAgICBjb2RlOiAnU0knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc3JyxcclxuICAgIGNvZGU6ICdTQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU29tYWxpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUyJyxcclxuICAgIGNvZGU6ICdTTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcclxuICAgIGRpYWxfY29kZTogJysyNycsXHJcbiAgICBjb2RlOiAnWkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvdXRoIFN1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyMTEnLFxyXG4gICAgY29kZTogJ1NTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdHUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM0JyxcclxuICAgIGNvZGU6ICdFUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3JpIExhbmthJyxcclxuICAgIGRpYWxfY29kZTogJys5NCcsXHJcbiAgICBjb2RlOiAnTEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyNDknLFxyXG4gICAgY29kZTogJ1NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdXJpbmFtZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk3JyxcclxuICAgIGNvZGU6ICdTUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ1NKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2F6aWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OCcsXHJcbiAgICBjb2RlOiAnU1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N3ZWRlbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDYnLFxyXG4gICAgY29kZTogJ1NFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDEnLFxyXG4gICAgY29kZTogJ0NIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYzJyxcclxuICAgIGNvZGU6ICdTWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVGFpd2FuJyxcclxuICAgIGRpYWxfY29kZTogJys4ODYnLFxyXG4gICAgY29kZTogJ1RXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTInLFxyXG4gICAgY29kZTogJ1RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNTUnLFxyXG4gICAgY29kZTogJ1RaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaGFpbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjYnLFxyXG4gICAgY29kZTogJ1RIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjcwJyxcclxuICAgIGNvZGU6ICdUTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9nbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI4JyxcclxuICAgIGNvZGU6ICdURycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9rZWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkwJyxcclxuICAgIGNvZGU6ICdUSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9uZ2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NicsXHJcbiAgICBjb2RlOiAnVE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE4NjgnLFxyXG4gICAgY29kZTogJ1RUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5pc2lhJyxcclxuICAgIGRpYWxfY29kZTogJysyMTYnLFxyXG4gICAgY29kZTogJ1ROJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrZXknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkwJyxcclxuICAgIGNvZGU6ICdUUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTMnLFxyXG4gICAgY29kZTogJ1RNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NDknLFxyXG4gICAgY29kZTogJ1RDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXZhbHUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OCcsXHJcbiAgICBjb2RlOiAnVFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU2JyxcclxuICAgIGNvZGU6ICdVRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVWtyYWluZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgwJyxcclxuICAgIGNvZGU6ICdVQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3MScsXHJcbiAgICBjb2RlOiAnQUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ1VTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVcnVndWF5JyxcclxuICAgIGRpYWxfY29kZTogJys1OTgnLFxyXG4gICAgY29kZTogJ1VZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVemJla2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTgnLFxyXG4gICAgY29kZTogJ1VaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgIGRpYWxfY29kZTogJys2NzgnLFxyXG4gICAgY29kZTogJ1ZVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhJyxcclxuICAgIGRpYWxfY29kZTogJys1OCcsXHJcbiAgICBjb2RlOiAnVkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg0JyxcclxuICAgIGNvZGU6ICdWTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyODQnLFxyXG4gICAgY29kZTogJ1ZHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTM0MCcsXHJcbiAgICBjb2RlOiAnVkknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODEnLFxyXG4gICAgY29kZTogJ1dGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY3JyxcclxuICAgIGNvZGU6ICdZRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnWmFtYmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNjAnLFxyXG4gICAgY29kZTogJ1pNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdaaW1iYWJ3ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYzJyxcclxuICAgIGNvZGU6ICdaVycsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBjb3VudHJ5Q29kZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU01TSW5wdXQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgZmluZEl0ZW0sIGZvcm1hdFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5jb25zdCBhY2MgPSBidG9hKGAke2Vudmlyb25tZW50LmFrdXVrPy5pZH06JHtlbnZpcm9ubWVudC5ha3V1az8ua2V5fWApO1xyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmFrdXVrPy51cmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YWNjfWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQWt1dWsge1xyXG4gIHN0YXRpYyBhc3luYyBzZW5kU01TKHBheWxvYWQ6IFNNU0lucHV0KSB7XHJcbiAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpO1xyXG5cclxuICAgIC8vIEZpbmQgY291bnRyeSBjb2RlXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyeUNvZGVzLCBwYXlsb2FkLmNvdW50cnksICdjb2RlJyk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHBob25lIG51bWJlclxyXG4gICAgY29uc3QgbnVtYmVyID0gZm9ybWF0UGhvbmVOdW1iZXIocGF5bG9hZC5udW1iZXIsIGNvdW50cnk/LmRpYWxfY29kZSEpO1xyXG5cclxuICAgIGlmICghbnVtYmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9tZXNzYWdpbmcvc21zJywge1xyXG4gICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgc2VuZGVyOiBlbnZpcm9ubWVudC5ha3V1ay5zZW5kZXIsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY291bnRyeUNvZGU6IGNvdW50cnk/LmRpYWxfY29kZSxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBhbW91bnQsIGJpbGxpbmcsIGNvdW50cnk6IGNvZGUsIG51bWJlcjogcGhvbmUgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgY29uc3QgdXVpZCA9IHJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAvLyBGaW5kIGNvdW50cnkgY29kZVxyXG4gICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKGNvdW50cnlDb2RlcywgY29kZSwgJ2NvZGUnKTtcclxuXHJcbiAgICAvLyBGb3JtYXQgcGhvbmUgbnVtYmVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBmb3JtYXRQaG9uZU51bWJlcihwaG9uZSwgY291bnRyeT8uZGlhbF9jb2RlISk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBtcmNSZWZlcmVuY2U6IHV1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlOiBOdW1iZXIoY291bnRyeT8uZGlhbF9jb2RlLnNwbGl0KCcrJylbMV0pICsgJycsXHJcbiAgICAgIG51bWJlcjogbnVtYmVyICsgJycsXHJcbiAgICAgIGJpbGxpbmc6IGJpbGxpbmcsXHJcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMikgKyAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9wYXltZW50L2FpcnRpbWUnLCB7XHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgY291bnRyeUNvZGU6IE51bWJlcihjb3VudHJ5Py5kaWFsX2NvZGUuc3BsaXQoJysnKVsxXSkgKyAnJyxcclxuICAgICAgbnVtYmVyOiBudW1iZXIgKyAnJyxcclxuICAgICAgYmlsbGluZzogYmlsbGluZyxcclxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCkudG9GaXhlZCgyKSArICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVEaXJOYW1lKG1ldGE6IGFueSkge1xyXG4gIGNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKG1ldGEudXJsKTtcclxuXHJcbiAgY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShfX2ZpbGVuYW1lKTtcclxuXHJcbiAgcmV0dXJuIHsgX19kaXJuYW1lLCBfX2ZpbGVuYW1lIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VFcnJvclBhcnNlciA9IChlcnI6IHsgbWVzc2FnZTogc3RyaW5nOyBzdGF0dXM6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyKTtcclxuICByZXR1cm4ge1xyXG4gICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJ3ByaXNtYScpXHJcbiAgICAgID8gJ0ludGVybmFsIFNlcnZlciBFcnJvcidcclxuICAgICAgOiAoZXJyPy5tZXNzYWdlID8/ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKSxcclxuICAgIHN0YXR1czogZXJyPy5zdGF0dXMgPz8gNTAwLFxyXG4gICAgc3VjY2VzczogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihzaXplOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzaXplIDw9IDApIHRocm93IG5ldyBFcnJvcignU2l6ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XHJcbiAgY29uc3QgbWluID0gTWF0aC5wb3coMTAsIHNpemUgLSAxKTtcclxuICBjb25zdCBtYXggPSBNYXRoLnBvdygxMCwgc2l6ZSkgLSAxO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZXN0aW5nQlZOKGJ2bjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIFsnREVWRUxPUCcsICdMT0NBTCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpICYmXHJcbiAgICBbJzIyMjIyMjIyMjIyJywgJzk1ODg4MTY4OTI0J10uaW5jbHVkZXMoYnZuKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldigpIHtcclxuICByZXR1cm4gWydERVZFTE9QJywgJ0xPQ0FMJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRVUVVRV9OQU1FUyA9IHtcclxuICBUUkFOU0ZFUjogJ3RyYW5zZmVyJyxcclxuICBBSVJUSU1FOiAnYWlydGltZScsXHJcbiAgTk9USUZJQ0FUSU9OOiAnbm90aWZpY2F0aW9uJyxcclxuICBJTlRFUk5BTF9UUkFOU0ZFUjogJ2ludGVybmFsX3RyYW5zZmVyJyxcclxuICBDUkVBVEVXQUxMRVQ6ICdjcmVhdGVfd2FsbGV0JyxcclxufSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT1RQKHVzZXI6IFVzZXIsIHR5cGUgPSAnUEhPTkUnKSB7XHJcbiAgY29uc3QgY29kZSA9IG90cEdlbmVyYXRvci5nZW5lcmF0ZSg2LCB7XHJcbiAgICBsb3dlckNhc2VBbHBoYWJldHM6IGZhbHNlLFxyXG4gICAgdXBwZXJDYXNlQWxwaGFiZXRzOiBmYWxzZSxcclxuICAgIHNwZWNpYWxDaGFyczogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgcmVmcmVzaENvZGU6IGNvZGUsXHJcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgdHlwZTogdHlwZSA9PT0gJ1BIT05FJyA/ICdQSE9ORScgOiAnRU1BSUwnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2ZXJpZmljYXRpb24pIHRocm93IG5ldyBFcnJvcignT1RQIG5vdCBzYXZlZCcpO1xyXG5cclxuICAvLyBTZW5kIFNNU1xyXG4gIGlmICh1c2VyLnBob25lICYmIHR5cGUgPT09ICdQSE9ORScpXHJcbiAgICBBa3V1ay5zZW5kU01TKHtcclxuICAgICAgY291bnRyeTogdXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICBudW1iZXI6IHVzZXIucGhvbmUsXHJcbiAgICAgIG1lc3NhZ2U6IGBZb3VyIFdlUGF5IHZlcmlmaWNhdGlvbiBjb2RlIGlzOiAke2NvZGV9LiBUaGFua3MgeW91IGZvciBjaG9vc2luZyBXZVBheWAsXHJcbiAgICB9KS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG5cclxuICBpZiAodXNlci5lbWFpbCAmJiB0eXBlID09PSAnRU1BSUwnKVxyXG4gICAgc2VuZEVtYWlsKHtcclxuICAgICAgdG86IHVzZXI/LmVtYWlsISxcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICB0b19uYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiAndmVyaWZpY2F0aW9uJyxcclxuICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQaG9uZU51bWJlcihudW1iZXI6IHN0cmluZyB8IG51bWJlciwgZGFpbENvZGU6IHN0cmluZykge1xyXG4gIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5sZW5ndGggPiAxMVxyXG4gICAgPyBudW1iZXJcclxuICAgIDogTnVtYmVyKGAke2RhaWxDb2RlLnNwbGl0KCcrJylbMV19JHtudW1iZXIudG9TdHJpbmcoKS5zdWJzdHJpbmcoMSl9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQUlMWV9MSU1JVFMgPSB7XHJcbiAgVElFUl8xOiAyMDBfMDAwbixcclxuICBUSUVSXzI6IDFfMDAwXzAwMG4sXHJcbiAgVElFUl8zOiA1XzAwMF8wMDBuLFxyXG4gIFRJRVJfNDogMTAwXzAwMF8wMDBfMDAwbixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbnkgdmFsaWQgZGF0ZSBzdHJpbmcsIHRpbWVzdGFtcCwgb3IgRGF0ZSBvYmplY3RcclxuICogdG8gYSBzdGFuZGFyZCBJU08gODYwMSBkYXRlIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBEYXRlfSBpbnB1dCAtIFRoZSBkYXRlIGlucHV0IHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfSBUaGUgSVNPIGRhdGUgc3RyaW5nIG9yIG51bGwgaWYgaW52YWxpZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0lTT0RhdGUoaW5wdXQ6IHN0cmluZyB8IG51bWJlciB8IERhdGUpOiBzdHJpbmcgfCBudWxsIHtcclxuICB0cnkge1xyXG4gICAgLy8gSGFuZGxlIGVtcHR5IG9yIHVuZGVmaW5lZCBpbnB1dFxyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gQ29udmVydCB0byBEYXRlIG9iamVjdFxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlucHV0KTtcclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eVxyXG4gICAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gSW52YWxpZCBkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIElTTyBzdHJpbmdcclxuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShhbW91bnQ6IGFueSkge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLU5HJywge1xyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH0pLmZvcm1hdChhbW91bnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlIHwgYW55KSB7XHJcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIG1vbnRocyBhcmUgMC1pbmRleGVkXHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgaG91cnMgPSBob3VycyAlIDEyIHx8IDEyOyAvLyBjb252ZXJ0IDAg4oaSIDEyIGZvciAxMiBBTVxyXG5cclxuICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc30gJHthbXBtfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSXRlbShkYXRhOiBBcnJheTxhbnk+LCBpdGVtOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gZGF0YS5maW5kKFxyXG4gICAgKGQpID0+IGQ/LltmaWVsZF0/LnRvTG93ZXJDYXNlKCk/LnRyaW0oKSA9PT0gaXRlbT8udG9Mb3dlckNhc2UoKT8udHJpbSgpLFxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY3F1aXJlIHJvdyBsb2NrcyBmb3Igd2FsbGV0cyBpbiBjYW5vbmljYWwgb3JkZXIgaW5zaWRlIGEgdHJhbnNhY3Rpb24uXHJcbiAqIFJldHVybnMgd2FsbGV0IHJvd3MuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9ja1dhbGxldHNUeCh0eDogYW55LCB3YWxsZXRJZHM6IHN0cmluZ1tdKSB7XHJcbiAgLy8gZW5zdXJlIGNhbm9uaWNhbCBvcmRlciB0byBhdm9pZCBkZWFkbG9ja3NcclxuICBjb25zdCBvcmRlcmVkID0gWy4uLndhbGxldElkc10uc29ydCgpO1xyXG4gIC8vIGJ1aWxkIHBhcmFtZXRlcml6ZWQgcXVlcnlcclxuICBjb25zdCBwbGFjZWhvbGRlcnMgPSBvcmRlcmVkLm1hcCgoXywgaSkgPT4gYCQke2kgKyAxfWApLmpvaW4oJywnKTtcclxuICAvLyBOT1RFOiB3ZSBhc3N1bWUgdGFibGUgbmFtZSBcIldhbGxldFwiIGFuZCBjb2x1bW4gXCJpZFwiXHJcbiAgY29uc3Qgcm93cyA9IGF3YWl0IHR4LiRxdWVyeVJhd1Vuc2FmZShcclxuICAgIGBTRUxFQ1QgKiBGUk9NIFwiV2FsbGV0XCIgV0hFUkUgaWQgSU4gKCR7cGxhY2Vob2xkZXJzfSkgRk9SIFVQREFURWAsXHJcbiAgICAuLi5vcmRlcmVkLFxyXG4gICk7XHJcbiAgLy8gcmV0dXJuIHJvd3MgYXMtaXNcclxuICByZXR1cm4gcm93cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFtb3VudEluS29ibyhhbW91bnQ6IG51bWJlcikge1xyXG4gIHJldHVybiBCaWdJbnQoTWF0aC5yb3VuZChhbW91bnQgKiAxMDApKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFtb3VudEluTmFpcmEoYW1vdW50OiBhbnkpIHtcclxuICByZXR1cm4gTnVtYmVyKGFtb3VudCkgLyAxMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0RhaWx5TGltaXQoXHJcbiAgZnJvbVdhbGxldDogV2FsbGV0LFxyXG4gIGZyb21Vc2VyOiBVc2VyLFxyXG4gIGFtdDogYmlnaW50LFxyXG4pIHtcclxuICBjb25zdCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICB0b2RheVN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG5cclxuICBjb25zdCB0b3RhbFRyYW5zZmVycmVkVG9kYXkgPSBhd2FpdCBwcmlzbWEudHJhbnNmZXIuYWdncmVnYXRlKHtcclxuICAgIF9zdW06IHsgYW1vdW50OiB0cnVlIH0sXHJcbiAgICB3aGVyZToge1xyXG4gICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogeyBndGU6IHRvZGF5U3RhcnQgfSxcclxuICAgICAgc3RhdHVzOiB7IGluOiBbJ1BFTkRJTkcnLCAnQ09NUExFVEVEJ10gfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRyYW5zZmVycmVkID0gQmlnSW50KHRvdGFsVHJhbnNmZXJyZWRUb2RheS5fc3VtLmFtb3VudCB8fCAwKTtcclxuXHJcbiAgY29uc3QgdGllciA9IGZyb21Vc2VyLmN1cnJlbnRUaWVyIGFzIGtleW9mIHR5cGVvZiBEQUlMWV9MSU1JVFM7XHJcbiAgY29uc3QgZGFpbHlMaW1pdCA9IERBSUxZX0xJTUlUU1t0aWVyXSB8fCBEQUlMWV9MSU1JVFMuVElFUl8xO1xyXG5cclxuICByZXR1cm4gdHJhbnNmZXJyZWQgKyBhbXQgPiBkYWlseUxpbWl0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwVGV4dCh0ZXh0Pzogc3RyaW5nLCBtYXggPSAzMikge1xyXG4gIGlmICghdGV4dCkgcmV0dXJuO1xyXG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnICcpO1xyXG4gIGxldCBsaW5lczogc3RyaW5nW10gPSBbXTtcclxuICBsZXQgY3VycmVudCA9ICcnO1xyXG5cclxuICBmb3IgKGNvbnN0IHcgb2Ygd29yZHMpIHtcclxuICAgIGlmICgoY3VycmVudCArICcgJyArIHcpLnRyaW0oKS5sZW5ndGggPiBtYXgpIHtcclxuICAgICAgbGluZXMucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgIGN1cnJlbnQgPSB3O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudCArPSAnICcgKyB3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnQudHJpbSgpLmxlbmd0aCA+IDApIGxpbmVzLnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvcnRlbkRlc2MoZGVzYz86IHN0cmluZywgbWF4ID0gMzApIHtcclxuICBpZiAoIWRlc2MpIHJldHVybiBkZXNjO1xyXG4gIGlmIChkZXNjLmxlbmd0aCA8PSBtYXgpIHJldHVybiBkZXNjO1xyXG4gIHJldHVybiBkZXNjLnNsaWNlKDAsIG1heCAtIDMpICsgJy4uLic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgYWNjb3VudCxcclxuICBhbW91bnQsXHJcbiAgZGVzYyxcclxuICBjdXJyZW5jeSxcclxuICBiYWxhbmNlLFxyXG4gIGRhdGUsXHJcbiAgdHlwZSxcclxufToge1xyXG4gIGFjY291bnQ6IHN0cmluZztcclxuICBhbW91bnQ6IGJpZ2ludDtcclxuICBkZXNjPzogc3RyaW5nO1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgYmFsYW5jZTogYmlnaW50O1xyXG59KSB7XHJcbiAgcmV0dXJuIGBcclxuQWNjdDogKioqKioqJHthY2NvdW50LnNsaWNlKC00KX1cclxuQW10OiAke2N1cnJlbmN5fSR7Zm9ybWF0Q3VycmVuY3koYW1vdW50SW5OYWlyYShhbW91bnQpKX0gJHt0eXBlfVxyXG5EZXNjOiAke3dyYXBUZXh0KHNob3J0ZW5EZXNjKGRlc2MpKX1cclxuQXZhaWwgQmFsOiAke2N1cnJlbmN5fSR7Zm9ybWF0Q3VycmVuY3koYW1vdW50SW5OYWlyYShiYWxhbmNlKSl9XHJcbkRhdGU6ICR7Zm9ybWF0RGF0ZShkYXRlKX1cclxuVGhhbmtzIGZvciB1c2luZyBXZVBheWA7XHJcbn1cclxuIiwiLy8gc3JjL3V0aWxzL2hhc2gudHNcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IGFyZ29uMiBmcm9tICdhcmdvbjInO1xyXG5pbXBvcnQgeyBpc1Rlc3RpbmdCVk4gfSBmcm9tICcuJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGxhaW46IHN0cmluZykge1xyXG4gIC8vIGRlZmF1bHQgb3B0aW9ucyBmb3IgYXJnb24yIGFyZSBmaW5lOyB0dW5lIGluIHByb2QgaWYgbmVlZGVkXHJcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBsYWluLCAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQYXNzd29yZChoYXNoOiBzdHJpbmcsIHBsYWluOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUoaGFzaCwgcGxhaW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICBpZiAoIXRva2VuKSByZXR1cm47XHJcbiAgaWYgKGlzVGVzdGluZ0JWTih0b2tlbikpIHtcclxuICAgIHJldHVybiBjcnlwdG9cclxuICAgICAgLmNyZWF0ZUhhc2goJ3NoYTI1NicpXHJcbiAgICAgIC51cGRhdGUodG9rZW4gKyBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpLnNsaWNlKDYpKVxyXG4gICAgICAuZGlnZXN0KCdoZXgnKTtcclxuICB9XHJcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUodG9rZW4pLmRpZ2VzdCgnaGV4Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGluKHBpbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICByZXR1cm4gYXdhaXQgYXJnb24yLmhhc2gocGluLCB7XHJcbiAgICB0eXBlOiBhcmdvbjIuYXJnb24yaWQsXHJcbiAgICBtZW1vcnlDb3N0OiAyICoqIDE2LCAvLyA2NCBNQlxyXG4gICAgdGltZUNvc3Q6IDMsXHJcbiAgICBwYXJhbGxlbGlzbTogMSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBpbihcclxuICBoYXNoZWRQaW46IHN0cmluZyxcclxuICBpbnB1dFBpbjogc3RyaW5nLFxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICByZXR1cm4gYXdhaXQgYXJnb24yLnZlcmlmeShoYXNoZWRQaW4sIGlucHV0UGluKTtcclxufVxyXG4iLCIvLyBzcmMvdXRpbHMvand0LnRzXHJcbmltcG9ydCBqd3QsIHsgSnd0UGF5bG9hZCwgU2lnbk9wdGlvbnMgfSBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2NvbmZpZy9lbnYnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSnd0UGF5bG9hZCBleHRlbmRzIEp3dFBheWxvYWQge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduQWNjZXNzVG9rZW4ocGF5bG9hZDogb2JqZWN0KSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAgcGF5bG9hZCxcclxuICAgIGVudmlyb25tZW50Lmp3dC5zZWNyZXQgYXMgc3RyaW5nLFxyXG4gICAge1xyXG4gICAgICBleHBpcmVzSW46IGAke2Vudmlyb25tZW50Lmp3dD8uZXhwaXJlc0lufWhgLFxyXG4gICAgfSBhcyBTaWduT3B0aW9ucyxcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5QWNjZXNzVG9rZW4odG9rZW46IHN0cmluZyk6IEF1dGhKd3RQYXlsb2FkIHtcclxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgZW52aXJvbm1lbnQuand0LnNlY3JldCkgYXMgQXV0aEp3dFBheWxvYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduUmVmcmVzaFRva2VuKHBheWxvYWQ6IG9iamVjdCkge1xyXG4gIC8vIGxvbmcgbGl2ZWQsIGJ1dCB3ZSBzdGlsbCBzdG9yZSBhIGhhc2hlZCBjb3B5IHNlcnZlci1zaWRlXHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIGVudmlyb25tZW50Lmp3dC5yZWZyZXNoU2VjcmV0LCB7XHJcbiAgICBleHBpcmVzSW46IGAke2Vudmlyb25tZW50Lmp3dC5yZWZyZXNoRGF5c31kYCxcclxuICB9IGFzIFNpZ25PcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVJlZnJlc2hUb2tlbih0b2tlbjogc3RyaW5nKTogQXV0aEp3dFBheWxvYWQge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBlbnZpcm9ubWVudC5qd3Quc2VjcmV0KSBhcyBBdXRoSnd0UGF5bG9hZDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VyU2FmZUlkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCI7XHJcbiAgICBsZXQgaWQgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgaWQgKz0gY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpZDtcclxufVxyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCBoYXNoVG9rZW4sIHZlcmlmeVBpbiB9IGZyb20gJy4uLy4uL3V0aWxzL2hhc2gnO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBzaWduQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi91dGlscy9qd3QnO1xyXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBMb2dpbiwgUmVnaXN0ZXIsIFJlc2V0UGFzc3dvcmQgfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gJ2JvdHRsZW5lY2snO1xyXG5pbXBvcnQgeyBzZW5kT1RQIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVVc2VyU2FmZUlkIH0gZnJvbSAnQC91dGlscy91bmlxdWVJZEdlbmVyYXRvcic7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcihkYXRhOiBSZWdpc3Rlcikge1xyXG4gIGlmIChkYXRhPy5lbWFpbCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBlbWFpbDogZGF0YS5lbWFpbCB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSBpbiB1c2UnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XHJcbiAgICAuLi5kYXRhLmV4dHJhLFxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJvbGUgPT09ICdBR0VOVCcpIHJlY29yZC5hZ2VudCA9IHsgY3JlYXRlOiB7fSB9O1xyXG4gIGlmIChkYXRhLnJvbGUgPT09ICdNRVJDSEFOVCcgfHwgZGF0YS5yb2xlID09PSAnSU5TVElUVVRJT04nKVxyXG4gICAgcmVjb3JkLm1lcmNoYW50ID0geyBjcmVhdGU6IHt9IH07XHJcblxyXG4gIGlmIChkYXRhPy5lbWFpbCAhPT0gdW5kZWZpbmVkKSByZWNvcmQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG5cclxuICBjb25zdCB1bmlxdWVJZCA9IGdlbmVyYXRlVXNlclNhZmVJZCgpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIGNvbnN0IF91c2VyID0gYXdhaXQgdHgudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYnZuOiBkYXRhLmJ2biwgLy9IYXNoaW5nIHdpbGwgY29tZSB3aGVuIHVzZXIgYWRkIGVtYWlscyxcclxuICAgICAgICAuLi5yZWNvcmQsXHJcbiAgICAgICAgdW5pcXVlSUQ6IHVuaXF1ZUlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHR4LmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiBfdXNlci5pZCwgYWN0aW9uOiAnUkVHSVNURVInLCBpcDogbnVsbCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIF91c2VyO1xyXG4gIH0pO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvcmdvdFBpbihwYXlsb2FkOiB7XHJcbiAgcGhvbmU/OiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIE9SOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGhvbmU6IHBheWxvYWQ/LnBob25lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQ/LmVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRk9SR09UX1BJTl9DT0RFJyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZGF0YTogTG9naW4pIHtcclxuICBjb25zdCB7IGVtYWlsLCBwaG9uZSwgcGluIH0gPSBkYXRhO1xyXG5cclxuICBpZiAoIXBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQSU4gaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG4gIGlmICghZW1haWwgJiYgIXBob25lKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIC8vIEZpbmQgdXNlciBieSBlbWFpbCBvciBwaG9uZVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFsuLi4oZW1haWwgPyBbeyBlbWFpbCB9XSA6IFtdKSwgLi4uKHBob25lID8gW3sgcGhvbmUgfV0gOiBbXSldLFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgd2FsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuXHJcbiAgaWYgKCF1c2VyLnBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGhhcyBubyBwaW4gc2V0JywgNDAwKTtcclxuXHJcbiAgY29uc3Qgb2sgPSBhd2FpdCB2ZXJpZnlQaW4odXNlci5waW4sIHBpbik7XHJcblxyXG4gIGlmICghb2spIHtcclxuICAgIC8vIE9wdGlvbmFsOiBpbmNyZW1lbnQgZmFpbGVkIGxvZ2luIGF0dGVtcHRzIGhlcmVcclxuICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRkFJTEVEX0xPR0lOJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuICB9XHJcblxyXG4gIC8vIFN1Y2Nlc3NmdWwgbG9naW4g4oaSIExvZyBpdFxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0xPR0lOJyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luV2l0aEZpbmdlcihkYXRhOiB7IGZpbmdlclByaW50OiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZmluZ2VyUHJpbnQgfSA9IGRhdGE7XHJcblxyXG4gIGlmICghZmluZ2VyUHJpbnQpIHtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmluZ2VyIGlzIHJlcXVpcmVkIG9yIGludmFsaWQgZmluZ2VyIGRhdGEnLCA0MjIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRmluZCB1c2VyIGRpcmVjdGx5IGJ5IGZpbmdlcnByaW50XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBmaW5nZXJQcmludDogZmluZ2VyUHJpbnQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgZmluZ2VycHJpbnQnLCA0MDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9nIHN1Y2Nlc3NmdWwgbG9naW5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdMT0dJTicgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChkYXRhOiB7IGVtYWlsOiBzdHJpbmc7IGlwPzogc3RyaW5nIH0pIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0gfSk7XHJcbiAgaWYgKCF1c2VyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGxpbWl0ZXIuc2NoZWR1bGUoKCkgPT4gc2VuZE9UUCh1c2VyKSk7XHJcblxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0ZPUkdPVF9QQVNTV09SRF9DT0RFJywgaXA6IGRhdGEuaXAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFBhc3N3b3JkKGRhdGE6IFJlc2V0UGFzc3dvcmQpIHtcclxuICBjb25zdCB7IHRva2VuLCBuZXdQYXNzd29yZCwgaXAgfSA9IGRhdGE7XHJcbiAgY29uc3QgdmVyaWZpY2F0aW9uSW50ZW50ID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IHRva2VuIH1cclxuICB9KTtcclxuICBpZiAoIXZlcmlmaWNhdGlvbkludGVudCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yIGV4cGlyZWQgdG9rZW4nKTtcclxuXHJcbiAgY29uc3QgbmV3SGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdmVyaWZpY2F0aW9uSW50ZW50LnVzZXJJZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwYXNzd29yZDogbmV3SGFzaCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldm9rZSBhbGwgcmVmcmVzaCB0b2tlbnMgKHNhZmV0eSlcclxuICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRVNFVF9QQVNTV09SRCcsIGlwOiBpcCB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQaW4odXNlcjogVXNlciwgZGF0YTogeyBwaW46IHN0cmluZyB9KSB7XHJcbiAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBpbjogZGF0YS5waW4sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyByZXZva2UgYWxsIHJlZnJlc2ggdG9rZW5zIChzYWZldHkpXHJcbiAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5kZWxldGVNYW55KHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0gfSk7XHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnUkVTRVRfUElOJyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm90YXRlUmVmcmVzaFRva2VuKFxyXG4gIG9sZFRva2VuUmF3OiBzdHJpbmcsXHJcbiAgaXA/OiBzdHJpbmcsXHJcbiAgZGV2aWNlSW5mbz86IHN0cmluZyxcclxuKSB7XHJcbiAgY29uc3Qgb2xkSGFzaCA9IGhhc2hUb2tlbihvbGRUb2tlblJhdyk7XHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEucmVmcmVzaFRva2VuLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgdG9rZW5IYXNoOiBvbGRIYXNoIH0sXHJcbiAgfSk7XHJcbiAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZy5leHBpcmVzQXQgPCBuZXcgRGF0ZSgpKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlZnJlc2ggdG9rZW4nKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogZXhpc3RpbmcudXNlcklkIH0gfSk7XHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcblxyXG4gIGNvbnN0IG5ld1JhdyA9IG5hbm9pZCg2NCk7XHJcbiAgY29uc3QgbmV3SGFzaCA9IGhhc2hUb2tlbihuZXdSYXcpO1xyXG4gIGNvbnN0IG5ld0V4cGlyZXMgPSBhZGREYXlzKG5ldyBEYXRlKCksIE51bWJlcihlbnZpcm9ubWVudC5qd3QucmVmcmVzaERheXMpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihbXHJcbiAgICBwcmlzbWEucmVmcmVzaFRva2VuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9IH0pLFxyXG4gICAgcHJpc21hLnJlZnJlc2hUb2tlbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIHRva2VuSGFzaDogbmV3SGFzaCEsXHJcbiAgICAgICAgZXhwaXJlc0F0OiBuZXdFeHBpcmVzLFxyXG4gICAgICAgIGRldmljZUluZm8sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnUkVGUkVTSF9ST1RBVEVEJywgaXAgfSxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNpZ25BY2Nlc3NUb2tlbih7IHN1YjogdXNlci5pZCwgcm9sZTogdXNlci5yb2xlIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBhY2Nlc3NUb2tlbixcclxuICAgIHJlZnJlc2hUb2tlbjogbmV3UmF3LFxyXG4gICAgdXNlcjogeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIHJvbGU6IHVzZXIucm9sZSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVmcmVzaFRva2VuUmF3Pzogc3RyaW5nLCBpcD86IHN0cmluZykge1xyXG4gIGlmICghcmVmcmVzaFRva2VuUmF3KSByZXR1cm47XHJcbiAgY29uc3QgaGFzaCA9IGhhc2hUb2tlbihyZWZyZXNoVG9rZW5SYXcpO1xyXG4gIGF3YWl0IHByaXNtYS5yZWZyZXNoVG9rZW4uZGVsZXRlTWFueSh7IHdoZXJlOiB7IHRva2VuSGFzaDogaGFzaCB9IH0pO1xyXG4gIC8vIGF1ZGl0IGxvZyBvcHRpb25hbFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZW5kT1RQKHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS50eXBlID09PSAnRU1BSUwnKSB7XHJcbiAgICBjb25zdCBfdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoX3VzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBleGlzdC4gQ2xpY2sgb24gZm9yZ290IHBpbicsIDQwOSk7XHJcblxyXG4gICAgbGltaXRlci5zY2hlZHVsZSgoKSA9PlxyXG4gICAgICBzZW5kT1RQKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IGRhdGE/Lm5hbWUgPz8gJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhLnR5cGUsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgYW1vdW50SW5OYWlyYSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1c2VyOiBhbnkpID0+IHtcclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBfdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgbWVyY2hhbnQ6IHRydWUsXHJcbiAgICAgIGFnZW50OiB0cnVlLFxyXG4gICAgICB3YWxsZXRzOiB0cnVlLFxyXG4gICAgICBhZGRyZXNzOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyAuLi5hdXRoVXNlciB9ID0gX3VzZXI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hdXRoVXNlcixcclxuICAgIHdhbGxldHM6IGF1dGhVc2VyLndhbGxldHMubWFwKCh3KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udyxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcuYXZhaWxhYmxlQmFsYW5jZSksXHJcbiAgICAgICAgcmVzZXJ2ZWRCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcucmVzZXJ2ZWRCYWxhbmNlKSxcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcubGVkZ2VyQmFsYW5jZSksXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZXMgPSBbJ0xPQ0FMJywgJ0RFVkVMT1AnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KVxyXG4gID8gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwZWQ4Yjk5Yi04MDk3LTRlNDktYmQ0Yy1mZjA0MTBjNTdkMjcnLFxyXG4gICAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdmNjcxZGE1Ny1lMjgxLTRiNDAtOTY1Zi1hOTZmNDIwNTQwNWUnLFxyXG4gICAgICAgIG5hbWU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNDZlNjhjZjYtZjM1NS00NTM2LWFlOTYtYWRmMjQ2ODI4MDlmJyxcclxuICAgICAgICBuYW1lOiAnQ29ycG9yYXRlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzkyZDUxNTgtYTRjNS00NDE4LTgzZjctYTgxM2QzOTg5YTg1JyxcclxuICAgICAgICBuYW1lOiAnSW5kaXZpZHVhbCcsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50cmllcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ1ZDZjLWE5YjQtNDUyZC04ODcyLTRhZGEzZDQ2YjUwNicsXHJcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnVVMnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdVU0EnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwOGRkNzc1NC00NTRkLTRhYjAtOGVkMS01ZWVkOTMwYWQwNjcnLFxyXG4gICAgICAgIG5hbWU6ICdHaGFuYScsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdHSCcsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ0dIQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3NzY0LWUyYWItNDU1ZS04MzU5LTg0ODA5NTUwZjE3YycsXHJcbiAgICAgICAgbmFtZTogJ1RvZ28nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnVEcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdUR08nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwOGRkNzgyYi0xMzRjLTRlN2MtODcyNi00NTI0YjhlNDFmYTgnLFxyXG4gICAgICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnQlInLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdCUkEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdjMTVhZDlhZS1jNGQ3LTQzNDItYjcwZi1kZTU1MDg2MjdlM2InLFxyXG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ05HJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnTkdBJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNGFhOWQ1OWUtMDRlNy00OTg0LTk3OTQtODVhNTU0ODlkNDMzJyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdORycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ05HQScsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJlbmNpZXMgPSBbJ0xPQ0FMJywgJ0RFVkVMT1AnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KVxyXG4gID8gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ZWViNTRjOC0yNGQ3LTExZjAtYTgxOC02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzNCcsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0Q0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnODI2NDdiMjktMTMwMi0xMWYwLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnUkFORCcsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnWkFSJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnOThkNjQ1ODMtZmI3ZS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFycycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0FEJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYWY4YzkxNjgtZmRjNS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFyczMnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ0NEMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2M4ZmU0MTlmLWZiN2UtMTFlZi1hOGE5LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ0NhbmFkaWFuIERvbGxhcnMyJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDRDInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdkOThiYTVhYi1mYjc4LTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdUYW56YW5pYSBTaGlsbGluZ3MnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ1RaUycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2ZkNWU0NzRkLWJiNDItNGRiMS1hYjc0LWU4ZDJhMDEwNDdlOScsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEgTmFpcmEnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ05HTicsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzQ1ODUyZjBjLTg0ZmEtNDEwYy1iNjZjLTFmZmVjNTZlNWNkOCcsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEgTmFpcmEnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ05HTicsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmtzID0gW1xyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDaXRpIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFY29iYW5rIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRlbGl0eSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQmFuayBvZiBOaWdlcmlhJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQ2l0eSBNb251bWVudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RCYW5rIFBsYycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hlcml0YWdlJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSkFJWiBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2V5c3RvbmUgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0t1ZGEgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheWNvbShPUEFZKScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Byb3ZpZHVzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSYW5kIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQb2xhcmlzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuYmljSUJUQyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3RhbmRhcmQgQ2hhcnRlcmVkIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGVybGluZyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU1VOVFJVU1QgQkFOSycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaW9uIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbml0ZWQgQmFuayBmb3IgQWZyaWNhJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pdHkgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1dlbWEvQUxBVCcsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1pFTklUSCBCQU5LIFBMQycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZGRCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhbmdlcmluZSBNb25leScsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQyNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhaiBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3BhcmtsZScsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hvcGUgUFNCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFycmFsZXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFeW93bycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJzlQYXltZW50IFNlcnZpY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05vdmEgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RpdGFuIFRydXN0IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb3ZlbmFudCBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYWdlIEZpbmFuY2lhbHMnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGb3J0aXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGU0RIIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc0MDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHbG9idXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZCTlFVRVNUIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNjAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBU08gU2F2aW5ncyAmIExvYW5zJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVuTW9uZXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuYmljIElCVEMgQGVhc2Ugd2FsbGV0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRnV0byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dyZWVud2ljaCBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGFwbyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05JUlNBTCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FCVSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FjY2lvbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NlbGx1bGFudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvd2VuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnZVRyYW56YWN0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWR2YW5zIExhIEZheWV0dGUgIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FyYm9uJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFsbVBheSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9uaWVwb2ludCcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tPTkdBUEFZJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWJiZXkgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ludGVyc3dpdGNoIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXlzdGFjayBQYXltZW50cyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWHByZXNzIFBheW1lbnRzJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUNDRUxFUkVYIE5FVFdPUksnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcmNhIFBheW1lbnRzIENvbXBhbnkgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOSUJBREFOIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlbWl1bSBUcnVzdCBiYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9NbyBQU0InLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTbWFydENhc2ggUGF5bWVudCBTZXJ2aWNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25leSBNYXN0ZXIgUFNCJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkFJUk1PTkVZIE1JQ1JPRklOQU5DRSBCQU5LIExURCcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDU1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NJR05BVFVSRSBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT1BUSU1VUyBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDM2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW1wZXJzYW5kIE1pY3JvZmluYW5jZSBCYW5rIChCYW5rbHkpJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnV0FZQSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDU5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BhZ2EnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBTC1CYXJha2FoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnM2xpbmUgQ2FyZCBNYW5hZ2VtZW50IExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBYm92ZSBPbmx5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzIFllbGxvJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDEzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWRhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDgzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWRkb3NzZXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGV5ZW1pIENvbGxlZ2UgU3RhZmYgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZmVraGFmZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FHIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGVrdW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGVydCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsLUhheWF0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWxsd29ya2VycyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FscGhhIEthcGl0YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbWFjIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW1qdSBVbmlxdWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBTU1MIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FuY2hvcmFnZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FwZWtzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXBwbGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcmlzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Fzc2V0TWF0cml4IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXNzZXRzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXN0cmFwb2xhcmlzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXVjaGkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCYWluZXMgQ3JlZGl0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhbG9ndW4gRnVsYW5pIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFsb2d1biBHYW1iYXJpIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQkMgS2FzaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JJUEMgTWljcm9maW5hbmNlIEJhbmsgJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzM2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQm9jdHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCT0kgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb3JndSAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb3NhayBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyZW50IE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCcmV0aHJlbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyaWRnZXdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyaWdodHdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NhcmV0YWtlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nhc2hDb25uZWN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzYwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ0VNQ1MgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDaGFuZ2FuIFJUUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NoaWt1bSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NodWt3dW5lbnllIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NJVCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvYWxjYW1wIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjU0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29hc3RsaW5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS3JlZGkgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzgwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29uc3VtZXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb250ZWMgR2xvYmFsIEluZm90ZWNoIExpbWl0ZWQgKE5vd05vdyknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb29wIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb3Jlc3RlcCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nvcm9uYXRpb24gTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NyZWRpdCBBZnJpcXVlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3Jvd2Rmb3JjZScsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0N5YmVyc3BhY2UgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Rhdm9kYW5pIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzkxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRGF5bGlnaHQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFYWdsZSBGbGlnaHQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFYXJ0aG9sZXVtJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnZS1CYXJjcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb2JhbmsgWHByZXNzIEFjY291bnQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFY29Nb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFZEZpbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vrb25kbyBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwOTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFSy1SZWxpYWJsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VtZXJhbGRzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW1waXJlIHRydXN0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VudGVycHJpc2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VzYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFc28tRSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V2YW5nZWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFdmVyZ3JlZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQVNUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOIE1vcnRnYWdlcyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkNNQiBFYXN5IEFjY291bnQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQ1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGZWRlcmFsIFBvbHl0ZWNobmljIE5la2VkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGVyYWwgVW5pdmVyc2l0eSBEdXRzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGV0aCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ4MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZFBvbHkgTmFzYXJhd2EgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGRVQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGRlMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRlbGl0eSBNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRmdW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmluYVRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlybXVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQXBwbGUgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IEdlbmVyYXRpb24gTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IE9wdGlvbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IFJveWFsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmx1dHRlcndhdmUgVGVjaG5vbG9neSBTb2x1dGlvbnMgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZvcnRpc01vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Z1bGxyYW5nZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dhc2h1YSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dhdGV3YXkgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaWFudCBTdHJpZGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaWdpbnlhIE1pY3JvZmluYW5jZSBiYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2lyZWkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHbG9yeSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dNQiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dvb2QgTmVpZ2JvdXJzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR293YW5zIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTIyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW5CYW5rIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW52aWxsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dyb29taW5nIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RJIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIYWNrbWFuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGFnZ2FpIE1vcnRnYWdlIEJhbmsgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hhc2FsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVhZHdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hlZG9ubWFyaycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0lCSUxFIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSWtlbm5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSWtpcmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbGlzYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbW8gU3RhdGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbXBlcmlhbCBIb21lcyBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW5maW5pdHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbmZpbml0eSBUcnVzdCBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW5ub3ZlY3RpdmVzIEtlc2gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbnRlbGxpZmluJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW50ZXJsYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSVJMIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSXNhbGVveW8gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdKdWJpbGVlLUxpZmUgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0thZFBvbHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLQ01CIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2Vnb3cnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLb250YWdvcmEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYWdvcyBCdWlsZGluZyBJbnZlc3RtZW50IENvbXBhbnknLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYXZlbmRlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xlZ2VuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xpZ2h0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xvdm9udXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNMzYnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWlubGFuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW5zdHJlZXQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWludHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWxhY2h5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWFyaXRpbWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0MTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXlGYWlyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWF5RnJlc2ggTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01lZ2FwcmFpc2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaWNyb2NyZWQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaWRsYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWludEZpbmV4IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWt1ZGknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb2x1c2kgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25leSBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5Qm94JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW95b2ZhZGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNdXR1YWwgQmVuZWZpdHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNdXR1YWwgVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOYWdhcnRhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmF2eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05kaW9yYWggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXB0dW5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmV3IERhd24gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgR29sZGVuIFBhc3R1cmVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmV3IFBydWRlbnRpYWwgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05JUCBWaXJ0dWFsIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc5OTk5OTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdObmV3IFdvbWVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTlBGIE1pY3JvRmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnNzAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOdXR1cmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOd2FubmVnYWRpIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2NoZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09oYWZpYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09rcG9nYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09sYWJpc2kgT25hYmFuam8gVW5pdmVyc2l0eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09MT0ZJTiBPV0VOQSBNSUNST0ZJTkFOQ0UgQkFOSyAnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPbHVjaHVrd3UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPbWl5ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09tb2x1YWJpIHNhdmluZ3MgYW5kIGxvYW5zJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT3JhdWt3dSBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0OTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPc2NvdGVjaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Bhcmt3YXktUmVhZHlDYXNoJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGF0cmlja0dvbGQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXlBdHRpdHVkZSBPbmxpbmUnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZWNhblRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTM3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGVubnl3aXNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGVyc29uYWwgVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZXRyYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BpbGxhciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BsYXRpbnVtIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQb2x5dW53YW5hIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlZW1pbmVudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQxMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ByZXN0aWdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHVycGxlbW9uZXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQeXJhbWlkIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNjU3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUXVpY2tmdW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVmdWdlIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWdlbnQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWhvYm90aCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlbGlhbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVwaGlkaW0gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSaWNod2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUm95YWwgRXhjaGFuZ2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWZlIEhhdmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2FmZVRydXN0JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2FnYW11IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2VlZCBDYXBpdGFsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2VlZHZlc3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuZm9yZCBNaWNyb2ZpbmFuY2UgQmFrJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTYyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3RlbGxhcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N1bHNwYXAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUYWdQYXknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUQ0YgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGVhc3lNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUaGluayBGaW5hbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJpZGVudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJ1c3Rib25kIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcnVzdGZ1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVICYgQyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOQUFCIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pYmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pY2FsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pbWFpZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaVV5byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOTiBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWYXMybmV0cyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmVyZGFudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZpcnR1ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Zpc2EgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWVE5ldHdvcmtzJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWHNsbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWUNUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWWVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWW9iZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1plbml0aCBFYXp5IFdhbGxldCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1plbml0aE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RpdGFuLVBheXN0YWNrJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDM5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGhlIEFsdGVybmF0aXZlIEJhbmsoQWx0QmFuayknLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNa29ibyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ1NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NvdXJjZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDY0MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhbmtJVCBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzUnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVBZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKCFhZGRyZXNzKSByZXR1cm4gJyc7XHJcblxyXG4gIGNvbnN0IGNsZWFuZWQgPSBhZGRyZXNzLnJlcGxhY2UoL1teYS16QS1aMC05XFxzLFxcLV0vZywgJycpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVkID0gY2xlYW5lZC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xyXG5cclxuICByZXR1cm4gbm9ybWFsaXplZDtcclxufVxyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYmFua3MsIGNvdW50cmllcywgY3VycmVuY2llcywgc2FuaXRpemVBZGRyZXNzLCB0eXBlcyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIGZpbmRJdGVtLFxyXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyLFxyXG4gIGlzVGVzdGluZ0JWTixcclxuICB1c2VFcnJvclBhcnNlcixcclxufSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBDb3Jwb3JhdGUsIFBheW1lbnQsIFBlcnNvbmFsLCBUcmFuc2ZlciwgaVdhbGxldCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuY29uc3QgQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBlbnZpcm9ubWVudC5lbWJlZGx5Py51cmwgPz8gJ2h0dHBzOi8vd2Fhcy1zdGFnaW5nLmVtYmVkbHkubmcvYXBpL3YxJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAneC1hcGkta2V5JzogZW52aXJvbm1lbnQuZW1iZWRseT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uSWQgPSBlbnZpcm9ubWVudC5lbWJlZGx5LmlkO1xyXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5jbHVkZXMoY29uZmlnLm1ldGhvZCB8fCAnJykpIHtcclxuICAgIGNvbmZpZy5kYXRhID0ge1xyXG4gICAgICAuLi5jb25maWcuZGF0YSxcclxuICAgICAgb3JnYW5pemF0aW9uSWQsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gY29uZmlnO1xyXG59KTtcclxuXHJcbmNvbnN0IFBheW91dENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDpcclxuICAgIGVudmlyb25tZW50LmVtYmVkbHk/LnBheW91dFVSTCA/PyAnaHR0cHM6Ly9wYXlvdXQtc3RhZ2luZy5lbWJlZGx5Lm5nL2FwaScsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ3gtYXBpLWtleSc6IGVudmlyb25tZW50LmVtYmVkbHk/LmtleSA/PyAnJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNsYXNzIEN1c3RvbWVyIHtcclxuICBzdGF0aWMgYXN5bmMgcGVyc29uYWwocGF5bG9hZDogUGVyc29uYWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyVHlwZSA9IGZpbmRJdGVtKHR5cGVzLCAnSW5kaXZpZHVhbCcsICduYW1lJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBmaW5kSXRlbShcclxuICAgICAgICBjb3VudHJpZXMsXHJcbiAgICAgICAgcGF5bG9hZC5jb3VudHJ5LFxyXG4gICAgICAgIHBheWxvYWQ/LmNvdW50cnk/Lmxlbmd0aCA+IDIgPyAnbmFtZScgOiAnY291bnRyeUNvZGVUd28nLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgeyBjb3VudHJ5OiBjLCBhZGRyZXNzLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG4gICAgICBjb25zdCBzYW5pdGl6ZWRBZGRyZXNzID0gc2FuaXRpemVBZGRyZXNzKGFkZHJlc3MpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgIGN1c3RvbWVyVHlwZUlkOiBjdXN0b21lclR5cGU/LmlkLFxyXG4gICAgICAgIGNvdW50cnlJZDogY291bnRyeT8uaWQsXHJcbiAgICAgICAgYWRkcmVzczogc2FuaXRpemVkQWRkcmVzcyxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdFbWJlZGx5IEFQSSBDYWxsJyk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9hZGQnLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsICdFcnJvciBFbWJlZGx5IEFQSSBDYWxsJyk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAgICAgcmVzPy5tZXNzYWdlID8/IHJlcy50aXRsZSxcclxuICAgICAgICAgIHJlcz8uc3RhdHVzQ29kZSA/PyByZXMuc3RhdHVzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQuZ2V0KCcvY3VzdG9tZXJzL2dldC9pZC8nICsgaWQpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBDdXN0b21lciBmcm9tIEVtYmVkbHknLCA0MDQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjb3Jwb3JhdGUocGF5bG9hZDogQ29ycG9yYXRlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXN0b21lclR5cGVJZCA9IGZpbmRJdGVtKHR5cGVzLCBwYXlsb2FkLnR5cGUsICduYW1lJyk/LmlkO1xyXG4gICAgICBjb25zdCBlQ291bnRyeSA9IGZpbmRJdGVtKGNvdW50cmllcywgcGF5bG9hZC5jb3VudHJ5LCAnY291bnRyeUNvZGVUd28nKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY291bnRyeSwgdHlwZSwgLi4ucmVzdCB9ID0gcGF5bG9hZDtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgIGN1c3RvbWVyVHlwZUlkLFxyXG4gICAgICAgIGNvdW50cnlJZDogZUNvdW50cnkuaWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9hZGQnLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzY29kZSAhPT0gJzAwJylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlcy5tZXNzYWdlLCByZXMuc3RhdHVzQ29kZSk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeUtZQyhwYXlsb2FkOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBidm4gPSBwYXlsb2FkLmJ2bjtcclxuICAgICAgaWYgKGlzVGVzdGluZ0JWTihidm4pKSBidm4gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigxMSk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9reWMvcHJlbWl1bS1reWM/dmVyaWZ5PTEnLCB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBidm4sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDdXN0b21lciBoYXMgYWxyZWFkeSBjb21wbGV0ZWQgQlZOIHZlcmlmaWNhdGlvbiEnO1xyXG5cclxuICAgICAgaWYgKHJlcyAmJiByZXMubWVzc2FnZS5pbmNsdWRlcyhtZXNzYWdlKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXMubWVzc2FnZSwgcmVzLnN0YXR1c0NvZGUpO1xyXG5cclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGU/Lm1lc3NhZ2UsIGUuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIHN0YXRpYyBhc3luYyBCVk4oKSB7fVxyXG4gIHN0YXRpYyBhc3luYyBOSU4oKSB7fVxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlXZWJob29rKHJhd0JvZHk6IGFueSwgc2lnbmF0dXJlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IGhtYWMgPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgZW52aXJvbm1lbnQuZW1iZWRseS5rZXkpO1xyXG4gICAgaG1hYy51cGRhdGUocmF3Qm9keSwgJ3V0ZjgnKTtcclxuICAgIGNvbnN0IGNvbXB1dGVkU2lnbmF0dXJlID0gaG1hYy5kaWdlc3QoJ2hleCcpO1xyXG5cclxuICAgIHJldHVybiBjb21wdXRlZFNpZ25hdHVyZSAhPT0gc2lnbmF0dXJlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgV2FsbGV0IHtcclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKHdhbGxldDogaVdhbGxldCkge1xyXG4gICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jaWVzLmZpbmQoKGMpID0+IGMuc2hvcnROYW1lID09PSB3YWxsZXQuY3VycmVuY3kpO1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVuY3k6IGMsIHVzZXJJZCwgLi4ucmVzdCB9ID0gd2FsbGV0O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy93YWxsZXRzL2FkZCcsIHtcclxuICAgICAgLi4ucmVzdCxcclxuICAgICAgY3VycmVuY3lJZDogY3VycmVuY3k/LmlkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcwMCcpIHJldHVybjtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy93YWxsZXRzL2dldC93YWxsZXQvJyArIGlkKTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRXYWxsZXRCeUFjY291bnQoYWNjb3VudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQuZ2V0KCcvd2FsbGV0cy9nZXQvYWNjb3VudC8nICsgYWNjb3VudCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcyMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBXYWxsZXQgZnJvbSBFbWJlZGx5JywgNDA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocGF5bG9hZDogVHJhbnNmZXIpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wdXQoXHJcbiAgICAgICcvd2FsbGV0cy93YWxsZXQvdHJhbnNhY3Rpb24vdjIvd2FsbGV0LXRvLXdhbGxldCcsXHJcbiAgICAgIHBheWxvYWQsXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhbmsge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy9iYW5rcycpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMjAwJylcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgV2FsbGV0IGZyb20gRW1iZWRseScsIDQwNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHRyYW5zZmVyKHBheWxvYWQ6IFBheW1lbnQpIHtcclxuICAgIGNvbnN0IHdlYmhvb2tVcmwgPSBlbnZpcm9ubWVudC5lbWJlZGx5LndlYmhvb2tVUkw7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25BY2NvdW50ID0gZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50O1xyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uTmFtZSA9IGVudmlyb25tZW50LmVtYmVkbHkub3JnTmFtZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMuZmluZCgoYykgPT4gYy5zaG9ydE5hbWUgPT0gcGF5bG9hZC5jdXJyZW5jeSk7XHJcbiAgICBjb25zdCBiYW5rID0gYmFua3MuZmluZCgoYikgPT5cclxuICAgICAgYi5iYW5rTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBheWxvYWQuZGVzdGluYXRpb25CYW5rLnRvTG93ZXJDYXNlKCkpLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWJhbmspIHRocm93IG5ldyBDdXN0b21FcnJvcignQmFuayBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVuY3k6IGMsIGRlc3RpbmF0aW9uQmFuaywgLi4ucmVzdCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQYXlvdXRDbGllbnQucG9zdCgnL2ludGVyLWJhbmstdHJhbnNmZXInLCB7XHJcbiAgICAgIC4uLnJlc3QsXHJcbiAgICAgIHdlYmhvb2tVcmwsXHJcbiAgICAgIGN1cnJlbmN5SWQ6IGN1cnJlbmN5Py5pZCxcclxuICAgICAgZGVzdGluYXRpb25CYW5rQ29kZTogYmFuaz8uYmFua0NvZGUsXHJcbiAgICAgIHNvdXJjZUFjY291bnROdW1iZXI6IG9yZ2FuaXphdGlvbkFjY291bnQgKyAnJyxcclxuICAgICAgc291cmNlQWNjb3VudE5hbWU6IG9yZ2FuaXphdGlvbk5hbWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbWJlZGx5IHtcclxuICBzdGF0aWMgY3VzdG9tZXJzID0gQ3VzdG9tZXI7XHJcbiAgc3RhdGljIHZhbGlkYXRpb25zID0gVmFsaWRhdGlvbjtcclxuICBzdGF0aWMgd2FsbGV0cyA9IFdhbGxldDtcclxuICBzdGF0aWMgYmFua3MgPSBCYW5rO1xyXG59XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgVVZlcmlmeUJWTiB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbU51bWJlciwgaXNUZXN0aW5nQlZOLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LnlvdXZlcmlmeT8udXJsID8/ICdodHRwczovL2FwaS5zYW5kYm94LnlvdXZlcmlmeS5jbycsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgdG9rZW46IGVudmlyb25tZW50LnlvdXZlcmlmeT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFlvdXZlcmlmeSB7XHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeUJWTihkYXRhOiBVVmVyaWZ5QlZOKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAoaXNUZXN0aW5nQlZOKGRhdGEuaWQpKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICdCdW5jaCcsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJ0RpbGxvbicsXHJcbiAgICAgICAgICBkYXRlT2ZCaXJ0aDogJzEyLTEyLTE5OTQnLFxyXG4gICAgICAgICAgY291bnRyeTogJ05HJyxcclxuICAgICAgICAgIG1vYmlsZTogJzA4MCcgKyBnZW5lcmF0ZVJhbmRvbU51bWJlcig4KSxcclxuICAgICAgICAgIGdlbmRlcjogJ01hbGUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL3YyL2FwaS9pZGVudGl0eS9uZy9idm4nLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YT8uc3RhdHVzPy5pbmNsdWRlcygnbm90X2ZvdW5kJykpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlc3VsdC5kYXRhLnJlYXNvbiwgNDA0KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YSkgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzLm1lc3NhZ2UsIHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5QWRkcmVzcyhwaG9uZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICdodHRwczovL2FkZHJlc3Muc3ZjLnlvdXZlcmlmeS5jby92Mi9hcGkvZGlnaXRhbC1hZGRyZXNzZXMvbG9va3VwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zZW50OiB0cnVlLFxyXG4gICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiBlbnZpcm9ubWVudC55b3V2ZXJpZnk/LmtleSA/PyAnJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsICdBRERSRVNTIFZlcnknKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8gfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmNvbnN0IFRYTkZFRSA9IHByb2Nlc3MuZW52LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1RyYW5zZmVyRXZlbnQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghZXZlbnQpIHRocm93IG5ldyBDdXN0b21FcnJvcignRXZlbnQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIGFtb3VudDogc3RyaW5nO1xyXG4gICAgY3VycmVuY3k6IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uQmFuazogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2VBY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICBzb3VyY2VBY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgcmVtYXJrczogc3RyaW5nO1xyXG4gICAgZnJvbVdhbGxldElkOiBzdHJpbmc7XHJcbiAgICBpbml0aWF0ZWRCeTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVtYmVkbHkuYmFua3MudHJhbnNmZXIoe1xyXG4gICAgICBhbW91bnQ6IE51bWJlcihwYXlsb2FkLmFtb3VudCksXHJcbiAgICAgIGN1cnJlbmN5OiBwYXlsb2FkLmN1cnJlbmN5LFxyXG4gICAgICBkZXN0aW5hdGlvbkJhbms6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgIHJlbWFya3M6IHBheWxvYWQucmVtYXJrcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzdWx0LnN1Y2NlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdUcmFuc2ZlciBub3Qgc3VjY2VlZGVkJywgNTAwKTtcclxuXHJcbiAgICBjb25zdCBhbW91bnQgPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXJSZWNvcmQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBZGQgdGhpcyB0cmFuc2FjdGlvbiB0byB0aGUgUHJvdmlkZXIgYWNjb3VudFxyXG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHR4LnByb3ZpZGVyLnVwc2VydCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgICAgIGNyZWF0ZTogeyBwcm92aWRlcjogJ0VNQkVETFknLCBiYWxhbmNlOiBhbW91bnQgfSxcclxuICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgIGJhbGFuY2U6IHsgaW5jcmVtZW50OiBhbW91bnQgfSxcclxuICAgICAgICAgIHRvdGFsOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4xIENyZWF0ZSBwZW5kaW5nIHRyYW5zZmVyXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4yIERlYml0IHVzZXIgd2FsbGV0XHJcbiAgICAgIGNvbnN0IGZyb21XYWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignRnJvbSB3YWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0JhbGFuY2UgPSBCaWdJbnQoZnJvbVdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSkgLSBhbW91bnQ7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdCYWxhbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRGViaXQgZm9yIEZFRXNcclxuICAgICAgY29uc3QgZmVlUmF0ZSA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcbiAgICAgIGNvbnN0IG5ld0JhbEFmdGVyRmVlID0gQmlnSW50KHdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGZyb21XYWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT1UUkFOU0ZFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlZmVyZW5jZTogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZXh0ZXJuYWwgdHJhbnNmZXInLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjMgQ3JlYXRlIGxlZGdlciBlbnRyeSAoREVCSVQpXHJcbiAgICAgIGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IC1hbW91bnQsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbGFuY2UsXHJcbiAgICAgICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByb3ZpZGVyIGZsb2F0IGxlZGdlciByb3cgKGNyZWRpdClcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IGFtb3VudCxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogQmlnSW50KHByb3ZpZGVyLmJhbGFuY2UgYXMgYW55KSArIGFtb3VudCxcclxuICAgICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgICAgdG9BY2NvdW50OiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjQgQ3JlYXRlIG91dGJveCBmb3IgYXN5bmMgcHVibGlzaFxyXG4gICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5wcm9jZXNzaW5nJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC5pbml0aWF0ZWRCeSxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgICB0b0FjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYSBkZWJpdCB0cmFuc2FjdGlvblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09VFJBTlNGRVI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT1GRUU9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgICAgY29uc3QgZmVlSm91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0Py5pZCxcclxuICAgICAgICAgICAgdG9Qcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBEZWJpdCBMZWRnZXJcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBmZWVKb3VybmFsLmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IC1mZWVSYXRlLFxyXG4gICAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdCYWxBZnRlckZlZSxcclxuICAgICAgICAgIHR5cGU6ICdGRUUnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgICB0b1Byb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEZlZSBsZWRnZXJcclxuICAgICAgY29uc3QgZmVlTGVkZ2VyID0gYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBmZWVKb3VybmFsLmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IGZlZVJhdGUsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICAgIHRvUHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIEZlZVxyXG4gICAgICBjb25zdCBmZWUgPSBhd2FpdCB0eC5mZWUuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihmZWVSYXRlKSwgLy9JbiBLb2JvLFxyXG4gICAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgICAgcmF0ZTogTnVtYmVyKGZlZVJhdGUpLCAvL0luIEtvYm8sXHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgbGVkZ2VySWQ6IGZlZUxlZGdlci5pZCxcclxuICAgICAgICAgIHR5cGU6ICdFWFRFUk5BTCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgcHJvY2Vzc2luZyB0cmFuc2FjdGlvbiBmb3IgRmVlXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihmZWVSYXRlKSxcclxuICAgICAgICAgIGl0ZW1JZDogZmVlLmlkLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQuaW5pdGlhdGVkQnksXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHR5cGU6ICdkZWJpdCcsXHJcbiAgICAgICAgICAgIHJlYXNvbjogJ0NvbW1pc3Npb24gb24gTmlwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vID09PT09PT09PT09PUZFRT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIHJldHVybiB0cmFuc2ZlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlclJlY29yZDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdGQUlMRUQnLFxyXG4gICAgICAgICAgcmVhc29uOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlID8/IGVyci5tZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdGQUlMRUQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSA/PyBlcnIubWVzc2FnZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC5pbml0aWF0ZWRCeSxcclxuICAgICAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgICAgICBjdXJyZW5jeTogcGF5bG9hZC5jdXJyZW5jeSxcclxuICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgdG9BY2NvdW50TnVtYmVyOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgIHRvQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgICAgIGVycm9yOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlID8/IGVyci5tZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0V4dGVybmFsIHRyYW5zZmVyIGZhaWxlZCcsIDUwMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICcuL3F1ZXVlcyc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgZm9ybWF0VHJhbnNmZXJTTVMgfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzQWlydGltZUV2ZW50KGV2ZW50SWQ6IGFueSkge1xyXG4gIGNvbnN0IGV2ZW50ID0gYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBhZ2dyZWdhdGVJZDogZXZlbnRJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWV2ZW50KSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHBheWxvYWQgPSBldmVudD8ucGF5bG9hZCBhcyB7XHJcbiAgICBhaXJ0aW1lSWQ6IHN0cmluZztcclxuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gICAgYW1vdW50Pzogc3RyaW5nO1xyXG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XHJcbiAgICB1c2VySWQ/OiBzdHJpbmc7XHJcbiAgICBmcm9tV2FsbGV0SWQ/OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgYmFsYW5jZTogbnVtYmVyO1xyXG4gICAgYWNjb3VudE51bWJlcjogbnVtYmVyO1xyXG4gIH07XHJcblxyXG4gIGxldCByZXNwb25zZTogYW55ID0gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHJlc3BvbnNlID0gYXdhaXQgQWt1dWsuYWlydGltZSh7XHJcbiAgICAgIG51bWJlcjogcGF5bG9hZC5waG9uZU51bWJlcixcclxuICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgY291bnRyeTogcGF5bG9hZD8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICBiaWxsaW5nOiAncHJlcGFpZCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBtYXJrIHRhbnNhY3Rpb24gY29tcGxldGVkXHJcblxyXG4gICAgICAvLyBUT0RPOjogQ2hlY2sgdGhpcyBhZ2FpbiwgaXQgY2FuIHB1bGwgYW55IGxlZGdlclJvd1xyXG4gICAgICBjb25zdCBsZWRnZXJSb3cgPSBhd2FpdCB0eC5sZWRnZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB3YWxsZXRJZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByYXRlID0gTnVtYmVyKHByb2Nlc3MuZW52LkFJUlRJTUVfUEVSQ0VOVCkgPz8gMC4wMjU7XHJcbiAgICAgIGF3YWl0IHR4LmZlZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IHBheWxvYWQ/LmFpcnRpbWVJZCxcclxuICAgICAgICAgIHByb3ZpZGVyOiBsZWRnZXJSb3c/LnByb3ZpZGVySWQsXHJcbiAgICAgICAgICB0eXBlOiAnQUlSVElNRScgYXMgYW55LFxyXG4gICAgICAgICAgcmF0ZSxcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKHBheWxvYWQuYW1vdW50KSAqIHJhdGUsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBzdGF0dXM6ICdTVUNDRVNTJyBhcyBhbnksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC5haXJ0aW1lLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuYWlydGltZUlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnU1VDQ0VTUycgYXMgYW55LFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiByZXNwb25zZT8uZGV0YWlscz8udHhuUmVmZXJlbmNlICsgJycsXHJcbiAgICAgICAgICBsZWRnZXJFbnRyeUlkOiBsZWRnZXJSb3c/LmlkLFxyXG4gICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5waG9uZU51bWJlcixcclxuICAgICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQsXHJcbiAgICAgICAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwb25zZT8uZGV0YWlscz8uY3VycmVuY3kgPz8gJ05HTicsXHJcbiAgICAgICAgICAgIGNvbXBldGVkQXQ6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5EYXRlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLnVzZXJJZCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzcG9uc2U7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgYWNjb3VudDogcGF5bG9hZC5hY2NvdW50TnVtYmVyICsgJycsXHJcbiAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICBkZXNjOiAnQWlydGltZSBQdXJjaGFzZSB0byAnICsgcGF5bG9hZC5waG9uZU51bWJlcixcclxuICAgICAgYmFsYW5jZTogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmJhbGFuY2UpKSxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgY3VycmVuY3k6IHJlc3BvbnNlPy5kZXRhaWxzPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgICAgdHlwZTogJ0RSJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IFF1ZXVlLnRyaWdnZXIoZXZlbnRJZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgY291bnRyeTogdXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBwaG9uZTogdXNlcj8ucGhvbmUhLFxyXG4gICAgICB0eXBlOiAnU01TJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGlmIChyZXNwb25zZT8uY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5haXJ0aW1lLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuYWlydGltZUlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnU1VDQ0VTUycgYXMgYW55LFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiByZXNwb25zZT8uZGV0YWlscz8udHhuUmVmZXJlbmNlICsgJycsXHJcbiAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgICAgIGNvbXBldGVkQXQ6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5EYXRlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5ha3V1ay5wYXJ0aWFsJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGF3YWl0IHR4LmFpcnRpbWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5haXJ0aW1lSWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0YXR1czogJ0ZBSUxFRCcsIGVycm9yOiAoZXJyIGFzIEVycm9yKS5tZXNzYWdlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgdHgud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VXNlckxlZGdlckJhbGFuY2UgPVxyXG4gICAgICAgIEJpZ0ludCh3YWxsZXQ/LmxlZGdlckJhbGFuY2UhKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuICAgICAgY29uc3QgbmV3QXZhaWxhYmxlQmFsYW5jZSA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSEpICtcclxuICAgICAgICBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdBdmFpbGFibGVCYWxhbmNlLFxyXG4gICAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VXNlckxlZGdlckJhbGFuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdGQUlMRUQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgICAgIGNvbXBldGVkQXQ6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5EYXRlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICAgIGFjY291bnQ6IHBheWxvYWQuYWNjb3VudE51bWJlciArICcnLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGRlc2M6ICdSZXZlcnNlZDogQWlydGltZSBQdXJjaGFzZSB0byAnICsgcGF5bG9hZC5waG9uZU51bWJlcixcclxuICAgICAgICBiYWxhbmNlOiBuZXdBdmFpbGFibGVCYWxhbmNlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgY3VycmVuY3k6IHJlc3BvbnNlPy5kZXRhaWxzPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgICAgICB0eXBlOiAnQ1InLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLnVzZXJJZCB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKGV2ZW50SWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgcGhvbmU6IHVzZXI/LnBob25lISxcclxuICAgICAgICAgIHR5cGU6ICdTTVMnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5ha3V1ay5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tBaXJ0aW1lSGFuZGxlcl0gQWlydGltZSBwdXJjaGFzZSBmYWlsZWQ6JywgZXJyKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBa3V1ayB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9ha3V1ayc7XHJcbmltcG9ydCBzZW5kRW1haWwgZnJvbSAnQC9leHRlbnNpb25zL21haWwtc2VydmljZS9zZW5kLWVtYWlsJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzTm90aWZpY2F0aW9uc0V2ZW50KFxyXG4gIGV2ZW50SWQ6IGFueSxcclxuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuKSB7XHJcbiAgaWYgKGRhdGEudHlwZSA9PT0gJ1NNUycpIHtcclxuICAgIHJldHVybiBhd2FpdCBzZW5kU01TV2l0aEFrdXVrKGRhdGEpO1xyXG4gIH1cclxuICBpZiAoZGF0YS50eXBlID09PSAnRU1BSUwnKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgc2VuZE1haWwoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhd2FpdCBzZW5kU01TV2l0aEFrdXVrKGRhdGEpO1xyXG4gIGF3YWl0IHNlbmRNYWlsKGRhdGEpO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kU01TV2l0aEFrdXVrKGRhdGE6IGFueSkge1xyXG4gIGF3YWl0IEFrdXVrLnNlbmRTTVMoe1xyXG4gICAgY291bnRyeTogZGF0YS5jb3VudHJ5LFxyXG4gICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgbnVtYmVyOiBkYXRhLnBob25lLFxyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kTWFpbChkYXRhOiBhbnkpIHtcclxuICByZXR1cm4gYXdhaXQgc2VuZEVtYWlsKHtcclxuICAgIHRvOiBkYXRhLmVtYWlsISxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgdG9fbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAuLi5kYXRhLnZhcmlhYmxlcyxcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogZGF0YS50ZW1wbGF0ZSxcclxuICB9KS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVtYmVkbHlVc2VyIH0gZnJvbSAnLi4vbW9kdWxlcy91c2Vycy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9JU09EYXRlIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzRW1iZWRseVdhbGxldChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQsICdHRVQgRVZFTlQnKTtcclxuXHJcbiAgaWYgKCFldmVudCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBzdHJlZXRMaW5lOiBzdHJpbmc7XHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBkb2I6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBob25lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgYnZuOiBzdHJpbmc7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgaWYgKCFwYXlsb2FkLmVtYWlsKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbXVzdCBwcm92aWRlIGVtYWlsJywgNDIyKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBhZGRyZXNzOiBwYXlsb2FkPy5zdHJlZXRMaW5lLFxyXG4gICAgICBjaXR5OiBwYXlsb2FkPy5jaXR5LFxyXG4gICAgICBjb3VudHJ5OiBwYXlsb2FkPy5jb3VudHJ5LFxyXG4gICAgICBkb2I6IHRvSVNPRGF0ZShwYXlsb2FkPy5kb2IhKSxcclxuICAgICAgZmlyc3ROYW1lOiBwYXlsb2FkPy5uYW1lPy5zcGxpdCgnICcpWzBdLFxyXG4gICAgICBsYXN0TmFtZTogcGF5bG9hZD8ubmFtZT8uc3BsaXQoJyAnKVsxXSxcclxuICAgICAgcGhvbmU6IHBheWxvYWQ/LnBob25lLFxyXG4gICAgICBtaWRkbGVOYW1lOiBwYXlsb2FkPy5uYW1lPy5zcGxpdCgnICcpPy5bMl0gPz8gJycsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEsICdHRVQgUEFZTE9BRCcpO1xyXG5cclxuICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IGNyZWF0ZUVtYmVkbHlVc2VyKGV2ZW50SWQsIHtcclxuICAgICAgZW1iZWRseTogZGF0YSxcclxuICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXHJcbiAgICAgIGJ2bjogcGF5bG9hZD8uYnZuPy50cmltKCkhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cod2FsbGV0LCAnQ1JFQVRFIEVNQkVETFkgV0FMTEVUJyk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uY29tcGxldGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcclxuICAgICAgICAgIHdhbGxldElkOiB3YWxsZXQ/LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gd2FsbGV0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgJ1Byb2Nlc3NFbWJlZGx5VVNlcicpO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgVHJhbnNmZXIgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzSW50ZXJuYWxUcmFuc2ZlckV2ZW50KFxyXG4gIGV2ZW50SWQ6IGFueSxcclxuICBkYXRhOiBUcmFuc2ZlcixcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVtYmVkbHkud2FsbGV0cy50cmFuc2Zlcih7XHJcbiAgICAgIGFtb3VudDogTnVtYmVyKGRhdGEuYW1vdW50KSxcclxuICAgICAgZnJvbUFjY291bnQ6IGRhdGEuZnJvbUFjY291bnQsXHJcbiAgICAgIHRvQWNjb3VudDogZGF0YS50b0FjY291bnQsXHJcbiAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBkYXRhLnRyYW5zYWN0aW9uUmVmZXJlbmNlLFxyXG4gICAgICByZW1hcmtzOiBkYXRhLnJlbWFya3MsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwub3JnYW5pemF0aW9uLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIGZyb21BY2NvdW50OiBkYXRhLmZyb21BY2NvdW50LFxyXG4gICAgICAgICAgdG9BY2NvdW50OiBkYXRhLnRvQWNjb3VudCxcclxuICAgICAgICAgIHJlbWFya3M6IGRhdGEucmVtYXJrcyxcclxuICAgICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBkYXRhLnRyYW5zYWN0aW9uUmVmZXJlbmNlLFxyXG4gICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLm9yZ2FuaXphdGlvbi5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBmcm9tQWNjb3VudDogZGF0YS5mcm9tQWNjb3VudCxcclxuICAgICAgICAgIHRvQWNjb3VudDogZGF0YS50b0FjY291bnQsXHJcbiAgICAgICAgICByZW1hcmtzOiBkYXRhLnJlbWFya3MsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogZGF0YS50cmFuc2FjdGlvblJlZmVyZW5jZSxcclxuICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnSW50ZXJuYWwgdHJhbnNmZXIgZmFpbGVkIHRvIG9yZ2FuaXphdGlvbiB3YWxsZXQgZmFpbGVkJyxcclxuICAgICAgNTAwLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUVVFVUVfTkFNRVMgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgV29ya2VyIH0gZnJvbSAnYnVsbG1xJztcclxuaW1wb3J0IHsgcHJvY2Vzc1RyYW5zZmVyRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3MtdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcm9jZXNzQWlydGltZUV2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLWFpcnRpbWUnO1xyXG5pbXBvcnQgeyBwcm9jZXNzTm90aWZpY2F0aW9uc0V2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCBJT1JlZGlzIGZyb20gJ2lvcmVkaXMnO1xyXG5pbXBvcnQgeyBwcm9jZXNzRW1iZWRseVdhbGxldCB9IGZyb20gJy4vcHJvY2Vzcy1lbWJlZGx5LXdhbGxldCc7XHJcbmltcG9ydCB7IHByb2Nlc3NJbnRlcm5hbFRyYW5zZmVyRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3MtaW50ZXJuYWwtdHJhbnNmZXJzJztcclxuXHJcbmNvbnN0IHJlZGlzQ2xpZW50ID0gbmV3IElPUmVkaXMoZW52aXJvbm1lbnQucmVkaXMudXJsLCB7XHJcbiAgbWF4UmV0cmllc1BlclJlcXVlc3Q6IG51bGwsXHJcbiAgZW5hYmxlUmVhZHlDaGVjazogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHtcclxuICBob3N0OiBlbnZpcm9ubWVudC5yZWRpcy5ob3N0LFxyXG4gIHBvcnQ6IGVudmlyb25tZW50LnJlZGlzLnBvcnQsXHJcbiAgbWF4UmV0cmllc1BlclJlcXVlc3Q6IG51bGwsXHJcbiAgZW5hYmxlUmVhZHlDaGVjazogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgV29ya2VycyB7XHJcbiAgc3RhdGljIGFzeW5jIHRyYW5zZmVyV29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLlRSQU5TRkVSLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NUcmFuc2ZlckV2ZW50KGRhdGEuaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZSBTYWZlSGF2ZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogNSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgaW50ZXJuYWxUcmFuc2ZlcldvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5JTlRFUk5BTF9UUkFOU0ZFUixcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzSW50ZXJuYWxUcmFuc2ZlckV2ZW50KGRhdGEuaWQsIGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiA1LFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lV29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLkFJUlRJTUUsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0FpcnRpbWVFdmVudChkYXRhLmlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBVc2UgU2FmZUhhdmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPiAxKVxyXG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVJZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5mYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogNSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgbm90aWZpY2F0aW9uV29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLk5PVElGSUNBVElPTixcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzTm90aWZpY2F0aW9uc0V2ZW50KGRhdGEuaWQsIGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiA1LFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB3YWxsZXRXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuQ1JFQVRFV0FMTEVULFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NFbWJlZGx5V2FsbGV0KGRhdGEuaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ1dPUktFUicpO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDUsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRdWV1ZSBhcyBCdWxsUXVldWUgfSBmcm9tICdidWxsbXEnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbU51bWJlciwgUVVFVUVfTkFNRVMgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBXb3JrZXJzIH0gZnJvbSAnLi9Xb3JrZXJzJztcclxuaW1wb3J0IElPUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcblxyXG5jb25zdCByZWRpc0NsaWVudCA9IG5ldyBJT1JlZGlzKGVudmlyb25tZW50LnJlZGlzLnVybCwge1xyXG4gIG1heFJldHJpZXNQZXJSZXF1ZXN0OiBudWxsLFxyXG4gIGVuYWJsZVJlYWR5Q2hlY2s6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IGRlZmF1bHRKb2JPcHRpb25zID0ge1xyXG4gIGF0dGVtcHRzOiAzLFxyXG4gIGJhY2tvZmY6IHtcclxuICAgIHR5cGU6ICdleHBvbmVudGlhbCcgYXMgY29uc3QsXHJcbiAgICBkZWxheTogMjAwMCxcclxuICB9LFxyXG4gIHJlbW92ZU9uQ29tcGxldGU6IHtcclxuICAgIGNvdW50OiAxMDAwLFxyXG4gICAgYWdlOiAyNCAqIDM2MDAsXHJcbiAgfSxcclxuICByZW1vdmVPbkZhaWw6IHtcclxuICAgIGNvdW50OiA1MDAwLFxyXG4gICAgYWdlOiA3ICogMjQgKiAzNjAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNmZXJRdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuVFJBTlNGRVIsIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbFRyYW5zZmVyUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFxyXG4gIFFVRVVFX05BTUVTLklOVEVSTkFMX1RSQU5TRkVSLFxyXG4gIHtcclxuICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICAgIGF0dGVtcHRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFpcnRpbWVRdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuQUlSVElNRSwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5OT1RJRklDQVRJT04sIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICAvLyBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbWJlZGx5V2FsbGV0UXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLkNSRUFURVdBTExFVCwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlIHtcclxuICBzdGF0aWMgYXN5bmMgdHJpZ2dlcihcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBrZXlvZiB0eXBlb2YgUVVFVUVfTkFNRVMsXHJcbiAgICBkYXRhPzogYW55LFxyXG4gICk6IFByb21pc2U8eyBqb2JJZDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnQUlSVElNRSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlckFpcnRpbWUoaWQpO1xyXG5cclxuICAgICAgY2FzZSAnVFJBTlNGRVInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJUcmFuc2ZlcihpZCk7XHJcblxyXG4gICAgICBjYXNlICdOT1RJRklDQVRJT04nOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJOb3RpZmljYXRpb24oaWQsIGRhdGEpO1xyXG5cclxuICAgICAgY2FzZSAnQ1JFQVRFV0FMTEVUJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyQ3JlYXRlRW1iZWRseVdhbGxldChpZCk7XHJcblxyXG4gICAgICBjYXNlICdJTlRFUk5BTF9UUkFOU0ZFUic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlckludGVybmFsVHJhbnNmZXIoaWQsIGRhdGEpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBxdWV1ZSB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyQWlydGltZShcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgKTogUHJvbWlzZTx7IGpvYklkOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nIH0+IHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFpcnRpbWVRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLWFpcnRpbWUnLFxyXG4gICAgICB7IGlkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYHRyYW5zZmVyLSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlclRyYW5zZmVyKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHRyYW5zZmVyUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy10cmFuc2ZlcicsXHJcbiAgICAgIHsgaWQgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgdHJhbnNmZXItJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VySW50ZXJuYWxUcmFuc2ZlcihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IGludGVybmFsVHJhbnNmZXJRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLWludGVybmFsLXRyYW5zZmVyJyxcclxuICAgICAgeyBpZCwgZGF0YSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGBpbnRlcm5hbC10cmFuc2Zlci0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJOb3RpZmljYXRpb24oaWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBub3RpZmljYXRpb25RdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLW5vdGlmaWNhdGlvbicsXHJcbiAgICAgIHsgaWQsIGRhdGEgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgbm90aWZpY2F0aW9uLSR7Z2VuZXJhdGVSYW5kb21OdW1iZXIoNil9LSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMyxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlckNyZWF0ZUVtYmVkbHlXYWxsZXQoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgZW1iZWRseVdhbGxldFF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtY3JlYXRlLWVtYmVkbHktd2FsbGV0JyxcclxuICAgICAgeyBpZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGB3YWxsZXQtJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAzLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5Xb3JrZXJzLmFpcnRpbWVXb3JrZXIoKTtcclxuV29ya2Vycy50cmFuc2ZlcldvcmtlcigpO1xyXG5Xb3JrZXJzLm5vdGlmaWNhdGlvbldvcmtlcigpO1xyXG5Xb3JrZXJzLndhbGxldFdvcmtlcigpO1xyXG5Xb3JrZXJzLmludGVybmFsVHJhbnNmZXJXb3JrZXIoKTtcclxuIiwiaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgRXh0ZXJuYWxUcmFuc2ZlcklucHV0LCBpV2FsbGV0LCBUcmFuc2ZlclBheWxvYWQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICBhbW91bnRJbktvYm8sXHJcbiAgYW1vdW50SW5OYWlyYSxcclxuICBjaGVja0RhaWx5TGltaXQsXHJcbiAgZm9ybWF0VHJhbnNmZXJTTVMsXHJcbn0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuY29uc3QgTUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlQgPSAxMDA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNmZXJUb0V4dGVybmFsQmFuayhwYXlsb2FkOiBFeHRlcm5hbFRyYW5zZmVySW5wdXQpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgIGluaXRpYXRvclVzZXJJZCxcclxuICAgIHNlbmRlck5hbWUsXHJcbiAgICBkZXN0aW5hdGlvbkJhbmssXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lLFxyXG4gICAgYW1vdW50LFxyXG4gICAgY3VycmVuY3kgPSAnTkdOJyxcclxuICAgIHJlYXNvbiA9ICdGdW5kcyBUcmFuc2ZlcicsXHJcbiAgfSA9IHBheWxvYWQ7XHJcblxyXG4gIGNvbnN0IGFtdCA9IGFtb3VudEluS29ibyhhbW91bnQpO1xyXG4gIGlmICghaWRlbXBvdGVuY3lLZXkpIHRocm93IG5ldyBDdXN0b21FcnJvcignTWlzc2luZyBpZGVtcG90ZW5jeSBrZXknLCA0MDApO1xyXG4gIGlmIChhbXQgPD0gMG4pIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBhbW91bnQnLCA0MDApO1xyXG4gIGlmIChhbW91bnQgPCBNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVClcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYEFtb3VudCBtdXN0IGJlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAke01JTklNVU1fVFJBTlNGRVJfQU1PVU5UfWAsXHJcbiAgICApO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIDHvuI/ig6MgQ2hlY2sgSWRlbXBvdGVuY3kgUmVjb3JkXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgZXhpc3RpbmdUcmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkZW1wb3RlbmN5S2V5IH0sXHJcbiAgfSk7XHJcbiAgaWYgKGV4aXN0aW5nVHJhbnNmZXIpIHJldHVybiBleGlzdGluZ1RyYW5zZmVyO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyAy77iP4oOjIFJlc29sdmUgV2FsbGV0ICYgQmFsYW5jZVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFtmcm9tV2FsbGV0LCBmcm9tVXNlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogaW5pdGlhdG9yVXNlcklkLCBjdXJyZW5jeSB9LFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWEudXNlci5maW5kRmlyc3QoeyB3aGVyZTogeyBpZDogaW5pdGlhdG9yVXNlcklkIH0gfSksXHJcbiAgXSk7XHJcblxyXG4gIGlmICghZnJvbVVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG4gIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgZmVlUmF0ZSA9IE51bWJlcihwcm9jZXNzLmVudj8uRVhURVJOQUxfUEVSQ0VOVCA/PyAxNSk7XHJcbiAgY29uc3QgdG90YWxBbW91bnQgPSBhbW91bnRJbktvYm8oYW1vdW50ICsgZmVlUmF0ZSk7XHJcblxyXG4gIGlmIChOdW1iZXIoZnJvbVdhbGxldC5hdmFpbGFibGVCYWxhbmNlKSA8IHRvdGFsQW1vdW50KVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgYmFsYW5jZScsIDQyMik7XHJcblxyXG4gIC8vIENoZWNrIGZvciBkYWlseSBsaW1pdFxyXG4gIGNvbnN0IGxpbWl0RXhjZWVkZWQgPSBhd2FpdCBjaGVja0RhaWx5TGltaXQoZnJvbVdhbGxldCwgZnJvbVVzZXIsIGFtdCk7XHJcbiAgaWYgKGxpbWl0RXhjZWVkZWQpIHRocm93IG5ldyBDdXN0b21FcnJvcihgRGFpbHkgbGltaXQgZXhjZWVkZWQuYCwgNDAzKTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXJSZWNvcmQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0eC5wcm92aWRlci51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0VNQkVETFknIH0sXHJcbiAgICAgIHVwZGF0ZToge30sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIHByb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgYW1vdW50OiBhbXQsXHJcbiAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgaW5pdGlhdGVkQnk6IGluaXRpYXRvclVzZXJJZCxcclxuICAgICAgICByZWFzb24sXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgICAgc2hvdWxkUmVmdW5kOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdFWFRFUk5BTCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSB0cmFuc2FjdGlvblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFtb3VudDogLWFtdC50b1N0cmluZygpLFxyXG4gICAgICAgIGl0ZW1JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSJyxcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICB1c2VySWQ6IGluaXRpYXRvclVzZXJJZCxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICByZWNpcGllbnQ6IGAke2Rlc3RpbmF0aW9uQWNjb3VudE5hbWV9LSR7ZGVzdGluYXRpb25BY2NvdW50TnVtYmVyfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5pbml0aWF0ZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgICAgIHNvdXJjZUFjY291bnROdW1iZXI6IGZyb21XYWxsZXQuYWNjb3VudE51bWJlcj8udHJpbSgpLFxyXG4gICAgICAgICAgc291cmNlQWNjb3VudE5hbWU6IHNlbmRlck5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgcmVtYXJrczogcmVhc29uLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgaW5pdGlhdGVkQnk6IGluaXRpYXRvclVzZXJJZCxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNmZXI7XHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXJSZWNvcmQuaWQsICdUUkFOU0ZFUicpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4udHJhbnNmZXJSZWNvcmQsXHJcbiAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEodHJhbnNmZXJSZWNvcmQuYW1vdW50KSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FsbGV0VG9XYWxsZXRUcmFuc2ZlcihwYXlsb2FkOiBUcmFuc2ZlclBheWxvYWQpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgIGluaXRpYXRvclVzZXJJZCxcclxuICAgIHNlbmRlcixcclxuICAgIHJlY2VpdmVyLFxyXG4gICAgYW1vdW50LFxyXG4gICAgY3VycmVuY3kgPSAnTkdOJyxcclxuICAgIHJlYXNvbixcclxuICB9ID0gcGF5bG9hZDtcclxuXHJcbiAgLy8gVE9ETzo6IENoZWNrIGZvciB1c2VyIHdhbGxldCBhbW91bnQgYmVmb3JlIHRyYW5zZmVyaW5nXHJcblxyXG4gIGNvbnN0IGFtdCA9IGFtb3VudEluS29ibyhhbW91bnQpO1xyXG4gIGlmIChhbXQgPD0gMG4pIHRocm93IG5ldyBFcnJvcignQW1vdW50IG11c3QgYmUgcG9zaXRpdmUnKTtcclxuICBpZiAoYW1vdW50IDwgTUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBBbW91bnQgbXVzdCBiZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gJHtNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVH1gLFxyXG4gICAgKTtcclxuXHJcbiAgLy8gUmVzb2x2ZSBzZW5kZXIgYW5kIHJlY2lwaWVudFxyXG4gIGNvbnN0IFtmcm9tV2FsbGV0LCB0b1dhbGxldF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHNlbmRlciwgY3VycmVuY3kgfSxcclxuICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgICB9KSxcclxuICAgIHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogcmVjZWl2ZXIsIGN1cnJlbmN5IH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcblxyXG4gIGlmICghZnJvbVdhbGxldClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgYFNlbmRlciB3YWxsZXQgbm90IGZvdW5kIGZvciBjdXJyZW5jeSAke2N1cnJlbmN5fWAsXHJcbiAgICAgIDQwNCxcclxuICAgICk7XHJcbiAgaWYgKCF0b1dhbGxldClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgYFJlY2lwaWVudCB3YWxsZXQgbm90IGZvdW5kIGZvciBjdXJyZW5jeSAke2N1cnJlbmN5fWAsXHJcbiAgICAgIDQwNCxcclxuICAgICk7XHJcblxyXG4gIGlmIChmcm9tV2FsbGV0LnN0YXR1cyAhPT0gJ0FDVElWRScpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdTZW5kZXIgd2FsbGV0IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIHdhbGxldCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcbiAgaWYgKHRvV2FsbGV0LnN0YXR1cyAhPT0gJ0FDVElWRScpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdSZWNpcGllbnQgd2FsbGV0IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIHdhbGxldCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcblxyXG4gIGNvbnN0IGZyb21Vc2VyID0gZnJvbVdhbGxldC51c2VyO1xyXG4gIGNvbnN0IHRvVXNlciA9IHRvV2FsbGV0LnVzZXI7XHJcblxyXG4gIC8vIENoZWNrc1xyXG4gIGlmICghdG9Vc2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1JlY2lwaWVudCBub3QgZm91bmQnLCA0MDQpO1xyXG4gIGlmICghZnJvbVVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignU2VuZGVyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgaWYgKGZyb21Vc2VyLnN0YXR1cyAhPT0gJ0FDVElWRScpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdTZW5kZXIgYWNjb3VudCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuICBpZiAodG9Vc2VyLnN0YXR1cyAhPT0gJ0FDVElWRScpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdSZWNpcGllbnQgYWNjb3VudCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciB3YWxsZXQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG4gIGlmIChmcm9tVXNlci5pZCA9PT0gdG9Vc2VyLmlkKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdDYW5ub3QgdHJhbnNmZXIgdG8gc2VsZicsIDQyMik7XHJcblxyXG4gIC8vIGNhbm9uaWNhbCBvcmRlciB0byBhdm9pZCBkZWFkbG9ja3NcclxuICBjb25zdCBvcmRlcmVkID0gW2Zyb21XYWxsZXQuaWQsIHRvV2FsbGV0LmlkXS5zb3J0KCk7XHJcblxyXG4gIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIC8vIGlkZW1wb3RlbmN5IGd1YXJkXHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0eC50cmFuc2Zlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWRlbXBvdGVuY3lLZXkgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7IC8vIGxvZyBoZXJlXHJcblxyXG4gICAgLy8gbG9jayB3YWxsZXRzIHdpdGggRk9SIFVQREFURVxyXG4gICAgY29uc3QgbG9ja2VkUm93cyA9IGF3YWl0IHR4LiRxdWVyeVJhdzxcclxuICAgICAgYW55W11cclxuICAgID5gU0VMRUNUIGlkLCBcInVzZXJJZFwiLCBjdXJyZW5jeSwgXCJsZWRnZXJCYWxhbmNlXCIsIFwiYXZhaWxhYmxlQmFsYW5jZVwiLCBcInJlc2VydmVkQmFsYW5jZVwiLCB2ZXJzaW9uLCBzdGF0dXMgRlJPTSBcIldhbGxldFwiIFdIRVJFIGlkIElOICgke29yZGVyZWRbMF19LCAke29yZGVyZWRbMV19KSBGT1IgVVBEQVRFYDtcclxuICAgIGlmIChsb2NrZWRSb3dzLmxlbmd0aCAhPT0gMilcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGYWlsZWQgdG8gbG9jayB3YWxsZXRzJywgNTAwKTtcclxuXHJcbiAgICAvLyBtYXAgbG9ja2VkIHJvd3NcclxuICAgIGNvbnN0IGxvY2tlZE1hcCA9IG5ldyBNYXAoKGxvY2tlZFJvd3MgYXMgYW55W10pLm1hcCgocikgPT4gW3IuaWQsIHJdKSk7XHJcbiAgICBjb25zdCBsb2NrZWRGcm9tID0gbG9ja2VkTWFwLmdldChmcm9tV2FsbGV0LmlkKTtcclxuICAgIGNvbnN0IGxvY2tlZFRvID0gbG9ja2VkTWFwLmdldCh0b1dhbGxldC5pZCk7XHJcblxyXG4gICAgaWYgKCFsb2NrZWRGcm9tIHx8ICFsb2NrZWRUbylcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGYWlsZWQgdG8gbG9jayB3YWxsZXRzJywgNDIyKTtcclxuXHJcbiAgICAvLyBjaGVjayBmdW5kc1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gQmlnSW50KGxvY2tlZEZyb20uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpO1xyXG4gICAgLy8gY29uc3QgcmVzZXJ2ZWQgPSBCaWdJbnQoKGxvY2tlZEZyb20ucmVzZXJ2ZWRCYWxhbmNlIGFzIGFueSkgfHwgMCk7XHJcbiAgICBpZiAoYXZhaWxhYmxlIDwgYW10KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBmdW5kcycsIDQwMyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGRhaWx5IGxpbWl0XHJcbiAgICBjb25zdCBsaW1pdEV4Y2VlZGVkID0gYXdhaXQgY2hlY2tEYWlseUxpbWl0KGZyb21XYWxsZXQsIGZyb21Vc2VyLCBhbXQpO1xyXG4gICAgaWYgKGxpbWl0RXhjZWVkZWQpIHRocm93IG5ldyBDdXN0b21FcnJvcihgRGFpbHkgbGltaXQgZXhjZWVkZWQuYCwgNDAzKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgVHJhbnNmZXIgcmVjb3JkXHJcbiAgICBjb25zdCBvcGVyYXRpb25JZCA9IGB0cmFuc2Zlcl8ke3BheWxvYWQuaWRlbXBvdGVuY3lLZXl9YDtcclxuICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICBhbW91bnQ6IGFtdCxcclxuICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIHJlYXNvbixcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgZnJvbVVzZXJJZDogZnJvbVVzZXIuaWQsXHJcbiAgICAgICAgICB0b1VzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgIGNvbnN0IGpvdXJuYWwgPSBhd2FpdCB0eC5qb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZmVyZW5jZTogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHJlYXNvbiA/PyAnaW50ZXJuYWwgdHJhbnNmZXInLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb21wdXRlIG5ldyBiYWxhbmNlc1xyXG4gICAgY29uc3QgbmV3RnJvbUxlZGdlckJhbCA9IEJpZ0ludChsb2NrZWRGcm9tLmxlZGdlckJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuICAgIGNvbnN0IG5ld0Zyb21BdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkRnJvbS5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgLSBhbXQ7XHJcblxyXG4gICAgY29uc3QgbmV3VG9MZWRnZXJCYWwgPSBCaWdJbnQobG9ja2VkVG8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpICsgYW10O1xyXG4gICAgY29uc3QgbmV3VG9BdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkVG8uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpICsgYW10O1xyXG5cclxuICAgIC8vIGNyZWF0ZSBsZWRnZXIgcm93cyAoZGViaXQgdGhlbiBjcmVkaXQpLCByZWZlcmVuY2Ugam91cm5hbC5pZFxyXG4gICAgY29uc3QgZGViaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IC1hbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdGcm9tTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHJlYXNvbixcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgcmVjaXBpZW50V2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjcmVkaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgY2hhbmdlOiBhbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfQ1JFRElUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICBzZW5kZXJXYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHNlbmRlciB3YWxsZXRcclxuICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3RnJvbUxlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdGcm9tQXZhaWxhYmxlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgcmVjaXBpZW50IHdhbGxldFxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB0b1dhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3VG9BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcmsgdHJhbnNmZXIgY29tcGxldGVkXHJcbiAgICBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcgYXMgYW55LFxyXG4gICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHNob3VsZFJlZnVuZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuY29tcGxldGVkJyxcclxuICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgIGZyb21Vc2VySWQ6IGZyb21Vc2VyLmlkLFxyXG4gICAgICAgICAgdG9Vc2VySWQ6IHRvVXNlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGRlYml0TGVkZ2VySWQ6IGRlYml0LmlkLFxyXG4gICAgICAgICAgY3JlZGl0TGVkZ2VySWQ6IGNyZWRpdC5pZCxcclxuICAgICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiAtYW1vdW50LnRvU3RyaW5nKCksXHJcbiAgICAgICAgaXRlbUlkOiBkZWJpdC5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgdXNlcklkOiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWJpdCcsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgICByZWNpcGllbnQ6IHRvVXNlci5uYW1lLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgaXRlbUlkOiBjcmVkaXQuaWQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSJyxcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHVzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY3JlZGl0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogdG9Vc2VyLm5hbWUsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVE9ETzogVGhpcyBub3Qgd29ya2luZ1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgYWNjb3VudDogZnJvbVdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICBhbW91bnQ6IGFtdCxcclxuICAgICAgY3VycmVuY3ksXHJcbiAgICAgIGRlc2M6IHJlYXNvbj8udG9VcHBlckNhc2UoKSxcclxuICAgICAgYmFsYW5jZTogbmV3RnJvbUF2YWlsYWJsZSxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgdHlwZTogJ0RSJyxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlci5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgY291bnRyeTogZnJvbVVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgcGhvbmU6IGZyb21Vc2VyPy5waG9uZSEsXHJcbiAgICAgIHR5cGU6ICdTTVMnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHN0cnVjdHVyZWQgcmVzdWx0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0cmFuc2Zlcjoge1xyXG4gICAgICAgIC4uLnRyYW5zZmVyLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICB9LFxyXG4gICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgIGRlYml0TGVkZ2VySWQ6IGRlYml0LmlkLFxyXG4gICAgICBjcmVkaXRMZWRnZXJJZDogY3JlZGl0LmlkLFxyXG4gICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICBpZDogdHJhbnNmZXIuaWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9IEJpZ0ludCh0b1dhbGxldC5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiB0b1dhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgYW1vdW50OiBhbXQsXHJcbiAgICBkZXNjOiByZWFzb24/LnRvVXBwZXJDYXNlKCksXHJcbiAgICBiYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBjdXJyZW5jeSxcclxuICAgIHR5cGU6ICdDUicsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXIuaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICBjb3VudHJ5OiB0b1VzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogdG9Vc2VyPy5waG9uZSEsXHJcbiAgICB0eXBlOiAnU01TJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZmVyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKHBheWxvYWQ6IHtcclxuICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgYmFua0NvZGU6IHN0cmluZztcclxuICBiYW5rTmFtZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbn0pIHtcclxuICAvLyBDcmVhdGUgdXNlciB3YWxsZXRcclxuICBjb25zdCB1c2VyV2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NvdW50TnVtYmVyOiBwYXlsb2FkLmFjY291bnROdW1iZXIsXHJcbiAgICAgIGJhbmtDb2RlOiBwYXlsb2FkLmJhbmtDb2RlLFxyXG4gICAgICBiYW5rTmFtZTogcGF5bG9hZC5iYW5rTmFtZSxcclxuICAgICAgd2FsbGV0SWQ6IHBheWxvYWQ/LmlkLFxyXG4gICAgICBhdmFpbGFibGVCYWxhbmNlOiAwLFxyXG4gICAgICBsZWRnZXJCYWxhbmNlOiAwLFxyXG4gICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICBzdGF0dXM6ICdBQ1RJVkUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXJXYWxsZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCBoYXNoUGluLCBoYXNoVG9rZW4sIHZlcmlmeVBpbiB9IGZyb20gJ0AvdXRpbHMvaGFzaCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFkZHJlc3MsXHJcbiAgQmFuayxcclxuICBCVk5JbnB1dCxcclxuICBFbWJlZGx5SW5wdXQsXHJcbiAgTmV4dE9mS2luLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgWW91dmVyaWZ5IH0gZnJvbSAnQC9leHRlbnNpb25zL3lvdS12ZXJpZnknO1xyXG5pbXBvcnQgeyB0b0lTT0RhdGUgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0ICogYXMgV2FsbGV0U2VydmljZSBmcm9tICcuLi93YWxsZXRzL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShcclxuICBpZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5leHRPZktpbj86IE5leHRPZktpbjtcclxuICAgIGJhbms/OiBCYW5rO1xyXG4gICAgYnZuPzogc3RyaW5nO1xyXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XHJcbiAgICBlbWFpbFZlcmlmaWVkPzogYm9vbGVhbjtcclxuICAgIG9jY3VwYXRpb24/OiBzdHJpbmc7XHJcbiAgICBlZHVjYXRpb24/OiBzdHJpbmc7XHJcbiAgICByZWxpZ2lvbj86IHN0cmluZztcclxuICAgIG1hcml0YWxTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIGVtYmVkbHlDdXN0b21lcklkPzogc3RyaW5nO1xyXG4gIH0sXHJcbikge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDIwMCk7XHJcblxyXG4gIHJldHVybiBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gQmFzZSB1cGRhdGVcclxuICAgIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcclxuXHJcbiAgICAvLyBURE9EOiBSZW1vdmUgcGFzc3dvcmQgdXBkYXRlIGZyb20gaGVyZVxyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgIGlmIChkYXRhLm9jY3VwYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLm9jY3VwYXRpb24gPSBkYXRhLm9jY3VwYXRpb247XHJcbiAgICBpZiAoZGF0YS5lZHVjYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVkdWNhdGlvbiA9IGRhdGEuZWR1Y2F0aW9uO1xyXG4gICAgaWYgKGRhdGEucmVsaWdpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLnJlbGlnaW9uID0gZGF0YS5yZWxpZ2lvbjtcclxuICAgIGlmIChkYXRhLmJ2biAhPT0gdW5kZWZpbmVkKSByZWNvcmQuYnZuID0gZGF0YS5idm47XHJcbiAgICBpZiAoZGF0YS5lbWJlZGx5Q3VzdG9tZXJJZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQuZW1iZWRseUN1c3RvbWVySWQgPSBkYXRhLmVtYmVkbHlDdXN0b21lcklkO1xyXG4gICAgaWYgKGRhdGEubWFyaXRhbFN0YXR1cyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQubWFyaXRhbFN0YXR1cyA9IGRhdGEubWFyaXRhbFN0YXR1cztcclxuICAgIGlmIChkYXRhLmVtYWlsVmVyaWZpZWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgcmVjb3JkLmVtYWlsVmVyaWZpZWQgPSBkYXRhLmVtYWlsVmVyaWZpZWQ7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlLCBhZ2VudDogeyBzZWxlY3Q6IHsgaWQ6IHRydWUgfSB9IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWxhdGVkIHVwZGF0ZXNcclxuICAgIGlmIChkYXRhPy5uZXh0T2ZLaW4gJiYgdXNlci5hZ2VudD8uaWQpIHtcclxuICAgICAgYXdhaXQgdHguYWdlbnQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5hZ2VudD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuZXh0T2ZLaW46IHtcclxuICAgICAgICAgICAgY3JlYXRlOiB7IC4uLmRhdGEubmV4dE9mS2luIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5iYW5rKSB7XHJcbiAgICAgIGF3YWl0IHR4LmJhbmsuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5kYXRhLmJhbmssXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIoZGF0YS5iYW5rLmFjY291bnROdW1iZXIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5hZGRyZXNzKSB7XHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IHsgY3JlYXRlOiB7IC4uLmRhdGEuYWRkcmVzcyB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUJWTihidm46IHN0cmluZykge1xyXG4gIGNvbnN0IGJ2bkhhc2ggPSBoYXNoVG9rZW4oYnZuKTtcclxuXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYnZuOiBidm5IYXNoIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAhIWV4aXN0aW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5UGhvbmUocGhvbmU6IHN0cmluZykge1xyXG4gIGlmICghcGhvbmUpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGhvbmUgTnVtYmVyIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBwaG9uZTogcGhvbmUgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBpZDogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIHJvbGU6IHRydWUsXHJcbiAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgIGlzTG9ja2VkOiB0cnVlLFxyXG4gICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlEKElEOiBzdHJpbmcpIHtcclxuICBpZiAoIUlEKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dlcGF5IElEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyB1bmlxdWVJRDogSUQgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBpZDogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIHJvbGU6IHRydWUsXHJcbiAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgIGlzTG9ja2VkOiB0cnVlLFxyXG4gICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhc3N3b3JkKGlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICBpZiAocGFzc3dvcmQgIT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFzc3dvcmQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGdldFVzZXIodXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRWZXJpZmljYXRpb24oaWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgaWYgKCFkYXRhLmRvY3VtZW50cy5sZW5ndGgpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0F0bGVhc3Qgb25lIG9jdW1lbnQgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXJJZDogaWQsXHJcbiAgICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZTogZGF0YS5kb2N1bWVudHMubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGRvYy50eXBlLFxyXG4gICAgICAgICAgZmlsZVVybDogZG9jLmZpbGVVcmwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZG9jdW1lbnRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2ZXJpZmljYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQaW4oaWQ6IHN0cmluZywgcGF5bG9hZDogeyBwaW46IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgaGFzaGVkUGluID0gYXdhaXQgaGFzaFBpbihwYXlsb2FkLnBpbik7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGluOiBoYXNoZWRQaW4sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYmVkbHlDdXN0b21lcklkKSByZXR1cm4gdXNlcjtcclxuXHJcbiAgLy8gVHJpZ2dlciB3YWxsZXQgY3JlYXRpb25cclxuICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWdncmVnYXRlSWQ6IHVzZXIuaWQsXHJcbiAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5pbml0aWF0ZWQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIHN0cmVldExpbmU6IHVzZXI/LmFkZHJlc3M/LnN0cmVldExpbmUsXHJcbiAgICAgICAgY2l0eTogdXNlci5hZGRyZXNzPy5jaXR5LFxyXG4gICAgICAgIGNvdW50cnk6IHVzZXIuYWRkcmVzcz8uY291bnRyeSxcclxuICAgICAgICBkb2I6IHVzZXIuZG9iLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICBidm46IHVzZXIuYnZuLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHVzZXIuaWQsICdDUkVBVEVXQUxMRVQnKTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlVc2VyUGluKFxyXG4gIGhhc2hlZFBpbjogc3RyaW5nLFxyXG4gIHBheWxvYWQ6IHsgcGluOiBzdHJpbmcgfSxcclxuKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHZlcmlmeVBpbihoYXNoZWRQaW4sIHBheWxvYWQucGluKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVtYmVkbHlVc2VyKHVzZXJJZDogc3RyaW5nLCBkYXRhOiBFbWJlZGx5SW5wdXQpIHtcclxuICBsZXQgZW1iZWRseSA9IHsgaWQ6IGRhdGE/LmVtYmVkbHk/LmlkIH07XHJcblxyXG4gIGlmICghZW1iZWRseS5pZCkge1xyXG4gICAgZW1iZWRseSA9IGF3YWl0IEVtYmVkbHkuY3VzdG9tZXJzLnBlcnNvbmFsKHtcclxuICAgICAgYWRkcmVzczogZGF0YT8uZW1iZWRseT8uYWRkcmVzcyxcclxuICAgICAgY2l0eTogZGF0YT8uZW1iZWRseT8uY2l0eSxcclxuICAgICAgY291bnRyeTogZGF0YT8uZW1iZWRseT8uY291bnRyeSxcclxuICAgICAgZG9iOiBkYXRhPy5lbWJlZGx5Py5kb2IsXHJcbiAgICAgIGZpcnN0TmFtZTogZGF0YT8uZW1iZWRseT8uZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogZGF0YT8uZW1iZWRseT8ubGFzdE5hbWUsXHJcbiAgICAgIG1vYmlsZU51bWJlcjogZGF0YT8uZW1iZWRseT8ucGhvbmUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IGRhdGE/LmVtYmVkbHk/Lm1pZGRsZU5hbWUgPz8gZGF0YT8uZW1iZWRseT8ubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsQWRkcmVzczogZGF0YS5lbWFpbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZW1iZWRseS5pZCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmN1c3RvbWVyLmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgICBlcnJvcjogJ0VtYmVkbHkgcGVyc29uYWwgYWNjb3VudCBjb3VsZCBiZSBjcmVhdGVkJyxcclxuICAgICAgICAgICAgZW1iZWRseSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0VtYmVkbHkgcGVyc29uYWwgYWNjb3VudCBjb3VsZCBiZSBjcmVhdGVkJywgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB1cGRhdGUodXNlcklkLCB7XHJcbiAgICAgIGVtYmVkbHlDdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IEVtYmVkbHkuY3VzdG9tZXJzLnZlcmlmeUtZQyh7XHJcbiAgICBidm46IGRhdGEuYnZuLFxyXG4gICAgY3VzdG9tZXJJZDogZW1iZWRseS5pZCxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2ZXJpZmllZCkge1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5reWMuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgIGJ2bjogZGF0YS5idm4sXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgZXJyb3I6ICdFbWJlZGx5IEtZQyBjb3VsZCBub3QgYmUgdmVyaWZpZWQnLFxyXG4gICAgICAgICAgdmVyaWZpZWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1iZWRseSBLWUMgY291bGQgbm90IGJlIHZlcmlmaWVkJywgNTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVtYmVkbHkud2FsbGV0cy5jcmVhdGUoe1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgY3VycmVuY3k6IGRhdGE/LmV4dHJhPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgIG5hbWU6IGBXZVBheS0ke3VzZXJJZH1gLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlc3VsdCkge1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi53YWxsZXQuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgIHdhbGxldDogcmVzdWx0LFxyXG4gICAgICAgICAgY3VzdG9tZXJJZDogZW1iZWRseS5pZCxcclxuICAgICAgICAgIGVycm9yOiAnV2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBjb3VsZCBub3QgYmUgY3JlYXRlZCcsIDUwMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YWxsZXQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgIGFjY291bnROdW1iZXI6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYWNjb3VudE51bWJlcixcclxuICAgIGJhbmtOYW1lOiByZXN1bHQudmlydHVhbEFjY291bnQ/LmJhbmtOYW1lLFxyXG4gICAgYmFua0NvZGU6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYmFua0NvZGUsXHJcbiAgICBpZDogcmVzdWx0Py5pZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnZuSGFzaCA9IGhhc2hUb2tlbihkYXRhPy5idm4pO1xyXG4gIGF3YWl0IHVwZGF0ZSh1c2VySWQsIHtcclxuICAgIGJ2bjogYnZuSGFzaCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHdhbGxldDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJWTkRhdGEodmFsdWU6IEJWTklucHV0KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFlvdXZlcmlmeS52ZXJpZnlCVk4oe1xyXG4gICAgaWQ6IHZhbHVlLmJ2bixcclxuICAgIGlzU3ViamVjdENvbnNlbnQ6IHRydWUsXHJcbiAgICBwcmVtaXVtQlZOOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4udmFsdWUsXHJcbiAgICBleHRyYToge1xyXG4gICAgICBuYW1lOiBkYXRhPy5maXJzdE5hbWUgKyAnICcgKyBkYXRhPy5sYXN0TmFtZSxcclxuICAgICAgZG9iOiB0b0lTT0RhdGUoZGF0YT8uZGF0ZU9mQmlydGgpLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5jb3VudHJ5LFxyXG4gICAgICBnZW5kZXI6IGRhdGE/LmdlbmRlcixcclxuICAgICAgcGhvbmU6IGRhdGE/Lm1vYmlsZSxcclxuICAgIH0sXHJcbiAgICBlbWJlZGx5OiB7XHJcbiAgICAgIGRvYjogdG9JU09EYXRlKGRhdGE/LmRhdGVPZkJpcnRoKSxcclxuICAgICAgY291bnRyeTogZGF0YT8uY291bnRyeSxcclxuICAgICAgZ2VuZGVyOiBkYXRhPy5nZW5kZXIsXHJcbiAgICAgIHBob25lOiBkYXRhPy5tb2JpbGUsXHJcbiAgICAgIGFkZHJlc3M6IGRhdGE/LmFkZHJlc3M/LmFkZHJlc3NMaW5lLFxyXG4gICAgICBjaXR5OiBkYXRhPy5hZGRyZXNzPy50b3duLFxyXG4gICAgICBmaXJzdE5hbWU6IGRhdGE/LmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICBtaWRkbGVOYW1lOiBkYXRhPy5taWRkbGVOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FwdHVyZUZpbmdlclByaW50KFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgcGF5bG9hZDogeyBmaW5nZXJQcmludDogc3RyaW5nIH0sXHJcbikge1xyXG4gIC8vIE9wdGlvbmFsbHksIGhhc2ggdGhlIGZpbmdlcnByaW50IGJlZm9yZSBzYXZpbmcgZm9yIHNlY3VyaXR5XHJcbiAgLy8gY29uc3QgaGFzaGVkRmluZ2VyUHJpbnQgPSBhd2FpdCBoYXNoUGluKHBheWxvYWQuZmluZ2VyUHJpbnQpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGZpbmdlclByaW50OiBwYXlsb2FkLmZpbmdlclByaW50LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVSZWdpc3RlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBidm46IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlxcZCskLykgLy8gb25seSBkaWdpdHNcclxuICAgICAgLmxlbmd0aCgxMSlcclxuICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIHJvbGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAudmFsaWQoJ1VTRVInLCAnQUdFTlQnLCAnQURNSU4nLCAnSU5TVElUVVRJT04nLCAnTUVSQ0hBTlQnKVxyXG4gICAgICAub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZ5RE9CKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvYjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLylcclxuICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICBidm46IEpvaS5zdHJpbmcoKS5taW4oMTEpLm1heCgxMSkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlT1RQKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgdHlwZTogSm9pLnN0cmluZygpLnZhbGlkKCdQSE9ORScsICdFTUFJTCcpLmRlZmF1bHQoJ0VNQUlMJyksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZvcmdvdFBpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaG9uZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgfSkub3IoJ3Bob25lJywgJ2VtYWlsJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUxvZ2luKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgcGluOiBKb2kuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVMb2dpbldpdGhGaW5nZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZmluZ2VyUHJpbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVSZXNldFBhc3N3b3JkKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHRva2VuOiBKb2kuc3RyaW5nKCkubWluKDYpLm1heCg2KS5yZXF1aXJlZCgpLFxyXG4gICAgbmV3UGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oOCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUmVzZXRQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLFxyXG4gICAgb3RwOiBKb2kuc3RyaW5nKCkubWluKDYpLm1heCg2KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVXBkYXRlUGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBpbjogSm9pLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVGb3Jnb3RQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlcmlmeUJWTigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBidm46IEpvaS5zdHJpbmcoKS5taW4oMTEpLm1heCgxMSkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBhdXRoU2VydmljZSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIHVzZXJTZXJ2aWNlIGZyb20gJy4uL3VzZXJzL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0ZUZvcmdvdFBhc3N3b3JkLFxyXG4gIFZhbGlkYXRlRm9yZ290UGluLFxyXG4gIFZhbGlkYXRlTG9naW4sXHJcbiAgVmFsaWRhdGVMb2dpbldpdGhGaW5nZXIsXHJcbiAgVmFsaWRhdGVPVFAsXHJcbiAgVmFsaWRhdGVSZWdpc3RlcixcclxuICBWYWxpZGF0ZVJlc2V0UGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVSZXNldFBpbixcclxuICBWYWxpZGF0ZVVwZGF0ZVBpbixcclxuICBWYWxpZGF0ZVZlcmlmeURPQixcclxuICBWZXJpZnlCVk4sXHJcbn0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IGlzRGV2LCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IEJvdHRsZW5lY2sgZnJvbSAnYm90dGxlbmVjayc7XHJcbmltcG9ydCB7IHNpZ25BY2Nlc3NUb2tlbiB9IGZyb20gJ0AvdXRpbHMvand0JztcclxuXHJcbmNvbnN0IGxpbWl0ZXIgPSBuZXcgQm90dGxlbmVjayh7XHJcbiAgbWF4Q29uY3VycmVudDogMSxcclxuICBtaW5UaW1lOiAzMzMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgcmVnaXN0ZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVSZWdpc3RlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgZXhpc3QgPSBhd2FpdCB1c2VyU2VydmljZS52YWxpZGF0ZUJWTih2YWx1ZS5idm4pO1xyXG4gICAgICBpZiAoZXhpc3QpIHRocm93IG5ldyBDdXN0b21FcnJvcignQlZOIGFscmVhZHkgaW4gdXNlJywgNDAzKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCVk5EYXRhKHZhbHVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoU2VydmljZS5yZWdpc3RlcihwYXlsb2FkIGFzIGFueSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdGF0dXM6IDIwMSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgcGhvbmVgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ1Bob25lIG51bWJlciBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgZW1haWxgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEJWTkRldGFpbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmVyaWZ5QlZOKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCVk4gZGV0YWlscyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgbG9naW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVMb2dpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5sb2dpbih2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgaWQ6IGRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgbG9naW5XaXRoRmluZ2VyUHJpbnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVMb2dpbldpdGhGaW5nZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW5XaXRoRmluZ2VyKHZhbHVlKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBzaWduQWNjZXNzVG9rZW4oeyBpZDogZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBmb3Jnb3RQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZvcmdvdFBhc3N3b3JkKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ09UUCBzZW50IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb2RlU2VudDogZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZm9yZ290UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRm9yZ290UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmZvcmdvdFBpbih2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkNvdWxkbid0IHNlbnQgT1RQXCIsIDUwMCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgc2VudCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29kZVNlbnQ6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyByZXNldFBhc3N3b3JkKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVzZXRQYXNzd29yZCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBhc3N3b3JkKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5RE9CKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZ5RE9CKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJWTkRhdGEoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHJvbGU6ICdVU0VSJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkNvdWxkbid0IHZlcmlmeSBCVk5cIiwgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IGRvYiA9IGRhdGE/LmV4dHJhPy5kb2I7XHJcbiAgICAgIGNvbnN0IGlzVmVyaWZpZWQgPSBkb2IgPT09IHZhbHVlLmRvYjtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0JpcnRoZGF5IHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgcmVzZXRQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICAvLyBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlc2V0UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiwgb3RwIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIDHvuI/ig6MgRW5zdXJlIE9UUCB3YXMgcHJvdmlkZWRcclxuICAgICAgaWYgKCFvdHApIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ09UUCBpcyByZXF1aXJlZCB0byByZXNldCBQSU4nLCA0MjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAy77iP4oOjIFZhbGlkYXRlIE9UUFxyXG4gICAgICBjb25zdCByZWNvcmQ6IGFueSA9IHt9O1xyXG4gICAgICBpZiAoIWlzRGV2KCkgJiYgb3RwICE9PSAnMjIyMjIyJykgcmVjb3JkLnJlZnJlc2hDb2RlID0gb3RwO1xyXG5cclxuICAgICAgY29uc3Qgb3RwUmVjb3JkID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiBvdHAsIC4uLnJlY29yZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghb3RwUmVjb3JkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIG9yIGV4cGlyZWQgT1RQJywgNDIyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcjogYW55ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogb3RwUmVjb3JkLnVzZXJJZCB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gM++4j+KDoyBSZXNldCBQSU5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2V0UGluKHVzZXIsIHsgcGluIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUElOIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVXBkYXRlUGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiB9ID0gdmFsdWU7XHJcblxyXG4gICAgICAvLyAz77iP4oOjIFJlc2V0IFBJTlxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVzZXRQaW4odXNlciwgeyBwaW4gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdQSU4gdXBkYXRlZGQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNvZGUsIGRvYiB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIGlmICghY29kZSAmJiAhZG9iKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAgICAgJ0VpdGhlciBPVFAgY29kZSBvciBkYXRlIG9mIGJpcnRoIGlzIHJlcXVpcmVkJyxcclxuICAgICAgICAgIDQyMixcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTsgLy8gdHJhY2sgaWYgdXNlciBwYXNzZWQgdmVyaWZpY2F0aW9uXHJcblxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgLy8gMe+4j+KDoyBPVFAgVkVSSUZJQ0FUSU9OIChpZiBjb2RlIHByb3ZpZGVkKVxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgaWYgKGNvZGUpIHtcclxuICAgICAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gICAgICAgIGlmICghaXNEZXYoKSAmJiBjb2RlICE9PSAnMjIyMjIyJykge1xyXG4gICAgICAgICAgcmVjb3JkLnJlZnJlc2hDb2RlID0gY29kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogaWQsIC4uLnJlY29yZCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAgIC8vIE9UUCBtYXRjaGVkIOKGkiBkZWxldGUgYWxsIE9UUHNcclxuICAgICAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgICAgICBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyB1c2VySWQ6IGlkIH0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAvLyAy77iP4oOjIERPQiBWRVJJRklDQVRJT04gKGlmIG5vIE9UUCBvciBmYWxsYmFjaylcclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIGlmICghdmVyaWZpZWQpIHtcclxuICAgICAgICBjb25zdCB1c2VyUmVjb3JkID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyUmVjb3JkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyUmVjb3JkLmRvYilcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgICAgICAgJ1VzZXIgZG9lcyBub3QgaGF2ZSBhIHJlZ2lzdGVyZWQgZGF0ZSBvZiBiaXJ0aCcsXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBib3RoIGRhdGVzIHRvIFlZWVktTU0tRERcclxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKHY6IHN0cmluZyB8IERhdGUpID0+XHJcbiAgICAgICAgICBuZXcgRGF0ZSh2KS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IGRiRG9iID0gZm9ybWF0RGF0ZSh1c2VyUmVjb3JkLmRvYik7XHJcbiAgICAgICAgY29uc3QgaW5wdXREb2IgPSBmb3JtYXREYXRlKGRvYik7XHJcblxyXG4gICAgICAgIGlmIChkYkRvYiAhPT0gaW5wdXREb2IpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRGF0ZSBvZiBiaXJ0aCBkb2VzIG5vdCBtYXRjaCcsIDQyMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNob3VsZCBuZXZlciBmYWlsIGhlcmUsIGJ1dCBzYWZldHkgY2hlY2tcclxuICAgICAgaWYgKCF2ZXJpZmllZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignVmVyaWZpY2F0aW9uIGZhaWxlZCcsIDUwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAvLyAz77iP4oOjIE1hcmsgdXNlciBhcyB2ZXJpZmllZFxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHsgZW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXBkYXRlZFVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHNlbmRPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVPVFAoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2VuZE9UUChpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIFNlbnQgU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL21vZHVsZXMvYXV0aC9hdXRoLnJvdXRlcy50c1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCBBdXRoQ29udHJvbGxlci5yZWdpc3Rlcik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBBdXRoQ29udHJvbGxlci5sb2dpbik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4vZmluZ2VycHJpbnQnLCBBdXRoQ29udHJvbGxlci5sb2dpbldpdGhGaW5nZXJQcmludCk7XHJcbnJvdXRlci5wb3N0KCcvcGFzc3dvcmQvZm9yZ290JywgQXV0aENvbnRyb2xsZXIuZm9yZ290UGFzc3dvcmQpO1xyXG5yb3V0ZXIucG9zdCgnL3Bhc3N3b3JkL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQYXNzd29yZCk7XHJcbnJvdXRlci5wdXQoJy86aWQvdmVyaWZ5JywgQXV0aENvbnRyb2xsZXIudmVyaWZ5T1RQKTtcclxucm91dGVyLnBhdGNoKCcvOmlkL3ZlcmlmeScsIEF1dGhDb250cm9sbGVyLnZlcmlmeU9UUCk7XHJcbnJvdXRlci5wb3N0KCcvOmlkL290cCcsIEF1dGhDb250cm9sbGVyLnNlbmRPVFApO1xyXG5yb3V0ZXIucG9zdCgnL3Bpbi9mb3Jnb3QnLCBBdXRoQ29udHJvbGxlci5mb3Jnb3RQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3VwZGF0ZScsIEF1dGhDb250cm9sbGVyLnVwZGF0ZVBpbik7XHJcbnJvdXRlci5nZXQoJy9idm4nLCBBdXRoQ29udHJvbGxlci5nZXRCVk5EZXRhaWxzKTtcclxuLy8gRm9yZ2V0IFBpblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoNCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVVuaXF1ZUlEKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGlkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGhvbmUoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15bMC05XXsxMCwxNX0kLylcclxuICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVcGRhdGVVc2VyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgb2NjdXBhdGlvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlZHVjYXRpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgcmVsaWdpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgbWFyaXRhbFN0YXR1czogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBhZGRyZXNzOiBKb2kub2JqZWN0KHtcclxuICAgICAgY291bnRyeTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0YXRlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgY2l0eTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0cmVldExpbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBvZmZpY2VfYWRkcmVzczogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGxhbmRtYXJrOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pLnJlcXVpcmVkKCksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICAgIG5leHRPZktpbjogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBwaG9uZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHJlbGF0aW9uc2hpcDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICB9KS5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVCVk4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYm52OiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoMTEpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY29kZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDYpXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVWZXJpZmljYXRpb24oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZG9jdW1lbnRzOiBKb2kuYXJyYXkoKS5pdGVtcyhcclxuICAgICAgSm9pLm9iamVjdCh7XHJcbiAgICAgICAgdHlwZTogSm9pLnN0cmluZygpXHJcbiAgICAgICAgICAudmFsaWQoXHJcbiAgICAgICAgICAgICdQQVNTUE9SVCcsXHJcbiAgICAgICAgICAgICdOQVRJT05BTF9JRCcsXHJcbiAgICAgICAgICAgICdEUklWRVJfTElDRU5TRScsXHJcbiAgICAgICAgICAgICdVVElMSVRZX0JJTEwnLFxyXG4gICAgICAgICAgICAnVk9URVJfQ0FSRCcsXHJcbiAgICAgICAgICAgICdDQUMnLFxyXG4gICAgICAgICAgICAnTUVNQVJUJyxcclxuICAgICAgICAgICAgJ0lERlJPTlQnLFxyXG4gICAgICAgICAgICAnSURCQUNLJyxcclxuICAgICAgICAgICAgJ0FVVEhPUklUWV9MRVRURVInLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZmlsZVVybDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIH0pLFxyXG4gICAgKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRmluZ2VyUHJpbnQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZmluZ2VyUHJpbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHVzZXJTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVTZXRDcmVkZW50aWFsLFxyXG4gIFZhbGlkYXRlVXBkYXRlVXNlcixcclxuICBWYWxpZGF0ZVZlcmlmaWNhdGlvbixcclxuICBWYWxpZGF0ZVBpbixcclxuICBWYWxpZGF0ZU9UUCxcclxuICBWYWxpZGF0ZUZpbmdlclByaW50LFxyXG4gIFZhbGlkYXRlVW5pcXVlSUQsXHJcbiAgVmFsaWRhdGVQaG9uZSxcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgdG9JU09EYXRlLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IEJvdHRsZW5lY2sgZnJvbSAnYm90dGxlbmVjayc7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgc2V0Q3JlZGVudGlhbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaWQgPSByZXE/LnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJRCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWRlbnRpYWwgc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlVXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJyk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVcGRhdGVVc2VyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgLy8gaWYgKHZhbHVlPy5lbWFpbCAmJiAhdXNlci5lbWJlZGx5Q3VzdG9tZXJJZCkge1xyXG4gICAgICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIC8vICAgICBhZGRyZXNzOiB1c2VyPy5hZGRyZXNzPy5zdHJlZXRMaW5lLFxyXG4gICAgICAvLyAgICAgY2l0eTogdXNlcj8uYWRkcmVzcz8uY2l0eSxcclxuICAgICAgLy8gICAgIGNvdW50cnk6IHVzZXI/LmFkZHJlc3M/LmNvdW50cnksXHJcbiAgICAgIC8vICAgICBkb2I6IHRvSVNPRGF0ZSh1c2VyPy5kb2IhKSxcclxuICAgICAgLy8gICAgIGZpcnN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgLy8gICAgIGxhc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICAvLyAgICAgcGhvbmU6IHVzZXI/LnBob25lLFxyXG4gICAgICAvLyAgICAgbWlkZGxlTmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKT8uWzJdID8/ICcnLFxyXG4gICAgICAvLyAgIH07XHJcblxyXG4gICAgICAvLyAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhIFF1ZXVlXHJcbiAgICAgIC8vICAgYXdhaXQgdXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIodXNlci5pZCwge1xyXG4gICAgICAvLyAgICAgZW1iZWRseTogZGF0YSxcclxuICAgICAgLy8gICAgIGVtYWlsOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgLy8gICAgIGJ2bjogdXNlcj8uYnZuPy50cmltKCkhLFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG5cclxuICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnKGBlbWFpbGApJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgYWxyZWFkeSBleGlzdCcgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlQaG9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBob25lKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeVBob25lKHZhbHVlLnBob25lKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlVbmlxdWVJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVVuaXF1ZUlEKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEKHZhbHVlLmlkKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogSUQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZVBpbihJRCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBwaW4gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVwZGF0ZWRVc2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ3VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgdXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbih1c2VyLnBpbiEsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcGluIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhZGRQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKElELCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGlkID0gcmVxPy5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgdXNlclNlcnZpY2UuYWRkVmVyaWZpY2F0aW9uKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBZ2VudCB2ZXJpZmljYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHZlcmlmaWNhdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeU9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlT1RQKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IHZhbHVlLmNvZGUsIHVzZXJJZDogaWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBEZWxldGUgYWxsIHVzZXIgT1RQXHJcbiAgICAgIC8vIFRPRE86IHNlbmQgdG8gYmFja2dyb3VuZFxyXG4gICAgICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdmVyaWZpY2F0aW9uLnVzZXJJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHsgZW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbXNnOiAnVmVyaWZ5IFN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjdXJyZW50VXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDMpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtc2c6ICdMb2dnZWQgaW4gU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNhcHR1cmVGaW5nZXJQcmludChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRmluZ2VyUHJpbnQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IElEIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jYXB0dXJlRmluZ2VyUHJpbnQoSUQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgZmluZ2VyIFByaW50IGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1cGRhdGVkVXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5cclxuLy8gaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHZlcmlmeUFjY2Vzc1Rva2VuIH0gZnJvbSAnQC91dGlscy9qd3QnO1xyXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKiogYXV0aCBtaWRkbGV3YXJlICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEF1dGgoXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy8gYWNjZXNzIGF1dGhvcml6ZSBoZWFkZXIgdG8gdmFsaWRhdGUgcmVxdWVzdFxyXG4gICAgY29uc3QgdG9rZW4gPSByZXE/LmhlYWRlcnM/LmF1dGhvcml6YXRpb24/LnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICAvLyByZXRyaWV2aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gdmVyaWZ5QWNjZXNzVG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGlmICghZGVjb2RlZFRva2VuPy5pZClcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHRva2VuIScgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGRlY29kZWRUb2tlbj8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSwgd2FsbGV0czogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICByZXEudXNlciA9IHVzZXI7XHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMSlcclxuICAgICAgLmpzb24oeyBlcnJvcjogZXJyb3I/Lm1lc3NhZ2UgPz8gJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoIGZyb20gJ0AvbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL21lJywgQXV0aCwgQ29udHJvbGxlci5jdXJyZW50VXNlcik7XHJcbnJvdXRlci5wdXQoJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucHV0KCcvOmlkL2NyZWRlbnRpYWxzJywgQ29udHJvbGxlci5zZXRDcmVkZW50aWFscyk7XHJcbnJvdXRlci5wYXRjaCgnLzppZC9jcmVkZW50aWFscycsIENvbnRyb2xsZXIuc2V0Q3JlZGVudGlhbHMpO1xyXG5yb3V0ZXIucG9zdCgnLzppZC92ZXJpZmljYXRpb24nLCBDb250cm9sbGVyLmFkZFZlcmlmaWNhdGlvbik7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3BpbicsIENvbnRyb2xsZXIuY3JlYXRlUGluKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZ5JywgQXV0aCwgQ29udHJvbGxlci52ZXJpZnlQaW4pO1xyXG5yb3V0ZXIucG9zdCgnLzppZC9maW5nZXJwcmludCcsIENvbnRyb2xsZXIuY2FwdHVyZUZpbmdlclByaW50KTtcclxucm91dGVyLnBvc3QoJy9waG9uZScsIENvbnRyb2xsZXIudmVyaWZ5VXNlckJ5UGhvbmUpO1xyXG5yb3V0ZXIucG9zdCgnL2lkJywgQ29udHJvbGxlci52ZXJpZnlVc2VyQnlVbmlxdWVJZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEJ1c2luZXNzIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzcyhpZDogc3RyaW5nLCBwYXlsb2FkOiBCdXNpbmVzcykge1xyXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gIGlmIChwYXlsb2FkLmFkZHJlc3MpIHtcclxuICAgIGNvbnN0IGEgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZC5hZGRyZXNzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGF0YS5hZGRyZXNzSWQgPSBhLmlkO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBheWxvYWQuYmFuaykge1xyXG4gICAgZGF0YS5iYW5rcyA9IHtcclxuICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IHBheWxvYWQ/LmJhbms/LmFjY291bnROYW1lISxcclxuICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIocGF5bG9hZD8uYmFuaz8uYWNjb3VudE51bWJlciEpLFxyXG4gICAgICAgIG5hbWU6IHBheWxvYWQ/LmJhbms/Lm5hbWUhLFxyXG4gICAgICAgIHR5cGU6IHBheWxvYWQ/LmJhbms/LnR5cGUhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5LFxyXG4gICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgIGNvbnRhY3RFbWFpbDogcGF5bG9hZC5jb250YWN0RW1haWwsXHJcbiAgICAgIGNvbnRhY3RQaG9uZTogcGF5bG9hZC5jb250YWN0UGhvbmUsXHJcbiAgICAgIG1lcmNoYW50SWQ6IGlkLFxyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGJ1c2luZXNzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVmVyaWZpY2F0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGlmICghZGF0YS5kb2N1bWVudHMubGVuZ3RoKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBdCBsZWFzdCBvbmUgZG9jdW1lbnQgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAvLyAgIENoZWNrIGZvciBidXNpbmVzc1xyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KTtcclxuICBpZiAoIWJ1c2luZXNzKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0J1c2luZXNzIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYnVzaW5lc3NJZDogaWQsXHJcbiAgICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZTogZGF0YS5kb2N1bWVudHMubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGRvYy50eXBlLFxyXG4gICAgICAgICAgZmlsZVVybDogZG9jLmZpbGVVcmwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZG9jdW1lbnRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2ZXJpZmljYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQnVzaW5lc3MoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY2F0ZWdvcnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBjb250YWN0RW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgY29udGFjdFBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHN0YXJ0ZWRBdDogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgYWRkcmVzczogSm9pLm9iamVjdCh7XHJcbiAgICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBjaXR5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgc3RhdGU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBzdHJlZXRMaW5lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgbGFuZG1hcms6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgfSksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvY3VtZW50czogSm9pLmFycmF5KCkuaXRlbXMoXHJcbiAgICAgIEpvaS5vYmplY3Qoe1xyXG4gICAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgLnZhbGlkKFxyXG4gICAgICAgICAgICAnUEFTU1BPUlQnLFxyXG4gICAgICAgICAgICAnTkFUSU9OQUxfSUQnLFxyXG4gICAgICAgICAgICAnRFJJVkVSX0xJQ0VOU0UnLFxyXG4gICAgICAgICAgICAnVVRJTElUWV9CSUxMJyxcclxuICAgICAgICAgICAgJ1ZPVEVSX0NBUkQnLFxyXG4gICAgICAgICAgICAnQ0FDJyxcclxuICAgICAgICAgICAgJ01FTUFSVCcsXHJcbiAgICAgICAgICAgICdJREZST05UJyxcclxuICAgICAgICAgICAgJ0lEQkFDSycsXHJcbiAgICAgICAgICAgICdBVVRIT1JJVFlfTEVUVEVSJyxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGZpbGVVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB9KSxcclxuICAgICksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBNZXJjaGFudCBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZUJ1c2luZXNzLCBWYWxpZGF0ZVZlcmlmaWNhdGlvbiB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgYWRkQnVzaW5lc3MocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcT8ucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQnVzaW5lc3MoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgTWVyY2hhbnQuY3JlYXRlQnVzaW5lc3MoaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0J1c2luZXNzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGJ1c2luZXNzLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IE1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbihpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB2ZXJpZmljYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy86aWQvYnVzaW5lc3MnLCBDb250cm9sbGVyLmFkZEJ1c2luZXNzKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZpY2F0aW9uJywgQ29udHJvbGxlci5hZGRWZXJpZmljYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgZm9ybWF0VHJhbnNmZXJTTVMsIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmNvbnN0IFRYTkZFRSA9IHByb2Nlc3MuZW52LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF5b3V0KHBheWxvYWQ6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocGF5bG9hZD8uc3RhdHVzPy50b0xvd2VyQ2FzZSgpICE9PSAnc3VjY2VzcycpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXJyb3IgZnJvbSBFbWJlZGx5JywgNTAwKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRyYW5zZmVyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICBpZiAoWydDT01QTEVURUQnLCAnUkVWRVJTRUQnXS5pbmNsdWRlcyh0cmFuc2Zlci5zdGF0dXMpKSByZXR1cm4gdHJhbnNmZXI7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB0cmFuc2Zlci5tZXRhZGF0YSBhcyB7IHByb3ZpZGVJZD86IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgeW91IGNhbiB1c2UgZGVjcmVtZW50IGluIHVwZGF0ZVdhbGxldCBpbnN0ZWFkIG9mIHF1ZXJpbmcgaGVyZVxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXIuZnJvbVdhbGxldElkISB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiBtZXRhZGF0YT8ucHJvdmlkZUlkLFxyXG4gICAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0Ftb3VudEluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTsgLy9Db252ZXJ0ZWQgdG8gS29ib1xyXG4gICAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gbmV3QW1vdW50SW5Lb2JvO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETzo6IE5PVElGWSBVU0VSXHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICAgIGFjY291bnQ6IHVwZGF0ZWRXYWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICBhbW91bnQ6IG5ld0Ftb3VudEluS29ibyxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBUUkFOU0ZFUiBUTyAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICBiYWxhbmNlOiB1cGRhdGVkV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICBjb3VudHJ5OiB3YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB3YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBGRUUgSGVyZVxyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzLi4gSXQgbWF5IHNob3cgaW5jb3JyZWN0IGJhbGFuY2UgaW4gU01TIChCZWNhdXNlIHRoZSBiYWxhbmNlIHdhcyBiaWxsZWQgYmVmb3JlKVxyXG4gICAgICBjb25zdCBuZXdCYWxBZnRlckZlZSA9IEJpZ0ludCh1cGRhdGVkV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBjb25zdCBuZXdMZWRnZUJhbEFmdGVyRmVlID1cclxuICAgICAgICBCaWdJbnQodXBkYXRlZFdhbGxldD8ubGVkZ2VyQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdMZWRnZUJhbEFmdGVyRmVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZmVlID0gYXdhaXQgdHguZmVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGZlZS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGZlZU1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdXBkYXRlZFdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogZmVlUmF0ZSxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBDb21taXNzaW9uIG9uIE5JUCBUcmFuc2ZlcmAsXHJcbiAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgY291bnRyeTogd2FsbGV0Py51c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgICAgbWVzc2FnZTogZmVlTWVzc2FnZSxcclxuICAgICAgICBwaG9uZTogd2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWRUcmFuc2ZlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlclJlY29yZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2U7XHJcblxyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIG1lc3NhZ2UgPSBlPy5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyaXRlIFJldmVyc2UgbG9naWNcclxuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdFcnJvciBmcm9tIEVtYmVkbHknKSkge1xyXG4gICAgICBjb25zdCBuZXdBbW91bnRJbktvYm8gPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0ZlZUluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcblxyXG4gICAgICBjb25zdCB0cnggPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmRlYml0QWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiB7IGluY3JlbWVudDogbmV3QW1vdW50SW5Lb2JvICsgbmV3RmVlSW5Lb2JvIH0sXHJcbiAgICAgICAgICAgIGxlZGdlckJhbGFuY2U6IHsgaW5jcmVtZW50OiBuZXdBbW91bnRJbktvYm8gKyBuZXdGZWVJbktvYm8gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlcj8uaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnUkVWRVJTRUQnIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdSRVZFUlNFRCcsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkucmV2ZXJzZWQnLFxyXG4gICAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcixcclxuICAgICAgICAgIHdhbGxldCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE5vdGlmeSB1c2VyIG9mIHJldmVyc2FsXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdHJ4LndhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogbmV3QW1vdW50SW5Lb2JvLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgICAgZGVzYzogYFJFVkVSU0VEOiAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cngudHJhbnNmZXI/LmN1cnJlbmN5ISxcclxuICAgICAgICBiYWxhbmNlOiB0cngud2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyeC50cmFuc2Zlcj8uaWQhLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgIGNvdW50cnk6IHRyeC53YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB0cngud2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YTogeyBlcnJvcjogbWVzc2FnZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbG93KHBheWxvYWQ6IGFueSkge1xyXG4gIC8vIEluY2FzZSBvZiBkb3VibGUgd2ViaG9va1xyXG4gIGNvbnN0IF90cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChfdHJhbnNmZXIpIHJldHVybiBfdHJhbnNmZXI7XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmFjY291bnROdW1iZXIgfSxcclxuICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBwcmlzbWEucHJvdmlkZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5OiBwYXlsb2FkPy5yZWZlcmVuY2UsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQ/LnJlZmVyZW5jZSxcclxuICAgICAgICByZWFzb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IGZhbHNlLFxyXG4gICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgdHlwZTogJ0lORkxPVycsXHJcbiAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgSm91cm5hbEVudHJ5XHJcbiAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogd2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgIEJpZ0ludCh3YWxsZXQubGVkZ2VyQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9XHJcbiAgICAgIEJpZ0ludCh3YWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB3YWxsZXRJZDogd2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICByZWFzb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlcj8uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogd2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICBpdGVtSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHR5cGU6ICdERVBPU0lUJyxcclxuICAgICAgICB1c2VySWQ6IHdhbGxldD8udXNlcj8uaWQhLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICB0eXBlOiAnY3JlZGl0JyxcclxuICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHJlZmVyZW5jZTogcGF5bG9hZD8ucmVmZXJlbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmFuc2ZlcjtcclxuICB9KTtcclxuXHJcbiAgLy9UT0RPOiBUcmlnZ2VyIE5vdGlmaWNhdGlvbnNcclxuICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9XHJcbiAgICBCaWdJbnQod2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG5cclxuICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgYWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgIHR5cGU6ICdDUicsXHJcbiAgICBkZXNjOiBgVFJBTlNGRVIgRlJPTSAke3BheWxvYWQ/LnNlbmRlck5hbWV9IC0gJHtwYXlsb2FkPy5kZXNjcmlwdGlvbn1gLnRvVXBwZXJDYXNlKCksXHJcbiAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICBiYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXI/LmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgY291bnRyeTogd2FsbGV0LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogd2FsbGV0LnVzZXI/LnBob25lISxcclxuICAgIHR5cGU6ICdTTVMnLFxyXG4gIH0pO1xyXG5cclxuICAvLyBNb3ZlIG1vbmV5IGZyb20gdXNlciB3YWxsZXQgdG8gb3JnYW5pemF0aW9uIHdhbGxldFxyXG5cclxuICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgY29uc3QgcmVmID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLm9yZ2FuaXphdGlvbi5pbml0aWF0ZWQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZnJvbUFjY291bnQ6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIHRvQWNjb3VudDogZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50LFxyXG4gICAgICAgIHJlbWFya3M6ICdUcmFuc2ZlciBmcm9tIHVzZXIgd2FsbGV0IHRvIG9yZ2FuaXphdGlvbiB3YWxsZXQnLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiByZWYsXHJcbiAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBSZW1vdmUgZGF0YSBvYmplY3QgZnJvbSB0aGlzIFF1ZXVlXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlci5pZCwgJ0lOVEVSTkFMX1RSQU5TRkVSJywge1xyXG4gICAgZnJvbUFjY291bnQ6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQsXHJcbiAgICByZW1hcmtzOiAnVHJhbnNmZXIgZnJvbSB1c2VyIHdhbGxldCB0byBvcmdhbml6YXRpb24gd2FsbGV0JyxcclxuICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiByZWYsXHJcbiAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJhbnNmZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyB3ZWJob29rU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVUcmFuc2ZlcnMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSByZXEuaGVhZGVyc1sneC1lbWJlZGx5LXNpZ25hdHVyZSddO1xyXG4gICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IHJhd0JvZHkgPSBib2R5Py50b1N0cmluZygndXRmOCcpO1xyXG5cclxuICAgICAgaWYgKCFzaWduYXR1cmUgfHwgIXJhd0JvZHkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdNaXNzaW5nIHNpZ25hdHVyZSBvciBib2R5JywgNDAwKTtcclxuXHJcbiAgICAgIGNvbnN0IGlzVmVyaWZpZWQgPSBhd2FpdCBFbWJlZGx5LnZhbGlkYXRpb25zLnZlcmlmeVdlYmhvb2soXHJcbiAgICAgICAgcmF3Qm9keSxcclxuICAgICAgICBzaWduYXR1cmUsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIWlzVmVyaWZpZWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBzaWduYXR1cmUnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVxLmJvZHk7XHJcbiAgICAgIGxldCB0cmFuc2ZlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZXZlbnQgPT09ICduaXAnKVxyXG4gICAgICAgIHRyYW5zZmVyID0gYXdhaXQgd2ViaG9va1NlcnZpY2UuaW5mbG93KHJlc3VsdD8uZGF0YSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmV2ZW50ID09PSAncGF5b3V0JylcclxuICAgICAgICB0cmFuc2ZlciA9IGF3YWl0IHdlYmhvb2tTZXJ2aWNlLnBheW91dChyZXN1bHQ/LmRhdGEpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICBtZXNzYWdlOiAnV2ViaG9vayByZWNlaXZlZCBhbmQgdmVyaWZpZWQnLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVyLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9ha3V1aycsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICB9KTtcclxufSk7XHJcbnJvdXRlci5wb3N0KCcvZW1iZWRseScsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kKCk7XHJcbn0pO1xyXG5yb3V0ZXIucG9zdChcclxuICAnL2VtYmVkbHkvdHJhbnNmZXJzJyxcclxuICBleHByZXNzLnJhdyh7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICBDb250cm9sbGVyLmhhbmRsZVRyYW5zZmVycyxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVHJhbnNmZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgc2VuZGVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHJlY2VpdmVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFtb3VudDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksIC8vIHNtYWxsZXN0IHVuaXQgKGludGVnZXIpXHJcbiAgICBjdXJyZW5jeTogSm9pLnN0cmluZygpLm1heCgzKS5yZXF1aXJlZCgpLFxyXG4gICAgcmVhc29uOiBKb2kuc3RyaW5nKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSwgLy8gc21hbGxlc3QgdW5pdCAoaW50ZWdlcilcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkubWF4KDMpLnJlcXVpcmVkKCksXHJcbiAgICByZWFzb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBkZXN0aW5hdGlvbkJhbms6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQ3JlYXRlV2FsbGV0KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7XHJcbiAgVmFsaWRhdGVDcmVhdGVXYWxsZXQsXHJcbiAgVmFsaWRhdGVFeHRlcm5hbFRyYW5zZmVyLFxyXG4gIFZhbGlkYXRlVHJhbnNmZXIsXHJcbn0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgKiBhcyBXYWxsZXRTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCAqIGFzIFVzZXJTZXJ2aWNlIGZyb20gJy4uL3VzZXJzL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYW5rcyB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5L3V0aWxzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaWRlbXBvdGVuY3lLZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICAgICAgaWYgKCFpZGVtcG90ZW5jeUtleSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lkZW1wb3RlbmN5IGtleSBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLndhbGxldFRvV2FsbGV0VHJhbnNmZXIoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIGluaXRpYXRvclVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBpbnRlcm5hbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBFbWJlZGx5LndhbGxldHMudHJhbnNmZXIoe1xyXG4gICAgICAgIGFtb3VudDogdmFsdWUuYW1vdW50LFxyXG4gICAgICAgIGZyb21BY2NvdW50OiB2YWx1ZS5zZW5kZXIsXHJcbiAgICAgICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQgKyAnJyxcclxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICByZW1hcmtzOiB2YWx1ZS5yZWFzb24sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBleHRlcm5hbFRyYW5zZmVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkZW1wb3RlbmN5S2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgICAgIGlmICghaWRlbXBvdGVuY3lLZXkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJZGVtcG90ZW5jeSBrZXkgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVycmVkID0gYXdhaXQgV2FsbGV0U2VydmljZS50cmFuc2ZlclRvRXh0ZXJuYWxCYW5rKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBpbml0aWF0b3JVc2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc2VuZGVyTmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVdhbGxldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXI6IGFueSA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUNyZWF0ZVdhbGxldCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIC8vIFRPRE86IFJld3JpdGUgdGhpcyBjb2RlIHRvIGNyZWF0ZSBtdWx0aXBsZSB3YWxsZXRzXHJcblxyXG4gICAgICBpZiAodXNlcj8ud2FsbGV0cz8ubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnV2FsbGV0IHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIGRhdGE6IHVzZXIud2FsbGV0c1swXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5hZGRyZXNzSWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYmVkbHk6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3M/LnN0cmVldExpbmUsXHJcbiAgICAgICAgICBjaXR5OiBhZGRyZXNzPy5jaXR5LFxyXG4gICAgICAgICAgY291bnRyeTogYWRkcmVzcz8uY291bnRyeSxcclxuICAgICAgICAgIGRvYjogdXNlcj8uZG9iLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgbGFzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMV0sXHJcbiAgICAgICAgICBwaG9uZTogdXNlcj8ucGhvbmUsXHJcbiAgICAgICAgICBtaWRkbGVOYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzJdLFxyXG4gICAgICAgICAgaWQ6IHVzZXI/LmVtYmVkbHlDdXN0b21lcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXh0cmE6IHsgY3VycmVuY3k6IHZhbHVlPy5jdXJyZW5jeSB9LFxyXG4gICAgICAgIGVtYWlsOiB1c2VyPy5lbWFpbCEsXHJcbiAgICAgICAgYnZuOiB1c2VyPy5idm4hLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgVXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIodXNlci5pZCwgZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdXYWxsZXQgY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogd2FsbGV0LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRXYWxsZXRGcm9tQWNjb3VudChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnROdW1iZXIgPSByZXEucGFyYW1zPy5hY2NvdW50O1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IGFjY291bnROdW1iZXIgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1dhbGxldCByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHdhbGxldCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rcyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZUJhbmtOYW1lID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgY29tbW9uIHN1ZmZpeGVzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIC9cXHMrKHBsY3xsdGR8bGltaXRlZHxiYW5rfGhvbGRpbmdzP3xncm91cHxuaWcoZXJpYSk/fG1pY3JvZmluYW5jZXxtZmIpJC9naSxcclxuICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpIC8vIG5vcm1hbGl6ZSB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubmlnZXJpYW5iYW5rbG9nb3MueHl6LycpO1xyXG5cclxuICAgICAgY29uc3QgYWxsQmFua3MgPSByZXNwLmRhdGE7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gYmFua3MubWFwKChiYW5rOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQmFua05hbWUgPSBub3JtYWxpemVCYW5rTmFtZShiYW5rLmJhbmtOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhbGxCYW5rcy5maW5kKChiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRBcGlUaXRsZSA9IG5vcm1hbGl6ZUJhbmtOYW1lKGIudGl0bGUpO1xyXG5cclxuICAgICAgICAgIC8vIEV4YWN0IG1hdGNoIGFmdGVyIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAgIGlmIChub3JtYWxpemVkQXBpVGl0bGUgPT09IG5vcm1hbGl6ZWRCYW5rTmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIGNvbnRhaW5zIHRoZSBvdGhlciAoZm9yIGNhc2VzIGxpa2UgXCJBY2Nlc3NcIiB2cyBcIkFjY2VzcyBCYW5rXCIpXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRBcGlUaXRsZS5pbmNsdWRlcyhub3JtYWxpemVkQmFua05hbWUpIHx8XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRCYW5rTmFtZS5pbmNsdWRlcyhub3JtYWxpemVkQXBpVGl0bGUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBLZWVwIGFsbCBiYW5rcywgYWRkIGxvZ28gZGF0YSBpZiBhdmFpbGFibGVcclxuICAgICAgICBpZiAobWF0Y2gpIGkrKztcclxuICAgICAgICByZXR1cm4gbWF0Y2ggPyB7IC4uLmJhbmssIGxvZ286IG1hdGNoLnJvdXRlIH0gOiBiYW5rO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coYmFua3MpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdSZXRyaWV2ZSBhbGwgYmFua3MnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogbWVyZ2VkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgZ2V0QmFua0J5QWNjb3VudE51bWJlcigpIHt9XHJcbn1cclxuIiwiLy8gc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHNcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uL3ByaXNtYS9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlkZW1wb3RlbmN5KFxyXG4gIHJlcTogUmVxdWVzdCxcclxuICByZXM6IFJlc3BvbnNlLFxyXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcclxuKSB7XHJcbiAgY29uc3Qga2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgaWYgKCFrZXkpIHJldHVybiBuZXh0KCk7XHJcblxyXG4gIGNvbnN0IHJlcUhhc2ggPSBjcnlwdG9cclxuICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxyXG4gICAgLnVwZGF0ZShKU09OLnN0cmluZ2lmeSh7IHVybDogcmVxLm9yaWdpbmFsVXJsLCBib2R5OiByZXEuYm9keSB9KSlcclxuICAgIC5kaWdlc3QoJ2hleCcpO1xyXG5cclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5pZGVtcG90ZW5jeUtleS5maW5kVW5pcXVlKHsgd2hlcmU6IHsga2V5IH0gfSk7XHJcblxyXG4gIGlmICghZXhpc3RpbmcpIHtcclxuICAgIC8vIExvY2sgbmV3IGtleSBpbW1lZGlhdGVseVxyXG4gICAgYXdhaXQgcHJpc21hLmlkZW1wb3RlbmN5S2V5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsga2V5LCByZXF1ZXN0SGFzaDogcmVxSGFzaCwgbG9ja2VkQXQ6IG5ldyBEYXRlKCkgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcblxyXG4gIGlmIChleGlzdGluZy5yZXF1ZXN0SGFzaCAhPT0gcmVxSGFzaCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgZXJyb3I6ICdJZGVtcG90ZW5jeSBrZXkgY29uZmxpY3QnIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nLnJlc3BvbnNlQm9keSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXhpc3Rpbmcuc3RhdHVzQ29kZSA/PyAyMDApLmpzb24oZXhpc3RpbmcucmVzcG9uc2VCb2R5KTtcclxuICB9XHJcblxyXG4gIC8vIEtleSBleGlzdHMgYnV0IGlzIGxvY2tlZCDigJQgY29uY3VycmVudCByZXF1ZXN0XHJcbiAgaWYgKGV4aXN0aW5nLmxvY2tlZEF0KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjUpLmpzb24oeyBlcnJvcjogJ1JlcXVlc3QgaW4gcHJvZ3Jlc3MnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3JpZ2luYWxKc29uID0gcmVzLmpzb24uYmluZChyZXMpO1xyXG4gIHJlcy5qc29uID0gKGJvZHk6IGFueSkgPT4ge1xyXG4gICAgcHJpc21hLmlkZW1wb3RlbmN5S2V5XHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGtleSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlc3BvbnNlQm9keTogYm9keSxcclxuICAgICAgICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgbG9ja2VkQXQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGlkZW1wb3RlbmN5IHJlY29yZCcsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIG9yaWdpbmFsSnNvbihib2R5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV4dCgpO1xyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaWRlbXBvdGVuY3kgfSBmcm9tICdAL21pZGRsZXdhcmUvaWRlbXBvdGVuY3knO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsIENvbnRyb2xsZXIuY3JlYXRlV2FsbGV0KTtcclxucm91dGVyLmdldCgnL2JhbmtzJywgQ29udHJvbGxlci5nZXRCYW5rcyk7XHJcbnJvdXRlci5nZXQoJy86YWNjb3VudCcsIENvbnRyb2xsZXIuZ2V0V2FsbGV0RnJvbUFjY291bnQpO1xyXG5yb3V0ZXIucG9zdCgnL3RyYW5zZmVyJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIudHJhbnNmZXIpO1xyXG5yb3V0ZXIucG9zdCgnL2V4dGVybmFsJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIuZXh0ZXJuYWxUcmFuc2Zlcik7XHJcbnJvdXRlci5wb3N0KCcvaW50ZXJuYWwnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5pbnRlcm5hbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUFpcnRpbWVQYXltZW50KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIG51bWJlcjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgYW1vdW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgYW1vdW50SW5OYWlyYSB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWlydGltZShcclxuICB1c2VySWQ6IHN0cmluZyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZGVtcG90ZW5jeUtleTogc3RyaW5nO1xyXG4gICAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IGJpZ2ludCB8IG51bWJlciB8IHN0cmluZyB8IGFueTtcclxuICAgIGNvdW50cnk6IHN0cmluZztcclxuICB9LFxyXG4pIHtcclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8ocGF5bG9hZC5hbW91bnQpO1xyXG4gIGlmIChhbXQgPD0gMG4pIHRocm93IG5ldyBFcnJvcignQW1vdW50IG11c3QgYmUgcG9zaXRpdmUnKTtcclxuXHJcbiAgLy8gaWRlbXBvdGVuY3kgZ3VhcmRcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5haXJ0aW1lLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQuaWRlbXBvdGVuY3lLZXkgfSxcclxuICB9KTtcclxuICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgLy8gUmVzb2x2ZSBzZW5kZXIgYW5kIHJlY2lwaWVudFxyXG4gIGNvbnN0IGZyb21Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICBpbmNsdWRlOiB7IHdhbGxldHM6IHRydWUgfSxcclxuICB9KTtcclxuICBjb25zdCBmcm9tV2FsbGV0ID0gZnJvbVVzZXI/LndhbGxldHM/LlswXTtcclxuICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBFcnJvcignV2FsbGV0cyBub3QgZm91bmQnKTtcclxuXHJcbiAgLy8gICBDaGVjayBmb3Igc3VmZmljaWVudCBhbW91bnQgaGVyZVxyXG4gIGNvbnN0IGF2YWlCYWwgPSBOdW1iZXIoZnJvbVdhbGxldC5hdmFpbGFibGVCYWxhbmNlKTtcclxuICBpZiAoYXZhaUJhbCA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgYmFsYW5jZScsIDQyMik7XHJcblxyXG4gIGNvbnN0IGFpcnRpbWUgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gbG9jayB3YWxsZXRzIHdpdGggRk9SIFVQREFURVxyXG4gICAgLy8gcGFyYW1ldGVyaXplIGNhcmVmdWxseVxyXG4gICAgY29uc3QgbG9ja2VkUm93cyA9IGF3YWl0IHR4LiRxdWVyeVJhd1Vuc2FmZShcclxuICAgICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJDEpIEZPUiBVUERBVEVgLFxyXG4gICAgICBmcm9tV2FsbGV0LmlkLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBtYXAgbG9ja2VkIHJvd3NcclxuICAgIGNvbnN0IGxvY2tlZE1hcCA9IChsb2NrZWRSb3dzIGFzIGFueVtdKVswXTtcclxuICAgIGlmICghbG9ja2VkTWFwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA1MDApO1xyXG5cclxuICAgIC8vIGNoZWNrIGZ1bmRzXHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkTWFwLmF2YWlsYWJsZUJhbGFuY2UpO1xyXG4gICAgaWYgKGF2YWlsYWJsZSA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgZnVuZHMnLCA0MjIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBBaXJ0aW1lIFRyYW5zYWN0aW9uIHJlY29yZFxyXG4gICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgdHguYWlydGltZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQuaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgIGFtb3VudDogYW10LnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICB9IGFzIGFueSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiAtcGF5bG9hZD8uYW1vdW50Py50b1N0cmluZygpLFxyXG4gICAgICAgIGl0ZW1JZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgdHlwZTogJ0FJUlRJTUUnLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgIHByb3ZpZGVyOiAnQUtVVUsnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEFpcnRpbWUgUHVyY2hhc2UgdG8gJHtwYXlsb2FkLm51bWJlcn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29tcHV0ZSBuZXcgYmFsYW5jZXNcclxuICAgIGNvbnN0IG5ld1VzZXJMZWRnZXJCYWxhbmNlID0gQmlnSW50KGxvY2tlZE1hcC5sZWRnZXJCYWxhbmNlKSAtIGFtdDtcclxuICAgIGNvbnN0IG5ld0F2YWlsYWJsZUJhbGFuY2UgPSBCaWdJbnQoYXZhaWxhYmxlKSAtIGFtdDtcclxuXHJcbiAgICAvLyBjcmVhdGUgbGVkZ2VyIHJvd3MgKGRlYml0IHRoZW4gY3JlZGl0KSwgcmVmZXJlbmNlIGpvdXJuYWwuaWRcclxuICAgIGNvbnN0IGRlYml0ID0gYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB3YWxsZXQ6IHsgY29ubmVjdDogeyBpZDogZnJvbVdhbGxldC5pZCB9IH0sXHJcbiAgICAgICAgam91cm5hbDogeyBjb25uZWN0OiB7IGlkOiBqb3VybmFsPy5pZCB9IH0sXHJcbiAgICAgICAgY2hhbmdlOiAtYW10LFxyXG4gICAgICAgIGJhbGFuY2VBZnRlcjogbmV3VXNlckxlZGdlckJhbGFuY2UsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0RFQklUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgYWlydGltZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICAgIHJlYXNvbjogYEFpcnRpbWUgUHVyY2hhc2UgdG8gJHtwYXlsb2FkLm51bWJlcn1gLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHdhbGxldHMgYmFsYW5jZXNcclxuICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VXNlckxlZGdlckJhbGFuY2UsXHJcbiAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gKysrKysrKysrKysrKysrKysrKysrKzo6KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG4gICAgLy8gQWRkIHRoaXMgdHJhbnNhY3Rpb24gdG8gdGhlIFByb3ZpZGVyIGFjY291bnRcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdBS1VVSycgfSxcclxuICAgICAgY3JlYXRlOiB7IHByb3ZpZGVyOiAnQUtVVUsnLCBiYWxhbmNlOiBhbXQgfSxcclxuICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgYmFsYW5jZTogeyBpbmNyZW1lbnQ6IGFtdC50b1N0cmluZygpIH0gYXMgYW55LFxyXG4gICAgICAgIHRvdGFsOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJvdmlkZXIgZmxvYXQgbGVkZ2VyIHJvdyAoY3JlZGl0KVxyXG4gICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgY2hhbmdlOiBhbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBCaWdJbnQocHJvdmlkZXIuYmFsYW5jZSBhcyBhbnkpICsgYW10LFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyArKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxuICAgIC8vIFRPRE86OiBJbXBsZW1lbnQgS2Fma2Egb3IgU1FTXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5pbml0aWF0ZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgY291bnRyeTogcGF5bG9hZC5jb3VudHJ5LFxyXG4gICAgICAgICAgYWNjb3VudE51bWJlcjogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICBiYWxhbmNlOiBhbW91bnRJbk5haXJhKG5ld0F2YWlsYWJsZUJhbGFuY2UpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc3RydWN0dXJlZCByZXN1bHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zYWN0aW9uOiB7XHJcbiAgICAgICAgLi4udHJhbnNhY3Rpb24sXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKGFpcnRpbWUudHJhbnNhY3Rpb24uaWQsICdBSVJUSU1FJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFpcnRpbWUsXHJcbiAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVBaXJ0aW1lUGF5bWVudCB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuaW1wb3J0ICogYXMgUGF5bWVudFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgYWlydGltZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVBaXJ0aW1lUGF5bWVudCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaUtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gICAgICBpZiAoIWlLZXkpIHRocm93IG5ldyBDdXN0b21FcnJvcignSWRlbXBvdGVuY3kga2V5IG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFNlcnZpY2UuYWlydGltZSh1c2VyLmlkLCB7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IGlLZXksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQWlydGltZSBwdXJjaGFzZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHBheW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaWRlbXBvdGVuY3kgfSBmcm9tICdAL21pZGRsZXdhcmUvaWRlbXBvdGVuY3knO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnL2FpcnRpbWUnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5haXJ0aW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIC8vIEdldCBhbGwgdHJhbnNhY3Rpb25zIGJ5IHVzZXJcclxuICBzdGF0aWMgYXN5bmMgYWxsKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCBmaWx0ZXJzID0gcmVxLnF1ZXJ5Py5maWx0ZXJzID8/IHt9O1xyXG4gICAgICBjb25zdCBwYWdlID0gTnVtYmVyKHJlcS5xdWVyeT8ucGFnZSkgPz8gMDtcclxuICAgICAgY29uc3Qgc2l6ZSA9IE51bWJlcihyZXEucXVlcnk/LnNpemUpID8/IDEwO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcclxuICAgICAgICB0YWtlOiBzaXplLFxyXG4gICAgICAgIHNraXA6IHBhZ2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb25zIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHNpbmdsZSB0cmFuc2FjdGlvbiBieSBJRFxyXG4gIHN0YXRpYyBhc3luYyBnZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcz8uaWQ7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zYWN0aW9uIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNhY3Rpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLzppZCcsIENvbnRyb2xsZXIuZ2V0KTtcclxucm91dGVyLmdldCgnLycsIENvbnRyb2xsZXIuYWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBTM0NsaWVudCwgUHV0T2JqZWN0Q29tbWFuZCB9IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1zMyc7XHJcbmltcG9ydCB7IGdldFNpZ25lZFVybCB9IGZyb20gJ0Bhd3Mtc2RrL3MzLXJlcXVlc3QtcHJlc2lnbmVyJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuY29uc3QgcjIgPSBuZXcgUzNDbGllbnQoe1xyXG4gIHJlZ2lvbjogJ2F1dG8nLCAvLyBDbG91ZGZsYXJlIFIyIHVzZXMgXCJhdXRvXCJcclxuICBlbmRwb2ludDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmwsXHJcbiAgY3JlZGVudGlhbHM6IHtcclxuICAgIGFjY2Vzc0tleUlkOiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmtleSEsXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IGVudmlyb25tZW50LmNsb3VkZmxhcmUuc2VjcmV0ISxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNsYXNzIENsb3VkZmxhcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgYXN5bmMgdXBsb2FkVG9SMihmaWxlUGF0aDogc3RyaW5nLCBrZXlQcmVmaXggPSAndXBsb2FkcycpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgZmlsZVN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKTtcclxuICAgIGNvbnN0IG9iamVjdEtleSA9IGAke2tleVByZWZpeH0vJHtEYXRlLm5vdygpfS0ke2ZpbGVOYW1lfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcjIuc2VuZChcclxuICAgICAgICBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XHJcbiAgICAgICAgICBCdWNrZXQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUuYnVja2V0ISxcclxuICAgICAgICAgIEtleTogb2JqZWN0S2V5LFxyXG4gICAgICAgICAgQm9keTogZmlsZVN0cmVhbSxcclxuICAgICAgICAgIENvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJywgLy8gYWRqdXN0IGZvciBpbWFnZXNcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIFB1YmxpYyBVUkwgaWYgYnVja2V0IHBvbGljeSBhbGxvd3NcclxuICAgICAgcmV0dXJuIGAke2Vudmlyb25tZW50LmNsb3VkZmxhcmUudXJsfS8ke2Vudmlyb25tZW50LmNsb3VkZmxhcmUuYnVja2V0fS8ke29iamVjdEtleX1gO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nsb3VkZmxhcmUgUjIgdXBsb2FkIGZhaWxlZDonLCBlcnIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdlbmVyYXRlVXBsb2FkVVJMKFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGNvbnRlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBleHBpcmVzSW46IG51bWJlciA9IDYwICogNSwgLy8gNSBtaW5cclxuICApIHtcclxuICAgIGNvbnN0IGtleSA9IGB1cGxvYWRzLyR7Y3J5cHRvLnJhbmRvbVVVSUQoKX0tJHtmaWxlTmFtZX1gO1xyXG5cclxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XHJcbiAgICAgIEJ1Y2tldDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXQsXHJcbiAgICAgIEtleToga2V5LFxyXG4gICAgICBDb250ZW50VHlwZTogY29udGVudFR5cGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzaWduZWRVcmwgPSBhd2FpdCBnZXRTaWduZWRVcmwocjIsIGNvbW1hbmQsIHsgZXhwaXJlc0luIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHNpZ25lZFVybCwga2V5IH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENsb3VkZmxhcmUgfSBmcm9tICdAL2V4dGVuc2lvbnMvY2xvdWRmbGFyZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVVcGxvYWRVUkwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGZpbGVOYW1lLCBjb250ZW50VHlwZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBpZiAoIWZpbGVOYW1lIHx8ICFjb250ZW50VHlwZSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ2ZpbGVOYW1lIGFuZCBjb250ZW50VHlwZSByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBjbG91ZGZsYXJlID0gbmV3IENsb3VkZmxhcmUoKTtcclxuICAgICAgY29uc3QgeyBzaWduZWRVcmwsIGtleSB9ID0gYXdhaXQgY2xvdWRmbGFyZS5nZW5lcmF0ZVVwbG9hZFVSTChcclxuICAgICAgICBmaWxlTmFtZSxcclxuICAgICAgICBjb250ZW50VHlwZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICB1cGxvYWRVcmw6IHNpZ25lZFVybCxcclxuICAgICAgICBwdWJsaWNVcmw6IGAke2Vudmlyb25tZW50LmNsb3VkZmxhcmUudXJsfS8ke2tleX1gLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnIpO1xyXG4gICAgICByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGF1dGhSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMnO1xyXG5pbXBvcnQgYWdlbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL2FnZW50cy9hZ2VudC5yb3V0ZXMnO1xyXG5pbXBvcnQgdXNlclJvdXRlcyBmcm9tICcuL21vZHVsZXMvdXNlcnMvcm91dGVzJztcclxuaW1wb3J0IG1lcmNoYW50Um91dGVzIGZyb20gJy4vbW9kdWxlcy9tZXJjaGFudHMvcm91dGVzJztcclxuaW1wb3J0IHdlYmhvb2tSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcyc7XHJcbmltcG9ydCBXYWxsZXRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3dhbGxldHMvcm91dGVzJztcclxuaW1wb3J0IFBheW1lbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3BheW1lbnRzL3JvdXRlcyc7XHJcbmltcG9ydCBUcmFuc2FjdGlvblJvdXRlcyBmcm9tICcuL21vZHVsZXMvdHJhbnNhY3Rpb25zL3JvdXRlcyc7XHJcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSAnLi9tb2R1bGVzL0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXV0aCBmcm9tICcuL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci51c2UoJy9hdXRoJywgYXV0aFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvd2ViaG9va3MnLCB3ZWJob29rUm91dGVzKTtcclxucm91dGVyLnVzZSgnL2FnZW50cycsIEF1dGgsIGFnZW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL21lcmNoYW50cycsIEF1dGgsIG1lcmNoYW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL3dhbGxldHMnLCBBdXRoLCBXYWxsZXRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvcGF5bWVudHMnLCBBdXRoLCBQYXltZW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL3RyYW5zYWN0aW9ucycsIEF1dGgsIFRyYW5zYWN0aW9uUm91dGVzKTtcclxucm91dGVyLnBvc3QoJy91cGxvYWRzL3VybCcsIEF1dGgsIEJhc2VDb250cm9sbGVyLmdlbmVyYXRlVXBsb2FkVVJMKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiLy8gc3JjL2FwcC50c1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICcuL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGhlbG1ldCgpKTtcclxuYXBwLnVzZShjb3JzKHsgb3JpZ2luOiAnKicgfSkpOyAvLyB0aWdodGVuIGxhdGVyXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShtb3JnYW4oJ2NvbWJpbmVkJykpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9ICgpID0+IHtcclxuICBhcHAuZ2V0KCcvJywgKF8sIHJlcykgPT4gcmVzLmpzb24oeyBvazogdHJ1ZSB9KSk7XHJcbiAgYXBwLmdldCgnL2hlYWx0aCcsIChfLCByZXMpID0+IHJlcy5qc29uKHsgb2s6IHRydWUgfSkpO1xyXG5cclxuICAvLyByZWdpc3RlciByb3V0ZXNcclxuICBhcHAudXNlKCcvYXBpL3YxJywgUm91dGVzKTtcclxuICAvLyBhcHAudXNlKGVycm9ySGFuZGxlcik7XHJcblxyXG4gIGFwcC51c2UoKHJlcSwgcmVzKT0+e1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6IFwiRW5kcG9pbnQgbm90IGZvdW5kLiBwbGVhc2UsIGNoZWNrIHRoZSB1cmwgYW5kIHRyeSBhZ2Fpbi5cIn0pXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGFwcDtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKCk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYPCfmoAgV2VwYXkgYmFja2VuZCBsaXN0ZW5pbmcgb24gcG9ydDogaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZm9yZ290UGFzc3dvcmQiLCJDbGllbnQiLCJjcnlwdG8iLCJsaW1pdGVyIiwiVFhORkVFIiwicmVkaXNDbGllbnQiLCJCdWxsUXVldWUiLCJhZGRWZXJpZmljYXRpb24iLCJXYWxsZXRTZXJ2aWNlLmNyZWF0ZSIsIlZhbGlkYXRlT1RQIiwidXNlclNlcnZpY2UudmFsaWRhdGVCVk4iLCJ1c2VyU2VydmljZS5nZXRCVk5EYXRhIiwiYXV0aFNlcnZpY2UucmVnaXN0ZXIiLCJhdXRoU2VydmljZS5sb2dpbiIsImF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlciIsImF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkIiwiYXV0aFNlcnZpY2UuZm9yZ290UGluIiwiYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCIsImF1dGhTZXJ2aWNlLnJlc2V0UGluIiwidXNlclNlcnZpY2UudXBkYXRlIiwiYXV0aFNlcnZpY2UucmVzZW5kT1RQIiwicm91dGVyIiwiVmFsaWRhdGVWZXJpZmljYXRpb24iLCJ1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSIsInVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEIiwidXNlclNlcnZpY2UuY3JlYXRlUGluIiwidXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbiIsInVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbiIsInVzZXJTZXJ2aWNlLmNhcHR1cmVGaW5nZXJQcmludCIsIkNvbnRyb2xsZXIiLCJNZXJjaGFudC5jcmVhdGVCdXNpbmVzcyIsIk1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbiIsIndlYmhvb2tTZXJ2aWNlLmluZmxvdyIsIndlYmhvb2tTZXJ2aWNlLnBheW91dCIsIldhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2ZlciIsIldhbGxldFNlcnZpY2UudHJhbnNmZXJUb0V4dGVybmFsQmFuayIsIlVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyIiwiUGF5bWVudFNlcnZpY2UuYWlydGltZSIsImF1dGhSb3V0ZXMiLCJ1c2VyUm91dGVzIiwid2ViaG9va1JvdXRlcyIsImFnZW50Um91dGVzIiwibWVyY2hhbnRSb3V0ZXMiLCJXYWxsZXRSb3V0ZXMiLCJQYXltZW50Um91dGVzIiwiVHJhbnNhY3Rpb25Sb3V0ZXMiLCJhcHAiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQyxNQUFNLENBQUMsU0FBaUIsQ0FBQyxNQUFNLEdBQUcsWUFBQTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QyxJQUFBLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDL0IsQ0FBQztBQUlNLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDO0FBQ3JDO0FBQ0QsQ0FBQSxDQUFDOztBQ1ZGLHVCQUFlLENBQUMsT0FBWSxLQUFJO0lBQzlCLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMmMwQixpQ0FBQSxFQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUE7c0ZBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFDZCxDQUFBOzs7Ozs7OztB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QUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx3QkFBd0I7QUFDOUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsNENBQTRDO0FBQ2xELFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElB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
