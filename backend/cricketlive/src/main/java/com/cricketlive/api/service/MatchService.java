package com.cricketlive.api.service;

import com.cricketlive.api.model.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    List<Match> getAllMatches();
    List<Match> getLiveMatches();
    List<List<String>> getPointtable();
}
