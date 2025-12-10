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
            message: `Your WePay verification code is: ${code}`,
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
                throw new Error('BVN already in use');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJpc21hL2NsaWVudC50cyIsIi4uL3NyYy9leHRlbnNpb25zL21haWwtc2VydmljZS90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy93ZWxjb21lLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwudHMiLCIuLi9zcmMvY29uZmlnL2Vudi50cyIsIi4uL3NyYy91dGlscy9sb2dnZXIudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbC50cyIsIi4uL3NyYy91dGlscy9jdXN0b21FcnJvci50cyIsIi4uL3NyYy9leHRlbnNpb25zL2FrdXVrL3V0aWxzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvYWt1dWsvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaGFzaC50cyIsIi4uL3NyYy91dGlscy9qd3QudHMiLCIuLi9zcmMvdXRpbHMvdW5pcXVlSWRHZW5lcmF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIi4uL3NyYy91dGlscy9nZXRVc2VyLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscy50cyIsIi4uL3NyYy9leHRlbnNpb25zL2VtYmVkbHkvaW5kZXgudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5L2luZGV4LnRzIiwiLi4vc3JjL2pvYnMvcHJvY2Vzcy10cmFuc2Zlci50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtYWlydGltZS50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucy50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQudHMiLCIuLi9zcmMvam9icy9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycy50cyIsIi4uL3NyYy9qb2JzL1dvcmtlcnMudHMiLCIuLi9zcmMvam9icy9xdWV1ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvYXV0aC92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvY29udHJvbGxlci50cyIsIi4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvc2VydmljZS50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93ZWJob29rcy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvd2ViaG9va3MvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3dhbGxldHMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvd2FsbGV0cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3ZhbGlkYXRvci50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy9wYXltZW50cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21vZHVsZXMvcGF5bWVudHMvcm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdHJhbnNhY3Rpb25zL2NvbnRyb2xsZXIudHMiLCIuLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvY2xvdWRmbGFyZS9pbmRleC50cyIsIi4uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIudHMiLCIuLi9zcmMvcm91dGVzLnRzIiwiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3ByaXNtYS9jbGllbnQudHNcclxuKEJpZ0ludC5wcm90b3R5cGUgYXMgYW55KS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaW50ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgcmV0dXJuIGludCA/PyB0aGlzLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgLy8gbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAvKiBCYXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByZWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtc28taGlkZTogYWxsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5LFxyXG4gICAgICB0ZCxcclxuICAgICAgdGgge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLFxyXG4gICAgICB1bCxcclxuICAgICAgb2wsXHJcbiAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAuc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyogVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFsaWduLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idXR0b24tLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbi0tcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MTM2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRjYxMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogUmVsYXRlZCBJdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0JDQ0NGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBEaXNjb3VudCBDb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBTb2NpYWwgSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfaGVhZGluZyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM4NTg3OEU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV90b3RhbC0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM2QjZFNzY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLW1hc3RoZWFkX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktc3ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQsXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcclxuICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuICAgICAgICAuZi1mYWxsYmFjayAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGUgbGluayBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPWZvcmdvdF9wYXNzd29yZF9lbWFpbFwiIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbS9fbnV4dC9pbWcvbG9nby4wNzc3OWUyLnBuZ1wiIGFsdD1cIk1hc3RlcmluZ2JhY2tlbmRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtYm9keVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYWNjb3VudC4gVXNlIHRoZSBidXR0b24gYmVsb3cgdG8gcmVzZXQgaXQuIDxzdHJvbmc+VGhpcyBwYXNzd29yZCByZXNldCBpcyBvbmx5IHZhbGlkIGZvciB0aGUgbmV4dCA2MCBtaW51dGVzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cImYtZmFsbGJhY2sgYnV0dG9uIGJ1dHRvbi0tZ3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lc3NhZ2UuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBzZWN1cml0eSwgaWYgeW91IGRpZCBub3QgcmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgb3IgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QHByb2ZhaWxpLmNvbVwiPmNvbnRhY3Qgc3VwcG9ydDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+VGhlICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9IFRlYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlBvcnQgSGFyY291cnQsIFJpdmVycywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIiA+XHJcbiAgICAgICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiY29sb3Itc2NoZW1lXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODY5RDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICBvbCxcclxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAuNGVtIDAgMS4xODc1ZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ1dHRvbi0tZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJDNjY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYxMzY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEF0dHJpYnV0ZSBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXNfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBSZWxhdGVkIEl0ZW1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWRfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9oZWFkaW5nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEwcHggOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogRGF0YSB0YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuc3ViIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLW1hc3RoZWFkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNBOEFBQUY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgb2wsXHJcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICAgIHN1cHBvcnRlZC1jb2xvci1zY2hlbWVzOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwhLS1baWYgbXNvXT5cclxuICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgICAgIC5mLWZhbGxiYWNrICB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIj5Zb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCB5b3VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXBhc3N3b3JkX2NoYW5nZWRfZW1haWxcIiBjbGFzcz1cImYtZmFsbGJhY2sgZW1haWwtbWFzdGhlYWRfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbWFpbCBCb2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBCb2R5IGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBjb25uZWN0ZWQgdG8geW91ciBNYXN0ZXJpbmdiYWNrZW5kIGFjY291bnQgd2FzIGNoYW5nZWQuIElmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzIGNoYW5nZSwgdGFsayB0byB1cyB0byByZXZlcnQgaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFsayBzb29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlRoZSAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSBUZWFtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM4NjlkNDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjY2NmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9oZWFkaW5nIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjY2NmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiY2NjZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50X2hlYWRpbmcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHggMTBweCA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBEYXRhIHRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaGVhZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICM4NTg3OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgY29sb3I6ICM2YjZlNzY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogOTRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YWFhZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZiNmU3NjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWNvbnRlbnQsXHJcbiAgICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgdWwsXHJcbiAgICAgICAgICBvbCxcclxuICAgICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgc3VwcG9ydGVkLWNvbG9yLXNjaGVtZXM6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIlxyXG4gICAgICAgID5XZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgYWJvYXJkLjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLW1hc3RoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXdlbGNvbWVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTcwXCJcclxuICAgICAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9hcmQuIE15IG5hbWUgaXMgU29sb21vbiBhbmQgSSdsbCBzdXBwb3J0IHlvdSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSdyZSBoZXJlLCBsZXQgbWUgYnJpZWZseSByZWNhcCB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIE1hc3RlcmluZ2JhY2tlbmQgY2FuIG9mZmVyIHlvdTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpZGVvIGFuZCBUZXh0IGJhc2VkIEJhY2tlbmQgRW5naW5lZXJpbmcgY291cnNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJhY2tlbmQgUG9ydGZvbGlvIHRvIHNob3djYXNlIHlvdXIgc2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXJuIHRvIGJ1aWxkIGZyb20gVGhvdXNhbmRzIFJlYWwtd29ybGQgUHJvamVjdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyYWNrIHlvdXIgbGVhcm5pbmdzIGFuZCBzZXQgc2NoZWR1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IEV4cGVydCBWZXR0ZWQgcm9hZG1hcHMgdG8gbGVhcm4gYmFja2VuZCBlbmdpbmVlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwIGNvdXJzZXMgdG8gQmFja2VuZCBQcm9qZWN0cyB0byBoZWxwIHlvdSBtYXN0ZXIgeW91ciBza2lsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25saW5lIGNvZGluZyBjaGFsbGVuZ2VzIGJ5IGV4cGVydHMgdG8gaW1wcm92ZSB5b3VyIHNraWxsczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGljayBwcm9qZWN0cyBmcm9tIGRpZmZlcmVudCBidXNpbmVzcyBkb21haW5zIHRvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIG9mIHRoZSBmZWF0dXJlcyBvbiB0aGUgd2F5OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9hZG1hcHMgPT4gPC9zdHJvbmc+TUIgUm9hZG1hcCBlbmFibGVzIHN0cnVjdHVyZWQtYmFzZWQgbGVhcm5pbmcgYXBwcm9hY2ggZm9yIEJhY2tlbmQgZW5naW5lZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0IExhbmQgPT4gPC9zdHJvbmc+TUIgUHJvamVjdHMgZW5hYmxlcyBCYWNrZW5kIGVuZ2luZWVycyB0aHJvdWdoIGEgbGVhcm4tYnktYnVpbGRpbmcgbW9kZWwuIEJ1aWxkIHJlYWwtd29ybGQgYmFja2VuZCBwcm9qZWN0cyB3aXRob3V0IGNvZGluZyB0aGUgZnJvbnRlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tlbmQgUG9ydGZvbGlvID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DcmVhdGUgYW5kIG1hbmFnZSB5b3VyIGJhY2tlbmQgcG9ydGZvbGlvIHdpdGggdG9ucyBvZiByZWFsIHdvcmxkIGJhY2tlbmQgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tMYW5kID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5MZWFybiBiYWNrZW5kIGVuZ2luZWVyaW5nIGJ5IHNvbHZpbmcgY2hhbGxlbmdlcyBpbiBhIGdhbWlmeWluZyB3YXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGRvbid0IGJlIHNoeSBhbmQgcmVhY2ggb3V0IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91ciB0ZWFtIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BtYXN0ZXJpbmdiYWNrZW5kLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPmluZm9AbWFzdGVyaW5nYmFja2VuZC5jb208L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCBpbiBubyB0aW1lLCBoZXJlJ3MgYSBsaW5rIHRvIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVtbyB2aWRlbzwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vcG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5ibG9nPC9hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjBweCAwIDAgMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRhbGsgc29vbiwgPGJyIC8+U29sb21vbiBmcm9tICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICBcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby4gPGJyIC8+UG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBcclxuICBgO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcmVoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgbXNvLWhpZGU6IGFsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCxcclxuICAgICAgICB1bCxcclxuICAgICAgICBvbCxcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRGlzY291bnQgQ29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU29jaWFsIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2Zvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwtLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZF9sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5LXN1YiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKk1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAsXHJcbiAgICAgICAgICB1bCxcclxuICAgICAgICAgIG9sLFxyXG4gICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgY29kZSB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBUaGUgY29kZSBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtY29udGVudFwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbT9zb3VyY2U9dmVyaWZpY2F0aW9uX2VtYWlsXCIgY2xhc3M9XCJmLWZhbGxiYWNrIGVtYWlsLW1hc3RoZWFkX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQm9keSBjb250ZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZi1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhhbmtzIGZvciBzaWduaW5nIHVwIGZvciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSEgVGhpcyBlbWFpbCB2ZXJpZmljYXRpb24gc3RlcCBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBhY2N1cmF0ZSBlbWFpbCBhZGRyZXNzIHRvIGNvbW11bmljYXRlIGltcG9ydGFudCBhY2NvdW50IGV2ZW50cyB0byB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSBjb3B5IGFuZCBwYXN0ZSB0aGUgY29kZSBiZWxvdyBpbiB5b3VyIGJyb3dzZXIsIGJhY2sgdG8gdGhlIHNpZ24gdXAgd29ya2Zsb3cgaW5zaWRlIG91ciBhcHA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBY3Rpb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHttZXNzYWdlLmNvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5UaGUgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gVGVhbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiNTcwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+JmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJjb25zdCBkZWZhdWx0UG9ydCA9IDMwMDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcclxuICBjb250ZXh0OiAnTE9DQUwnIHwgJ0RFVkVMT1AnIHwgJ1NUQUdJTkcnIHwgJ1BST0RVQ1RJT04nO1xyXG4gIGFwcE5hbWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwb3J0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgZGVidWc/OiBzdHJpbmc7XHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hTZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hEYXlzOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzSW46IHN0cmluZztcclxuICAgIHNhbHRSb3VuZHM6IG51bWJlcjtcclxuICB9O1xyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbiAgICBwb3J0OiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXdzOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGJ1Y2tldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IG51bWJlcjtcclxuICB9O1xyXG4gIHFvcmVJZDoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjbGllbnQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWt1dWs6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlbWJlZGx5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBheW91dFVSTDogc3RyaW5nO1xyXG4gICAgd2ViaG9va1VSTDogc3RyaW5nO1xyXG4gICAgb3JnQWNjb3VudDogbnVtYmVyO1xyXG4gICAgb3JnTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgbWFpbDoge1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgcG9ydDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGNsaWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lVGVtcG9yYXJ5OiBzdHJpbmc7XHJcbiAgICBhc3luY0Z1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrUXVldWU6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUhhbmRsZXI6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBvYXV0aEdvb2dsZUNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgICBjYWxsYmFja1VSTDogc3RyaW5nO1xyXG4gIH07XHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWNrZXQ6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9XHJcbiAgKHByb2Nlc3MuZW52LkNPTlRFWFQgYXNcclxuICAgIHwgJ0xPQ0FMJ1xyXG4gICAgfCAnREVWRUxPUCdcclxuICAgIHwgJ1NUQUdJTkcnXHJcbiAgICB8ICdQUk9EVUNUSU9OJ1xyXG4gICAgfCB1bmRlZmluZWQpIHx8ICdMT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xyXG4gIGNvbnRleHQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCBkZWZhdWx0UG9ydCxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5BUFBfTkFNRSBhcyBzdHJpbmcsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5GRV9VUkwgYXMgc3RyaW5nLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5ERUJVRyxcclxuXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IE51bWJlcihwcm9jZXNzLmVudi5QQVNTV09SRF9SRVNFVF9FWFBJUkVTX01JTiksXHJcbiAgfSxcclxuXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGF3czoge1xyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HQ1BfUFJPSUVDVF9JRCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVRfTkFNRSBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX0VYUElSRVNfSU4gYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaERheXM6IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fRVhQSVJFU19EQVlTIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVUIGFzIHN0cmluZyxcclxuICAgIHNhbHRSb3VuZHM6IE51bWJlcihwcm9jZXNzLmVudi5BVVRIX1NBTFRfUk9VTkRTKSB8fCAxMCxcclxuICB9LFxyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlJFRElTX1BPUlQgfHwgJzYzNzknKSxcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMIGFzIHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRURJU19QQVNTV09SRCxcclxuICB9LFxyXG4gIG1haWw6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfSE9TVCBhcyBzdHJpbmcsXHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTUFJTF9QT1JUKSB8fCAyNTI1LFxyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUgYXMgc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgYXMgc3RyaW5nLFxyXG4gICAgc2VuZGVyOiBwcm9jZXNzLmVudi5NQUlMX1NFTkRFUiBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR0NQX1BST0pFQ1RfSUQhLFxyXG4gICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUwhLFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuR0NQX1BSSVZBVEVfS0VZISxcclxuICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVQhLFxyXG4gICAgYnVja2V0TmFtZVRlbXBvcmFyeTogcHJvY2Vzcy5lbnYuR0NQX0JVQ0tFVF9URU1QT1JBUlkhLFxyXG4gICAgYXN5bmNGdW5jdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX0ZVTkNUSU9OISxcclxuICAgIHRhc2tRdWV1ZTogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUUhLFxyXG4gICAgdGFza1F1ZXVlSGFuZGxlcjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfSEFORExFUiEsXHJcbiAgICB0YXNrUXVldWVMb2NhdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfTE9DQVRJT04hLFxyXG4gICAgb2F1dGhHb29nbGVDbGllbnRUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfR09PR0xFX0NMSUVOVF9UT0tFTiEsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIGNhbGxiYWNrVVJMOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTEJBQ0shLFxyXG4gIH0sXHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LllPVVZFUklGWV9VUkwgYXMgc3RyaW5nLFxyXG4gICAga2V5OiBwcm9jZXNzLmVudi5ZT1VWRVJJRllfS0VZIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGVtYmVkbHk6IHtcclxuICAgIGlkOiBwcm9jZXNzLmVudi5FTUJFRExZX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuRU1CRURMWV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5FTUJFRExZX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBwYXlvdXRVUkw6IHByb2Nlc3MuZW52LkVNQkVETFlfUEFZT1VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgICB3ZWJob29rVVJMOiBwcm9jZXNzLmVudi5FTUJFRExZX1dFQkhPT0tfVVJMIGFzIHN0cmluZyxcclxuICAgIG9yZ0FjY291bnQ6IE51bWJlcihwcm9jZXNzLmVudi5FTUJFRExZX09SR0FOSVpBVElPTl9BQ0NPVU5UKSxcclxuICAgIG9yZ05hbWU6IHByb2Nlc3MuZW52LkVNQkVETFlfT1JHQU5JWkFUSU9OX05BTUUgYXMgc3RyaW5nLFxyXG4gIH0sXHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5DTE9VREZMQVJFX0JVQ0tFVF9OQU1FIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9BQ0NFU1NfS0VZX0lEIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9TRUNSRVRfQUNDRVNTX0tFWSBhcyBzdHJpbmcsXHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQlVDS0VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgfSxcclxuXHJcbiAgcW9yZUlkOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlFPUkVJRF9CQVNFX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjbGllbnQ6IHByb2Nlc3MuZW52LlFPUkVJRF9DTElFTlQgYXMgc3RyaW5nLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5RT1JFSURfU0VDUkVUIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGFrdXVrOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkFLVVVLX0JBU0VfVVJMIGFzIHN0cmluZyxcclxuICAgIGlkOiBwcm9jZXNzLmVudi5BS1VVS19BQ0NPVU5UX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQUtVVUtfS0VZIGFzIHN0cmluZyxcclxuICAgIHNlbmRlcjogcHJvY2Vzcy5lbnYuQUtVVUtfU0VOREVSIGFzIHN0cmluZyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZGVidWdNb2R1bGUgZnJvbSAnZGVidWcnO1xyXG5jb25zdCBkZWJ1ZyA9IGRlYnVnTW9kdWxlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luZm8gPSBkZWJ1ZygnYXBpOmluZm8nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gZGVidWcoJ2FwaTplcnJvcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc29sdmVyID0gZGVidWcoJ2FwaTpmaWVsZC1yZXNvbHZlcicpO1xyXG5leHBvcnQgY29uc3QgbG9nUXVlcnkgPSBkZWJ1ZygnYXBpOnF1ZXJ5Jyk7XHJcbmV4cG9ydCBjb25zdCBsb2dNdXRhdGlvbiA9IGRlYnVnKCdhcGk6bXV0YXRpb24nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0hlbHBlciA9IGRlYnVnKCdhcGk6aGVscGVyJyk7XHJcbiIsImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHBhc3N3b3JkQ2hhbmdlZCBmcm9tICcuL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi90ZW1wbGF0ZXMvd2VsY29tZSc7XHJcbmltcG9ydCB2ZXJpZmljYXRpb25FbWFpbCBmcm9tICcuL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnQC91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xyXG5pbXBvcnQgeyBNYWlsT3B0aW9ucywgU2VsZWN0VGVtcGxhdGUsIFNlbmRFbWFpbCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgdG8sIHRlbXBsYXRlLCB2YXJpYWJsZXMsIHRlbXBsYXRlSWQgfTogU2VuZEVtYWlsKSA9PiB7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdObyBtYWlsIHRlbXBsYXRlIHNwZWNpZmllZCcpO1xyXG5cclxuICBjb25zdCB7IHN1YmplY3QsIHRlbXBsYXRlOiB0ZW1wIH0gPSBhd2FpdCBzZWxlY3RUZW1wbGF0ZSh7XHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKFsnUFJPRFVDVElPTicsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkpIHtcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0tFWSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQGVtYWlscy5tYXN0ZXJpbmdiYWNrZW5kLmNvbT5gLFxyXG4gICAgICB0bzogdG8sXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnM6IE1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQHByZXNzbW9uaS5jb20+YCxcclxuICAgICAgdG8sXHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haWxDb25maWc6IGFueSA9IHtcclxuICAgICAgaG9zdDogZW52aXJvbm1lbnQubWFpbD8uaG9zdCB8fCAnc210cC5tYWlsdHJhcC5pbycsXHJcbiAgICAgIHBvcnQ6IGVudmlyb25tZW50Lm1haWw/LnBvcnQgfHwgMjUyNSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogZW52aXJvbm1lbnQubWFpbD8udXNlcm5hbWUgfHwgJ2EzZDExNTliYmJlM2E2JywgLy9nZW5lcmF0ZWQgYnkgTWFpbHRyYXBcclxuICAgICAgICBwYXNzOiBlbnZpcm9ubWVudC5tYWlsPy5wYXNzd29yZCB8fCAnMmI0NjY4ZmUyZDZhNjcnLCAvL2dlbmVyYXRlZCBieSBNYWlsdHJhcFxyXG4gICAgICB9LFxyXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcclxuICAgICAgZ3JlZXRpbmdUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgc29ja2V0VGltZW91dDogMTAwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1haWxPcHRpb25zLCBtYWlsQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQubWFpbD8uaG9zdD8uaW5jbHVkZXMoJ2dtYWlsJykpXHJcbiAgICAgIG1haWxDb25maWdbJ3NlcnZpY2UnXSA9IGVudmlyb25tZW50Lm1haWw/Lmhvc3Q7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChtYWlsQ29uZmlnKTtcclxuXHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBsb2dFcnJvcignc2VuZEVtYWlsICVvJywgeyBtYWlsT3B0aW9ucywgZXJyb3IgfSk7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndHJ5IGVtYWlsIGFnYWluIGxhdGVyJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgdHJhbnNwb3J0ZXIuY2xvc2UoKTtcclxuICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0VGVtcGxhdGUgPSBhc3luYyAoeyB0ZW1wbGF0ZSwgdmFyaWFibGVzIH06IFNlbGVjdFRlbXBsYXRlKSA9PiB7XHJcbiAgbGV0IHN1YmplY3QgPSBgYDtcclxuICBsZXQgX3RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcclxuICAgIGNhc2UgJ2ZvcmdvdC1wYXNzd29yZCc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFBhc3N3b3JkIFJlc2V0YDtcclxuICAgICAgX3RlbXBsYXRlID0gZm9yZ290UGFzc3dvcmQodmFyaWFibGVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2ZXJpZmljYXRpb24nOlxyXG4gICAgICBzdWJqZWN0ICs9IGBFbWFpbCBWZXJpZmljYXRpb25gO1xyXG4gICAgICBfdGVtcGxhdGUgPSB2ZXJpZmljYXRpb25FbWFpbCh2YXJpYWJsZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Bhc3N3b3JkLWNoYW5nZWQnOlxyXG4gICAgICBzdWJqZWN0ICs9IGBQYXNzd29yZCBDaGFuZ2VkYDtcclxuICAgICAgX3RlbXBsYXRlID0gcGFzc3dvcmRDaGFuZ2VkKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnd2VsY29tZSc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFdlbGNvbWUgdG8gTWFzdGVyaW5nYmFja2VuZCFgO1xyXG4gICAgICBfdGVtcGxhdGUgPSB3ZWxjb21lKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiB7IHRlbXBsYXRlOiBfdGVtcGxhdGUsIHN1YmplY3QgfTtcclxufTtcclxuIiwiY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHVibGljIHN0YXR1cztcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnlDb2RlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkzJyxcclxuICAgIGNvZGU6ICdBRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxhbmQgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdBWCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU1JyxcclxuICAgIGNvZGU6ICdBTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjEzJyxcclxuICAgIGNvZGU6ICdEWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW1lcmljYW5TYW1vYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY4NCcsXHJcbiAgICBjb2RlOiAnQVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZG9ycmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NicsXHJcbiAgICBjb2RlOiAnQUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ0JyxcclxuICAgIGNvZGU6ICdBTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5ndWlsbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNjQnLFxyXG4gICAgY29kZTogJ0FJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzInLFxyXG4gICAgY29kZTogJ0FRJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAgIGRpYWxfY29kZTogJysxMjY4JyxcclxuICAgIGNvZGU6ICdBRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1NCcsXHJcbiAgICBjb2RlOiAnQVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FybWVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NCcsXHJcbiAgICBjb2RlOiAnQU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FydWJhJyxcclxuICAgIGRpYWxfY29kZTogJysyOTcnLFxyXG4gICAgY29kZTogJ0FXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzYxJyxcclxuICAgIGNvZGU6ICdBVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXVzdHJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDMnLFxyXG4gICAgY29kZTogJ0FUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBemVyYmFpamFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTQnLFxyXG4gICAgY29kZTogJ0FaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCYWhhbWFzJyxcclxuICAgIGRpYWxfY29kZTogJysxMjQyJyxcclxuICAgIGNvZGU6ICdCUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFocmFpbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTczJyxcclxuICAgIGNvZGU6ICdCSCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuZ2xhZGVzaCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrODgwJyxcclxuICAgIGNvZGU6ICdCRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNDYnLFxyXG4gICAgY29kZTogJ0JCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxhcnVzJyxcclxuICAgIGRpYWxfY29kZTogJyszNzUnLFxyXG4gICAgY29kZTogJ0JZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxnaXVtJyxcclxuICAgIGRpYWxfY29kZTogJyszMicsXHJcbiAgICBjb2RlOiAnQkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAxJyxcclxuICAgIGNvZGU6ICdCWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmVuaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyOScsXHJcbiAgICBjb2RlOiAnQkonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jlcm11ZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE0NDEnLFxyXG4gICAgY29kZTogJ0JNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3NScsXHJcbiAgICBjb2RlOiAnQlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MScsXHJcbiAgICBjb2RlOiAnQk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NycsXHJcbiAgICBjb2RlOiAnQkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgIGRpYWxfY29kZTogJysyNjcnLFxyXG4gICAgY29kZTogJ0JXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU1JyxcclxuICAgIGNvZGU6ICdCUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAgIGRpYWxfY29kZTogJysyNDYnLFxyXG4gICAgY29kZTogJ0lPJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjczJyxcclxuICAgIGNvZGU6ICdCTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1OScsXHJcbiAgICBjb2RlOiAnQkcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0J1cmtpbmEgRmFzbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI2JyxcclxuICAgIGNvZGU6ICdCRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVydW5kaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU3JyxcclxuICAgIGNvZGU6ICdCSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FtYm9kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1NScsXHJcbiAgICBjb2RlOiAnS0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgIGRpYWxfY29kZTogJysyMzcnLFxyXG4gICAgY29kZTogJ0NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYW5hZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ0NBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcclxuICAgIGRpYWxfY29kZTogJysyMzgnLFxyXG4gICAgY29kZTogJ0NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzQ1JyxcclxuICAgIGNvZGU6ICdLWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJysyMzYnLFxyXG4gICAgY29kZTogJ0NGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGFkJyxcclxuICAgIGRpYWxfY29kZTogJysyMzUnLFxyXG4gICAgY29kZTogJ1REJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGlsZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTYnLFxyXG4gICAgY29kZTogJ0NMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrODYnLFxyXG4gICAgY29kZTogJ0NOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ1gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ0MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgIGRpYWxfY29kZTogJys1NycsXHJcbiAgICBjb2RlOiAnQ08nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbW9yb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OScsXHJcbiAgICBjb2RlOiAnS00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDInLFxyXG4gICAgY29kZTogJ0NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDMnLFxyXG4gICAgY29kZTogJ0NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4MicsXHJcbiAgICBjb2RlOiAnQ0snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwNicsXHJcbiAgICBjb2RlOiAnQ1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI1JyxcclxuICAgIGNvZGU6ICdDSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3JvYXRpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg1JyxcclxuICAgIGNvZGU6ICdIUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTMnLFxyXG4gICAgY29kZTogJ0NVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDeXBydXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NycsXHJcbiAgICBjb2RlOiAnQ1knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0N6ZWNoIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJys0MjAnLFxyXG4gICAgY29kZTogJ0NaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZW5tYXJrJyxcclxuICAgIGRpYWxfY29kZTogJys0NScsXHJcbiAgICBjb2RlOiAnREsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RqaWJvdXRpJyxcclxuICAgIGRpYWxfY29kZTogJysyNTMnLFxyXG4gICAgY29kZTogJ0RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc2NycsXHJcbiAgICBjb2RlOiAnRE0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg0OScsXHJcbiAgICBjb2RlOiAnRE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VjdWFkb3InLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MycsXHJcbiAgICBjb2RlOiAnRUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VneXB0JyxcclxuICAgIGRpYWxfY29kZTogJysyMCcsXHJcbiAgICBjb2RlOiAnRUcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcclxuICAgIGRpYWxfY29kZTogJys1MDMnLFxyXG4gICAgY29kZTogJ1NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQwJyxcclxuICAgIGNvZGU6ICdHUScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjkxJyxcclxuICAgIGNvZGU6ICdFUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXN0b25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcyJyxcclxuICAgIGNvZGU6ICdFRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoaW9waWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1MScsXHJcbiAgICBjb2RlOiAnRVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdGSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk4JyxcclxuICAgIGNvZGU6ICdGTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlqaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc5JyxcclxuICAgIGNvZGU6ICdGSicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdGSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJhbmNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMycsXHJcbiAgICBjb2RlOiAnRlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NCcsXHJcbiAgICBjb2RlOiAnR0YnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OScsXHJcbiAgICBjb2RlOiAnUEYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhYm9uJyxcclxuICAgIGRpYWxfY29kZTogJysyNDEnLFxyXG4gICAgY29kZTogJ0dBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYW1iaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMCcsXHJcbiAgICBjb2RlOiAnR00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlb3JnaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk5NScsXHJcbiAgICBjb2RlOiAnR0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQ5JyxcclxuICAgIGNvZGU6ICdERScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2hhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMycsXHJcbiAgICBjb2RlOiAnR0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpYnJhbHRhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUwJyxcclxuICAgIGNvZGU6ICdHSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMCcsXHJcbiAgICBjb2RlOiAnR1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dyZWVubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk5JyxcclxuICAgIGNvZGU6ICdHTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlbmFkYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTQ3MycsXHJcbiAgICBjb2RlOiAnR0QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MCcsXHJcbiAgICBjb2RlOiAnR1AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NzEnLFxyXG4gICAgY29kZTogJ0dVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwMicsXHJcbiAgICBjb2RlOiAnR1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1ZXJuc2V5JyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI0JyxcclxuICAgIGNvZGU6ICdHTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3VpbmVhLUJpc3NhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ1JyxcclxuICAgIGNvZGU6ICdHVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3V5YW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1OTUnLFxyXG4gICAgY29kZTogJ0dZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTA5JyxcclxuICAgIGNvZGU6ICdIVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3OScsXHJcbiAgICBjb2RlOiAnVkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbmR1cmFzJyxcclxuICAgIGRpYWxfY29kZTogJys1MDQnLFxyXG4gICAgY29kZTogJ0hOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MicsXHJcbiAgICBjb2RlOiAnSEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0h1bmdhcnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM2JyxcclxuICAgIGNvZGU6ICdIVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSWNlbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU0JyxcclxuICAgIGNvZGU6ICdJUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkxJyxcclxuICAgIGNvZGU6ICdJTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kb25lc2lhJyxcclxuICAgIGRpYWxfY29kZTogJys2MicsXHJcbiAgICBjb2RlOiAnSUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YgUGVyc2lhbiBHdWxmJyxcclxuICAgIGRpYWxfY29kZTogJys5OCcsXHJcbiAgICBjb2RlOiAnSVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYXEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2NCcsXHJcbiAgICBjb2RlOiAnSVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyZWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1MycsXHJcbiAgICBjb2RlOiAnSUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzbGUgb2YgTWFuJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnSU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcyJyxcclxuICAgIGNvZGU6ICdJTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSXRhbHknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM5JyxcclxuICAgIGNvZGU6ICdJVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSmFtYWljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg3NicsXHJcbiAgICBjb2RlOiAnSk0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phcGFuJyxcclxuICAgIGRpYWxfY29kZTogJys4MScsXHJcbiAgICBjb2RlOiAnSlAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0plcnNleScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDQnLFxyXG4gICAgY29kZTogJ0pFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdKb3JkYW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MicsXHJcbiAgICBjb2RlOiAnSk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzc3JyxcclxuICAgIGNvZGU6ICdLWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS2VueWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1NCcsXHJcbiAgICBjb2RlOiAnS0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgIGRpYWxfY29kZTogJys2ODYnLFxyXG4gICAgY29kZTogJ0tJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcclxuICAgIGRpYWxfY29kZTogJys4NTAnLFxyXG4gICAgY29kZTogJ0tQJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzgyJyxcclxuICAgIGNvZGU6ICdLUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS3V3YWl0JyxcclxuICAgIGRpYWxfY29kZTogJys5NjUnLFxyXG4gICAgY29kZTogJ0tXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTYnLFxyXG4gICAgY29kZTogJ0tHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYW9zJyxcclxuICAgIGRpYWxfY29kZTogJys4NTYnLFxyXG4gICAgY29kZTogJ0xBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYXR2aWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3MScsXHJcbiAgICBjb2RlOiAnTFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlYmFub24nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MScsXHJcbiAgICBjb2RlOiAnTEInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2NicsXHJcbiAgICBjb2RlOiAnTFMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYmVyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMScsXHJcbiAgICBjb2RlOiAnTFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxOCcsXHJcbiAgICBjb2RlOiAnTFknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpZWNodGVuc3RlaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQyMycsXHJcbiAgICBjb2RlOiAnTEknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcwJyxcclxuICAgIGNvZGU6ICdMVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUyJyxcclxuICAgIGNvZGU6ICdMVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFjYW8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MycsXHJcbiAgICBjb2RlOiAnTU8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg5JyxcclxuICAgIGNvZGU6ICdNSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFkYWdhc2NhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYxJyxcclxuICAgIGNvZGU6ICdNRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsYXdpJyxcclxuICAgIGRpYWxfY29kZTogJysyNjUnLFxyXG4gICAgY29kZTogJ01XJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjAnLFxyXG4gICAgY29kZTogJ01ZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxkaXZlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYwJyxcclxuICAgIGNvZGU6ICdNVicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIzJyxcclxuICAgIGNvZGU6ICdNTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NicsXHJcbiAgICBjb2RlOiAnTVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY5MicsXHJcbiAgICBjb2RlOiAnTUgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRpbmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NicsXHJcbiAgICBjb2RlOiAnTVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMicsXHJcbiAgICBjb2RlOiAnTVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGl1cycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjMwJyxcclxuICAgIGNvZGU6ICdNVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWF5b3R0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdZVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgIGRpYWxfY29kZTogJys1MicsXHJcbiAgICBjb2RlOiAnTVgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkxJyxcclxuICAgIGNvZGU6ICdGTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzczJyxcclxuICAgIGNvZGU6ICdNRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9uYWNvJyxcclxuICAgIGRpYWxfY29kZTogJyszNzcnLFxyXG4gICAgY29kZTogJ01DJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNb25nb2xpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTc2JyxcclxuICAgIGNvZGU6ICdNTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgyJyxcclxuICAgIGNvZGU6ICdNRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY2NCcsXHJcbiAgICBjb2RlOiAnTVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vcm9jY28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxMicsXHJcbiAgICBjb2RlOiAnTUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1OCcsXHJcbiAgICBjb2RlOiAnTVonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ015YW5tYXInLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk1JyxcclxuICAgIGNvZGU6ICdNTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjY0JyxcclxuICAgIGNvZGU6ICdOQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmF1cnUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NCcsXHJcbiAgICBjb2RlOiAnTlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05lcGFsJyxcclxuICAgIGRpYWxfY29kZTogJys5NzcnLFxyXG4gICAgY29kZTogJ05QJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzEnLFxyXG4gICAgY29kZTogJ05MJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk5JyxcclxuICAgIGNvZGU6ICdBTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjg3JyxcclxuICAgIGNvZGU6ICdOQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY0JyxcclxuICAgIGNvZGU6ICdOWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmljYXJhZ3VhJyxcclxuICAgIGRpYWxfY29kZTogJys1MDUnLFxyXG4gICAgY29kZTogJ05JJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOaWdlcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI3JyxcclxuICAgIGNvZGU6ICdORScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjM0JyxcclxuICAgIGNvZGU6ICdORycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTml1ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgzJyxcclxuICAgIGNvZGU6ICdOVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3MicsXHJcbiAgICBjb2RlOiAnTkYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY3MCcsXHJcbiAgICBjb2RlOiAnTVAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcndheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ05PJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdPbWFuJyxcclxuICAgIGRpYWxfY29kZTogJys5NjgnLFxyXG4gICAgY29kZTogJ09NJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTInLFxyXG4gICAgY29kZTogJ1BLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgwJyxcclxuICAgIGNvZGU6ICdQVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcwJyxcclxuICAgIGNvZGU6ICdQUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFuYW1hJyxcclxuICAgIGRpYWxfY29kZTogJys1MDcnLFxyXG4gICAgY29kZTogJ1BBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzUnLFxyXG4gICAgY29kZTogJ1BHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk1JyxcclxuICAgIGNvZGU6ICdQWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGVydScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTEnLFxyXG4gICAgY29kZTogJ1BFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjMnLFxyXG4gICAgY29kZTogJ1BIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaXRjYWlybicsXHJcbiAgICBkaWFsX2NvZGU6ICcrODcyJyxcclxuICAgIGNvZGU6ICdQTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUG9sYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys0OCcsXHJcbiAgICBjb2RlOiAnUEwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BvcnR1Z2FsJyxcclxuICAgIGRpYWxfY29kZTogJyszNTEnLFxyXG4gICAgY29kZTogJ1BUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTkzOScsXHJcbiAgICBjb2RlOiAnUFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1FhdGFyJyxcclxuICAgIGRpYWxfY29kZTogJys5NzQnLFxyXG4gICAgY29kZTogJ1FBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb21hbmlhJyxcclxuICAgIGRpYWxfY29kZTogJys0MCcsXHJcbiAgICBjb2RlOiAnUk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J1c3NpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNycsXHJcbiAgICBjb2RlOiAnUlUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUwJyxcclxuICAgIGNvZGU6ICdSVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV1bmlvbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdSRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTkwJyxcclxuICAgIGNvZGU6ICdCTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI5MCcsXHJcbiAgICBjb2RlOiAnU0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg2OScsXHJcbiAgICBjb2RlOiAnS04nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEx1Y2lhJyxcclxuICAgIGRpYWxfY29kZTogJysxNzU4JyxcclxuICAgIGNvZGU6ICdMQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcclxuICAgIGRpYWxfY29kZTogJys1OTAnLFxyXG4gICAgY29kZTogJ01GJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgIGRpYWxfY29kZTogJys1MDgnLFxyXG4gICAgY29kZTogJ1BNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc4NCcsXHJcbiAgICBjb2RlOiAnVkMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhbW9hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODUnLFxyXG4gICAgY29kZTogJ1dTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW4gTWFyaW5vJyxcclxuICAgIGRpYWxfY29kZTogJyszNzgnLFxyXG4gICAgY29kZTogJ1NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzOScsXHJcbiAgICBjb2RlOiAnU1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY2JyxcclxuICAgIGNvZGU6ICdTQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VuZWdhbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIxJyxcclxuICAgIGNvZGU6ICdTTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgIGRpYWxfY29kZTogJyszODEnLFxyXG4gICAgY29kZTogJ1JTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcclxuICAgIGRpYWxfY29kZTogJysyNDgnLFxyXG4gICAgY29kZTogJ1NDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMicsXHJcbiAgICBjb2RlOiAnU0wnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjUnLFxyXG4gICAgY29kZTogJ1NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTbG92YWtpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDIxJyxcclxuICAgIGNvZGU6ICdTSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2xvdmVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NicsXHJcbiAgICBjb2RlOiAnU0knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc3JyxcclxuICAgIGNvZGU6ICdTQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU29tYWxpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUyJyxcclxuICAgIGNvZGU6ICdTTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcclxuICAgIGRpYWxfY29kZTogJysyNycsXHJcbiAgICBjb2RlOiAnWkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvdXRoIFN1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyMTEnLFxyXG4gICAgY29kZTogJ1NTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdHUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM0JyxcclxuICAgIGNvZGU6ICdFUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3JpIExhbmthJyxcclxuICAgIGRpYWxfY29kZTogJys5NCcsXHJcbiAgICBjb2RlOiAnTEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyNDknLFxyXG4gICAgY29kZTogJ1NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdXJpbmFtZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk3JyxcclxuICAgIGNvZGU6ICdTUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ1NKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2F6aWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OCcsXHJcbiAgICBjb2RlOiAnU1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N3ZWRlbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDYnLFxyXG4gICAgY29kZTogJ1NFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDEnLFxyXG4gICAgY29kZTogJ0NIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYzJyxcclxuICAgIGNvZGU6ICdTWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVGFpd2FuJyxcclxuICAgIGRpYWxfY29kZTogJys4ODYnLFxyXG4gICAgY29kZTogJ1RXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTInLFxyXG4gICAgY29kZTogJ1RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNTUnLFxyXG4gICAgY29kZTogJ1RaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaGFpbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjYnLFxyXG4gICAgY29kZTogJ1RIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjcwJyxcclxuICAgIGNvZGU6ICdUTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9nbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI4JyxcclxuICAgIGNvZGU6ICdURycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9rZWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkwJyxcclxuICAgIGNvZGU6ICdUSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9uZ2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NicsXHJcbiAgICBjb2RlOiAnVE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE4NjgnLFxyXG4gICAgY29kZTogJ1RUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5pc2lhJyxcclxuICAgIGRpYWxfY29kZTogJysyMTYnLFxyXG4gICAgY29kZTogJ1ROJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrZXknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkwJyxcclxuICAgIGNvZGU6ICdUUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTMnLFxyXG4gICAgY29kZTogJ1RNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NDknLFxyXG4gICAgY29kZTogJ1RDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXZhbHUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OCcsXHJcbiAgICBjb2RlOiAnVFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU2JyxcclxuICAgIGNvZGU6ICdVRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVWtyYWluZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgwJyxcclxuICAgIGNvZGU6ICdVQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3MScsXHJcbiAgICBjb2RlOiAnQUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ1VTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVcnVndWF5JyxcclxuICAgIGRpYWxfY29kZTogJys1OTgnLFxyXG4gICAgY29kZTogJ1VZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVemJla2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTgnLFxyXG4gICAgY29kZTogJ1VaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgIGRpYWxfY29kZTogJys2NzgnLFxyXG4gICAgY29kZTogJ1ZVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhJyxcclxuICAgIGRpYWxfY29kZTogJys1OCcsXHJcbiAgICBjb2RlOiAnVkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg0JyxcclxuICAgIGNvZGU6ICdWTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyODQnLFxyXG4gICAgY29kZTogJ1ZHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTM0MCcsXHJcbiAgICBjb2RlOiAnVkknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODEnLFxyXG4gICAgY29kZTogJ1dGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY3JyxcclxuICAgIGNvZGU6ICdZRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnWmFtYmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNjAnLFxyXG4gICAgY29kZTogJ1pNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdaaW1iYWJ3ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYzJyxcclxuICAgIGNvZGU6ICdaVycsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBjb3VudHJ5Q29kZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU01TSW5wdXQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgZmluZEl0ZW0sIGZvcm1hdFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5jb25zdCBhY2MgPSBidG9hKGAke2Vudmlyb25tZW50LmFrdXVrPy5pZH06JHtlbnZpcm9ubWVudC5ha3V1az8ua2V5fWApO1xyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmFrdXVrPy51cmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YWNjfWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQWt1dWsge1xyXG4gIHN0YXRpYyBhc3luYyBzZW5kU01TKHBheWxvYWQ6IFNNU0lucHV0KSB7XHJcbiAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpO1xyXG5cclxuICAgIC8vIEZpbmQgY291bnRyeSBjb2RlXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyeUNvZGVzLCBwYXlsb2FkLmNvdW50cnksICdjb2RlJyk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHBob25lIG51bWJlclxyXG4gICAgY29uc3QgbnVtYmVyID0gZm9ybWF0UGhvbmVOdW1iZXIocGF5bG9hZC5udW1iZXIsIGNvdW50cnk/LmRpYWxfY29kZSEpO1xyXG5cclxuICAgIGlmICghbnVtYmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9tZXNzYWdpbmcvc21zJywge1xyXG4gICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgc2VuZGVyOiBlbnZpcm9ubWVudC5ha3V1ay5zZW5kZXIsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY291bnRyeUNvZGU6IGNvdW50cnk/LmRpYWxfY29kZSxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBhbW91bnQsIGJpbGxpbmcsIGNvdW50cnk6IGNvZGUsIG51bWJlcjogcGhvbmUgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgY29uc3QgdXVpZCA9IHJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAvLyBGaW5kIGNvdW50cnkgY29kZVxyXG4gICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKGNvdW50cnlDb2RlcywgY29kZSwgJ2NvZGUnKTtcclxuXHJcbiAgICAvLyBGb3JtYXQgcGhvbmUgbnVtYmVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBmb3JtYXRQaG9uZU51bWJlcihwaG9uZSwgY291bnRyeT8uZGlhbF9jb2RlISk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBtcmNSZWZlcmVuY2U6IHV1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlOiBOdW1iZXIoY291bnRyeT8uZGlhbF9jb2RlLnNwbGl0KCcrJylbMV0pICsgJycsXHJcbiAgICAgIG51bWJlcjogbnVtYmVyICsgJycsXHJcbiAgICAgIGJpbGxpbmc6IGJpbGxpbmcsXHJcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMikgKyAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9wYXltZW50L2FpcnRpbWUnLCB7XHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgY291bnRyeUNvZGU6IE51bWJlcihjb3VudHJ5Py5kaWFsX2NvZGUuc3BsaXQoJysnKVsxXSkgKyAnJyxcclxuICAgICAgbnVtYmVyOiBudW1iZXIgKyAnJyxcclxuICAgICAgYmlsbGluZzogYmlsbGluZyxcclxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCkudG9GaXhlZCgyKSArICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVEaXJOYW1lKG1ldGE6IGFueSkge1xyXG4gIGNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKG1ldGEudXJsKTtcclxuXHJcbiAgY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShfX2ZpbGVuYW1lKTtcclxuXHJcbiAgcmV0dXJuIHsgX19kaXJuYW1lLCBfX2ZpbGVuYW1lIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VFcnJvclBhcnNlciA9IChlcnI6IHsgbWVzc2FnZTogc3RyaW5nOyBzdGF0dXM6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyKTtcclxuICByZXR1cm4ge1xyXG4gICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJ3ByaXNtYScpXHJcbiAgICAgID8gJ0ludGVybmFsIFNlcnZlciBFcnJvcidcclxuICAgICAgOiAoZXJyPy5tZXNzYWdlID8/ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKSxcclxuICAgIHN0YXR1czogZXJyPy5zdGF0dXMgPz8gNTAwLFxyXG4gICAgc3VjY2VzczogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihzaXplOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzaXplIDw9IDApIHRocm93IG5ldyBFcnJvcignU2l6ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XHJcbiAgY29uc3QgbWluID0gTWF0aC5wb3coMTAsIHNpemUgLSAxKTtcclxuICBjb25zdCBtYXggPSBNYXRoLnBvdygxMCwgc2l6ZSkgLSAxO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZXN0aW5nQlZOKGJ2bjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIFsnREVWRUxPUCcsICdMT0NBTCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpICYmXHJcbiAgICBbJzIyMjIyMjIyMjIyJywgJzk1ODg4MTY4OTI0J10uaW5jbHVkZXMoYnZuKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldigpIHtcclxuICByZXR1cm4gWydERVZFTE9QJywgJ0xPQ0FMJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRVUVVRV9OQU1FUyA9IHtcclxuICBUUkFOU0ZFUjogJ3RyYW5zZmVyJyxcclxuICBBSVJUSU1FOiAnYWlydGltZScsXHJcbiAgTk9USUZJQ0FUSU9OOiAnbm90aWZpY2F0aW9uJyxcclxuICBJTlRFUk5BTF9UUkFOU0ZFUjogJ2ludGVybmFsX3RyYW5zZmVyJyxcclxuICBDUkVBVEVXQUxMRVQ6ICdjcmVhdGVfd2FsbGV0JyxcclxufSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT1RQKHVzZXI6IFVzZXIsIHR5cGUgPSAnUEhPTkUnKSB7XHJcbiAgY29uc3QgY29kZSA9IG90cEdlbmVyYXRvci5nZW5lcmF0ZSg2LCB7XHJcbiAgICBsb3dlckNhc2VBbHBoYWJldHM6IGZhbHNlLFxyXG4gICAgdXBwZXJDYXNlQWxwaGFiZXRzOiBmYWxzZSxcclxuICAgIHNwZWNpYWxDaGFyczogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgcmVmcmVzaENvZGU6IGNvZGUsXHJcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgdHlwZTogdHlwZSA9PT0gJ1BIT05FJyA/ICdQSE9ORScgOiAnRU1BSUwnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2ZXJpZmljYXRpb24pIHRocm93IG5ldyBFcnJvcignT1RQIG5vdCBzYXZlZCcpO1xyXG5cclxuICAvLyBTZW5kIFNNU1xyXG4gIGlmICh1c2VyLnBob25lICYmIHR5cGUgPT09ICdQSE9ORScpXHJcbiAgICBBa3V1ay5zZW5kU01TKHtcclxuICAgICAgY291bnRyeTogdXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICBudW1iZXI6IHVzZXIucGhvbmUsXHJcbiAgICAgIG1lc3NhZ2U6IGBZb3VyIFdlUGF5IHZlcmlmaWNhdGlvbiBjb2RlIGlzOiAke2NvZGV9YCxcclxuICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYWlsICYmIHR5cGUgPT09ICdFTUFJTCcpXHJcbiAgICBzZW5kRW1haWwoe1xyXG4gICAgICB0bzogdXNlcj8uZW1haWwhLFxyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHRvX25hbWU6IHVzZXIubmFtZSxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICd2ZXJpZmljYXRpb24nLFxyXG4gICAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBob25lTnVtYmVyKG51bWJlcjogc3RyaW5nIHwgbnVtYmVyLCBkYWlsQ29kZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLmxlbmd0aCA+IDExXHJcbiAgICA/IG51bWJlclxyXG4gICAgOiBOdW1iZXIoYCR7ZGFpbENvZGUuc3BsaXQoJysnKVsxXX0ke251bWJlci50b1N0cmluZygpLnN1YnN0cmluZygxKX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBSUxZX0xJTUlUUyA9IHtcclxuICBUSUVSXzE6IDIwMF8wMDBuLFxyXG4gIFRJRVJfMjogMV8wMDBfMDAwbixcclxuICBUSUVSXzM6IDVfMDAwXzAwMG4sXHJcbiAgVElFUl80OiAxMDBfMDAwXzAwMF8wMDBuLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFueSB2YWxpZCBkYXRlIHN0cmluZywgdGltZXN0YW1wLCBvciBEYXRlIG9iamVjdFxyXG4gKiB0byBhIHN0YW5kYXJkIElTTyA4NjAxIGRhdGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IERhdGV9IGlucHV0IC0gVGhlIGRhdGUgaW5wdXQgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9IFRoZSBJU08gZGF0ZSBzdHJpbmcgb3IgbnVsbCBpZiBpbnZhbGlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPRGF0ZShpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSk6IHN0cmluZyB8IG51bGwge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBIYW5kbGUgZW1wdHkgb3IgdW5kZWZpbmVkIGlucHV0XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQpO1xyXG5cclxuICAgIC8vIENoZWNrIHZhbGlkaXR5XHJcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGRhdGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gSVNPIHN0cmluZ1xyXG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KGFtb3VudDogYW55KSB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tTkcnLCB7XHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgfSkuZm9ybWF0KGFtb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUgfCBhbnkpIHtcclxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gbW9udGhzIGFyZSAwLWluZGV4ZWRcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICBob3VycyA9IGhvdXJzICUgMTIgfHwgMTI7IC8vIGNvbnZlcnQgMCDihpIgMTIgZm9yIDEyIEFNXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtKGRhdGE6IEFycmF5PGFueT4sIGl0ZW06IHN0cmluZywgZmllbGQ6IHN0cmluZykge1xyXG4gIHJldHVybiBkYXRhLmZpbmQoXHJcbiAgICAoZCkgPT4gZD8uW2ZpZWxkXT8udG9Mb3dlckNhc2UoKT8udHJpbSgpID09PSBpdGVtPy50b0xvd2VyQ2FzZSgpPy50cmltKCksXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFjcXVpcmUgcm93IGxvY2tzIGZvciB3YWxsZXRzIGluIGNhbm9uaWNhbCBvcmRlciBpbnNpZGUgYSB0cmFuc2FjdGlvbi5cclxuICogUmV0dXJucyB3YWxsZXQgcm93cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2NrV2FsbGV0c1R4KHR4OiBhbnksIHdhbGxldElkczogc3RyaW5nW10pIHtcclxuICAvLyBlbnN1cmUgY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbLi4ud2FsbGV0SWRzXS5zb3J0KCk7XHJcbiAgLy8gYnVpbGQgcGFyYW1ldGVyaXplZCBxdWVyeVxyXG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IG9yZGVyZWQubWFwKChfLCBpKSA9PiBgJCR7aSArIDF9YCkuam9pbignLCcpO1xyXG4gIC8vIE5PVEU6IHdlIGFzc3VtZSB0YWJsZSBuYW1lIFwiV2FsbGV0XCIgYW5kIGNvbHVtbiBcImlkXCJcclxuICBjb25zdCByb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtwbGFjZWhvbGRlcnN9KSBGT1IgVVBEQVRFYCxcclxuICAgIC4uLm9yZGVyZWQsXHJcbiAgKTtcclxuICAvLyByZXR1cm4gcm93cyBhcy1pc1xyXG4gIHJldHVybiByb3dzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5Lb2JvKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIEJpZ0ludChNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5OYWlyYShhbW91bnQ6IGFueSkge1xyXG4gIHJldHVybiBOdW1iZXIoYW1vdW50KSAvIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRGFpbHlMaW1pdChcclxuICBmcm9tV2FsbGV0OiBXYWxsZXQsXHJcbiAgZnJvbVVzZXI6IFVzZXIsXHJcbiAgYW10OiBiaWdpbnQsXHJcbikge1xyXG4gIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gIGNvbnN0IHRvdGFsVHJhbnNmZXJyZWRUb2RheSA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5hZ2dyZWdhdGUoe1xyXG4gICAgX3N1bTogeyBhbW91bnQ6IHRydWUgfSxcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgY3JlYXRlZEF0OiB7IGd0ZTogdG9kYXlTdGFydCB9LFxyXG4gICAgICBzdGF0dXM6IHsgaW46IFsnUEVORElORycsICdDT01QTEVURUQnXSB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXJyZWQgPSBCaWdJbnQodG90YWxUcmFuc2ZlcnJlZFRvZGF5Ll9zdW0uYW1vdW50IHx8IDApO1xyXG5cclxuICBjb25zdCB0aWVyID0gZnJvbVVzZXIuY3VycmVudFRpZXIgYXMga2V5b2YgdHlwZW9mIERBSUxZX0xJTUlUUztcclxuICBjb25zdCBkYWlseUxpbWl0ID0gREFJTFlfTElNSVRTW3RpZXJdIHx8IERBSUxZX0xJTUlUUy5USUVSXzE7XHJcblxyXG4gIHJldHVybiB0cmFuc2ZlcnJlZCArIGFtdCA+IGRhaWx5TGltaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBUZXh0KHRleHQ/OiBzdHJpbmcsIG1heCA9IDMyKSB7XHJcbiAgaWYgKCF0ZXh0KSByZXR1cm47XHJcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyk7XHJcbiAgbGV0IGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxldCBjdXJyZW50ID0gJyc7XHJcblxyXG4gIGZvciAoY29uc3QgdyBvZiB3b3Jkcykge1xyXG4gICAgaWYgKChjdXJyZW50ICsgJyAnICsgdykudHJpbSgpLmxlbmd0aCA+IG1heCkge1xyXG4gICAgICBsaW5lcy5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgY3VycmVudCA9IHc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50ICs9ICcgJyArIHc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudC50cmltKCkubGVuZ3RoID4gMCkgbGluZXMucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuRGVzYyhkZXNjPzogc3RyaW5nLCBtYXggPSAzMCkge1xyXG4gIGlmICghZGVzYykgcmV0dXJuIGRlc2M7XHJcbiAgaWYgKGRlc2MubGVuZ3RoIDw9IG1heCkgcmV0dXJuIGRlc2M7XHJcbiAgcmV0dXJuIGRlc2Muc2xpY2UoMCwgbWF4IC0gMykgKyAnLi4uJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICBhY2NvdW50LFxyXG4gIGFtb3VudCxcclxuICBkZXNjLFxyXG4gIGN1cnJlbmN5LFxyXG4gIGJhbGFuY2UsXHJcbiAgZGF0ZSxcclxuICB0eXBlLFxyXG59OiB7XHJcbiAgYWNjb3VudDogc3RyaW5nO1xyXG4gIGFtb3VudDogYmlnaW50O1xyXG4gIGRlc2M/OiBzdHJpbmc7XHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuICBkYXRlOiBEYXRlO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBiYWxhbmNlOiBiaWdpbnQ7XHJcbn0pIHtcclxuICByZXR1cm4gYFxyXG5BY2N0OiAqKioqKioke2FjY291bnQuc2xpY2UoLTQpfVxyXG5BbXQ6ICR7Y3VycmVuY3l9JHtmb3JtYXRDdXJyZW5jeShhbW91bnRJbk5haXJhKGFtb3VudCkpfSAke3R5cGV9XHJcbkRlc2M6ICR7d3JhcFRleHQoc2hvcnRlbkRlc2MoZGVzYykpfVxyXG5BdmFpbCBCYWw6ICR7Y3VycmVuY3l9JHtmb3JtYXRDdXJyZW5jeShhbW91bnRJbk5haXJhKGJhbGFuY2UpKX1cclxuRGF0ZTogJHtmb3JtYXREYXRlKGRhdGUpfVxyXG5UaGFua3MgZm9yIHVzaW5nIFdlUGF5YDtcclxufVxyXG4iLCIvLyBzcmMvdXRpbHMvaGFzaC50c1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgYXJnb24yIGZyb20gJ2FyZ29uMic7XHJcbmltcG9ydCB7IGlzVGVzdGluZ0JWTiB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwbGFpbjogc3RyaW5nKSB7XHJcbiAgLy8gZGVmYXVsdCBvcHRpb25zIGZvciBhcmdvbjIgYXJlIGZpbmU7IHR1bmUgaW4gcHJvZCBpZiBuZWVkZWRcclxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGxhaW4sIDEwKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKGhhc2g6IHN0cmluZywgcGxhaW46IHN0cmluZykge1xyXG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShoYXNoLCBwbGFpbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoVG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gIGlmICghdG9rZW4pIHJldHVybjtcclxuICBpZiAoaXNUZXN0aW5nQlZOKHRva2VuKSkge1xyXG4gICAgcmV0dXJuIGNyeXB0b1xyXG4gICAgICAuY3JlYXRlSGFzaCgnc2hhMjU2JylcclxuICAgICAgLnVwZGF0ZSh0b2tlbiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkuc2xpY2UoNikpXHJcbiAgICAgIC5kaWdlc3QoJ2hleCcpO1xyXG4gIH1cclxuICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZSh0b2tlbikuZGlnZXN0KCdoZXgnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQaW4ocGluOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIHJldHVybiBhd2FpdCBhcmdvbjIuaGFzaChwaW4sIHtcclxuICAgIHR5cGU6IGFyZ29uMi5hcmdvbjJpZCxcclxuICAgIG1lbW9yeUNvc3Q6IDIgKiogMTYsIC8vIDY0IE1CXHJcbiAgICB0aW1lQ29zdDogMyxcclxuICAgIHBhcmFsbGVsaXNtOiAxLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGluKFxyXG4gIGhhc2hlZFBpbjogc3RyaW5nLFxyXG4gIGlucHV0UGluOiBzdHJpbmcsXHJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIHJldHVybiBhd2FpdCBhcmdvbjIudmVyaWZ5KGhhc2hlZFBpbiwgaW5wdXRQaW4pO1xyXG59XHJcbiIsIi8vIHNyYy91dGlscy9qd3QudHNcclxuaW1wb3J0IGp3dCwgeyBKd3RQYXlsb2FkLCBTaWduT3B0aW9ucyB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vY29uZmlnL2Vudic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhKd3RQYXlsb2FkIGV4dGVuZHMgSnd0UGF5bG9hZCB7XHJcbiAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25BY2Nlc3NUb2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICByZXR1cm4gand0LnNpZ24oXHJcbiAgICBwYXlsb2FkLFxyXG4gICAgZW52aXJvbm1lbnQuand0LnNlY3JldCBhcyBzdHJpbmcsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogYCR7ZW52aXJvbm1lbnQuand0Py5leHBpcmVzSW59aGAsXHJcbiAgICB9IGFzIFNpZ25PcHRpb25zLFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlBY2Nlc3NUb2tlbih0b2tlbjogc3RyaW5nKTogQXV0aEp3dFBheWxvYWQge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBlbnZpcm9ubWVudC5qd3Quc2VjcmV0KSBhcyBBdXRoSnd0UGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25SZWZyZXNoVG9rZW4ocGF5bG9hZDogb2JqZWN0KSB7XHJcbiAgLy8gbG9uZyBsaXZlZCwgYnV0IHdlIHN0aWxsIHN0b3JlIGEgaGFzaGVkIGNvcHkgc2VydmVyLXNpZGVcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgZW52aXJvbm1lbnQuand0LnJlZnJlc2hTZWNyZXQsIHtcclxuICAgIGV4cGlyZXNJbjogYCR7ZW52aXJvbm1lbnQuand0LnJlZnJlc2hEYXlzfWRgLFxyXG4gIH0gYXMgU2lnbk9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5UmVmcmVzaFRva2VuKHRva2VuOiBzdHJpbmcpOiBBdXRoSnd0UGF5bG9hZCB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIGVudmlyb25tZW50Lmp3dC5zZWNyZXQpIGFzIEF1dGhKd3RQYXlsb2FkO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVVzZXJTYWZlSWQoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlcIjtcclxuICAgIGxldCBpZCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICBpZCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG59XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGhhc2hUb2tlbiwgdmVyaWZ5UGluIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFzaCc7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IHNpZ25BY2Nlc3NUb2tlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2p3dCc7XHJcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IExvZ2luLCBSZWdpc3RlciwgUmVzZXRQYXNzd29yZCB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IEJvdHRsZW5lY2sgZnJvbSAnYm90dGxlbmVjayc7XHJcbmltcG9ydCB7IHNlbmRPVFAgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVVzZXJTYWZlSWQgfSBmcm9tICdAL3V0aWxzL3VuaXF1ZUlkR2VuZXJhdG9yJztcclxuXHJcbmNvbnN0IGxpbWl0ZXIgPSBuZXcgQm90dGxlbmVjayh7XHJcbiAgbWF4Q29uY3VycmVudDogMSxcclxuICBtaW5UaW1lOiAzMzMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKGRhdGE6IFJlZ2lzdGVyKSB7XHJcbiAgaWYgKGRhdGE/LmVtYWlsKSB7XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChleGlzdGluZykgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbHJlYWR5IGluIHVzZScpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcclxuICAgIC4uLmRhdGEuZXh0cmEsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGEucm9sZSA9PT0gJ0FHRU5UJykgcmVjb3JkLmFnZW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgaWYgKGRhdGEucm9sZSA9PT0gJ01FUkNIQU5UJyB8fCBkYXRhLnJvbGUgPT09ICdJTlNUSVRVVElPTicpXHJcbiAgICByZWNvcmQubWVyY2hhbnQgPSB7IGNyZWF0ZToge30gfTtcclxuXHJcbiAgaWYgKGRhdGE/LmVtYWlsICE9PSB1bmRlZmluZWQpIHJlY29yZC5lbWFpbCA9IGRhdGEuZW1haWw7XHJcblxyXG4gIGNvbnN0IHVuaXF1ZUlkID0gZ2VuZXJhdGVVc2VyU2FmZUlkKCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgX3VzZXIgPSBhd2FpdCB0eC51c2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBidm46IGRhdGEuYnZuLCAvL0hhc2hpbmcgd2lsbCBjb21lIHdoZW4gdXNlciBhZGQgZW1haWxzLFxyXG4gICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgICB1bmlxdWVJRDogdW5pcXVlSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHguYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyB1c2VySWQ6IF91c2VyLmlkLCBhY3Rpb246ICdSRUdJU1RFUicsIGlwOiBudWxsIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gX3VzZXI7XHJcbiAgfSk7XHJcblxyXG4gIGxpbWl0ZXIuc2NoZWR1bGUoKCkgPT4gc2VuZE9UUCh1c2VyKSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yZ290UGluKHBheWxvYWQ6IHtcclxuICBwaG9uZT86IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxufSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwaG9uZTogcGF5bG9hZD8ucGhvbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZD8uZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGT1JHT1RfUElOX0NPREUnIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihkYXRhOiBMb2dpbikge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBob25lLCBwaW4gfSA9IGRhdGE7XHJcblxyXG4gIGlmICghcGluKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1BJTiBpcyByZXF1aXJlZCcsIDQyMik7XHJcbiAgaWYgKCFlbWFpbCAmJiAhcGhvbmUpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgLy8gRmluZCB1c2VyIGJ5IGVtYWlsIG9yIHBob25lXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBPUjogWy4uLihlbWFpbCA/IFt7IGVtYWlsIH1dIDogW10pLCAuLi4ocGhvbmUgPyBbeyBwaG9uZSB9XSA6IFtdKV0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICB3YWxsZXRzOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnLCA0MDEpO1xyXG5cclxuICBpZiAoIXVzZXIucGluKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgaGFzIG5vIHBpbiBzZXQnLCA0MDApO1xyXG5cclxuICBjb25zdCBvayA9IGF3YWl0IHZlcmlmeVBpbih1c2VyLnBpbiwgcGluKTtcclxuXHJcbiAgaWYgKCFvaykge1xyXG4gICAgLy8gT3B0aW9uYWw6IGluY3JlbWVudCBmYWlsZWQgbG9naW4gYXR0ZW1wdHMgaGVyZVxyXG4gICAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGQUlMRURfTE9HSU4nIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnLCA0MDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gU3VjY2Vzc2Z1bCBsb2dpbiDihpIgTG9nIGl0XHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnTE9HSU4nIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5XaXRoRmluZ2VyKGRhdGE6IHsgZmluZ2VyUHJpbnQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBmaW5nZXJQcmludCB9ID0gZGF0YTtcclxuXHJcbiAgaWYgKCFmaW5nZXJQcmludCkge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGaW5nZXIgaXMgcmVxdWlyZWQgb3IgaW52YWxpZCBmaW5nZXIgZGF0YScsIDQyMik7XHJcbiAgfVxyXG5cclxuICAvLyBGaW5kIHVzZXIgZGlyZWN0bHkgYnkgZmluZ2VycHJpbnRcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGZpbmdlclByaW50OiBmaW5nZXJQcmludCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBmaW5nZXJwcmludCcsIDQwMSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb2cgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0xPR0lOJyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvcmdvdFBhc3N3b3JkKGRhdGE6IHsgZW1haWw6IHN0cmluZzsgaXA/OiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWw6IGRhdGEuZW1haWwgfSB9KTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRk9SR09UX1BBU1NXT1JEX0NPREUnLCBpcDogZGF0YS5pcCB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoZGF0YTogUmVzZXRQYXNzd29yZCkge1xyXG4gIGNvbnN0IHsgdG9rZW4sIG5ld1Bhc3N3b3JkLCBpcCB9ID0gZGF0YTtcclxuICBjb25zdCB2ZXJpZmljYXRpb25JbnRlbnQgPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyByZWZyZXNoQ29kZTogdG9rZW4gfVxyXG4gIH0pO1xyXG4gIGlmICghdmVyaWZpY2F0aW9uSW50ZW50KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3IgZXhwaXJlZCB0b2tlbicpO1xyXG5cclxuICBjb25zdCBuZXdIYXNoID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB2ZXJpZmljYXRpb25JbnRlbnQudXNlcklkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBhc3N3b3JkOiBuZXdIYXNoLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gcmV2b2tlIGFsbCByZWZyZXNoIHRva2VucyAoc2FmZXR5KVxyXG4gIGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZGVsZXRlTWFueSh7IHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9IH0pO1xyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ1JFU0VUX1BBU1NXT1JEJywgaXA6IGlwIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFBpbih1c2VyOiBVc2VyLCBkYXRhOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGluOiBkYXRhLnBpbixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldm9rZSBhbGwgcmVmcmVzaCB0b2tlbnMgKHNhZmV0eSlcclxuICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRVNFVF9QSU4nIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByb3RhdGVSZWZyZXNoVG9rZW4oXHJcbiAgb2xkVG9rZW5SYXc6IHN0cmluZyxcclxuICBpcD86IHN0cmluZyxcclxuICBkZXZpY2VJbmZvPzogc3RyaW5nLFxyXG4pIHtcclxuICBjb25zdCBvbGRIYXNoID0gaGFzaFRva2VuKG9sZFRva2VuUmF3KTtcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5yZWZyZXNoVG9rZW4uZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB0b2tlbkhhc2g6IG9sZEhhc2ggfSxcclxuICB9KTtcclxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLmV4cGlyZXNBdCA8IG5ldyBEYXRlKCkpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVmcmVzaCB0b2tlbicpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBleGlzdGluZy51c2VySWQgfSB9KTtcclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcclxuXHJcbiAgY29uc3QgbmV3UmF3ID0gbmFub2lkKDY0KTtcclxuICBjb25zdCBuZXdIYXNoID0gaGFzaFRva2VuKG5ld1Jhdyk7XHJcbiAgY29uc3QgbmV3RXhwaXJlcyA9IGFkZERheXMobmV3IERhdGUoKSwgTnVtYmVyKGVudmlyb25tZW50Lmp3dC5yZWZyZXNoRGF5cykpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKFtcclxuICAgIHByaXNtYS5yZWZyZXNoVG9rZW4uZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0gfSksXHJcbiAgICBwcmlzbWEucmVmcmVzaFRva2VuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgdG9rZW5IYXNoOiBuZXdIYXNoISxcclxuICAgICAgICBleHBpcmVzQXQ6IG5ld0V4cGlyZXMsXHJcbiAgICAgICAgZGV2aWNlSW5mbyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRUZSRVNIX1JPVEFURUQnLCBpcCB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgc3ViOiB1c2VyLmlkLCByb2xlOiB1c2VyLnJvbGUgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgcmVmcmVzaFRva2VuOiBuZXdSYXcsXHJcbiAgICB1c2VyOiB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZWZyZXNoVG9rZW5SYXc/OiBzdHJpbmcsIGlwPzogc3RyaW5nKSB7XHJcbiAgaWYgKCFyZWZyZXNoVG9rZW5SYXcpIHJldHVybjtcclxuICBjb25zdCBoYXNoID0gaGFzaFRva2VuKHJlZnJlc2hUb2tlblJhdyk7XHJcbiAgYXdhaXQgcHJpc21hLnJlZnJlc2hUb2tlbi5kZWxldGVNYW55KHsgd2hlcmU6IHsgdG9rZW5IYXNoOiBoYXNoIH0gfSk7XHJcbiAgLy8gYXVkaXQgbG9nIG9wdGlvbmFsXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNlbmRPVFAodXNlcklkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnR5cGUgPT09ICdFTUFJTCcpIHtcclxuICAgIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChfdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGV4aXN0LiBDbGljayBvbiBmb3Jnb3QgcGluJywgNDA5KTtcclxuXHJcbiAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgIHNlbmRPVFAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogZGF0YT8ubmFtZSA/PyAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEudHlwZSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbW91bnRJbk5haXJhIH0gZnJvbSAnLic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICcuL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXI6IGFueSkgPT4ge1xyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBtZXJjaGFudDogdHJ1ZSxcclxuICAgICAgYWdlbnQ6IHRydWUsXHJcbiAgICAgIHdhbGxldHM6IHRydWUsXHJcbiAgICAgIGFkZHJlc3M6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IC4uLmF1dGhVc2VyIH0gPSBfdXNlcjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmF1dGhVc2VyLFxyXG4gICAgd2FsbGV0czogYXV0aFVzZXIud2FsbGV0cy5tYXAoKHcpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi53LFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IGFtb3VudEluTmFpcmEody5hdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgICByZXNlcnZlZEJhbGFuY2U6IGFtb3VudEluTmFpcmEody5yZXNlcnZlZEJhbGFuY2UpLFxyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IGFtb3VudEluTmFpcmEody5sZWRnZXJCYWxhbmNlKSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzBlZDhiOTliLTgwOTctNGU0OS1iZDRjLWZmMDQxMGM1N2QyNycsXHJcbiAgICAgICAgbmFtZTogJ0NvcnBvcmF0ZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Y2NzFkYTU3LWUyODEtNGI0MC05NjVmLWE5NmY0MjA1NDA1ZScsXHJcbiAgICAgICAgbmFtZTogJ0luZGl2aWR1YWwnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0NmU2OGNmNi1mMzU1LTQ1MzYtYWU5Ni1hZGYyNDY4MjgwOWYnLFxyXG4gICAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdjOTJkNTE1OC1hNGM1LTQ0MTgtODNmNy1hODEzZDM5ODlhODUnLFxyXG4gICAgICAgIG5hbWU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRyaWVzID0gWydMT0NBTCcsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dClcclxuICA/IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDVkNmMtYTliNC00NTJkLTg4NzItNGFkYTNkNDZiNTA2JyxcclxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdVUycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1VTQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3NzU0LTQ1NGQtNGFiMC04ZWQxLTVlZWQ5MzBhZDA2NycsXHJcbiAgICAgICAgbmFtZTogJ0doYW5hJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ0dIJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnR0hBJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDc3NjQtZTJhYi00NTVlLTgzNTktODQ4MDk1NTBmMTdjJyxcclxuICAgICAgICBuYW1lOiAnVG9nbycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdURycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1RHTycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3ODJiLTEzNGMtNGU3Yy04NzI2LTQ1MjRiOGU0MWZhOCcsXHJcbiAgICAgICAgbmFtZTogJ0JyYXppbCcsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdCUicsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ0JSQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2MxNWFkOWFlLWM0ZDctNDM0Mi1iNzBmLWRlNTUwODYyN2UzYicsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnTkcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdOR0EnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0YWE5ZDU5ZS0wNGU3LTQ5ODQtOTc5NC04NWE1NTQ4OWQ0MzMnLFxyXG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ05HJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnTkdBJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVuY2llcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzZlZWI1NGM4LTI0ZDctMTFmMC1hODE4LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ0NhbmFkaWFuIERvbGxhcnM0JyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDRDQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc4MjY0N2IyOS0xMzAyLTExZjAtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdSQU5EJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdaQVInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc5OGQ2NDU4My1mYjdlLTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDQUQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdhZjhjOTE2OC1mZGM1LTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzMycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0QzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzhmZTQxOWYtZmI3ZS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFyczInLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ0NEMicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Q5OGJhNWFiLWZiNzgtMTFlZi1hOGE5LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ1RhbnphbmlhIFNoaWxsaW5ncycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnVFpTJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZmQ1ZTQ3NGQtYmI0Mi00ZGIxLWFiNzQtZThkMmEwMTA0N2U5JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNDU4NTJmMGMtODRmYS00MTBjLWI2NmMtMWZmZWM1NmU1Y2Q4JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgYmFua3MgPSBbXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NpdGkgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb2JhbmsgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBCYW5rIG9mIE5pZ2VyaWEnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBDaXR5IE1vbnVtZW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEJhbmsgUGxjJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDEzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVyaXRhZ2UnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdKQUlaIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZXlzdG9uZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS3VkYSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGF5Y29tKE9QQVkpJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJvdmlkdXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JhbmQgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbGFyaXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWNJQlRDIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuZGFyZCBDaGFydGVyZWQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0ZXJsaW5nIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTVU5UUlVTVCBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDIyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pb24gQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaXRlZCBCYW5rIGZvciBBZnJpY2EnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbml0eSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnV2VtYS9BTEFUJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWkVOSVRIIEJBTksgUExDJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVkZEIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFuZ2VyaW5lIE1vbmV5JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFqIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTcGFya2xlJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSG9wZSBQU0JhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXJyYWxleCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V5b3dvJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnOVBheW1lbnQgU2VydmljZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTm92YSBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4gVHJ1c3QgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvdmVuYW50IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BhZ2UgRmluYW5jaWFscycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZvcnRpcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZTREggTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzQwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb2J1cyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOUVVFU1QgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FTTyBTYXZpbmdzICYgTG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZW5Nb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWMgSUJUQyBAZWFzZSB3YWxsZXQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGdXRvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW53aWNoIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNjAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYXBvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklSU0FMIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUJVIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjaW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2VsbHVsYW50JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQm93ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlVHJhbnphY3QnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZHZhbnMgTGEgRmF5ZXR0ZSAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDYXJib24nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYWxtUGF5IExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25pZXBvaW50JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS09OR0FQQVknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBYmJleSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW50ZXJzd2l0Y2ggTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheXN0YWNrIFBheW1lbnRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYcHJlc3MgUGF5bWVudHMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBQ0NFTEVSRVggTkVUV09SSycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyY2EgUGF5bWVudHMgQ29tcGFueSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5JQkFEQU4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVtaXVtIFRydXN0IGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb01vIFBTQicsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NtYXJ0Q2FzaCBQYXltZW50IFNlcnZpY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IE1hc3RlciBQU0InLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQUlSTU9ORVkgTUlDUk9GSU5BTkNFIEJBTksgTFREJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTUxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU0lHTkFUVVJFIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPUFRJTVVTIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbXBlcnNhbmQgTWljcm9maW5hbmNlIEJhbmsgKEJhbmtseSknLFxyXG4gICAgYmFua0NvZGU6ICcwOTA1MjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdXQVlBIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFnYScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FMLUJhcmFrYWggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICczbGluZSBDYXJkIE1hbmFnZW1lbnQgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Fib3ZlIE9ubHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgWWVsbG8nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3NNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0ODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGRvc3NlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FkZXllbWkgQ29sbGVnZSBTdGFmZiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FmZWtoYWZlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUcgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZWt1biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZXJ0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWwtSGF5YXQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGx3b3JrZXJzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWxwaGEgS2FwaXRhbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FtYWMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbWp1IFVuaXF1ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FNTUwgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW5jaG9yYWdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXBla3MgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcHBsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyaXNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXNzZXRNYXRyaXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3NldHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3RyYXBvbGFyaXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBdWNoaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhaW5lcyBDcmVkaXQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTg4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFsb2d1biBGdWxhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCYWxvZ3VuIEdhbWJhcmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCQyBLYXNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQklQQyBNaWNyb2ZpbmFuY2UgQmFuayAnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb2N0cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JPSSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvcmd1ICBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvc2FrIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJlbnQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyZXRocmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZGdld2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZ2h0d2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FyZXRha2VyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FzaENvbm5lY3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDRU1DUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NoYW5nYW4gUlRTIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2hpa3VtIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2h1a3d1bmVueWUgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ0lUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29hbGNhbXAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb2FzdGxpbmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLcmVkaSBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb25zdW1lciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvbnRlYyBHbG9iYWwgSW5mb3RlY2ggTGltaXRlZCAoTm93Tm93KScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nvb3AgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvcmVzdGVwIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29yb25hdGlvbiBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3JlZGl0IEFmcmlxdWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDcm93ZGZvcmNlJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3liZXJzcGFjZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRGF2b2RhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdEYXlsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhZ2xlIEZsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhcnRob2xldW0nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlLUJhcmNzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWNvYmFuayBYcHJlc3MgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb01vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VkRmluIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWtvbmRvIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDA5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VLLVJlbGlhYmxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW1lcmFsZHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFbXBpcmUgdHJ1c3QgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW50ZXJwcmlzZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vzby1FIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXZhbmdlbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V2ZXJncmVlbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZBU1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk4gTW9ydGdhZ2VzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk5Nb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQ01CIEVhc3kgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZDVCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGVyYWwgUG9seXRlY2huaWMgTmVrZWRlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXJhbCBVbml2ZXJzaXR5IER1dHNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXRoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkUG9seSBOYXNhcmF3YSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZFVCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZGUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGZ1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaW5hVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJtdXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBBcHBsZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgR2VuZXJhdGlvbiBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgT3B0aW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgUm95YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGbHV0dGVyd2F2ZSBUZWNobm9sb2d5IFNvbHV0aW9ucyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRm9ydGlzTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRnVsbHJhbmdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2FzaHVhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2F0ZXdheSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpYW50IFN0cmlkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpZ2lueWEgTWljcm9maW5hbmNlIGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0MTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaXJlaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb3J5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR01CIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR29vZCBOZWlnYm91cnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHb3dhbnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbkJhbmsgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbnZpbGxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3Jvb21pbmcgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hhY2ttYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIYWdnYWkgTW9ydGdhZ2UgQmFuayBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGFzYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIZWFkd2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVkb25tYXJrJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSUJJTEUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2VubmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2lyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0lsaXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltbyBTdGF0ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltcGVyaWFsIEhvbWVzIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbmZpbml0eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0luZmluaXR5IFRydXN0IE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbm5vdmVjdGl2ZXMgS2VzaCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ludGVsbGlmaW4nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbnRlcmxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJUkwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJc2FsZW95byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0p1YmlsZWUtTGlmZSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2FkUG9seSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tDTUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZWdvdycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tvbnRhZ29yYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhZ29zIEJ1aWxkaW5nIEludmVzdG1lbnQgQ29tcGFueScsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhdmVuZGVyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGVnZW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGlnaHQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTG92b251cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ00zNicsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW5sYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzIzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWFpbnN0cmVldCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW50cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01hbGFjaHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXJpdGltZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01heUZhaXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXlGcmVzaCBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWVnYXByYWlzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pY3JvY3JlZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pZGxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaW50RmluZXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNa3VkaScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbHVzaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IFRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9uZXlCb3gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb3lvZmFkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBCZW5lZml0cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05hZ2FydGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOYXZ5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmRpb3JhaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05lcHR1bmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgRGF3biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05ldyBHb2xkZW4gUGFzdHVyZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgUHJ1ZGVudGlhbCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklQIFZpcnR1YWwgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzk5OTk5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05uZXcgV29tZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOUEYgTWljcm9GaW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc3MDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ051dHVyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ053YW5uZWdhZGkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPY2hlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2hhZmlhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2twb2dhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2xhYmlzaSBPbmFiYW5qbyBVbml2ZXJzaXR5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT0xPRklOIE9XRU5BIE1JQ1JPRklOQU5DRSBCQU5LICcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09sdWNodWt3dSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09taXllIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT21vbHVhYmkgc2F2aW5ncyBhbmQgbG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPcmF1a3d1IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ5MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09zY290ZWNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFya3dheS1SZWFkeUNhc2gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXRyaWNrR29sZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheUF0dGl0dWRlIE9ubGluZScsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BlY2FuVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZW5ueXdpc2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZXJzb25hbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BldHJhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGlsbGFyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGxhdGludW0gTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbHl1bndhbmEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVlbWluZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlc3RpZ2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQdXJwbGVtb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1B5cmFtaWQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA2NTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdRdWlja2Z1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWZ1Z2UgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlZ2VudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlaG9ib3RoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVsaWFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZXBoaWRpbSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JpY2h3YXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSb3lhbCBFeGNoYW5nZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NhZmUgSGF2ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWZlVHJ1c3QnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWdhbXUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkIENhcGl0YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkdmVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5mb3JkIE1pY3JvZmluYW5jZSBCYWsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGVsbGFzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3Vsc3BhcCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhZ1BheScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RDRiBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUZWFzeU1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RoaW5rIEZpbmFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcmlkZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcnVzdGJvbmQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RydXN0ZnVuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1UgJiBDIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5BQUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmliZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmljYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmltYWlkIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pVXlvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzM4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5OIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZhczJuZXRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWZXJkYW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlydHVlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTUwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlzYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZUTmV0d29ya3MnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYc2xuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZQ1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZb2JlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoIEVhenkgV2FsbGV0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4tUGF5c3RhY2snLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUaGUgQWx0ZXJuYXRpdmUgQmFuayhBbHRCYW5rKScsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAzNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01rb2JvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU291cmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNjQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFua0lUIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzczogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIWFkZHJlc3MpIHJldHVybiAnJztcclxuXHJcbiAgY29uc3QgY2xlYW5lZCA9IGFkZHJlc3MucmVwbGFjZSgvW15hLXpBLVowLTlcXHMsXFwtXS9nLCAnJyk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBjbGVhbmVkLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiBub3JtYWxpemVkO1xyXG59XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYW5rcywgY291bnRyaWVzLCBjdXJyZW5jaWVzLCBzYW5pdGl6ZUFkZHJlc3MsIHR5cGVzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgZmluZEl0ZW0sXHJcbiAgZ2VuZXJhdGVSYW5kb21OdW1iZXIsXHJcbiAgaXNUZXN0aW5nQlZOLFxyXG4gIHVzZUVycm9yUGFyc2VyLFxyXG59IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IENvcnBvcmF0ZSwgUGF5bWVudCwgUGVyc29uYWwsIFRyYW5zZmVyLCBpV2FsbGV0IH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmVtYmVkbHk/LnVybCA/PyAnaHR0cHM6Ly93YWFzLXN0YWdpbmcuZW1iZWRseS5uZy9hcGkvdjEnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICd4LWFwaS1rZXknOiBlbnZpcm9ubWVudC5lbWJlZGx5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5DbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuICBjb25zdCBvcmdhbml6YXRpb25JZCA9IGVudmlyb25tZW50LmVtYmVkbHkuaWQ7XHJcbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmNsdWRlcyhjb25maWcubWV0aG9kIHx8ICcnKSkge1xyXG4gICAgY29uZmlnLmRhdGEgPSB7XHJcbiAgICAgIC4uLmNvbmZpZy5kYXRhLFxyXG4gICAgICBvcmdhbml6YXRpb25JZCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuY29uc3QgUGF5b3V0Q2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOlxyXG4gICAgZW52aXJvbm1lbnQuZW1iZWRseT8ucGF5b3V0VVJMID8/ICdodHRwczovL3BheW91dC1zdGFnaW5nLmVtYmVkbHkubmcvYXBpJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAneC1hcGkta2V5JzogZW52aXJvbm1lbnQuZW1iZWRseT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY2xhc3MgQ3VzdG9tZXIge1xyXG4gIHN0YXRpYyBhc3luYyBwZXJzb25hbChwYXlsb2FkOiBQZXJzb25hbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VzdG9tZXJUeXBlID0gZmluZEl0ZW0odHlwZXMsICdJbmRpdmlkdWFsJywgJ25hbWUnKTtcclxuICAgICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKFxyXG4gICAgICAgIGNvdW50cmllcyxcclxuICAgICAgICBwYXlsb2FkLmNvdW50cnksXHJcbiAgICAgICAgcGF5bG9hZD8uY291bnRyeT8ubGVuZ3RoID4gMiA/ICduYW1lJyA6ICdjb3VudHJ5Q29kZVR3bycsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvdW50cnk6IGMsIGFkZHJlc3MsIC4uLnJlc3QgfSA9IHBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IHNhbml0aXplZEFkZHJlc3MgPSBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzcyk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQ6IGN1c3RvbWVyVHlwZT8uaWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBjb3VudHJ5Py5pZCxcclxuICAgICAgICBhZGRyZXNzOiBzYW5pdGl6ZWRBZGRyZXNzLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgJ0VtYmVkbHkgQVBJIENhbGwnKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0Vycm9yIEVtYmVkbHkgQVBJIENhbGwnKTtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICAgICByZXM/Lm1lc3NhZ2UgPz8gcmVzLnRpdGxlLFxyXG4gICAgICAgICAgcmVzPy5zdGF0dXNDb2RlID8/IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy9jdXN0b21lcnMvZ2V0L2lkLycgKyBpZCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIEN1c3RvbWVyIGZyb20gRW1iZWRseScsIDQwNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNvcnBvcmF0ZShwYXlsb2FkOiBDb3Jwb3JhdGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyVHlwZUlkID0gZmluZEl0ZW0odHlwZXMsIHBheWxvYWQudHlwZSwgJ25hbWUnKT8uaWQ7XHJcbiAgICAgIGNvbnN0IGVDb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyaWVzLCBwYXlsb2FkLmNvdW50cnksICdjb3VudHJ5Q29kZVR3bycpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb3VudHJ5LCB0eXBlLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBlQ291bnRyeS5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXNjb2RlICE9PSAnMDAnKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXN1bHQubWVzc2FnZSwgNTAwKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzLm1lc3NhZ2UsIHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5S1lDKHBheWxvYWQ6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGJ2biA9IHBheWxvYWQuYnZuO1xyXG4gICAgICBpZiAoaXNUZXN0aW5nQlZOKGJ2bikpIGJ2biA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKDExKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2t5Yy9wcmVtaXVtLWt5Yz92ZXJpZnk9MScsIHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIGJ2bixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgIT09ICcwMCcpIHJldHVybjtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0N1c3RvbWVyIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCBCVk4gdmVyaWZpY2F0aW9uISc7XHJcblxyXG4gICAgICBpZiAocmVzICYmIHJlcy5tZXNzYWdlLmluY2x1ZGVzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlcy5tZXNzYWdlLCByZXMuc3RhdHVzQ29kZSk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgc3RhdGljIGFzeW5jIEJWTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIE5JTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeVdlYmhvb2socmF3Qm9keTogYW55LCBzaWduYXR1cmU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgaG1hYyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBlbnZpcm9ubWVudC5lbWJlZGx5LmtleSk7XHJcbiAgICBobWFjLnVwZGF0ZShyYXdCb2R5LCAndXRmOCcpO1xyXG4gICAgY29uc3QgY29tcHV0ZWRTaWduYXR1cmUgPSBobWFjLmRpZ2VzdCgnaGV4Jyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXB1dGVkU2lnbmF0dXJlICE9PSBzaWduYXR1cmU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBXYWxsZXQge1xyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUod2FsbGV0OiBpV2FsbGV0KSB7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMuZmluZCgoYykgPT4gYy5zaG9ydE5hbWUgPT09IHdhbGxldC5jdXJyZW5jeSk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgdXNlcklkLCAuLi5yZXN0IH0gPSB3YWxsZXQ7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL3dhbGxldHMvYWRkJywge1xyXG4gICAgICAuLi5yZXN0LFxyXG4gICAgICBjdXJyZW5jeUlkOiBjdXJyZW5jeT8uaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXQoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL3dhbGxldHMvZ2V0L3dhbGxldC8nICsgaWQpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdhbGxldEJ5QWNjb3VudChhY2NvdW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy93YWxsZXRzL2dldC9hY2NvdW50LycgKyBhY2NvdW50KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzIwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIFdhbGxldCBmcm9tIEVtYmVkbHknLCA0MDQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcihwYXlsb2FkOiBUcmFuc2Zlcikge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnB1dChcclxuICAgICAgJy93YWxsZXRzL3dhbGxldC90cmFuc2FjdGlvbi92Mi93YWxsZXQtdG8td2FsbGV0JyxcclxuICAgICAgcGF5bG9hZCxcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQmFuayB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL2JhbmtzJyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcyMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBXYWxsZXQgZnJvbSBFbWJlZGx5JywgNDA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocGF5bG9hZDogUGF5bWVudCkge1xyXG4gICAgY29uc3Qgd2ViaG9va1VybCA9IGVudmlyb25tZW50LmVtYmVkbHkud2ViaG9va1VSTDtcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkFjY291bnQgPSBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQ7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25OYW1lID0gZW52aXJvbm1lbnQuZW1iZWRseS5vcmdOYW1lO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY2llcy5maW5kKChjKSA9PiBjLnNob3J0TmFtZSA9PSBwYXlsb2FkLmN1cnJlbmN5KTtcclxuICAgIGNvbnN0IGJhbmsgPSBiYW5rcy5maW5kKChiKSA9PlxyXG4gICAgICBiLmJhbmtOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGF5bG9hZC5kZXN0aW5hdGlvbkJhbmsudG9Mb3dlckNhc2UoKSksXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghYmFuaykgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCYW5rIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgZGVzdGluYXRpb25CYW5rLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFBheW91dENsaWVudC5wb3N0KCcvaW50ZXItYmFuay10cmFuc2ZlcicsIHtcclxuICAgICAgLi4ucmVzdCxcclxuICAgICAgd2ViaG9va1VybCxcclxuICAgICAgY3VycmVuY3lJZDogY3VycmVuY3k/LmlkLFxyXG4gICAgICBkZXN0aW5hdGlvbkJhbmtDb2RlOiBiYW5rPy5iYW5rQ29kZSxcclxuICAgICAgc291cmNlQWNjb3VudE51bWJlcjogb3JnYW5pemF0aW9uQWNjb3VudCArICcnLFxyXG4gICAgICBzb3VyY2VBY2NvdW50TmFtZTogb3JnYW5pemF0aW9uTmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYmVkbHkge1xyXG4gIHN0YXRpYyBjdXN0b21lcnMgPSBDdXN0b21lcjtcclxuICBzdGF0aWMgdmFsaWRhdGlvbnMgPSBWYWxpZGF0aW9uO1xyXG4gIHN0YXRpYyB3YWxsZXRzID0gV2FsbGV0O1xyXG4gIHN0YXRpYyBiYW5rcyA9IEJhbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBVVmVyaWZ5QlZOIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyLCBpc1Rlc3RpbmdCVk4sIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogZW52aXJvbm1lbnQueW91dmVyaWZ5Py51cmwgPz8gJ2h0dHBzOi8vYXBpLnNhbmRib3gueW91dmVyaWZ5LmNvJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICB0b2tlbjogZW52aXJvbm1lbnQueW91dmVyaWZ5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgWW91dmVyaWZ5IHtcclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5QlZOKGRhdGE6IFVWZXJpZnlCVk4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGlmIChpc1Rlc3RpbmdCVk4oZGF0YS5pZCkpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJ0J1bmNoJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnRGlsbG9uJyxcclxuICAgICAgICAgIGRhdGVPZkJpcnRoOiAnMTItMTItMTk5NCcsXHJcbiAgICAgICAgICBjb3VudHJ5OiAnTkcnLFxyXG4gICAgICAgICAgbW9iaWxlOiAnMDgwJyArIGdlbmVyYXRlUmFuZG9tTnVtYmVyKDgpLFxyXG4gICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvdjIvYXBpL2lkZW50aXR5L25nL2J2bicsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhPy5zdGF0dXM/LmluY2x1ZGVzKCdub3RfZm91bmQnKSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0LmRhdGEucmVhc29uLCA0MDQpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhKSByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZXMgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE7XHJcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXMubWVzc2FnZSwgcmVzLnN0YXR1c0NvZGUpO1xyXG5cclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGU/Lm1lc3NhZ2UsIGUuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlBZGRyZXNzKHBob25lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJ2h0dHBzOi8vYWRkcmVzcy5zdmMueW91dmVyaWZ5LmNvL3YyL2FwaS9kaWdpdGFsLWFkZHJlc3Nlcy9sb29rdXAnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNlbnQ6IHRydWUsXHJcbiAgICAgICAgICBwaG9uZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgdG9rZW46IGVudmlyb25tZW50LnlvdXZlcmlmeT8ua2V5ID8/ICcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0FERFJFU1MgVmVyeScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuY29uc3QgVFhORkVFID0gcHJvY2Vzcy5lbnYuRVhURVJOQUxfUEVSQ0VOVCA/PyAxNTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVHJhbnNmZXJFdmVudChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFldmVudCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFdmVudCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25CYW5rOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICByZW1hcmtzOiBzdHJpbmc7XHJcbiAgICBmcm9tV2FsbGV0SWQ6IHN0cmluZztcclxuICAgIGluaXRpYXRlZEJ5OiBzdHJpbmc7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS5iYW5rcy50cmFuc2Zlcih7XHJcbiAgICAgIGFtb3VudDogTnVtYmVyKHBheWxvYWQuYW1vdW50KSxcclxuICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgIGRlc3RpbmF0aW9uQmFuazogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgcmVtYXJrczogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBzdWNjZWVkZWQnLCA1MDApO1xyXG5cclxuICAgIGNvbnN0IGFtb3VudCA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlclJlY29yZCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEFkZCB0aGlzIHRyYW5zYWN0aW9uIHRvIHRoZSBQcm92aWRlciBhY2NvdW50XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0VNQkVETFknIH0sXHJcbiAgICAgICAgY3JlYXRlOiB7IHByb3ZpZGVyOiAnRU1CRURMWScsIGJhbGFuY2U6IGFtb3VudCB9LFxyXG4gICAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgICAgYmFsYW5jZTogeyBpbmNyZW1lbnQ6IGFtb3VudCB9LFxyXG4gICAgICAgICAgdG90YWw6IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjEgQ3JlYXRlIHBlbmRpbmcgdHJhbnNmZXJcclxuICAgICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjIgRGViaXQgdXNlciB3YWxsZXRcclxuICAgICAgY29uc3QgZnJvbVdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGcm9tIHdhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgY29uc3QgbmV3QmFsYW5jZSA9IEJpZ0ludChmcm9tV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGFtb3VudDtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0Py5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0JhbGFuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBEZWJpdCBmb3IgRkVFc1xyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuICAgICAgY29uc3QgbmV3QmFsQWZ0ZXJGZWUgPSBCaWdJbnQod2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdCYWxBZnRlckZlZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PVRSQU5TRkVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdleHRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuMyBDcmVhdGUgbGVkZ2VyIGVudHJ5IChERUJJVClcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWFtb3VudCxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsYW5jZSxcclxuICAgICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcHJvdmlkZXIgZmxvYXQgbGVkZ2VyIHJvdyAoY3JlZGl0KVxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogYW1vdW50LFxyXG4gICAgICAgICAgYmFsYW5jZUFmdGVyOiBCaWdJbnQocHJvdmlkZXIuYmFsYW5jZSBhcyBhbnkpICsgYW1vdW50LFxyXG4gICAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuNCBDcmVhdGUgb3V0Ym94IGZvciBhc3luYyBwdWJsaXNoXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LnByb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcGF5bG9hZC5jdXJyZW5jeSxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGRlYml0IHRyYW5zYWN0aW9uXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT1UUkFOU0ZFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PUZFRT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBmZWVKb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgICB0b1Byb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIERlYml0IExlZGdlclxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWZlZVJhdGUsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICAgIHRvUHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRmVlIGxlZGdlclxyXG4gICAgICBjb25zdCBmZWVMZWRnZXIgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogZmVlUmF0ZSxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgICB0eXBlOiAnRkVFJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogJ0NvbW1pc3Npb24gb24gTmlwJyxcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0Py5pZCxcclxuICAgICAgICAgICAgdG9Qcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBZGQgRmVlXHJcbiAgICAgIGNvbnN0IGZlZSA9IGF3YWl0IHR4LmZlZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKGZlZVJhdGUpLCAvL0luIEtvYm8sXHJcbiAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICByYXRlOiBOdW1iZXIoZmVlUmF0ZSksIC8vSW4gS29ibyxcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBsZWRnZXJJZDogZmVlTGVkZ2VyLmlkLFxyXG4gICAgICAgICAgdHlwZTogJ0VYVEVSTkFMJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uIGZvciBGZWVcclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKGZlZVJhdGUpLFxyXG4gICAgICAgICAgaXRlbUlkOiBmZWUuaWQsXHJcbiAgICAgICAgICB0eXBlOiAnRkVFJyxcclxuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC5pbml0aWF0ZWRCeSxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgICAgcmVhc29uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09RkVFPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZmVyUmVjb3JkO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICByZWFzb246IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlID8/IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5OiBwYXlsb2FkLmN1cnJlbmN5LFxyXG4gICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICB0b0FjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgdG9BY2NvdW50TmFtZTogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROYW1lLFxyXG4gICAgICAgICAgZXJyb3I6IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXh0ZXJuYWwgdHJhbnNmZXIgZmFpbGVkJywgNTAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgQWt1dWsgfSBmcm9tICdAL2V4dGVuc2lvbnMvYWt1dWsnO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vcXVldWVzJztcclxuaW1wb3J0IHsgYW1vdW50SW5Lb2JvLCBmb3JtYXRUcmFuc2ZlclNNUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NBaXJ0aW1lRXZlbnQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIGFpcnRpbWVJZDogc3RyaW5nO1xyXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XHJcbiAgICBhbW91bnQ/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jeT86IHN0cmluZztcclxuICAgIHVzZXJJZD86IHN0cmluZztcclxuICAgIGZyb21XYWxsZXRJZD86IHN0cmluZztcclxuICAgIGNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICBhY2NvdW50TnVtYmVyOiBudW1iZXI7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHJlc3BvbnNlOiBhbnkgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBBa3V1ay5haXJ0aW1lKHtcclxuICAgICAgbnVtYmVyOiBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICBjb3VudHJ5OiBwYXlsb2FkPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIGJpbGxpbmc6ICdwcmVwYWlkJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIG1hcmsgdGFuc2FjdGlvbiBjb21wbGV0ZWRcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzIGFnYWluLCBpdCBjYW4gcHVsbCBhbnkgbGVkZ2VyUm93XHJcbiAgICAgIGNvbnN0IGxlZGdlclJvdyA9IGF3YWl0IHR4LmxlZGdlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHdhbGxldElkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJhdGUgPSBOdW1iZXIocHJvY2Vzcy5lbnYuQUlSVElNRV9QRVJDRU5UKSA/PyAwLjAyNTtcclxuICAgICAgYXdhaXQgdHguZmVlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdHJhbnNhY3Rpb25JZDogcGF5bG9hZD8uYWlydGltZUlkLFxyXG4gICAgICAgICAgcHJvdmlkZXI6IGxlZGdlclJvdz8ucHJvdmlkZXJJZCxcclxuICAgICAgICAgIHR5cGU6ICdBSVJUSU1FJyBhcyBhbnksXHJcbiAgICAgICAgICByYXRlLFxyXG4gICAgICAgICAgYW1vdW50OiBOdW1iZXIocGF5bG9hZC5hbW91bnQpICogcmF0ZSxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LmFpcnRpbWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5haXJ0aW1lSWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdTVUNDRVNTJyBhcyBhbnksXHJcbiAgICAgICAgICByZWZlcmVuY2U6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5SZWZlcmVuY2UgKyAnJyxcclxuICAgICAgICAgIGxlZGdlckVudHJ5SWQ6IGxlZGdlclJvdz8uaWQsXHJcbiAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuY29tcGxldGVkJyxcclxuICAgICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3BvbnNlPy5kZXRhaWxzPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQudXNlcklkIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXNwb25zZTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICBhY2NvdW50OiBwYXlsb2FkLmFjY291bnROdW1iZXIgKyAnJyxcclxuICAgICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgIGRlc2M6ICdBaXJ0aW1lIFB1cmNoYXNlIHRvICcgKyBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICBiYWxhbmNlOiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYmFsYW5jZSkpLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICB0eXBlOiAnRFInLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgUXVldWUudHJpZ2dlcihldmVudElkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHBob25lOiB1c2VyPy5waG9uZSEsXHJcbiAgICAgIHR5cGU6ICdTTVMnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaWYgKHJlc3BvbnNlPy5jb2RlID09PSAyMDApIHtcclxuICAgICAgYXdhaXQgcHJpc21hLmFpcnRpbWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5haXJ0aW1lSWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdTVUNDRVNTJyBhcyBhbnksXHJcbiAgICAgICAgICByZWZlcmVuY2U6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5SZWZlcmVuY2UgKyAnJyxcclxuICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmFrdXVrLnBhcnRpYWwnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgYXdhaXQgdHguYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnRkFJTEVEJywgZXJyb3I6IChlcnIgYXMgRXJyb3IpLm1lc3NhZ2UgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdVc2VyTGVkZ2VyQmFsYW5jZSA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSEpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG4gICAgICBjb25zdCBuZXdBdmFpbGFibGVCYWxhbmNlID1cclxuICAgICAgICBCaWdJbnQod2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlISkgK1xyXG4gICAgICAgIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0F2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogcGF5bG9hZC5hY2NvdW50TnVtYmVyICsgJycsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgICAgZGVzYzogJ1JldmVyc2VkOiBBaXJ0aW1lIFB1cmNoYXNlIHRvICcgKyBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0F2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQudXNlcklkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGF3YWl0IFF1ZXVlLnRyaWdnZXIoZXZlbnRJZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICAgIGNvdW50cnk6IHVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICBwaG9uZTogdXNlcj8ucGhvbmUhLFxyXG4gICAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmFrdXVrLmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5lcnJvcignW0FpcnRpbWVIYW5kbGVyXSBBaXJ0aW1lIHB1cmNoYXNlIGZhaWxlZDonLCBlcnIpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHNlbmRFbWFpbCBmcm9tICdAL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3NlbmQtZW1haWwnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQoXHJcbiAgZXZlbnRJZDogYW55LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4pIHtcclxuICBpZiAoZGF0YS50eXBlID09PSAnU01TJykge1xyXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRTTVNXaXRoQWt1dWsoZGF0YSk7XHJcbiAgfVxyXG4gIGlmIChkYXRhLnR5cGUgPT09ICdFTUFJTCcpIHtcclxuICAgIHJldHVybiBhd2FpdCBzZW5kTWFpbChkYXRhKTtcclxuICB9XHJcblxyXG4gIGF3YWl0IHNlbmRTTVNXaXRoQWt1dWsoZGF0YSk7XHJcbiAgYXdhaXQgc2VuZE1haWwoZGF0YSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRTTVNXaXRoQWt1dWsoZGF0YTogYW55KSB7XHJcbiAgYXdhaXQgQWt1dWsuc2VuZFNNUyh7XHJcbiAgICBjb3VudHJ5OiBkYXRhLmNvdW50cnksXHJcbiAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICBudW1iZXI6IGRhdGEucGhvbmUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRNYWlsKGRhdGE6IGFueSkge1xyXG4gIHJldHVybiBhd2FpdCBzZW5kRW1haWwoe1xyXG4gICAgdG86IGRhdGEuZW1haWwhLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICB0b19uYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgIC4uLmRhdGEudmFyaWFibGVzLFxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBkYXRhLnRlbXBsYXRlLFxyXG4gIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgY3JlYXRlRW1iZWRseVVzZXIgfSBmcm9tICcuLi9tb2R1bGVzL3VzZXJzL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b0lTT0RhdGUgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NFbWJlZGx5V2FsbGV0KGV2ZW50SWQ6IGFueSkge1xyXG4gIGNvbnN0IGV2ZW50ID0gYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBhZ2dyZWdhdGVJZDogZXZlbnRJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhldmVudCwgJ0dFVCBFVkVOVCcpO1xyXG5cclxuICBpZiAoIWV2ZW50KSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHBheWxvYWQgPSBldmVudD8ucGF5bG9hZCBhcyB7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIHN0cmVldExpbmU6IHN0cmluZztcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGNvdW50cnk6IHN0cmluZztcclxuICAgIGRvYjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBidm46IHN0cmluZztcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXBheWxvYWQuZW1haWwpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBtdXN0IHByb3ZpZGUgZW1haWwnLCA0MjIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFkZHJlc3M6IHBheWxvYWQ/LnN0cmVldExpbmUsXHJcbiAgICAgIGNpdHk6IHBheWxvYWQ/LmNpdHksXHJcbiAgICAgIGNvdW50cnk6IHBheWxvYWQ/LmNvdW50cnksXHJcbiAgICAgIGRvYjogdG9JU09EYXRlKHBheWxvYWQ/LmRvYiEpLFxyXG4gICAgICBmaXJzdE5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgIGxhc3ROYW1lOiBwYXlsb2FkPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICBwaG9uZTogcGF5bG9hZD8ucGhvbmUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJyk/LlsyXSA/PyAnJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSwgJ0dFVCBQQVlMT0FEJyk7XHJcblxyXG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgY3JlYXRlRW1iZWRseVVzZXIoZXZlbnRJZCwge1xyXG4gICAgICBlbWJlZGx5OiBkYXRhLFxyXG4gICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcclxuICAgICAgYnZuOiBwYXlsb2FkPy5idm4/LnRyaW0oKSEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3YWxsZXQsICdDUkVBVEUgRU1CRURMWSBXQUxMRVQnKTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IHdhbGxldD8uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB3YWxsZXQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLCAnUHJvY2Vzc0VtYmVkbHlVU2VyJyk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NJbnRlcm5hbFRyYW5zZmVyRXZlbnQoXHJcbiAgZXZlbnRJZDogYW55LFxyXG4gIGRhdGE6IFRyYW5zZmVyLFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLnRyYW5zZmVyKHtcclxuICAgICAgYW1vdW50OiBOdW1iZXIoZGF0YS5hbW91bnQpLFxyXG4gICAgICBmcm9tQWNjb3VudDogZGF0YS5mcm9tQWNjb3VudCxcclxuICAgICAgdG9BY2NvdW50OiBkYXRhLnRvQWNjb3VudCxcclxuICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgIHJlbWFya3M6IGRhdGEucmVtYXJrcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5pbnRlcm5hbC5vcmdhbml6YXRpb24uY29tcGxldGVkJyxcclxuICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgZnJvbUFjY291bnQ6IGRhdGEuZnJvbUFjY291bnQsXHJcbiAgICAgICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwub3JnYW5pemF0aW9uLmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIGZyb21BY2NvdW50OiBkYXRhLmZyb21BY2NvdW50LFxyXG4gICAgICAgICAgdG9BY2NvdW50OiBkYXRhLnRvQWNjb3VudCxcclxuICAgICAgICAgIHJlbWFya3M6IGRhdGEucmVtYXJrcyxcclxuICAgICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBkYXRhLnRyYW5zYWN0aW9uUmVmZXJlbmNlLFxyXG4gICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdJbnRlcm5hbCB0cmFuc2ZlciBmYWlsZWQgdG8gb3JnYW5pemF0aW9uIHdhbGxldCBmYWlsZWQnLFxyXG4gICAgICA1MDAsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRVUVVRV9OQU1FUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBXb3JrZXIgfSBmcm9tICdidWxsbXEnO1xyXG5pbXBvcnQgeyBwcm9jZXNzVHJhbnNmZXJFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy10cmFuc2Zlcic7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHByb2Nlc3NBaXJ0aW1lRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3MtYWlydGltZSc7XHJcbmltcG9ydCB7IHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IElPUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcbmltcG9ydCB7IHByb2Nlc3NFbWJlZGx5V2FsbGV0IH0gZnJvbSAnLi9wcm9jZXNzLWVtYmVkbHktd2FsbGV0JztcclxuaW1wb3J0IHsgcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1pbnRlcm5hbC10cmFuc2ZlcnMnO1xyXG5cclxuY29uc3QgcmVkaXNDbGllbnQgPSBuZXcgSU9SZWRpcyhlbnZpcm9ubWVudC5yZWRpcy51cmwsIHtcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge1xyXG4gIGhvc3Q6IGVudmlyb25tZW50LnJlZGlzLmhvc3QsXHJcbiAgcG9ydDogZW52aXJvbm1lbnQucmVkaXMucG9ydCxcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrZXJzIHtcclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXJXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuVFJBTlNGRVIsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1RyYW5zZmVyRXZlbnQoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gVXNlIFNhZmVIYXZlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiA1LFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBpbnRlcm5hbFRyYW5zZmVyV29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLklOVEVSTkFMX1RSQU5TRkVSLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NJbnRlcm5hbFRyYW5zZmVyRXZlbnQoZGF0YS5pZCwgZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDUsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFpcnRpbWVXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuQUlSVElNRSxcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzQWlydGltZUV2ZW50KGRhdGEuaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZSBTYWZlSGF2ZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA+IDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiA1LFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBub3RpZmljYXRpb25Xb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuTk9USUZJQ0FUSU9OLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQoZGF0YS5pZCwgZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDUsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHdhbGxldFdvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5DUkVBVEVXQUxMRVQsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0VtYmVkbHlXYWxsZXQoZGF0YS5pZCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnV09SS0VSJyk7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogNSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFF1ZXVlIGFzIEJ1bGxRdWV1ZSB9IGZyb20gJ2J1bGxtcSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyLCBRVUVVRV9OQU1FUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFdvcmtlcnMgfSBmcm9tICcuL1dvcmtlcnMnO1xyXG5pbXBvcnQgSU9SZWRpcyBmcm9tICdpb3JlZGlzJztcclxuXHJcbmNvbnN0IHJlZGlzQ2xpZW50ID0gbmV3IElPUmVkaXMoZW52aXJvbm1lbnQucmVkaXMudXJsLCB7XHJcbiAgbWF4UmV0cmllc1BlclJlcXVlc3Q6IG51bGwsXHJcbiAgZW5hYmxlUmVhZHlDaGVjazogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgZGVmYXVsdEpvYk9wdGlvbnMgPSB7XHJcbiAgYXR0ZW1wdHM6IDMsXHJcbiAgYmFja29mZjoge1xyXG4gICAgdHlwZTogJ2V4cG9uZW50aWFsJyBhcyBjb25zdCxcclxuICAgIGRlbGF5OiAyMDAwLFxyXG4gIH0sXHJcbiAgcmVtb3ZlT25Db21wbGV0ZToge1xyXG4gICAgY291bnQ6IDEwMDAsXHJcbiAgICBhZ2U6IDI0ICogMzYwMCxcclxuICB9LFxyXG4gIHJlbW92ZU9uRmFpbDoge1xyXG4gICAgY291bnQ6IDUwMDAsXHJcbiAgICBhZ2U6IDcgKiAyNCAqIDM2MDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2ZlclF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5UUkFOU0ZFUiwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVybmFsVHJhbnNmZXJRdWV1ZSA9IG5ldyBCdWxsUXVldWUoXHJcbiAgUVVFVUVfTkFNRVMuSU5URVJOQUxfVFJBTlNGRVIsXHJcbiAge1xyXG4gICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgICAgYXR0ZW1wdHM6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgYWlydGltZVF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5BSVJUSU1FLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLk5PVElGSUNBVElPTiwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIC8vIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtYmVkbHlXYWxsZXRRdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuQ1JFQVRFV0FMTEVULCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWUge1xyXG4gIHN0YXRpYyBhc3luYyB0cmlnZ2VyKFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHR5cGU6IGtleW9mIHR5cGVvZiBRVUVVRV9OQU1FUyxcclxuICAgIGRhdGE/OiBhbnksXHJcbiAgKTogUHJvbWlzZTx7IGpvYklkOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nIH0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdBSVJUSU1FJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyQWlydGltZShpZCk7XHJcblxyXG4gICAgICBjYXNlICdUUkFOU0ZFUic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlclRyYW5zZmVyKGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ05PVElGSUNBVElPTic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlck5vdGlmaWNhdGlvbihpZCwgZGF0YSk7XHJcblxyXG4gICAgICBjYXNlICdDUkVBVEVXQUxMRVQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJDcmVhdGVFbWJlZGx5V2FsbGV0KGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ0lOVEVSTkFMX1RSQU5TRkVSJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VySW50ZXJuYWxUcmFuc2ZlcihpZCwgZGF0YSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHF1ZXVlIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJBaXJ0aW1lKFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICApOiBQcm9taXNlPHsgam9iSWQ6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfT4ge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgYWlydGltZVF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtYWlydGltZScsXHJcbiAgICAgIHsgaWQgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgdHJhbnNmZXItJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyVHJhbnNmZXIoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgdHJhbnNmZXJRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLXRyYW5zZmVyJyxcclxuICAgICAgeyBpZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGB0cmFuc2Zlci0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJJbnRlcm5hbFRyYW5zZmVyKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgaW50ZXJuYWxUcmFuc2ZlclF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtaW50ZXJuYWwtdHJhbnNmZXInLFxyXG4gICAgICB7IGlkLCBkYXRhIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYGludGVybmFsLXRyYW5zZmVyLSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlck5vdGlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IG5vdGlmaWNhdGlvblF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3Mtbm90aWZpY2F0aW9uJyxcclxuICAgICAgeyBpZCwgZGF0YSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGBub3RpZmljYXRpb24tJHtnZW5lcmF0ZVJhbmRvbU51bWJlcig2KX0tJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAzLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyQ3JlYXRlRW1iZWRseVdhbGxldChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBlbWJlZGx5V2FsbGV0UXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1jcmVhdGUtZW1iZWRseS13YWxsZXQnLFxyXG4gICAgICB7IGlkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYHdhbGxldC0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDMsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbldvcmtlcnMuYWlydGltZVdvcmtlcigpO1xyXG5Xb3JrZXJzLnRyYW5zZmVyV29ya2VyKCk7XHJcbldvcmtlcnMubm90aWZpY2F0aW9uV29ya2VyKCk7XHJcbldvcmtlcnMud2FsbGV0V29ya2VyKCk7XHJcbldvcmtlcnMuaW50ZXJuYWxUcmFuc2ZlcldvcmtlcigpO1xyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBFeHRlcm5hbFRyYW5zZmVySW5wdXQsIGlXYWxsZXQsIFRyYW5zZmVyUGF5bG9hZCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIGFtb3VudEluS29ibyxcclxuICBhbW91bnRJbk5haXJhLFxyXG4gIGNoZWNrRGFpbHlMaW1pdCxcclxuICBmb3JtYXRUcmFuc2ZlclNNUyxcclxufSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5jb25zdCBNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVCA9IDEwMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2ZlclRvRXh0ZXJuYWxCYW5rKHBheWxvYWQ6IEV4dGVybmFsVHJhbnNmZXJJbnB1dCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgc2VuZGVyTmFtZSxcclxuICAgIGRlc3RpbmF0aW9uQmFuayxcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICBhbW91bnQsXHJcbiAgICBjdXJyZW5jeSA9ICdOR04nLFxyXG4gICAgcmVhc29uID0gJ0Z1bmRzIFRyYW5zZmVyJyxcclxuICB9ID0gcGF5bG9hZDtcclxuXHJcbiAgY29uc3QgYW10ID0gYW1vdW50SW5Lb2JvKGFtb3VudCk7XHJcbiAgaWYgKCFpZGVtcG90ZW5jeUtleSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdNaXNzaW5nIGlkZW1wb3RlbmN5IGtleScsIDQwMCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGFtb3VudCcsIDQwMCk7XHJcbiAgaWYgKGFtb3VudCA8IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgQW1vdW50IG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuICR7TUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlR9YCxcclxuICAgICk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gMe+4j+KDoyBDaGVjayBJZGVtcG90ZW5jeSBSZWNvcmRcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBleGlzdGluZ1RyYW5zZmVyID0gYXdhaXQgcHJpc21hLnRyYW5zZmVyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWRlbXBvdGVuY3lLZXkgfSxcclxuICB9KTtcclxuICBpZiAoZXhpc3RpbmdUcmFuc2ZlcikgcmV0dXJuIGV4aXN0aW5nVHJhbnNmZXI7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIDLvuI/ig6MgUmVzb2x2ZSBXYWxsZXQgJiBCYWxhbmNlXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW2Zyb21XYWxsZXQsIGZyb21Vc2VyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcklkOiBpbml0aWF0b3JVc2VySWQsIGN1cnJlbmN5IH0sXHJcbiAgICB9KSxcclxuICAgIHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiBpbml0aWF0b3JVc2VySWQgfSB9KSxcclxuICBdKTtcclxuXHJcbiAgaWYgKCFmcm9tVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgaWYgKCFmcm9tV2FsbGV0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBmZWVSYXRlID0gTnVtYmVyKHByb2Nlc3MuZW52Py5FWFRFUk5BTF9QRVJDRU5UID8/IDE1KTtcclxuICBjb25zdCB0b3RhbEFtb3VudCA9IGFtb3VudEluS29ibyhhbW91bnQgKyBmZWVSYXRlKTtcclxuXHJcbiAgaWYgKE51bWJlcihmcm9tV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpIDwgdG90YWxBbW91bnQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBiYWxhbmNlJywgNDIyKTtcclxuXHJcbiAgLy8gQ2hlY2sgZm9yIGRhaWx5IGxpbWl0XHJcbiAgY29uc3QgbGltaXRFeGNlZWRlZCA9IGF3YWl0IGNoZWNrRGFpbHlMaW1pdChmcm9tV2FsbGV0LCBmcm9tVXNlciwgYW10KTtcclxuICBpZiAobGltaXRFeGNlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGBEYWlseSBsaW1pdCBleGNlZWRlZC5gLCA0MDMpO1xyXG5cclxuICBjb25zdCB0cmFuc2ZlclJlY29yZCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHR4LnByb3ZpZGVyLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IHByb3ZpZGVyOiAnRU1CRURMWScgfSxcclxuICAgICAgdXBkYXRlOiB7fSxcclxuICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICBhbW91bnQ6IGFtdCxcclxuICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIHJlYXNvbixcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ0VYVEVSTkFMJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiAtYW10LnRvU3RyaW5nKCksXHJcbiAgICAgICAgaXRlbUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHVzZXJJZDogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogYCR7ZGVzdGluYXRpb25BY2NvdW50TmFtZX0tJHtkZXN0aW5hdGlvbkFjY291bnROdW1iZXJ9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lLFxyXG4gICAgICAgICAgc291cmNlQWNjb3VudE51bWJlcjogZnJvbVdhbGxldC5hY2NvdW50TnVtYmVyPy50cmltKCksXHJcbiAgICAgICAgICBzb3VyY2VBY2NvdW50TmFtZTogc2VuZGVyTmFtZS50cmltKCksXHJcbiAgICAgICAgICByZW1hcmtzOiByZWFzb24sXHJcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlcjtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2ZlclJlY29yZC5pZCwgJ1RSQU5TRkVSJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi50cmFuc2ZlclJlY29yZCxcclxuICAgIGFtb3VudDogYW1vdW50SW5OYWlyYSh0cmFuc2ZlclJlY29yZC5hbW91bnQpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWxsZXRUb1dhbGxldFRyYW5zZmVyKHBheWxvYWQ6IFRyYW5zZmVyUGF5bG9hZCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgc2VuZGVyLFxyXG4gICAgcmVjZWl2ZXIsXHJcbiAgICBhbW91bnQsXHJcbiAgICBjdXJyZW5jeSA9ICdOR04nLFxyXG4gICAgcmVhc29uLFxyXG4gIH0gPSBwYXlsb2FkO1xyXG5cclxuICAvLyBUT0RPOjogQ2hlY2sgZm9yIHVzZXIgd2FsbGV0IGFtb3VudCBiZWZvcmUgdHJhbnNmZXJpbmdcclxuXHJcbiAgY29uc3QgYW10ID0gYW1vdW50SW5Lb2JvKGFtb3VudCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEVycm9yKCdBbW91bnQgbXVzdCBiZSBwb3NpdGl2ZScpO1xyXG4gIGlmIChhbW91bnQgPCBNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVClcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYEFtb3VudCBtdXN0IGJlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAke01JTklNVU1fVFJBTlNGRVJfQU1PVU5UfWAsXHJcbiAgICApO1xyXG5cclxuICAvLyBSZXNvbHZlIHNlbmRlciBhbmQgcmVjaXBpZW50XHJcbiAgY29uc3QgW2Zyb21XYWxsZXQsIHRvV2FsbGV0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogc2VuZGVyLCBjdXJyZW5jeSB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBhY2NvdW50TnVtYmVyOiByZWNlaXZlciwgY3VycmVuY3kgfSxcclxuICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgICB9KSxcclxuICBdKTtcclxuXHJcbiAgaWYgKCFmcm9tV2FsbGV0KVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICBgU2VuZGVyIHdhbGxldCBub3QgZm91bmQgZm9yIGN1cnJlbmN5ICR7Y3VycmVuY3l9YCxcclxuICAgICAgNDA0LFxyXG4gICAgKTtcclxuICBpZiAoIXRvV2FsbGV0KVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICBgUmVjaXBpZW50IHdhbGxldCBub3QgZm91bmQgZm9yIGN1cnJlbmN5ICR7Y3VycmVuY3l9YCxcclxuICAgICAgNDA0LFxyXG4gICAgKTtcclxuXHJcbiAgaWYgKGZyb21XYWxsZXQuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1NlbmRlciB3YWxsZXQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuICBpZiAodG9XYWxsZXQuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1JlY2lwaWVudCB3YWxsZXQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuXHJcbiAgY29uc3QgZnJvbVVzZXIgPSBmcm9tV2FsbGV0LnVzZXI7XHJcbiAgY29uc3QgdG9Vc2VyID0gdG9XYWxsZXQudXNlcjtcclxuXHJcbiAgLy8gQ2hlY2tzXHJcbiAgaWYgKCF0b1VzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignUmVjaXBpZW50IG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgaWYgKCFmcm9tVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdTZW5kZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoZnJvbVVzZXIuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1NlbmRlciBhY2NvdW50IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG4gIGlmICh0b1VzZXIuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1JlY2lwaWVudCBhY2NvdW50IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIHdhbGxldCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcbiAgaWYgKGZyb21Vc2VyLmlkID09PSB0b1VzZXIuaWQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0Nhbm5vdCB0cmFuc2ZlciB0byBzZWxmJywgNDIyKTtcclxuXHJcbiAgLy8gY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbZnJvbVdhbGxldC5pZCwgdG9XYWxsZXQuaWRdLnNvcnQoKTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gaWRlbXBvdGVuY3kgZ3VhcmRcclxuXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHR4LnRyYW5zZmVyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleSB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZzsgLy8gbG9nIGhlcmVcclxuXHJcbiAgICAvLyBsb2NrIHdhbGxldHMgd2l0aCBGT1IgVVBEQVRFXHJcbiAgICBjb25zdCBsb2NrZWRSb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3PFxyXG4gICAgICBhbnlbXVxyXG4gICAgPmBTRUxFQ1QgaWQsIFwidXNlcklkXCIsIGN1cnJlbmN5LCBcImxlZGdlckJhbGFuY2VcIiwgXCJhdmFpbGFibGVCYWxhbmNlXCIsIFwicmVzZXJ2ZWRCYWxhbmNlXCIsIHZlcnNpb24sIHN0YXR1cyBGUk9NIFwiV2FsbGV0XCIgV0hFUkUgaWQgSU4gKCR7b3JkZXJlZFswXX0sICR7b3JkZXJlZFsxXX0pIEZPUiBVUERBVEVgO1xyXG4gICAgaWYgKGxvY2tlZFJvd3MubGVuZ3RoICE9PSAyKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA1MDApO1xyXG5cclxuICAgIC8vIG1hcCBsb2NrZWQgcm93c1xyXG4gICAgY29uc3QgbG9ja2VkTWFwID0gbmV3IE1hcCgobG9ja2VkUm93cyBhcyBhbnlbXSkubWFwKChyKSA9PiBbci5pZCwgcl0pKTtcclxuICAgIGNvbnN0IGxvY2tlZEZyb20gPSBsb2NrZWRNYXAuZ2V0KGZyb21XYWxsZXQuaWQpO1xyXG4gICAgY29uc3QgbG9ja2VkVG8gPSBsb2NrZWRNYXAuZ2V0KHRvV2FsbGV0LmlkKTtcclxuXHJcbiAgICBpZiAoIWxvY2tlZEZyb20gfHwgIWxvY2tlZFRvKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA0MjIpO1xyXG5cclxuICAgIC8vIGNoZWNrIGZ1bmRzXHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkRnJvbS5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSk7XHJcbiAgICAvLyBjb25zdCByZXNlcnZlZCA9IEJpZ0ludCgobG9ja2VkRnJvbS5yZXNlcnZlZEJhbGFuY2UgYXMgYW55KSB8fCAwKTtcclxuICAgIGlmIChhdmFpbGFibGUgPCBhbXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGZ1bmRzJywgNDAzKTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgZGFpbHkgbGltaXRcclxuICAgIGNvbnN0IGxpbWl0RXhjZWVkZWQgPSBhd2FpdCBjaGVja0RhaWx5TGltaXQoZnJvbVdhbGxldCwgZnJvbVVzZXIsIGFtdCk7XHJcbiAgICBpZiAobGltaXRFeGNlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGBEYWlseSBsaW1pdCBleGNlZWRlZC5gLCA0MDMpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBUcmFuc2ZlciByZWNvcmRcclxuICAgIGNvbnN0IG9wZXJhdGlvbklkID0gYHRyYW5zZmVyXyR7cGF5bG9hZC5pZGVtcG90ZW5jeUtleX1gO1xyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgcmVhc29uLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBmcm9tVXNlcklkOiBmcm9tVXNlci5pZCxcclxuICAgICAgICAgIHRvVXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcmVhc29uID8/ICdpbnRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGUgbmV3IGJhbGFuY2VzXHJcbiAgICBjb25zdCBuZXdGcm9tTGVkZ2VyQmFsID0gQmlnSW50KGxvY2tlZEZyb20ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gYW10O1xyXG4gICAgY29uc3QgbmV3RnJvbUF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRGcm9tLmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuXHJcbiAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9IEJpZ0ludChsb2NrZWRUby5sZWRnZXJCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcbiAgICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRUby5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxlZGdlciByb3dzIChkZWJpdCB0aGVuIGNyZWRpdCksIHJlZmVyZW5jZSBqb3VybmFsLmlkXHJcbiAgICBjb25zdCBkZWJpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGNoYW5nZTogLWFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0Zyb21MZWRnZXJCYWwsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0RFQklUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICByZWNpcGllbnRXYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNyZWRpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICByZWFzb24sXHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHNlbmRlcldhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc2VuZGVyIHdhbGxldFxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdGcm9tTGVkZ2VyQmFsLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0Zyb21BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZWNpcGllbnQgd2FsbGV0XHJcbiAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHRvV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFyayB0cmFuc2ZlciBjb21wbGV0ZWRcclxuICAgIGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlci5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyBhcyBhbnksXHJcbiAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICAgICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgICAgZnJvbVVzZXJJZDogZnJvbVVzZXIuaWQsXHJcbiAgICAgICAgICB0b1VzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICAgICAgICBjcmVkaXRMZWRnZXJJZDogY3JlZGl0LmlkLFxyXG4gICAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1hbW91bnQudG9TdHJpbmcoKSxcclxuICAgICAgICBpdGVtSWQ6IGRlYml0LmlkLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUicsXHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICB1c2VySWQ6IGluaXRpYXRvclVzZXJJZCxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogdG9Vc2VyLm5hbWUsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICBpdGVtSWQ6IGNyZWRpdC5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgdXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdjcmVkaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiB0b1VzZXIubmFtZSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUT0RPOiBUaGlzIG5vdCB3b3JraW5nXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICBhY2NvdW50OiBmcm9tV2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICBjdXJyZW5jeSxcclxuICAgICAgZGVzYzogcmVhc29uPy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBiYWxhbmNlOiBuZXdGcm9tQXZhaWxhYmxlLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB0eXBlOiAnRFInLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICBjb3VudHJ5OiBmcm9tVXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBwaG9uZTogZnJvbVVzZXI/LnBob25lISxcclxuICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc3RydWN0dXJlZCByZXN1bHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zZmVyOiB7XHJcbiAgICAgICAgLi4udHJhbnNmZXIsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICAgIGNyZWRpdExlZGdlcklkOiBjcmVkaXQuaWQsXHJcbiAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgIGlkOiB0cmFuc2Zlci5pZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld1RvQXZhaWxhYmxlID0gQmlnSW50KHRvV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KSArIGFtdDtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgIGFjY291bnQ6IHRvV2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICBhbW91bnQ6IGFtdCxcclxuICAgIGRlc2M6IHJlYXNvbj8udG9VcHBlckNhc2UoKSxcclxuICAgIGJhbGFuY2U6IG5ld1RvQXZhaWxhYmxlLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgIGN1cnJlbmN5LFxyXG4gICAgdHlwZTogJ0NSJyxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlci5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgIGNvdW50cnk6IHRvVXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBob25lOiB0b1VzZXI/LnBob25lISxcclxuICAgIHR5cGU6ICdTTVMnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJhbnNmZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGUocGF5bG9hZDoge1xyXG4gIGFjY291bnROdW1iZXI6IHN0cmluZztcclxuICBiYW5rQ29kZTogc3RyaW5nO1xyXG4gIGJhbmtOYW1lOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1c2VySWQ6IHN0cmluZztcclxufSkge1xyXG4gIC8vIENyZWF0ZSB1c2VyIHdhbGxldFxyXG4gIGNvbnN0IHVzZXJXYWxsZXQgPSBhd2FpdCBwcmlzbWEud2FsbGV0LmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFjY291bnROdW1iZXI6IHBheWxvYWQuYWNjb3VudE51bWJlcixcclxuICAgICAgYmFua0NvZGU6IHBheWxvYWQuYmFua0NvZGUsXHJcbiAgICAgIGJhbmtOYW1lOiBwYXlsb2FkLmJhbmtOYW1lLFxyXG4gICAgICB3YWxsZXRJZDogcGF5bG9hZD8uaWQsXHJcbiAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IDAsXHJcbiAgICAgIGxlZGdlckJhbGFuY2U6IDAsXHJcbiAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgIHN0YXR1czogJ0FDVElWRScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcldhbGxldDtcclxufVxyXG4iLCJpbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGhhc2hQaW4sIGhhc2hUb2tlbiwgdmVyaWZ5UGluIH0gZnJvbSAnQC91dGlscy9oYXNoJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7XHJcbiAgQWRkcmVzcyxcclxuICBCYW5rLFxyXG4gIEJWTklucHV0LFxyXG4gIEVtYmVkbHlJbnB1dCxcclxuICBOZXh0T2ZLaW4sXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICdAL3V0aWxzL2dldFVzZXInO1xyXG5pbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBZb3V2ZXJpZnkgfSBmcm9tICdAL2V4dGVuc2lvbnMveW91LXZlcmlmeSc7XHJcbmltcG9ydCB7IHRvSVNPRGF0ZSB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgKiBhcyBXYWxsZXRTZXJ2aWNlIGZyb20gJy4uL3dhbGxldHMvc2VydmljZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlKFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgZGF0YToge1xyXG4gICAgbmV4dE9mS2luPzogTmV4dE9mS2luO1xyXG4gICAgYmFuaz86IEJhbms7XHJcbiAgICBidm4/OiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzPzogQWRkcmVzcztcclxuICAgIGVtYWlsVmVyaWZpZWQ/OiBib29sZWFuO1xyXG4gICAgb2NjdXBhdGlvbj86IHN0cmluZztcclxuICAgIGVkdWNhdGlvbj86IHN0cmluZztcclxuICAgIHJlbGlnaW9uPzogc3RyaW5nO1xyXG4gICAgbWFyaXRhbFN0YXR1cz86IHN0cmluZztcclxuICAgIGVtYWlsPzogc3RyaW5nO1xyXG4gICAgZW1iZWRseUN1c3RvbWVySWQ/OiBzdHJpbmc7XHJcbiAgfSxcclxuKSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgMjAwKTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAvLyBCYXNlIHVwZGF0ZVxyXG4gICAgY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xyXG5cclxuICAgIC8vIFRET0Q6IFJlbW92ZSBwYXNzd29yZCB1cGRhdGUgZnJvbSBoZXJlXHJcbiAgICBpZiAoZGF0YS5lbWFpbCAhPT0gdW5kZWZpbmVkKSByZWNvcmQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEub2NjdXBhdGlvbiAhPT0gdW5kZWZpbmVkKSByZWNvcmQub2NjdXBhdGlvbiA9IGRhdGEub2NjdXBhdGlvbjtcclxuICAgIGlmIChkYXRhLmVkdWNhdGlvbiAhPT0gdW5kZWZpbmVkKSByZWNvcmQuZWR1Y2F0aW9uID0gZGF0YS5lZHVjYXRpb247XHJcbiAgICBpZiAoZGF0YS5yZWxpZ2lvbiAhPT0gdW5kZWZpbmVkKSByZWNvcmQucmVsaWdpb24gPSBkYXRhLnJlbGlnaW9uO1xyXG4gICAgaWYgKGRhdGEuYnZuICE9PSB1bmRlZmluZWQpIHJlY29yZC5idm4gPSBkYXRhLmJ2bjtcclxuICAgIGlmIChkYXRhLmVtYmVkbHlDdXN0b21lcklkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHJlY29yZC5lbWJlZGx5Q3VzdG9tZXJJZCA9IGRhdGEuZW1iZWRseUN1c3RvbWVySWQ7XHJcbiAgICBpZiAoZGF0YS5tYXJpdGFsU3RhdHVzICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHJlY29yZC5tYXJpdGFsU3RhdHVzID0gZGF0YS5tYXJpdGFsU3RhdHVzO1xyXG4gICAgaWYgKGRhdGEuZW1haWxWZXJpZmllZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQuZW1haWxWZXJpZmllZCA9IGRhdGEuZW1haWxWZXJpZmllZDtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4ucmVjb3JkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUsIGFnZW50OiB7IHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0gfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbGF0ZWQgdXBkYXRlc1xyXG4gICAgaWYgKGRhdGE/Lm5leHRPZktpbiAmJiB1c2VyLmFnZW50Py5pZCkge1xyXG4gICAgICBhd2FpdCB0eC5hZ2VudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmFnZW50Py5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5leHRPZktpbjoge1xyXG4gICAgICAgICAgICBjcmVhdGU6IHsgLi4uZGF0YS5uZXh0T2ZLaW4gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGE/LmJhbmspIHtcclxuICAgICAgYXdhaXQgdHguYmFuay5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLmRhdGEuYmFuayxcclxuICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICAgIGFjY291bnROdW1iZXI6IE51bWJlcihkYXRhLmJhbmsuYWNjb3VudE51bWJlciksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGE/LmFkZHJlc3MpIHtcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWRkcmVzczogeyBjcmVhdGU6IHsgLi4uZGF0YS5hZGRyZXNzIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlQlZOKGJ2bjogc3RyaW5nKSB7XHJcbiAgY29uc3QgYnZuSGFzaCA9IGhhc2hUb2tlbihidm4pO1xyXG5cclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBidm46IGJ2bkhhc2ggfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICEhZXhpc3Rpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlQaG9uZShwaG9uZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFwaG9uZSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHBob25lOiBwaG9uZSB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SUQoSUQ6IHN0cmluZykge1xyXG4gIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2VwYXkgSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHVuaXF1ZUlEOiBJRCB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUGFzc3dvcmQoaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGlmIChwYXNzd29yZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXNzd29yZCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXdhaXQgZ2V0VXNlcih1c2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBpZiAoIWRhdGEuZG9jdW1lbnRzLmxlbmd0aClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQXRsZWFzdCBvbmUgb2N1bWVudCByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcklkOiBpZCxcclxuICAgICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgY3JlYXRlOiBkYXRhLmRvY3VtZW50cy5tYXAoKGRvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgdHlwZTogZG9jLnR5cGUsXHJcbiAgICAgICAgICBmaWxlVXJsOiBkb2MuZmlsZVVybCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBkb2N1bWVudHM6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZlcmlmaWNhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBpbihpZDogc3RyaW5nLCBwYXlsb2FkOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBjb25zdCBoYXNoZWRQaW4gPSBhd2FpdCBoYXNoUGluKHBheWxvYWQucGluKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwaW46IGhhc2hlZFBpbixcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKHVzZXIuZW1iZWRseUN1c3RvbWVySWQpIHJldHVybiB1c2VyO1xyXG5cclxuICAvLyBUcmlnZ2VyIHdhbGxldCBjcmVhdGlvblxyXG4gIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhZ2dyZWdhdGVJZDogdXNlci5pZCxcclxuICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmluaXRpYXRlZCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc3RyZWV0TGluZTogdXNlcj8uYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgICBjaXR5OiB1c2VyLmFkZHJlc3M/LmNpdHksXHJcbiAgICAgICAgY291bnRyeTogdXNlci5hZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAgIGRvYjogdXNlci5kb2IsXHJcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIGJ2bjogdXNlci5idm4sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodXNlci5pZCwgJ0NSRUFURVdBTExFVCcpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVVzZXJQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgcGF5bG9hZDogeyBwaW46IHN0cmluZyB9LFxyXG4pIHtcclxuICByZXR1cm4gYXdhaXQgdmVyaWZ5UGluKGhhc2hlZFBpbiwgcGF5bG9hZC5waW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1iZWRseVVzZXIodXNlcklkOiBzdHJpbmcsIGRhdGE6IEVtYmVkbHlJbnB1dCkge1xyXG4gIGxldCBlbWJlZGx5ID0geyBpZDogZGF0YT8uZW1iZWRseT8uaWQgfTtcclxuXHJcbiAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICBlbWJlZGx5ID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMucGVyc29uYWwoe1xyXG4gICAgICBhZGRyZXNzOiBkYXRhPy5lbWJlZGx5Py5hZGRyZXNzLFxyXG4gICAgICBjaXR5OiBkYXRhPy5lbWJlZGx5Py5jaXR5LFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5lbWJlZGx5Py5jb3VudHJ5LFxyXG4gICAgICBkb2I6IGRhdGE/LmVtYmVkbHk/LmRvYixcclxuICAgICAgZmlyc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgbW9iaWxlTnVtYmVyOiBkYXRhPy5lbWJlZGx5Py5waG9uZSxcclxuICAgICAgbWlkZGxlTmFtZTogZGF0YT8uZW1iZWRseT8ubWlkZGxlTmFtZSA/PyBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgZW1haWxBZGRyZXNzOiBkYXRhLmVtYWlsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uY3VzdG9tZXIuZmFpbGVkJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICAgIGVycm9yOiAnRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgICAgICBlbWJlZGx5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHVwZGF0ZSh1c2VySWQsIHtcclxuICAgICAgZW1iZWRseUN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZlcmlmaWVkID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMudmVyaWZ5S1lDKHtcclxuICAgIGJ2bjogZGF0YS5idm4sXHJcbiAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWVkKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmt5Yy5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICBlcnJvcjogJ0VtYmVkbHkgS1lDIGNvdWxkIG5vdCBiZSB2ZXJpZmllZCcsXHJcbiAgICAgICAgICB2ZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWJlZGx5IEtZQyBjb3VsZCBub3QgYmUgdmVyaWZpZWQnLCA1MDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLmNyZWF0ZSh7XHJcbiAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICBjdXJyZW5jeTogZGF0YT8uZXh0cmE/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgbmFtZTogYFdlUGF5LSR7dXNlcklkfWAsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLndhbGxldC5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgd2FsbGV0OiByZXN1bHQsXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgZXJyb3I6ICdXYWxsZXQgY291bGQgbm90IGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkJywgNTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IFdhbGxldFNlcnZpY2UuY3JlYXRlKHtcclxuICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgYWNjb3VudE51bWJlcjogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5hY2NvdW50TnVtYmVyLFxyXG4gICAgYmFua05hbWU6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYmFua05hbWUsXHJcbiAgICBiYW5rQ29kZTogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5iYW5rQ29kZSxcclxuICAgIGlkOiByZXN1bHQ/LmlkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBidm5IYXNoID0gaGFzaFRva2VuKGRhdGE/LmJ2bik7XHJcbiAgYXdhaXQgdXBkYXRlKHVzZXJJZCwge1xyXG4gICAgYnZuOiBidm5IYXNoLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gd2FsbGV0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QlZORGF0YSh2YWx1ZTogQlZOSW5wdXQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgWW91dmVyaWZ5LnZlcmlmeUJWTih7XHJcbiAgICBpZDogdmFsdWUuYnZuLFxyXG4gICAgaXNTdWJqZWN0Q29uc2VudDogdHJ1ZSxcclxuICAgIHByZW1pdW1CVk46IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi52YWx1ZSxcclxuICAgIGV4dHJhOiB7XHJcbiAgICAgIG5hbWU6IGRhdGE/LmZpcnN0TmFtZSArICcgJyArIGRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICBkb2I6IHRvSVNPRGF0ZShkYXRhPy5kYXRlT2ZCaXJ0aCksXHJcbiAgICAgIGNvdW50cnk6IGRhdGE/LmNvdW50cnksXHJcbiAgICAgIGdlbmRlcjogZGF0YT8uZ2VuZGVyLFxyXG4gICAgICBwaG9uZTogZGF0YT8ubW9iaWxlLFxyXG4gICAgfSxcclxuICAgIGVtYmVkbHk6IHtcclxuICAgICAgZG9iOiB0b0lTT0RhdGUoZGF0YT8uZGF0ZU9mQmlydGgpLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5jb3VudHJ5LFxyXG4gICAgICBnZW5kZXI6IGRhdGE/LmdlbmRlcixcclxuICAgICAgcGhvbmU6IGRhdGE/Lm1vYmlsZSxcclxuICAgICAgYWRkcmVzczogZGF0YT8uYWRkcmVzcz8uYWRkcmVzc0xpbmUsXHJcbiAgICAgIGNpdHk6IGRhdGE/LmFkZHJlc3M/LnRvd24sXHJcbiAgICAgIGZpcnN0TmFtZTogZGF0YT8uZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogZGF0YT8ubGFzdE5hbWUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IGRhdGE/Lm1pZGRsZU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYXB0dXJlRmluZ2VyUHJpbnQoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBwYXlsb2FkOiB7IGZpbmdlclByaW50OiBzdHJpbmcgfSxcclxuKSB7XHJcbiAgLy8gT3B0aW9uYWxseSwgaGFzaCB0aGUgZmluZ2VycHJpbnQgYmVmb3JlIHNhdmluZyBmb3Igc2VjdXJpdHlcclxuICAvLyBjb25zdCBoYXNoZWRGaW5nZXJQcmludCA9IGF3YWl0IGhhc2hQaW4ocGF5bG9hZC5maW5nZXJQcmludCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgZmluZ2VyUHJpbnQ6IHBheWxvYWQuZmluZ2VyUHJpbnQsXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlZ2lzdGVyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJ2bjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDExKVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgcm9sZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC52YWxpZCgnVVNFUicsICdBR0VOVCcsICdBRE1JTicsICdJTlNUSVRVVElPTicsICdNRVJDSEFOVCcpXHJcbiAgICAgIC5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVWZXJpZnlET0IoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZG9iOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvKVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICAgIGJ2bjogSm9pLnN0cmluZygpLm1pbigxMSkubWF4KDExKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICB0eXBlOiBKb2kuc3RyaW5nKCkudmFsaWQoJ1BIT05FJywgJ0VNQUlMJykuZGVmYXVsdCgnRU1BSUwnKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRm9yZ290UGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB9KS5vcigncGhvbmUnLCAnZW1haWwnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlTG9naW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUxvZ2luV2l0aEZpbmdlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBmaW5nZXJQcmludDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgdG9rZW46IEpvaS5zdHJpbmcoKS5taW4oNikubWF4KDYpLnJlcXVpcmVkKCksXHJcbiAgICBuZXdQYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVSZXNldFBpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCksXHJcbiAgICBvdHA6IEpvaS5zdHJpbmcoKS5taW4oNikubWF4KDYpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVcGRhdGVQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZvcmdvdFBhc3N3b3JkKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmVyaWZ5QlZOKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJ2bjogSm9pLnN0cmluZygpLm1pbigxMSkubWF4KDExKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIGF1dGhTZXJ2aWNlIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlRm9yZ290UGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVGb3Jnb3RQaW4sXHJcbiAgVmFsaWRhdGVMb2dpbixcclxuICBWYWxpZGF0ZUxvZ2luV2l0aEZpbmdlcixcclxuICBWYWxpZGF0ZU9UUCxcclxuICBWYWxpZGF0ZVJlZ2lzdGVyLFxyXG4gIFZhbGlkYXRlUmVzZXRQYXNzd29yZCxcclxuICBWYWxpZGF0ZVJlc2V0UGluLFxyXG4gIFZhbGlkYXRlVXBkYXRlUGluLFxyXG4gIFZhbGlkYXRlVmVyaWZ5RE9CLFxyXG4gIFZlcmlmeUJWTixcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgaXNEZXYsIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICdAL3V0aWxzL2dldFVzZXInO1xyXG5pbXBvcnQgQm90dGxlbmVjayBmcm9tICdib3R0bGVuZWNrJztcclxuaW1wb3J0IHsgc2lnbkFjY2Vzc1Rva2VuIH0gZnJvbSAnQC91dGlscy9qd3QnO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyByZWdpc3RlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlZ2lzdGVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBleGlzdCA9IGF3YWl0IHVzZXJTZXJ2aWNlLnZhbGlkYXRlQlZOKHZhbHVlLmJ2bik7XHJcbiAgICAgIGlmIChleGlzdCkgdGhyb3cgbmV3IEVycm9yKCdCVk4gYWxyZWFkeSBpbiB1c2UnKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCVk5EYXRhKHZhbHVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoU2VydmljZS5yZWdpc3RlcihwYXlsb2FkIGFzIGFueSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdGF0dXM6IDIwMSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgcGhvbmVgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ1Bob25lIG51bWJlciBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgZW1haWxgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEJWTkRldGFpbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmVyaWZ5QlZOKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCVk4gZGV0YWlscyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgbG9naW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVMb2dpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5sb2dpbih2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgaWQ6IGRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgbG9naW5XaXRoRmluZ2VyUHJpbnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVMb2dpbldpdGhGaW5nZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW5XaXRoRmluZ2VyKHZhbHVlKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBzaWduQWNjZXNzVG9rZW4oeyBpZDogZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBmb3Jnb3RQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZvcmdvdFBhc3N3b3JkKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ09UUCBzZW50IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb2RlU2VudDogZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZm9yZ290UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRm9yZ290UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmZvcmdvdFBpbih2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkNvdWxkbid0IHNlbnQgT1RQXCIsIDUwMCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgc2VudCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29kZVNlbnQ6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyByZXNldFBhc3N3b3JkKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVzZXRQYXNzd29yZCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBhc3N3b3JkKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5RE9CKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZ5RE9CKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJWTkRhdGEoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIHJvbGU6ICdVU0VSJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkNvdWxkbid0IHZlcmlmeSBCVk5cIiwgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IGRvYiA9IGRhdGE/LmV4dHJhPy5kb2I7XHJcbiAgICAgIGNvbnN0IGlzVmVyaWZpZWQgPSBkb2IgPT09IHZhbHVlLmRvYjtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0JpcnRoZGF5IHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgcmVzZXRQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICAvLyBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlc2V0UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiwgb3RwIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIDHvuI/ig6MgRW5zdXJlIE9UUCB3YXMgcHJvdmlkZWRcclxuICAgICAgaWYgKCFvdHApIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ09UUCBpcyByZXF1aXJlZCB0byByZXNldCBQSU4nLCA0MjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAy77iP4oOjIFZhbGlkYXRlIE9UUFxyXG4gICAgICBjb25zdCByZWNvcmQ6IGFueSA9IHt9O1xyXG4gICAgICBpZiAoIWlzRGV2KCkgJiYgb3RwICE9PSAnMjIyMjIyJykgcmVjb3JkLnJlZnJlc2hDb2RlID0gb3RwO1xyXG5cclxuICAgICAgY29uc3Qgb3RwUmVjb3JkID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiBvdHAsIC4uLnJlY29yZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghb3RwUmVjb3JkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIG9yIGV4cGlyZWQgT1RQJywgNDIyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcjogYW55ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogb3RwUmVjb3JkLnVzZXJJZCB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gM++4j+KDoyBSZXNldCBQSU5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2V0UGluKHVzZXIsIHsgcGluIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUElOIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVXBkYXRlUGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiB9ID0gdmFsdWU7XHJcblxyXG4gICAgICAvLyAz77iP4oOjIFJlc2V0IFBJTlxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVzZXRQaW4odXNlciwgeyBwaW4gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdQSU4gdXBkYXRlZGQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNvZGUsIGRvYiB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIGlmICghY29kZSAmJiAhZG9iKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAgICAgJ0VpdGhlciBPVFAgY29kZSBvciBkYXRlIG9mIGJpcnRoIGlzIHJlcXVpcmVkJyxcclxuICAgICAgICAgIDQyMixcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTsgLy8gdHJhY2sgaWYgdXNlciBwYXNzZWQgdmVyaWZpY2F0aW9uXHJcblxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgLy8gMe+4j+KDoyBPVFAgVkVSSUZJQ0FUSU9OIChpZiBjb2RlIHByb3ZpZGVkKVxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgaWYgKGNvZGUpIHtcclxuICAgICAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gICAgICAgIGlmICghaXNEZXYoKSAmJiBjb2RlICE9PSAnMjIyMjIyJykge1xyXG4gICAgICAgICAgcmVjb3JkLnJlZnJlc2hDb2RlID0gY29kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogaWQsIC4uLnJlY29yZCB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAgIC8vIE9UUCBtYXRjaGVkIOKGkiBkZWxldGUgYWxsIE9UUHNcclxuICAgICAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgICAgICBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyB1c2VySWQ6IGlkIH0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAvLyAy77iP4oOjIERPQiBWRVJJRklDQVRJT04gKGlmIG5vIE9UUCBvciBmYWxsYmFjaylcclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIGlmICghdmVyaWZpZWQpIHtcclxuICAgICAgICBjb25zdCB1c2VyUmVjb3JkID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyUmVjb3JkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyUmVjb3JkLmRvYilcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgICAgICAgJ1VzZXIgZG9lcyBub3QgaGF2ZSBhIHJlZ2lzdGVyZWQgZGF0ZSBvZiBiaXJ0aCcsXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBib3RoIGRhdGVzIHRvIFlZWVktTU0tRERcclxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKHY6IHN0cmluZyB8IERhdGUpID0+XHJcbiAgICAgICAgICBuZXcgRGF0ZSh2KS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IGRiRG9iID0gZm9ybWF0RGF0ZSh1c2VyUmVjb3JkLmRvYik7XHJcbiAgICAgICAgY29uc3QgaW5wdXREb2IgPSBmb3JtYXREYXRlKGRvYik7XHJcblxyXG4gICAgICAgIGlmIChkYkRvYiAhPT0gaW5wdXREb2IpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRGF0ZSBvZiBiaXJ0aCBkb2VzIG5vdCBtYXRjaCcsIDQyMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNob3VsZCBuZXZlciBmYWlsIGhlcmUsIGJ1dCBzYWZldHkgY2hlY2tcclxuICAgICAgaWYgKCF2ZXJpZmllZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignVmVyaWZpY2F0aW9uIGZhaWxlZCcsIDUwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAvLyAz77iP4oOjIE1hcmsgdXNlciBhcyB2ZXJpZmllZFxyXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHsgZW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXBkYXRlZFVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHNlbmRPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVPVFAoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2VuZE9UUChpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIFNlbnQgU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL21vZHVsZXMvYXV0aC9hdXRoLnJvdXRlcy50c1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCBBdXRoQ29udHJvbGxlci5yZWdpc3Rlcik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBBdXRoQ29udHJvbGxlci5sb2dpbik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4vZmluZ2VycHJpbnQnLCBBdXRoQ29udHJvbGxlci5sb2dpbldpdGhGaW5nZXJQcmludCk7XHJcbnJvdXRlci5wb3N0KCcvcGFzc3dvcmQvZm9yZ290JywgQXV0aENvbnRyb2xsZXIuZm9yZ290UGFzc3dvcmQpO1xyXG5yb3V0ZXIucG9zdCgnL3Bhc3N3b3JkL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQYXNzd29yZCk7XHJcbnJvdXRlci5wdXQoJy86aWQvdmVyaWZ5JywgQXV0aENvbnRyb2xsZXIudmVyaWZ5T1RQKTtcclxucm91dGVyLnBhdGNoKCcvOmlkL3ZlcmlmeScsIEF1dGhDb250cm9sbGVyLnZlcmlmeU9UUCk7XHJcbnJvdXRlci5wb3N0KCcvOmlkL290cCcsIEF1dGhDb250cm9sbGVyLnNlbmRPVFApO1xyXG5yb3V0ZXIucG9zdCgnL3Bpbi9mb3Jnb3QnLCBBdXRoQ29udHJvbGxlci5mb3Jnb3RQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3VwZGF0ZScsIEF1dGhDb250cm9sbGVyLnVwZGF0ZVBpbik7XHJcbnJvdXRlci5nZXQoJy9idm4nLCBBdXRoQ29udHJvbGxlci5nZXRCVk5EZXRhaWxzKTtcclxuLy8gRm9yZ2V0IFBpblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoNCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVVuaXF1ZUlEKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGlkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGhvbmUoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15bMC05XXsxMCwxNX0kLylcclxuICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVcGRhdGVVc2VyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgb2NjdXBhdGlvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlZHVjYXRpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgcmVsaWdpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgbWFyaXRhbFN0YXR1czogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBhZGRyZXNzOiBKb2kub2JqZWN0KHtcclxuICAgICAgY291bnRyeTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0YXRlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgY2l0eTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0cmVldExpbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBvZmZpY2VfYWRkcmVzczogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGxhbmRtYXJrOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pLnJlcXVpcmVkKCksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICAgIG5leHRPZktpbjogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBwaG9uZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHJlbGF0aW9uc2hpcDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICB9KS5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVCVk4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYm52OiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoMTEpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY29kZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDYpXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVWZXJpZmljYXRpb24oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZG9jdW1lbnRzOiBKb2kuYXJyYXkoKS5pdGVtcyhcclxuICAgICAgSm9pLm9iamVjdCh7XHJcbiAgICAgICAgdHlwZTogSm9pLnN0cmluZygpXHJcbiAgICAgICAgICAudmFsaWQoXHJcbiAgICAgICAgICAgICdQQVNTUE9SVCcsXHJcbiAgICAgICAgICAgICdOQVRJT05BTF9JRCcsXHJcbiAgICAgICAgICAgICdEUklWRVJfTElDRU5TRScsXHJcbiAgICAgICAgICAgICdVVElMSVRZX0JJTEwnLFxyXG4gICAgICAgICAgICAnVk9URVJfQ0FSRCcsXHJcbiAgICAgICAgICAgICdDQUMnLFxyXG4gICAgICAgICAgICAnTUVNQVJUJyxcclxuICAgICAgICAgICAgJ0lERlJPTlQnLFxyXG4gICAgICAgICAgICAnSURCQUNLJyxcclxuICAgICAgICAgICAgJ0FVVEhPUklUWV9MRVRURVInLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZmlsZVVybDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIH0pLFxyXG4gICAgKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRmluZ2VyUHJpbnQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZmluZ2VyUHJpbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHVzZXJTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVTZXRDcmVkZW50aWFsLFxyXG4gIFZhbGlkYXRlVXBkYXRlVXNlcixcclxuICBWYWxpZGF0ZVZlcmlmaWNhdGlvbixcclxuICBWYWxpZGF0ZVBpbixcclxuICBWYWxpZGF0ZU9UUCxcclxuICBWYWxpZGF0ZUZpbmdlclByaW50LFxyXG4gIFZhbGlkYXRlVW5pcXVlSUQsXHJcbiAgVmFsaWRhdGVQaG9uZSxcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgdG9JU09EYXRlLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IEJvdHRsZW5lY2sgZnJvbSAnYm90dGxlbmVjayc7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgc2V0Q3JlZGVudGlhbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaWQgPSByZXE/LnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJRCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWRlbnRpYWwgc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlVXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJyk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVcGRhdGVVc2VyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgLy8gaWYgKHZhbHVlPy5lbWFpbCAmJiAhdXNlci5lbWJlZGx5Q3VzdG9tZXJJZCkge1xyXG4gICAgICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIC8vICAgICBhZGRyZXNzOiB1c2VyPy5hZGRyZXNzPy5zdHJlZXRMaW5lLFxyXG4gICAgICAvLyAgICAgY2l0eTogdXNlcj8uYWRkcmVzcz8uY2l0eSxcclxuICAgICAgLy8gICAgIGNvdW50cnk6IHVzZXI/LmFkZHJlc3M/LmNvdW50cnksXHJcbiAgICAgIC8vICAgICBkb2I6IHRvSVNPRGF0ZSh1c2VyPy5kb2IhKSxcclxuICAgICAgLy8gICAgIGZpcnN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgLy8gICAgIGxhc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICAvLyAgICAgcGhvbmU6IHVzZXI/LnBob25lLFxyXG4gICAgICAvLyAgICAgbWlkZGxlTmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKT8uWzJdID8/ICcnLFxyXG4gICAgICAvLyAgIH07XHJcblxyXG4gICAgICAvLyAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhIFF1ZXVlXHJcbiAgICAgIC8vICAgYXdhaXQgdXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIodXNlci5pZCwge1xyXG4gICAgICAvLyAgICAgZW1iZWRseTogZGF0YSxcclxuICAgICAgLy8gICAgIGVtYWlsOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgLy8gICAgIGJ2bjogdXNlcj8uYnZuPy50cmltKCkhLFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG5cclxuICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnKGBlbWFpbGApJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgYWxyZWFkeSBleGlzdCcgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlQaG9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBob25lKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeVBob25lKHZhbHVlLnBob25lKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlVbmlxdWVJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVVuaXF1ZUlEKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEKHZhbHVlLmlkKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogSUQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZVBpbihJRCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBwaW4gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVwZGF0ZWRVc2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ3VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgdXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbih1c2VyLnBpbiEsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcGluIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhZGRQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKElELCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGlkID0gcmVxPy5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgdXNlclNlcnZpY2UuYWRkVmVyaWZpY2F0aW9uKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBZ2VudCB2ZXJpZmljYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHZlcmlmaWNhdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeU9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlT1RQKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IHZhbHVlLmNvZGUsIHVzZXJJZDogaWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBEZWxldGUgYWxsIHVzZXIgT1RQXHJcbiAgICAgIC8vIFRPRE86IHNlbmQgdG8gYmFja2dyb3VuZFxyXG4gICAgICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdmVyaWZpY2F0aW9uLnVzZXJJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHsgZW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbXNnOiAnVmVyaWZ5IFN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjdXJyZW50VXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDMpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtc2c6ICdMb2dnZWQgaW4gU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNhcHR1cmVGaW5nZXJQcmludChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRmluZ2VyUHJpbnQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IElEIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jYXB0dXJlRmluZ2VyUHJpbnQoSUQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgZmluZ2VyIFByaW50IGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1cGRhdGVkVXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5cclxuLy8gaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHZlcmlmeUFjY2Vzc1Rva2VuIH0gZnJvbSAnQC91dGlscy9qd3QnO1xyXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKiogYXV0aCBtaWRkbGV3YXJlICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEF1dGgoXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy8gYWNjZXNzIGF1dGhvcml6ZSBoZWFkZXIgdG8gdmFsaWRhdGUgcmVxdWVzdFxyXG4gICAgY29uc3QgdG9rZW4gPSByZXE/LmhlYWRlcnM/LmF1dGhvcml6YXRpb24/LnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICAvLyByZXRyaWV2aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gdmVyaWZ5QWNjZXNzVG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGlmICghZGVjb2RlZFRva2VuPy5pZClcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHRva2VuIScgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGRlY29kZWRUb2tlbj8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSwgd2FsbGV0czogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICByZXEudXNlciA9IHVzZXI7XHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMSlcclxuICAgICAgLmpzb24oeyBlcnJvcjogZXJyb3I/Lm1lc3NhZ2UgPz8gJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoIGZyb20gJ0AvbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL21lJywgQXV0aCwgQ29udHJvbGxlci5jdXJyZW50VXNlcik7XHJcbnJvdXRlci5wdXQoJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucHV0KCcvOmlkL2NyZWRlbnRpYWxzJywgQ29udHJvbGxlci5zZXRDcmVkZW50aWFscyk7XHJcbnJvdXRlci5wYXRjaCgnLzppZC9jcmVkZW50aWFscycsIENvbnRyb2xsZXIuc2V0Q3JlZGVudGlhbHMpO1xyXG5yb3V0ZXIucG9zdCgnLzppZC92ZXJpZmljYXRpb24nLCBDb250cm9sbGVyLmFkZFZlcmlmaWNhdGlvbik7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3BpbicsIENvbnRyb2xsZXIuY3JlYXRlUGluKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZ5JywgQXV0aCwgQ29udHJvbGxlci52ZXJpZnlQaW4pO1xyXG5yb3V0ZXIucG9zdCgnLzppZC9maW5nZXJwcmludCcsIENvbnRyb2xsZXIuY2FwdHVyZUZpbmdlclByaW50KTtcclxucm91dGVyLnBvc3QoJy9waG9uZScsIENvbnRyb2xsZXIudmVyaWZ5VXNlckJ5UGhvbmUpO1xyXG5yb3V0ZXIucG9zdCgnL2lkJywgQ29udHJvbGxlci52ZXJpZnlVc2VyQnlVbmlxdWVJZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEJ1c2luZXNzIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzcyhpZDogc3RyaW5nLCBwYXlsb2FkOiBCdXNpbmVzcykge1xyXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gIGlmIChwYXlsb2FkLmFkZHJlc3MpIHtcclxuICAgIGNvbnN0IGEgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZC5hZGRyZXNzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGF0YS5hZGRyZXNzSWQgPSBhLmlkO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBheWxvYWQuYmFuaykge1xyXG4gICAgZGF0YS5iYW5rcyA9IHtcclxuICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IHBheWxvYWQ/LmJhbms/LmFjY291bnROYW1lISxcclxuICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIocGF5bG9hZD8uYmFuaz8uYWNjb3VudE51bWJlciEpLFxyXG4gICAgICAgIG5hbWU6IHBheWxvYWQ/LmJhbms/Lm5hbWUhLFxyXG4gICAgICAgIHR5cGU6IHBheWxvYWQ/LmJhbms/LnR5cGUhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5LFxyXG4gICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgIGNvbnRhY3RFbWFpbDogcGF5bG9hZC5jb250YWN0RW1haWwsXHJcbiAgICAgIGNvbnRhY3RQaG9uZTogcGF5bG9hZC5jb250YWN0UGhvbmUsXHJcbiAgICAgIG1lcmNoYW50SWQ6IGlkLFxyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGJ1c2luZXNzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVmVyaWZpY2F0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGlmICghZGF0YS5kb2N1bWVudHMubGVuZ3RoKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBdCBsZWFzdCBvbmUgZG9jdW1lbnQgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAvLyAgIENoZWNrIGZvciBidXNpbmVzc1xyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KTtcclxuICBpZiAoIWJ1c2luZXNzKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0J1c2luZXNzIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYnVzaW5lc3NJZDogaWQsXHJcbiAgICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZTogZGF0YS5kb2N1bWVudHMubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGRvYy50eXBlLFxyXG4gICAgICAgICAgZmlsZVVybDogZG9jLmZpbGVVcmwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZG9jdW1lbnRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2ZXJpZmljYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQnVzaW5lc3MoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY2F0ZWdvcnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBjb250YWN0RW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgY29udGFjdFBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHN0YXJ0ZWRBdDogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgYWRkcmVzczogSm9pLm9iamVjdCh7XHJcbiAgICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBjaXR5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgc3RhdGU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBzdHJlZXRMaW5lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgbGFuZG1hcms6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgfSksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvY3VtZW50czogSm9pLmFycmF5KCkuaXRlbXMoXHJcbiAgICAgIEpvaS5vYmplY3Qoe1xyXG4gICAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgLnZhbGlkKFxyXG4gICAgICAgICAgICAnUEFTU1BPUlQnLFxyXG4gICAgICAgICAgICAnTkFUSU9OQUxfSUQnLFxyXG4gICAgICAgICAgICAnRFJJVkVSX0xJQ0VOU0UnLFxyXG4gICAgICAgICAgICAnVVRJTElUWV9CSUxMJyxcclxuICAgICAgICAgICAgJ1ZPVEVSX0NBUkQnLFxyXG4gICAgICAgICAgICAnQ0FDJyxcclxuICAgICAgICAgICAgJ01FTUFSVCcsXHJcbiAgICAgICAgICAgICdJREZST05UJyxcclxuICAgICAgICAgICAgJ0lEQkFDSycsXHJcbiAgICAgICAgICAgICdBVVRIT1JJVFlfTEVUVEVSJyxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGZpbGVVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB9KSxcclxuICAgICksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBNZXJjaGFudCBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZUJ1c2luZXNzLCBWYWxpZGF0ZVZlcmlmaWNhdGlvbiB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgYWRkQnVzaW5lc3MocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcT8ucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQnVzaW5lc3MoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgTWVyY2hhbnQuY3JlYXRlQnVzaW5lc3MoaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0J1c2luZXNzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGJ1c2luZXNzLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IE1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbihpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB2ZXJpZmljYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy86aWQvYnVzaW5lc3MnLCBDb250cm9sbGVyLmFkZEJ1c2luZXNzKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZpY2F0aW9uJywgQ29udHJvbGxlci5hZGRWZXJpZmljYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgZm9ybWF0VHJhbnNmZXJTTVMsIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmNvbnN0IFRYTkZFRSA9IHByb2Nlc3MuZW52LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF5b3V0KHBheWxvYWQ6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocGF5bG9hZD8uc3RhdHVzPy50b0xvd2VyQ2FzZSgpICE9PSAnc3VjY2VzcycpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXJyb3IgZnJvbSBFbWJlZGx5JywgNTAwKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRyYW5zZmVyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICBpZiAoWydDT01QTEVURUQnLCAnUkVWRVJTRUQnXS5pbmNsdWRlcyh0cmFuc2Zlci5zdGF0dXMpKSByZXR1cm4gdHJhbnNmZXI7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB0cmFuc2Zlci5tZXRhZGF0YSBhcyB7IHByb3ZpZGVJZD86IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgeW91IGNhbiB1c2UgZGVjcmVtZW50IGluIHVwZGF0ZVdhbGxldCBpbnN0ZWFkIG9mIHF1ZXJpbmcgaGVyZVxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXIuZnJvbVdhbGxldElkISB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiBtZXRhZGF0YT8ucHJvdmlkZUlkLFxyXG4gICAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0Ftb3VudEluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTsgLy9Db252ZXJ0ZWQgdG8gS29ib1xyXG4gICAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gbmV3QW1vdW50SW5Lb2JvO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETzo6IE5PVElGWSBVU0VSXHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICAgIGFjY291bnQ6IHVwZGF0ZWRXYWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICBhbW91bnQ6IG5ld0Ftb3VudEluS29ibyxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBUUkFOU0ZFUiBUTyAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICBiYWxhbmNlOiB1cGRhdGVkV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICBjb3VudHJ5OiB3YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB3YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBGRUUgSGVyZVxyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzLi4gSXQgbWF5IHNob3cgaW5jb3JyZWN0IGJhbGFuY2UgaW4gU01TIChCZWNhdXNlIHRoZSBiYWxhbmNlIHdhcyBiaWxsZWQgYmVmb3JlKVxyXG4gICAgICBjb25zdCBuZXdCYWxBZnRlckZlZSA9IEJpZ0ludCh1cGRhdGVkV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBjb25zdCBuZXdMZWRnZUJhbEFmdGVyRmVlID1cclxuICAgICAgICBCaWdJbnQodXBkYXRlZFdhbGxldD8ubGVkZ2VyQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdMZWRnZUJhbEFmdGVyRmVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZmVlID0gYXdhaXQgdHguZmVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGZlZS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGZlZU1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdXBkYXRlZFdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogZmVlUmF0ZSxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBDb21taXNzaW9uIG9uIE5JUCBUcmFuc2ZlcmAsXHJcbiAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgY291bnRyeTogd2FsbGV0Py51c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgICAgbWVzc2FnZTogZmVlTWVzc2FnZSxcclxuICAgICAgICBwaG9uZTogd2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWRUcmFuc2ZlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlclJlY29yZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2U7XHJcblxyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIG1lc3NhZ2UgPSBlPy5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyaXRlIFJldmVyc2UgbG9naWNcclxuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdFcnJvciBmcm9tIEVtYmVkbHknKSkge1xyXG4gICAgICBjb25zdCBuZXdBbW91bnRJbktvYm8gPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0ZlZUluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcblxyXG4gICAgICBjb25zdCB0cnggPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmRlYml0QWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiB7IGluY3JlbWVudDogbmV3QW1vdW50SW5Lb2JvICsgbmV3RmVlSW5Lb2JvIH0sXHJcbiAgICAgICAgICAgIGxlZGdlckJhbGFuY2U6IHsgaW5jcmVtZW50OiBuZXdBbW91bnRJbktvYm8gKyBuZXdGZWVJbktvYm8gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlcj8uaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnUkVWRVJTRUQnIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdSRVZFUlNFRCcsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkucmV2ZXJzZWQnLFxyXG4gICAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcixcclxuICAgICAgICAgIHdhbGxldCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE5vdGlmeSB1c2VyIG9mIHJldmVyc2FsXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdHJ4LndhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogbmV3QW1vdW50SW5Lb2JvLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgICAgZGVzYzogYFJFVkVSU0VEOiAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cngudHJhbnNmZXI/LmN1cnJlbmN5ISxcclxuICAgICAgICBiYWxhbmNlOiB0cngud2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyeC50cmFuc2Zlcj8uaWQhLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgIGNvdW50cnk6IHRyeC53YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB0cngud2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YTogeyBlcnJvcjogbWVzc2FnZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbG93KHBheWxvYWQ6IGFueSkge1xyXG4gIC8vIEluY2FzZSBvZiBkb3VibGUgd2ViaG9va1xyXG4gIGNvbnN0IF90cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChfdHJhbnNmZXIpIHJldHVybiBfdHJhbnNmZXI7XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmFjY291bnROdW1iZXIgfSxcclxuICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBwcmlzbWEucHJvdmlkZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5OiBwYXlsb2FkPy5yZWZlcmVuY2UsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQ/LnJlZmVyZW5jZSxcclxuICAgICAgICByZWFzb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IGZhbHNlLFxyXG4gICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgdHlwZTogJ0lORkxPVycsXHJcbiAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgSm91cm5hbEVudHJ5XHJcbiAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogd2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgIEJpZ0ludCh3YWxsZXQubGVkZ2VyQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9XHJcbiAgICAgIEJpZ0ludCh3YWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB3YWxsZXRJZDogd2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICByZWFzb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlcj8uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogd2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICBpdGVtSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHR5cGU6ICdERVBPU0lUJyxcclxuICAgICAgICB1c2VySWQ6IHdhbGxldD8udXNlcj8uaWQhLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICB0eXBlOiAnY3JlZGl0JyxcclxuICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHJlZmVyZW5jZTogcGF5bG9hZD8ucmVmZXJlbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmFuc2ZlcjtcclxuICB9KTtcclxuXHJcbiAgLy9UT0RPOiBUcmlnZ2VyIE5vdGlmaWNhdGlvbnNcclxuICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9XHJcbiAgICBCaWdJbnQod2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG5cclxuICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgYWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgIHR5cGU6ICdDUicsXHJcbiAgICBkZXNjOiBgVFJBTlNGRVIgRlJPTSAke3BheWxvYWQ/LnNlbmRlck5hbWV9IC0gJHtwYXlsb2FkPy5kZXNjcmlwdGlvbn1gLnRvVXBwZXJDYXNlKCksXHJcbiAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICBiYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXI/LmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgY291bnRyeTogd2FsbGV0LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogd2FsbGV0LnVzZXI/LnBob25lISxcclxuICAgIHR5cGU6ICdTTVMnLFxyXG4gIH0pO1xyXG5cclxuICAvLyBNb3ZlIG1vbmV5IGZyb20gdXNlciB3YWxsZXQgdG8gb3JnYW5pemF0aW9uIHdhbGxldFxyXG5cclxuICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgY29uc3QgcmVmID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLm9yZ2FuaXphdGlvbi5pbml0aWF0ZWQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZnJvbUFjY291bnQ6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIHRvQWNjb3VudDogZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50LFxyXG4gICAgICAgIHJlbWFya3M6ICdUcmFuc2ZlciBmcm9tIHVzZXIgd2FsbGV0IHRvIG9yZ2FuaXphdGlvbiB3YWxsZXQnLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiByZWYsXHJcbiAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBSZW1vdmUgZGF0YSBvYmplY3QgZnJvbSB0aGlzIFF1ZXVlXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlci5pZCwgJ0lOVEVSTkFMX1RSQU5TRkVSJywge1xyXG4gICAgZnJvbUFjY291bnQ6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQsXHJcbiAgICByZW1hcmtzOiAnVHJhbnNmZXIgZnJvbSB1c2VyIHdhbGxldCB0byBvcmdhbml6YXRpb24gd2FsbGV0JyxcclxuICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiByZWYsXHJcbiAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJhbnNmZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyB3ZWJob29rU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVUcmFuc2ZlcnMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSByZXEuaGVhZGVyc1sneC1lbWJlZGx5LXNpZ25hdHVyZSddO1xyXG4gICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IHJhd0JvZHkgPSBib2R5Py50b1N0cmluZygndXRmOCcpO1xyXG5cclxuICAgICAgaWYgKCFzaWduYXR1cmUgfHwgIXJhd0JvZHkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdNaXNzaW5nIHNpZ25hdHVyZSBvciBib2R5JywgNDAwKTtcclxuXHJcbiAgICAgIGNvbnN0IGlzVmVyaWZpZWQgPSBhd2FpdCBFbWJlZGx5LnZhbGlkYXRpb25zLnZlcmlmeVdlYmhvb2soXHJcbiAgICAgICAgcmF3Qm9keSxcclxuICAgICAgICBzaWduYXR1cmUsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIWlzVmVyaWZpZWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBzaWduYXR1cmUnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVxLmJvZHk7XHJcbiAgICAgIGxldCB0cmFuc2ZlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZXZlbnQgPT09ICduaXAnKVxyXG4gICAgICAgIHRyYW5zZmVyID0gYXdhaXQgd2ViaG9va1NlcnZpY2UuaW5mbG93KHJlc3VsdD8uZGF0YSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmV2ZW50ID09PSAncGF5b3V0JylcclxuICAgICAgICB0cmFuc2ZlciA9IGF3YWl0IHdlYmhvb2tTZXJ2aWNlLnBheW91dChyZXN1bHQ/LmRhdGEpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICBtZXNzYWdlOiAnV2ViaG9vayByZWNlaXZlZCBhbmQgdmVyaWZpZWQnLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVyLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9ha3V1aycsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICB9KTtcclxufSk7XHJcbnJvdXRlci5wb3N0KCcvZW1iZWRseScsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kKCk7XHJcbn0pO1xyXG5yb3V0ZXIucG9zdChcclxuICAnL2VtYmVkbHkvdHJhbnNmZXJzJyxcclxuICBleHByZXNzLnJhdyh7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICBDb250cm9sbGVyLmhhbmRsZVRyYW5zZmVycyxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVHJhbnNmZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgc2VuZGVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHJlY2VpdmVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFtb3VudDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksIC8vIHNtYWxsZXN0IHVuaXQgKGludGVnZXIpXHJcbiAgICBjdXJyZW5jeTogSm9pLnN0cmluZygpLm1heCgzKS5yZXF1aXJlZCgpLFxyXG4gICAgcmVhc29uOiBKb2kuc3RyaW5nKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYW1vdW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSwgLy8gc21hbGxlc3QgdW5pdCAoaW50ZWdlcilcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkubWF4KDMpLnJlcXVpcmVkKCksXHJcbiAgICByZWFzb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBkZXN0aW5hdGlvbkJhbms6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQ3JlYXRlV2FsbGV0KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7XHJcbiAgVmFsaWRhdGVDcmVhdGVXYWxsZXQsXHJcbiAgVmFsaWRhdGVFeHRlcm5hbFRyYW5zZmVyLFxyXG4gIFZhbGlkYXRlVHJhbnNmZXIsXHJcbn0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgKiBhcyBXYWxsZXRTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCAqIGFzIFVzZXJTZXJ2aWNlIGZyb20gJy4uL3VzZXJzL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYW5rcyB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5L3V0aWxzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaWRlbXBvdGVuY3lLZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICAgICAgaWYgKCFpZGVtcG90ZW5jeUtleSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lkZW1wb3RlbmN5IGtleSBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLndhbGxldFRvV2FsbGV0VHJhbnNmZXIoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIGluaXRpYXRvclVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBpbnRlcm5hbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBFbWJlZGx5LndhbGxldHMudHJhbnNmZXIoe1xyXG4gICAgICAgIGFtb3VudDogdmFsdWUuYW1vdW50LFxyXG4gICAgICAgIGZyb21BY2NvdW50OiB2YWx1ZS5zZW5kZXIsXHJcbiAgICAgICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQgKyAnJyxcclxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICByZW1hcmtzOiB2YWx1ZS5yZWFzb24sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBleHRlcm5hbFRyYW5zZmVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkZW1wb3RlbmN5S2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgICAgIGlmICghaWRlbXBvdGVuY3lLZXkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJZGVtcG90ZW5jeSBrZXkgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVycmVkID0gYXdhaXQgV2FsbGV0U2VydmljZS50cmFuc2ZlclRvRXh0ZXJuYWxCYW5rKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBpbml0aWF0b3JVc2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc2VuZGVyTmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVdhbGxldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXI6IGFueSA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUNyZWF0ZVdhbGxldCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIC8vIFRPRE86IFJld3JpdGUgdGhpcyBjb2RlIHRvIGNyZWF0ZSBtdWx0aXBsZSB3YWxsZXRzXHJcblxyXG4gICAgICBpZiAodXNlcj8ud2FsbGV0cz8ubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnV2FsbGV0IHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIGRhdGE6IHVzZXIud2FsbGV0c1swXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5hZGRyZXNzSWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYmVkbHk6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3M/LnN0cmVldExpbmUsXHJcbiAgICAgICAgICBjaXR5OiBhZGRyZXNzPy5jaXR5LFxyXG4gICAgICAgICAgY291bnRyeTogYWRkcmVzcz8uY291bnRyeSxcclxuICAgICAgICAgIGRvYjogdXNlcj8uZG9iLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgbGFzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMV0sXHJcbiAgICAgICAgICBwaG9uZTogdXNlcj8ucGhvbmUsXHJcbiAgICAgICAgICBtaWRkbGVOYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzJdLFxyXG4gICAgICAgICAgaWQ6IHVzZXI/LmVtYmVkbHlDdXN0b21lcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXh0cmE6IHsgY3VycmVuY3k6IHZhbHVlPy5jdXJyZW5jeSB9LFxyXG4gICAgICAgIGVtYWlsOiB1c2VyPy5lbWFpbCEsXHJcbiAgICAgICAgYnZuOiB1c2VyPy5idm4hLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgVXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIodXNlci5pZCwgZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdXYWxsZXQgY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogd2FsbGV0LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRXYWxsZXRGcm9tQWNjb3VudChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnROdW1iZXIgPSByZXEucGFyYW1zPy5hY2NvdW50O1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IGFjY291bnROdW1iZXIgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1dhbGxldCByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHdhbGxldCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rcyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZUJhbmtOYW1lID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgY29tbW9uIHN1ZmZpeGVzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIC9cXHMrKHBsY3xsdGR8bGltaXRlZHxiYW5rfGhvbGRpbmdzP3xncm91cHxuaWcoZXJpYSk/fG1pY3JvZmluYW5jZXxtZmIpJC9naSxcclxuICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpIC8vIG5vcm1hbGl6ZSB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubmlnZXJpYW5iYW5rbG9nb3MueHl6LycpO1xyXG5cclxuICAgICAgY29uc3QgYWxsQmFua3MgPSByZXNwLmRhdGE7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gYmFua3MubWFwKChiYW5rOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQmFua05hbWUgPSBub3JtYWxpemVCYW5rTmFtZShiYW5rLmJhbmtOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhbGxCYW5rcy5maW5kKChiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRBcGlUaXRsZSA9IG5vcm1hbGl6ZUJhbmtOYW1lKGIudGl0bGUpO1xyXG5cclxuICAgICAgICAgIC8vIEV4YWN0IG1hdGNoIGFmdGVyIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAgIGlmIChub3JtYWxpemVkQXBpVGl0bGUgPT09IG5vcm1hbGl6ZWRCYW5rTmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIGNvbnRhaW5zIHRoZSBvdGhlciAoZm9yIGNhc2VzIGxpa2UgXCJBY2Nlc3NcIiB2cyBcIkFjY2VzcyBCYW5rXCIpXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRBcGlUaXRsZS5pbmNsdWRlcyhub3JtYWxpemVkQmFua05hbWUpIHx8XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRCYW5rTmFtZS5pbmNsdWRlcyhub3JtYWxpemVkQXBpVGl0bGUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBLZWVwIGFsbCBiYW5rcywgYWRkIGxvZ28gZGF0YSBpZiBhdmFpbGFibGVcclxuICAgICAgICBpZiAobWF0Y2gpIGkrKztcclxuICAgICAgICByZXR1cm4gbWF0Y2ggPyB7IC4uLmJhbmssIGxvZ286IG1hdGNoLnJvdXRlIH0gOiBiYW5rO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coYmFua3MpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdSZXRyaWV2ZSBhbGwgYmFua3MnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogbWVyZ2VkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgZ2V0QmFua0J5QWNjb3VudE51bWJlcigpIHt9XHJcbn1cclxuIiwiLy8gc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHNcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uL3ByaXNtYS9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlkZW1wb3RlbmN5KFxyXG4gIHJlcTogUmVxdWVzdCxcclxuICByZXM6IFJlc3BvbnNlLFxyXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcclxuKSB7XHJcbiAgY29uc3Qga2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgaWYgKCFrZXkpIHJldHVybiBuZXh0KCk7XHJcblxyXG4gIGNvbnN0IHJlcUhhc2ggPSBjcnlwdG9cclxuICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxyXG4gICAgLnVwZGF0ZShKU09OLnN0cmluZ2lmeSh7IHVybDogcmVxLm9yaWdpbmFsVXJsLCBib2R5OiByZXEuYm9keSB9KSlcclxuICAgIC5kaWdlc3QoJ2hleCcpO1xyXG5cclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5pZGVtcG90ZW5jeUtleS5maW5kVW5pcXVlKHsgd2hlcmU6IHsga2V5IH0gfSk7XHJcblxyXG4gIGlmICghZXhpc3RpbmcpIHtcclxuICAgIC8vIExvY2sgbmV3IGtleSBpbW1lZGlhdGVseVxyXG4gICAgYXdhaXQgcHJpc21hLmlkZW1wb3RlbmN5S2V5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsga2V5LCByZXF1ZXN0SGFzaDogcmVxSGFzaCwgbG9ja2VkQXQ6IG5ldyBEYXRlKCkgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcblxyXG4gIGlmIChleGlzdGluZy5yZXF1ZXN0SGFzaCAhPT0gcmVxSGFzaCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgZXJyb3I6ICdJZGVtcG90ZW5jeSBrZXkgY29uZmxpY3QnIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nLnJlc3BvbnNlQm9keSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXhpc3Rpbmcuc3RhdHVzQ29kZSA/PyAyMDApLmpzb24oZXhpc3RpbmcucmVzcG9uc2VCb2R5KTtcclxuICB9XHJcblxyXG4gIC8vIEtleSBleGlzdHMgYnV0IGlzIGxvY2tlZCDigJQgY29uY3VycmVudCByZXF1ZXN0XHJcbiAgaWYgKGV4aXN0aW5nLmxvY2tlZEF0KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjUpLmpzb24oeyBlcnJvcjogJ1JlcXVlc3QgaW4gcHJvZ3Jlc3MnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3JpZ2luYWxKc29uID0gcmVzLmpzb24uYmluZChyZXMpO1xyXG4gIHJlcy5qc29uID0gKGJvZHk6IGFueSkgPT4ge1xyXG4gICAgcHJpc21hLmlkZW1wb3RlbmN5S2V5XHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGtleSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlc3BvbnNlQm9keTogYm9keSxcclxuICAgICAgICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgbG9ja2VkQXQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGlkZW1wb3RlbmN5IHJlY29yZCcsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIG9yaWdpbmFsSnNvbihib2R5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV4dCgpO1xyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaWRlbXBvdGVuY3kgfSBmcm9tICdAL21pZGRsZXdhcmUvaWRlbXBvdGVuY3knO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsIENvbnRyb2xsZXIuY3JlYXRlV2FsbGV0KTtcclxucm91dGVyLmdldCgnL2JhbmtzJywgQ29udHJvbGxlci5nZXRCYW5rcyk7XHJcbnJvdXRlci5nZXQoJy86YWNjb3VudCcsIENvbnRyb2xsZXIuZ2V0V2FsbGV0RnJvbUFjY291bnQpO1xyXG5yb3V0ZXIucG9zdCgnL3RyYW5zZmVyJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIudHJhbnNmZXIpO1xyXG5yb3V0ZXIucG9zdCgnL2V4dGVybmFsJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIuZXh0ZXJuYWxUcmFuc2Zlcik7XHJcbnJvdXRlci5wb3N0KCcvaW50ZXJuYWwnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5pbnRlcm5hbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUFpcnRpbWVQYXltZW50KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIG51bWJlcjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgYW1vdW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgYW1vdW50SW5OYWlyYSB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWlydGltZShcclxuICB1c2VySWQ6IHN0cmluZyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZGVtcG90ZW5jeUtleTogc3RyaW5nO1xyXG4gICAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IGJpZ2ludCB8IG51bWJlciB8IHN0cmluZyB8IGFueTtcclxuICAgIGNvdW50cnk6IHN0cmluZztcclxuICB9LFxyXG4pIHtcclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8ocGF5bG9hZC5hbW91bnQpO1xyXG4gIGlmIChhbXQgPD0gMG4pIHRocm93IG5ldyBFcnJvcignQW1vdW50IG11c3QgYmUgcG9zaXRpdmUnKTtcclxuXHJcbiAgLy8gaWRlbXBvdGVuY3kgZ3VhcmRcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5haXJ0aW1lLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQuaWRlbXBvdGVuY3lLZXkgfSxcclxuICB9KTtcclxuICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgLy8gUmVzb2x2ZSBzZW5kZXIgYW5kIHJlY2lwaWVudFxyXG4gIGNvbnN0IGZyb21Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICBpbmNsdWRlOiB7IHdhbGxldHM6IHRydWUgfSxcclxuICB9KTtcclxuICBjb25zdCBmcm9tV2FsbGV0ID0gZnJvbVVzZXI/LndhbGxldHM/LlswXTtcclxuICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBFcnJvcignV2FsbGV0cyBub3QgZm91bmQnKTtcclxuXHJcbiAgLy8gICBDaGVjayBmb3Igc3VmZmljaWVudCBhbW91bnQgaGVyZVxyXG4gIGNvbnN0IGF2YWlCYWwgPSBOdW1iZXIoZnJvbVdhbGxldC5hdmFpbGFibGVCYWxhbmNlKTtcclxuICBpZiAoYXZhaUJhbCA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgYmFsYW5jZScsIDQyMik7XHJcblxyXG4gIGNvbnN0IGFpcnRpbWUgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gbG9jayB3YWxsZXRzIHdpdGggRk9SIFVQREFURVxyXG4gICAgLy8gcGFyYW1ldGVyaXplIGNhcmVmdWxseVxyXG4gICAgY29uc3QgbG9ja2VkUm93cyA9IGF3YWl0IHR4LiRxdWVyeVJhd1Vuc2FmZShcclxuICAgICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJDEpIEZPUiBVUERBVEVgLFxyXG4gICAgICBmcm9tV2FsbGV0LmlkLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBtYXAgbG9ja2VkIHJvd3NcclxuICAgIGNvbnN0IGxvY2tlZE1hcCA9IChsb2NrZWRSb3dzIGFzIGFueVtdKVswXTtcclxuICAgIGlmICghbG9ja2VkTWFwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA1MDApO1xyXG5cclxuICAgIC8vIGNoZWNrIGZ1bmRzXHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkTWFwLmF2YWlsYWJsZUJhbGFuY2UpO1xyXG4gICAgaWYgKGF2YWlsYWJsZSA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgZnVuZHMnLCA0MjIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBBaXJ0aW1lIFRyYW5zYWN0aW9uIHJlY29yZFxyXG4gICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgdHguYWlydGltZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQuaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgIGFtb3VudDogYW10LnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICB9IGFzIGFueSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiAtcGF5bG9hZD8uYW1vdW50Py50b1N0cmluZygpLFxyXG4gICAgICAgIGl0ZW1JZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgdHlwZTogJ0FJUlRJTUUnLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgIHByb3ZpZGVyOiAnQUtVVUsnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEFpcnRpbWUgUHVyY2hhc2UgdG8gJHtwYXlsb2FkLm51bWJlcn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29tcHV0ZSBuZXcgYmFsYW5jZXNcclxuICAgIGNvbnN0IG5ld1VzZXJMZWRnZXJCYWxhbmNlID0gQmlnSW50KGxvY2tlZE1hcC5sZWRnZXJCYWxhbmNlKSAtIGFtdDtcclxuICAgIGNvbnN0IG5ld0F2YWlsYWJsZUJhbGFuY2UgPSBCaWdJbnQoYXZhaWxhYmxlKSAtIGFtdDtcclxuXHJcbiAgICAvLyBjcmVhdGUgbGVkZ2VyIHJvd3MgKGRlYml0IHRoZW4gY3JlZGl0KSwgcmVmZXJlbmNlIGpvdXJuYWwuaWRcclxuICAgIGNvbnN0IGRlYml0ID0gYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB3YWxsZXQ6IHsgY29ubmVjdDogeyBpZDogZnJvbVdhbGxldC5pZCB9IH0sXHJcbiAgICAgICAgam91cm5hbDogeyBjb25uZWN0OiB7IGlkOiBqb3VybmFsPy5pZCB9IH0sXHJcbiAgICAgICAgY2hhbmdlOiAtYW10LFxyXG4gICAgICAgIGJhbGFuY2VBZnRlcjogbmV3VXNlckxlZGdlckJhbGFuY2UsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0RFQklUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgYWlydGltZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICAgIHJlYXNvbjogYEFpcnRpbWUgUHVyY2hhc2UgdG8gJHtwYXlsb2FkLm51bWJlcn1gLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHdhbGxldHMgYmFsYW5jZXNcclxuICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VXNlckxlZGdlckJhbGFuY2UsXHJcbiAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gKysrKysrKysrKysrKysrKysrKysrKzo6KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG4gICAgLy8gQWRkIHRoaXMgdHJhbnNhY3Rpb24gdG8gdGhlIFByb3ZpZGVyIGFjY291bnRcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdBS1VVSycgfSxcclxuICAgICAgY3JlYXRlOiB7IHByb3ZpZGVyOiAnQUtVVUsnLCBiYWxhbmNlOiBhbXQgfSxcclxuICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgYmFsYW5jZTogeyBpbmNyZW1lbnQ6IGFtdC50b1N0cmluZygpIH0gYXMgYW55LFxyXG4gICAgICAgIHRvdGFsOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJvdmlkZXIgZmxvYXQgbGVkZ2VyIHJvdyAoY3JlZGl0KVxyXG4gICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgY2hhbmdlOiBhbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBCaWdJbnQocHJvdmlkZXIuYmFsYW5jZSBhcyBhbnkpICsgYW10LFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyArKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxuICAgIC8vIFRPRE86OiBJbXBsZW1lbnQgS2Fma2Egb3IgU1FTXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5pbml0aWF0ZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgY291bnRyeTogcGF5bG9hZC5jb3VudHJ5LFxyXG4gICAgICAgICAgYWNjb3VudE51bWJlcjogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICBiYWxhbmNlOiBhbW91bnRJbk5haXJhKG5ld0F2YWlsYWJsZUJhbGFuY2UpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc3RydWN0dXJlZCByZXN1bHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zYWN0aW9uOiB7XHJcbiAgICAgICAgLi4udHJhbnNhY3Rpb24sXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKGFpcnRpbWUudHJhbnNhY3Rpb24uaWQsICdBSVJUSU1FJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFpcnRpbWUsXHJcbiAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVBaXJ0aW1lUGF5bWVudCB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuaW1wb3J0ICogYXMgUGF5bWVudFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgYWlydGltZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVBaXJ0aW1lUGF5bWVudCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaUtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gICAgICBpZiAoIWlLZXkpIHRocm93IG5ldyBDdXN0b21FcnJvcignSWRlbXBvdGVuY3kga2V5IG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgUGF5bWVudFNlcnZpY2UuYWlydGltZSh1c2VyLmlkLCB7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IGlLZXksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQWlydGltZSBwdXJjaGFzZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHBheW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaWRlbXBvdGVuY3kgfSBmcm9tICdAL21pZGRsZXdhcmUvaWRlbXBvdGVuY3knO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnL2FpcnRpbWUnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5haXJ0aW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIC8vIEdldCBhbGwgdHJhbnNhY3Rpb25zIGJ5IHVzZXJcclxuICBzdGF0aWMgYXN5bmMgYWxsKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCBmaWx0ZXJzID0gcmVxLnF1ZXJ5Py5maWx0ZXJzID8/IHt9O1xyXG4gICAgICBjb25zdCBwYWdlID0gTnVtYmVyKHJlcS5xdWVyeT8ucGFnZSkgPz8gMDtcclxuICAgICAgY29uc3Qgc2l6ZSA9IE51bWJlcihyZXEucXVlcnk/LnNpemUpID8/IDEwO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcclxuICAgICAgICB0YWtlOiBzaXplLFxyXG4gICAgICAgIHNraXA6IHBhZ2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb25zIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHNpbmdsZSB0cmFuc2FjdGlvbiBieSBJRFxyXG4gIHN0YXRpYyBhc3luYyBnZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcz8uaWQ7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zYWN0aW9uIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNhY3Rpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLzppZCcsIENvbnRyb2xsZXIuZ2V0KTtcclxucm91dGVyLmdldCgnLycsIENvbnRyb2xsZXIuYWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBTM0NsaWVudCwgUHV0T2JqZWN0Q29tbWFuZCB9IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1zMyc7XHJcbmltcG9ydCB7IGdldFNpZ25lZFVybCB9IGZyb20gJ0Bhd3Mtc2RrL3MzLXJlcXVlc3QtcHJlc2lnbmVyJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuY29uc3QgcjIgPSBuZXcgUzNDbGllbnQoe1xyXG4gIHJlZ2lvbjogJ2F1dG8nLCAvLyBDbG91ZGZsYXJlIFIyIHVzZXMgXCJhdXRvXCJcclxuICBlbmRwb2ludDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmwsXHJcbiAgY3JlZGVudGlhbHM6IHtcclxuICAgIGFjY2Vzc0tleUlkOiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmtleSEsXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IGVudmlyb25tZW50LmNsb3VkZmxhcmUuc2VjcmV0ISxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNsYXNzIENsb3VkZmxhcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgYXN5bmMgdXBsb2FkVG9SMihmaWxlUGF0aDogc3RyaW5nLCBrZXlQcmVmaXggPSAndXBsb2FkcycpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgZmlsZVN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKTtcclxuICAgIGNvbnN0IG9iamVjdEtleSA9IGAke2tleVByZWZpeH0vJHtEYXRlLm5vdygpfS0ke2ZpbGVOYW1lfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcjIuc2VuZChcclxuICAgICAgICBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XHJcbiAgICAgICAgICBCdWNrZXQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUuYnVja2V0ISxcclxuICAgICAgICAgIEtleTogb2JqZWN0S2V5LFxyXG4gICAgICAgICAgQm9keTogZmlsZVN0cmVhbSxcclxuICAgICAgICAgIENvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJywgLy8gYWRqdXN0IGZvciBpbWFnZXNcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIFB1YmxpYyBVUkwgaWYgYnVja2V0IHBvbGljeSBhbGxvd3NcclxuICAgICAgcmV0dXJuIGAke2Vudmlyb25tZW50LmNsb3VkZmxhcmUudXJsfS8ke2Vudmlyb25tZW50LmNsb3VkZmxhcmUuYnVja2V0fS8ke29iamVjdEtleX1gO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nsb3VkZmxhcmUgUjIgdXBsb2FkIGZhaWxlZDonLCBlcnIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdlbmVyYXRlVXBsb2FkVVJMKFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGNvbnRlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBleHBpcmVzSW46IG51bWJlciA9IDYwICogNSwgLy8gNSBtaW5cclxuICApIHtcclxuICAgIGNvbnN0IGtleSA9IGB1cGxvYWRzLyR7Y3J5cHRvLnJhbmRvbVVVSUQoKX0tJHtmaWxlTmFtZX1gO1xyXG5cclxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XHJcbiAgICAgIEJ1Y2tldDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXQsXHJcbiAgICAgIEtleToga2V5LFxyXG4gICAgICBDb250ZW50VHlwZTogY29udGVudFR5cGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzaWduZWRVcmwgPSBhd2FpdCBnZXRTaWduZWRVcmwocjIsIGNvbW1hbmQsIHsgZXhwaXJlc0luIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHNpZ25lZFVybCwga2V5IH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENsb3VkZmxhcmUgfSBmcm9tICdAL2V4dGVuc2lvbnMvY2xvdWRmbGFyZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVVcGxvYWRVUkwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGZpbGVOYW1lLCBjb250ZW50VHlwZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBpZiAoIWZpbGVOYW1lIHx8ICFjb250ZW50VHlwZSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ2ZpbGVOYW1lIGFuZCBjb250ZW50VHlwZSByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBjbG91ZGZsYXJlID0gbmV3IENsb3VkZmxhcmUoKTtcclxuICAgICAgY29uc3QgeyBzaWduZWRVcmwsIGtleSB9ID0gYXdhaXQgY2xvdWRmbGFyZS5nZW5lcmF0ZVVwbG9hZFVSTChcclxuICAgICAgICBmaWxlTmFtZSxcclxuICAgICAgICBjb250ZW50VHlwZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICB1cGxvYWRVcmw6IHNpZ25lZFVybCxcclxuICAgICAgICBwdWJsaWNVcmw6IGAke2Vudmlyb25tZW50LmNsb3VkZmxhcmUudXJsfS8ke2tleX1gLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnIpO1xyXG4gICAgICByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGF1dGhSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMnO1xyXG5pbXBvcnQgYWdlbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL2FnZW50cy9hZ2VudC5yb3V0ZXMnO1xyXG5pbXBvcnQgdXNlclJvdXRlcyBmcm9tICcuL21vZHVsZXMvdXNlcnMvcm91dGVzJztcclxuaW1wb3J0IG1lcmNoYW50Um91dGVzIGZyb20gJy4vbW9kdWxlcy9tZXJjaGFudHMvcm91dGVzJztcclxuaW1wb3J0IHdlYmhvb2tSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcyc7XHJcbmltcG9ydCBXYWxsZXRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3dhbGxldHMvcm91dGVzJztcclxuaW1wb3J0IFBheW1lbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3BheW1lbnRzL3JvdXRlcyc7XHJcbmltcG9ydCBUcmFuc2FjdGlvblJvdXRlcyBmcm9tICcuL21vZHVsZXMvdHJhbnNhY3Rpb25zL3JvdXRlcyc7XHJcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSAnLi9tb2R1bGVzL0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXV0aCBmcm9tICcuL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci51c2UoJy9hdXRoJywgYXV0aFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvd2ViaG9va3MnLCB3ZWJob29rUm91dGVzKTtcclxucm91dGVyLnVzZSgnL2FnZW50cycsIEF1dGgsIGFnZW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL21lcmNoYW50cycsIEF1dGgsIG1lcmNoYW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL3dhbGxldHMnLCBBdXRoLCBXYWxsZXRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvcGF5bWVudHMnLCBBdXRoLCBQYXltZW50Um91dGVzKTtcclxucm91dGVyLnVzZSgnL3RyYW5zYWN0aW9ucycsIEF1dGgsIFRyYW5zYWN0aW9uUm91dGVzKTtcclxucm91dGVyLnBvc3QoJy91cGxvYWRzL3VybCcsIEF1dGgsIEJhc2VDb250cm9sbGVyLmdlbmVyYXRlVXBsb2FkVVJMKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiLy8gc3JjL2FwcC50c1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICcuL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGhlbG1ldCgpKTtcclxuYXBwLnVzZShjb3JzKHsgb3JpZ2luOiAnKicgfSkpOyAvLyB0aWdodGVuIGxhdGVyXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShtb3JnYW4oJ2NvbWJpbmVkJykpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9ICgpID0+IHtcclxuICBhcHAuZ2V0KCcvJywgKF8sIHJlcykgPT4gcmVzLmpzb24oeyBvazogdHJ1ZSB9KSk7XHJcbiAgYXBwLmdldCgnL2hlYWx0aCcsIChfLCByZXMpID0+IHJlcy5qc29uKHsgb2s6IHRydWUgfSkpO1xyXG5cclxuICAvLyByZWdpc3RlciByb3V0ZXNcclxuICBhcHAudXNlKCcvYXBpL3YxJywgUm91dGVzKTtcclxuICAvLyBhcHAudXNlKGVycm9ySGFuZGxlcik7XHJcblxyXG4gIGFwcC51c2UoKHJlcSwgcmVzKT0+e1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6IFwiRW5kcG9pbnQgbm90IGZvdW5kLiBwbGVhc2UsIGNoZWNrIHRoZSB1cmwgYW5kIHRyeSBhZ2Fpbi5cIn0pXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGFwcDtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKCk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYPCfmoAgV2VwYXkgYmFja2VuZCBsaXN0ZW5pbmcgb24gcG9ydDogaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZm9yZ290UGFzc3dvcmQiLCJDbGllbnQiLCJjcnlwdG8iLCJsaW1pdGVyIiwiVFhORkVFIiwicmVkaXNDbGllbnQiLCJCdWxsUXVldWUiLCJhZGRWZXJpZmljYXRpb24iLCJXYWxsZXRTZXJ2aWNlLmNyZWF0ZSIsIlZhbGlkYXRlT1RQIiwidXNlclNlcnZpY2UudmFsaWRhdGVCVk4iLCJ1c2VyU2VydmljZS5nZXRCVk5EYXRhIiwiYXV0aFNlcnZpY2UucmVnaXN0ZXIiLCJhdXRoU2VydmljZS5sb2dpbiIsImF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlciIsImF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkIiwiYXV0aFNlcnZpY2UuZm9yZ290UGluIiwiYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCIsImF1dGhTZXJ2aWNlLnJlc2V0UGluIiwidXNlclNlcnZpY2UudXBkYXRlIiwiYXV0aFNlcnZpY2UucmVzZW5kT1RQIiwicm91dGVyIiwiVmFsaWRhdGVWZXJpZmljYXRpb24iLCJ1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSIsInVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEIiwidXNlclNlcnZpY2UuY3JlYXRlUGluIiwidXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbiIsInVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbiIsInVzZXJTZXJ2aWNlLmNhcHR1cmVGaW5nZXJQcmludCIsIkNvbnRyb2xsZXIiLCJNZXJjaGFudC5jcmVhdGVCdXNpbmVzcyIsIk1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbiIsIndlYmhvb2tTZXJ2aWNlLmluZmxvdyIsIndlYmhvb2tTZXJ2aWNlLnBheW91dCIsIldhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2ZlciIsIldhbGxldFNlcnZpY2UudHJhbnNmZXJUb0V4dGVybmFsQmFuayIsIlVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyIiwiUGF5bWVudFNlcnZpY2UuYWlydGltZSIsImF1dGhSb3V0ZXMiLCJ1c2VyUm91dGVzIiwid2ViaG9va1JvdXRlcyIsImFnZW50Um91dGVzIiwibWVyY2hhbnRSb3V0ZXMiLCJXYWxsZXRSb3V0ZXMiLCJQYXltZW50Um91dGVzIiwiVHJhbnNhY3Rpb25Sb3V0ZXMiLCJhcHAiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx3QkFBd0I7QUFDOUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsNENBQTRDO0FBQ2xELFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElB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Q25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNkJBQTZCO0FBQ3ZDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxtQ0FBbUM7QUFDN0MsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLEtBQUs7QUFDZixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFB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
