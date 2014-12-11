package com.example;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;

import java.net.URLDecoder;
import java.util.*;

@Controller
@EnableAutoConfiguration
public class MainController {

  @RequestMapping("/home")
  String home() {
    return "home";
  }

  public static void main(String[] args) throws Exception {
    SpringApplication.run(MainController.class, args);
  }
}
